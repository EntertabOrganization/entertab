"use client";

export const CONSENT_KEY = "entertab_analytics_consent_v1";
export type ConsentChoice = "accepted" | "rejected" | "unset";
type AnalyticsWindow = Window & {
  dataLayer?: unknown[];
  gtag?: (...args: unknown[]) => void;
  "ga-disable-G-6822737K6Z"?: boolean;
};
let allowed = false;
let lastPage = "";
let sessionChoice: ConsentChoice = "unset";
let sessionExpiry = 0;
const sentLeads = new Set<string>();
const gaWindow = () => window as AnalyticsWindow;
export function readConsent(): ConsentChoice {
  if (sessionChoice !== "unset" && sessionExpiry > Date.now()) return sessionChoice;
  try {
    const record = JSON.parse(localStorage.getItem(CONSENT_KEY) || "null");
    return record?.version === 1 && record.expiresAt > Date.now() &&
      ["accepted", "rejected"].includes(record.choice) ? record.choice : "unset";
  } catch { return "unset"; }
}
export function rememberConsent(choice: Exclude<ConsentChoice, "unset">) {
  const now = new Date(); const expiry = new Date(now);
  expiry.setUTCMonth(expiry.getUTCMonth() + 6);
  sessionChoice = choice;
  sessionExpiry = expiry.getTime();
  try { localStorage.setItem(CONSENT_KEY, JSON.stringify({ choice, version: 1,
    chosenAt: now.getTime(), expiresAt: expiry.getTime() })); } catch { /* Session choice still applies. */ }
}
function pushCommand(...args: unknown[]) {
  const w = gaWindow(); w.dataLayer ||= [];
  // Google consent commands use the gtag arguments-object format.
  function command() { w.dataLayer!.push(arguments); }
  Reflect.apply(command, undefined, args);
}
function deleteAnalyticsCookies() {
  const names = document.cookie.split(";").map(c => c.trim().split("=")[0])
    .filter(name => name === "_ga" || name.startsWith("_ga_") || name === "_gid" || name.startsWith("_gat"));
  const host = location.hostname;
  const domains = ["", host, `.${host}`];
  const parts = host.split(".");
  if (parts.length > 2) domains.push(`.${parts.slice(-2).join(".")}`);
  for (const name of names) for (const domain of domains) {
    document.cookie = `${name}=; Max-Age=0; Path=/; SameSite=Lax${domain ? `; Domain=${domain}` : ""}`;
  }
}
export function resetSessionConsent() { sessionChoice = "unset"; }
export function enquiryRecordId(data: Record<string, unknown>): unknown {
  const record = data.data;
  return record && typeof record === "object" && "_id" in record ? record._id : undefined;
}
export function applyConsent(choice: ConsentChoice) {
  const w = gaWindow();
  allowed = choice === "accepted";
  w["ga-disable-G-6822737K6Z"] = !allowed;
  if (!allowed) {
    if (document.getElementById("entertab-gtm")) pushCommand("consent", "update", {
      analytics_storage: "denied", ad_storage: "denied", ad_user_data: "denied", ad_personalization: "denied"
    });
    lastPage = ""; deleteAnalyticsCookies(); return;
  }
  const settings = { analytics_storage: "granted", ad_storage: "denied",
    ad_user_data: "denied", ad_personalization: "denied" };
  if (!document.getElementById("entertab-gtm")) {
    pushCommand("consent", "default", settings);
    w.dataLayer!.push({ "gtm.start": Date.now(), event: "gtm.js" });
    const script = document.createElement("script"); script.id = "entertab-gtm";
    script.async = true; script.src = "https://www.googletagmanager.com/gtm.js?id=GTM-TVJ562Q5";
    document.head.appendChild(script);
  } else pushCommand("consent", "update", settings);
}
export function trackPage(path: string) {
  if (!allowed || readConsent() === "rejected") return;
  // No query strings, fragments, form values or page titles in event payloads.
  const clean = path.split(/[?#]/)[0];
  if (clean === lastPage) return;
  lastPage = clean;
  gaWindow().dataLayer?.push({ event: "entertab_page_view", page_location: location.origin + clean, debug_mode: !["www.entertab.net", "entertab.net"].includes(location.hostname) });
}
export function trackAcceptedEnquiry(formId: "contact_general" | "service_enquiry" | "project_enquiry", id: unknown) {
  if (!allowed || readConsent() === "rejected" || typeof id !== "string" || !/^[a-f0-9]{24}$/i.test(id)) return;
  const key = `${formId}:${id}`;
  if (sentLeads.has(key)) return;
  sentLeads.add(key);
  // The record ID is used only for in-memory deduplication and never sent to Google.
  gaWindow().dataLayer?.push({ event: "entertab_generate_lead", form_id: formId, debug_mode: !["www.entertab.net", "entertab.net"].includes(location.hostname) });
}
