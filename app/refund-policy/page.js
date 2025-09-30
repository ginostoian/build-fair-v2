import Link from "next/link";
import { getSEOTags } from "@/libs/seo";
import config from "@/config";
import { ArrowLeft } from "lucide-react";

export const metadata = getSEOTags({
  title: `Refund Policy | ${config.appName}`,
  description:
    "Our 100% money-back guarantee policy. We stand behind our quote analysis service.",
  canonicalUrlRelative: "/refund-policy",
});

const RefundPolicy = () => {
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
          Refund Policy for {config.appName}
        </h1>

        <pre
          className="leading-relaxed whitespace-pre-wrap"
          style={{ fontFamily: "sans-serif" }}
        >
          {`Last Updated: September 30, 2025

At Build Fair, we stand behind the quality of our quote analysis service. We want you to be completely satisfied with your purchase.

1. Money-Back Guarantee

We offer a 100% money-back guarantee on all quote analysis purchases. If you are not satisfied with our analysis for any reason, you can request a full refund within 7 days of receiving your analysis report.

2. Eligibility for Refunds

You are eligible for a full refund if:
- You request the refund within 7 days of receiving your analysis report
- You provide a brief explanation of why you're unsatisfied (this helps us improve)
- The analysis was completed and delivered to you

3. Refund Process

To request a refund:
1. Email us at ${config.resend.supportEmail} with your order number and the email address used for the purchase
2. Include a brief explanation of your dissatisfaction
3. We will process your refund within 5-7 business days

Refunds will be issued to the original payment method used for the purchase.

4. What We Don't Refund

Please note that refunds will not be issued if:
- More than 7 days have passed since you received your analysis report
- The quote was submitted but you cancelled before we completed the analysis (you can cancel anytime before completion for a full refund)
- You used our analysis to successfully negotiate with your builder and then request a refund (this would be considered fraudulent use)

5. Partial Refunds

In cases where you ordered multiple quote analyses with the multi-quote discount:
- Each quote analysis can be individually refunded within its 7-day window
- The discount structure will be adjusted accordingly (if you refund the first quote, the second quote will be charged at the original price)

6. Questions About Refunds

If you have any questions about our refund policy or need assistance with a refund request, please contact us at ${config.resend.supportEmail}.

7. Cancellations Before Analysis

If you wish to cancel your order before we complete the analysis, you can do so at any time for a full refund. Simply email us at ${config.resend.supportEmail} with your order number.

8. Our Commitment

We are committed to providing valuable, high-quality quote analysis. Our refund policy exists because we stand behind our work and want you to feel confident using our service.

If you're unsatisfied with any aspect of your analysis, we encourage you to reach out to us first before requesting a refund. We may be able to address your concerns or provide additional clarification.

9. Changes to This Policy

We may update this refund policy from time to time. Any changes will be posted on this page with an updated revision date.

For questions about this policy or to request a refund, please contact us at ${config.resend.supportEmail}.

Thank you for choosing Build Fair!`}
        </pre>
      </div>
    </main>
  );
};

export default RefundPolicy;
