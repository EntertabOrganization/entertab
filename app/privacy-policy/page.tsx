import type { Metadata } from "next";
import Link from "next/link";
import styles from "./privacy.module.css";

export const metadata: Metadata = {
  title: "Privacy Policy | entertab",
  description: "How entertab handles website enquiries, career applications and privacy requests.",
  alternates: { canonical: "https://www.entertab.net/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return <div className={styles.page}>
    <header className={styles.header}><Link href="/">entertab</Link><Link href="/">Back to website</Link></header>
    <main className={styles.content}>
      <h1>Privacy Policy</h1><p><strong>Staging review only. This Analytics configuration is not deployed to the live website.</strong></p>
<p>Effective date: October 15, 2026</p>
<h2>About entertab</h2>
<p>entertab LLC is responsible for the website practices described in this policy. Our contact address is 1775 Tysons Blvd, McLean, Virginia 22102, United States. For privacy questions or requests, email <a href="mailto:info@entertab.net">info@entertab.net</a>.</p>
<p>This policy covers information handled through entertab.net, including business enquiries and career applications. Information handled during a separate client engagement may also be governed by the applicable service agreement.</p>
<h2>Information you provide</h2>
<p>Business enquiry forms request information such as your name, email address, telephone number, message and the services you are interested in. We use this information to respond to your enquiry and follow up on your request. We do not use website enquiry information for unrelated marketing campaigns.</p>
<p>Career application forms request contact information, the position or specialisation of interest, experience, employment preference, a message and a CV. We use this information to review and respond to applications.</p>
<p>Please provide only information relevant to your enquiry or application. Do not include passwords, payment details or unnecessary sensitive information in a website message.</p>
<h2>Storage, access and service providers</h2>
<p>Website enquiries, job applications and CV files are stored in the website's MongoDB database and associated GridFS file storage. They are not manually transferred to email, CRM systems, external files or other platforms. Access to submissions is limited to the authorised person responsible for handling each type of submission.</p>
<p>Vercel hosts the website. The website backend uses database services to receive submissions and store information. Hosting and website systems process technical request information in operating these functions.</p>
<p>We do not sell these submissions or share them with unrelated third parties. Hosting and database service providers support the website functions described in this policy. This policy does not make a country-specific data residency commitment.</p>
<h2>Optional analytics and your choices</h2>
<p>If you select Accept analytics, Google Analytics 4, loaded through Google Tag Manager, measures page visits and successfully received business enquiries. Google receives cookie identifiers, public page titles, page addresses, referral information, browser and device details, approximate location and event timing. A controlled form category identifies the type of enquiry. This information is not described as anonymous.</p>
<p>Our implementation removes query strings and fragments from the page and referrer addresses it sends. It does not send submitted names, email addresses, telephone numbers, messages, CVs or database record identifiers as event parameters. Career applications are not counted as business enquiries.</p>
<p>Google Tag Manager and Google Analytics do not load through this installation before you accept. Selecting Reject analytics, or making no choice, leaves optional Analytics off without restricting the website or its enquiry forms. This setup does not enable advertising personalisation, remarketing, Google Signals or user-provided-data collection.</p>
<p>Your browser stores your accept or reject preference in first-party local storage for six calendar months, with a choice date, expiry and notice version. If persistent storage is unavailable, the choice can apply for the current page session only. Analytics cookie expiry is configured to 180 days, separately from your stored preference.</p>
<p>Use Cookie Settings in the website footer to change your choice. Withdrawal disables future Analytics collection and removes applicable first-party Analytics cookies. The page reloads to unload previously accepted Google code, so an unfinished form may need to be entered again. Withdrawal does not automatically erase information already received by Google. Contact <a href="mailto:info@entertab.net">info@entertab.net</a> about previously collected information.</p>
<p>For Google's processing information, see its <a href="https://policies.google.com/privacy">Privacy Policy</a>.</p>
<h2>Retention</h2>
<p>Our approved retention schedule is:</p>
<ul><li>Business enquiries: two years from the last contact.</li><li>Career applications and associated CV files: six months from the application submission date.</li></ul>
<p>These periods describe our retention policy and do not mean that automatic deletion is enabled. To ask about a record or request deletion, contact <a href="mailto:info@entertab.net">info@entertab.net</a>. Different requirements may apply to records arising from a client agreement or records that must be retained under applicable law.</p>
<p>The prepared GA4 property uses two-month event-data retention and fourteen-month user-data retention, with reset on new activity enabled. These settings concern relevant granular Analytics data; aggregated reporting can behave differently. They are separate from cookie and consent-preference expiry.</p>
<h2>Your privacy requests</h2>
<p>Depending on applicable law and your circumstances, you may have rights to request access to, correction of or deletion of personal information, withdraw consent, or exercise other privacy choices.</p>
<p>Send requests to <a href="mailto:info@entertab.net">info@entertab.net</a> and explain the information or request involved. We may need to verify that a request concerns your information before disclosing it. Please do not send identity documents unless an appropriate verification method has been arranged.</p>
<p>Requests are considered in light of applicable law, including any requirements to retain particular records. This policy does not limit rights available under applicable law.</p>
<h2>Links to other websites</h2>
<p>If you follow a link to another website, that site's privacy practices apply to information you provide there. Please review its privacy information before providing personal information.</p>
<h2>Updates and contact</h2>
<p>We will update the effective date when this policy changes. Material changes to website data handling will be reflected in the policy and any relevant notices or choices.</p>
<p>For privacy questions, requests or concerns, contact <a href="mailto:info@entertab.net">info@entertab.net</a> or write to entertab LLC, 1775 Tysons Blvd, McLean, Virginia 22102, United States.
</p>
    </main>
  </div>;
}
