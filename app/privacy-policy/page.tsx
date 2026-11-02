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
      <h1>Privacy Policy</h1>
<p>Effective date: November 2, 2026</p>
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
<h2>Analytics and cookies</h2>
<p>With your permission, we use Google Analytics 4 through Google Tag Manager to understand website visits and successful business enquiry submissions. Optional analytics is not loaded until you select Accept analytics. Selecting Reject analytics does not affect access to the website or its forms.</p>
<p>Analytics processes technical visit information, such as page paths and device information, and a form category when an enquiry is successfully received. We do not send the name, email address, telephone number, message, CV or database record identifier you submit through our forms to Analytics. Page URLs and referrers are sent without query strings or fragments.</p>
<p>Your analytics choice is stored in your browser for six calendar months. Analytics cookies are configured to expire after 180 days. You can change or withdraw consent using Cookie Settings in the website footer. Withdrawal disables analytics, removes applicable first-party Analytics cookies and reloads the page; this may reset an unfinished form. Withdrawing consent does not erase data already collected.</p>
<p>Google processes analytics data to provide this service. We do not enable advertising cookies, remarketing, Google Signals or user-provided-data matching as part of this setup. Analytics event data retention is configured for two months and user data retention for fourteen months, with user retention resetting on new activity.</p>
<h2>Retention</h2>
<p>Our approved retention schedule is:</p>
<ul><li>Business enquiries: two years from the last contact.</li><li>Career applications and associated CV files: six months from the application submission date.</li></ul>
<p>These periods describe our retention policy and do not mean that automatic deletion is enabled. To ask about a record or request deletion, contact <a href="mailto:info@entertab.net">info@entertab.net</a>. Different requirements may apply to records arising from a client agreement or records that must be retained under applicable law.</p>
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
