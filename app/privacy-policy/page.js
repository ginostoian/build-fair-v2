import Link from "next/link";
import { getSEOTags } from "@/libs/seo";
import config from "@/config";

// CHATGPT PROMPT TO GENERATE YOUR PRIVACY POLICY — replace with your own data 👇

// 1. Go to https://chat.openai.com/
// 2. Copy paste bellow
// 3. Replace the data with your own (if needed)
// 4. Paste the answer from ChatGPT directly in the <pre> tag below

// You are an excellent lawyer.

// I need your help to write a simple privacy policy for my website. Here is some context:
// - Website: https://shipfa.st
// - Name: ShipFast
// - Description: A JavaScript code boilerplate to help entrepreneurs launch their startups faster
// - User data collected: name, email and payment information
// - Non-personal data collection: web cookies
// - Purpose of Data Collection: Order processing
// - Data sharing: we do not share the data with any other parties
// - Children's Privacy: we do not collect any data from children
// - Updates to the Privacy Policy: users will be updated by email
// - Contact information: marc@shipfa.st

// Please write a simple privacy policy for my site. Add the current date.  Do not add or explain your reasoning. Answer:

export const metadata = getSEOTags({
  title: `Privacy Policy | ${config.appName}`,
  canonicalUrlRelative: "/privacy-policy",
});

import { ArrowLeft } from "lucide-react";

const PrivacyPolicy = () => {
  return (
    <main className="max-w-xl mx-auto">
      <div className="p-5">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          Back
        </Link>
        <h1 className="text-3xl font-extrabold pb-6">
          Privacy Policy for {config.appName}
        </h1>

        <pre
          className="leading-relaxed whitespace-pre-wrap"
          style={{ fontFamily: "sans-serif" }}
        >
          {`Last Updated: September 30, 2025

Thank you for visiting Build Fair ("we," "us," or "our"). This Privacy Policy outlines how we collect, use, and protect your personal and non-personal information when you use our website located at ${config.domainName} (the "Website").

By accessing or using the Website, you agree to the terms of this Privacy Policy. If you do not agree with the practices described in this policy, please do not use the Website.

1. Information We Collect

1.1 Personal Data

We collect the following personal information from you:

Name: We collect your name to personalize your experience and communicate with you effectively.
Email: We collect your email address to send you important information regarding your quote analysis, updates, and communications.
Payment Information: We collect payment details to process your orders securely. However, we do not store your payment information on our servers. Payments are processed by Stripe, our trusted third-party payment processor.
Builder Quotes: We collect the builder quotes you upload for analysis purposes only.

1.2 Non-Personal Data

We may use web cookies and similar technologies to collect non-personal information such as your IP address, browser type, device information, and browsing patterns. This information helps us to enhance your browsing experience, analyze trends, and improve our services.

2. Purpose of Data Collection

We collect and use your personal data for the following purposes:
- Processing your quote analysis orders
- Sending order confirmations and analysis reports
- Providing customer support
- Keeping you updated about the status of your analysis
- Improving our services and user experience

3. Data Sharing

We do not share your personal data or builder quotes with any third parties except as required for order processing (e.g., sharing payment information with Stripe). We do not sell, trade, or rent your personal information to others. We maintain strict confidentiality of all builder quotes and analysis reports.

Your builder will never be contacted or informed that you used our service unless you choose to share our analysis with them.

4. Data Retention

We retain your quote and analysis data for 12 months to allow you to reference it if needed. After 12 months, all data is securely deleted. You can request early deletion of your data at any time by contacting us.

5. Data Security

We use bank-level encryption to protect your data during transmission and storage. All sensitive information is encrypted and stored securely. Our servers are protected by industry-standard security measures.

6. Children's Privacy

Build Fair is not intended for children under the age of 13. We do not knowingly collect personal information from children. If you are a parent or guardian and believe that your child has provided us with personal information, please contact us at the email address provided below.

7. Your Rights

You have the right to:
- Access your personal data
- Request correction of inaccurate data
- Request deletion of your data
- Opt-out of marketing communications
- Request a copy of your data

To exercise any of these rights, please contact us at ${config.resend.supportEmail}.

8. Updates to the Privacy Policy

We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. Any updates will be posted on this page, and we may notify you via email about significant changes.

9. Contact Information

If you have any questions, concerns, or requests related to this Privacy Policy, you can contact us at:

Email: ${config.resend.supportEmail}

For all other inquiries, please visit our Contact Us page on the Website.

By using Build Fair, you consent to the terms of this Privacy Policy.`}
        </pre>
      </div>
    </main>
  );
};

export default PrivacyPolicy;
