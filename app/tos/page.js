import Link from "next/link";
import { getSEOTags } from "@/libs/seo";
import config from "@/config";

// CHATGPT PROMPT TO GENERATE YOUR TERMS & SERVICES — replace with your own data 👇

// 1. Go to https://chat.openai.com/
// 2. Copy paste bellow
// 3. Replace the data with your own (if needed)
// 4. Paste the answer from ChatGPT directly in the <pre> tag below

// You are an excellent lawyer.

// I need your help to write a simple Terms & Services for my website. Here is some context:
// - Website: https://shipfa.st
// - Name: ShipFast
// - Contact information: marc@shipfa.st
// - Description: A JavaScript code boilerplate to help entrepreneurs launch their startups faster
// - Ownership: when buying a package, users can download code to create apps. They own the code but they do not have the right to resell it. They can ask for a full refund within 7 day after the purchase.
// - User data collected: name, email and payment information
// - Non-personal data collection: web cookies
// - Link to privacy-policy: https://shipfa.st/privacy-policy
// - Governing Law: France
// - Updates to the Terms: users will be updated by email

// Please write a simple Terms & Services for my site. Add the current date. Do not add or explain your reasoning. Answer:

export const metadata = getSEOTags({
  title: `Terms and Conditions | ${config.appName}`,
  canonicalUrlRelative: "/tos",
});

import { ArrowLeft } from "lucide-react";

const TOS = () => {
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
          Terms and Conditions for {config.appName}
        </h1>

        <pre
          className="leading-relaxed whitespace-pre-wrap"
          style={{ fontFamily: "sans-serif" }}
        >
          {`Last Updated: September 30, 2025

Welcome to Build Fair!

These Terms of Service ("Terms") govern your use of the Build Fair website at https://${config.domainName} ("Website") and the services provided by Build Fair. By using our Website and services, you agree to these Terms.

1. Description of Build Fair

Build Fair is a quote analysis service that provides independent expert review of builder quotes for UK homeowners. We analyze quotes against market rates and industry standards to help homeowners make informed decisions.

2. Service Description and Limitations

When you purchase a quote analysis from Build Fair, you receive:
- An expert review of your builder quote
- A detailed analysis report
- Market rate comparisons
- Red flag identification
- Negotiation recommendations

Our analysis is for informational purposes only. We do not:
- Provide legal advice
- Guarantee specific outcomes
- Recommend or endorse specific builders
- Assume liability for your building project

3. Your Responsibilities

You agree to:
- Provide accurate information about your project
- Upload complete and legible quote documents
- Not use our service for fraudulent purposes
- Not share or resell our analysis reports without permission
- Respect the intellectual property of our reports

4. Payment and Refunds

Payment is required upfront before analysis begins. We accept major credit and debit cards through our secure payment processor, Stripe.

We offer a 100% money-back guarantee within 7 days of receiving your analysis report if you are not satisfied. See our Refund Policy at https://${config.domainName}/refund-policy for full details.

5. Confidentiality

We maintain strict confidentiality of all quotes and analysis reports. Your information will never be shared with builders, suppliers, or third parties except as required for payment processing. See our Privacy Policy for details.

6. Intellectual Property

All analysis reports, methodologies, and content provided by Build Fair are our intellectual property. You receive a license to use your analysis report for personal, non-commercial purposes related to your building project.

7. User Data and Privacy

We collect and store user data, including name, email, payment information, and uploaded quotes, as necessary to provide our services. For details on how we handle your data, please refer to our Privacy Policy at https://${config.domainName}/privacy-policy.

8. Limitation of Liability

Build Fair provides analysis services to the best of our ability based on the information provided. However, we cannot guarantee:
- The accuracy of third-party quotes
- Specific financial savings
- Project outcomes

We are not liable for:
- Decisions made based on our analysis
- Disputes between you and your builder
- Project delays, cost overruns, or quality issues
- Any indirect, consequential, or special damages

Our total liability is limited to the amount you paid for the analysis service.

9. Service Availability

We strive to deliver analysis reports within the stated timeframes (24-72 hours depending on tier). However, we are not liable for delays caused by:
- Incomplete or unclear quote documents
- Force majeure events
- Technical difficulties
- High volume periods

10. Governing Law

These Terms are governed by the laws of England and Wales.

11. Dispute Resolution

Any disputes arising from these Terms or our services shall be resolved through:
1. Good faith negotiations
2. Mediation (if negotiations fail)
3. Courts of England and Wales (as a last resort)

12. Updates to the Terms

We may update these Terms from time to time. Users will be notified of significant changes via email. Continued use of our service after changes constitutes acceptance of the new Terms.

13. Termination

We reserve the right to refuse service or terminate access to anyone who violates these Terms or uses our service fraudulently.

14. Contact Information

For any questions or concerns regarding these Terms of Service, please contact us at ${config.resend.supportEmail}.

Thank you for choosing Build Fair! We're committed to helping UK homeowners get fair pricing on their building projects.`}
        </pre>
      </div>
    </main>
  );
};

export default TOS;
