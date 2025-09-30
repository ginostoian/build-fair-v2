import Link from "next/link";
import { getSEOTags } from "@/libs/seo";
import config from "@/config";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ArrowLeft } from "lucide-react";

export const metadata = getSEOTags({
  title: `FAQ | ${config.appName}`,
  description:
    "Frequently asked questions about Build Fair's builder quote analysis service. Get answers about pricing, turnaround times, and our process.",
  canonicalUrlRelative: "/faq",
});

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      {/* Header */}
      <header className="border-b bg-white">
        <div className="container max-w-7xl mx-auto px-4 py-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20">
        <div className="container max-w-3xl mx-auto px-4 text-center">
          <Badge className="mb-4">Help Center</Badge>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-muted-foreground">
            Everything you need to know about Build Fair and our quote analysis
            service.
          </p>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="pb-20">
        <div className="container max-w-3xl mx-auto px-4">
          {/* General Questions */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">General Questions</h2>
            <Accordion
              type="single"
              collapsible
              className="space-y-4"
            >
              <AccordionItem
                value="item-1"
                className="bg-white px-6 rounded-lg border"
              >
                <AccordionTrigger className="text-left font-semibold">
                  What is Build Fair?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Build Fair is an independent quote analysis service for UK
                  homeowners. We review builder quotes to ensure you're getting
                  fair pricing before you commit to thousands of pounds in
                  building work. Our team of qualified quantity surveyors and
                  experienced builders analyze your quotes against market rates
                  and industry standards.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-2"
                className="bg-white px-6 rounded-lg border"
              >
                <AccordionTrigger className="text-left font-semibold">
                  Who analyzes my quote?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Your quote is analyzed by qualified building professionals
                  including experienced builders, chartered quantity surveyors,
                  and construction project managers. Our team has over 50 years
                  of combined experience in the UK construction industry and has
                  worked on projects ranging from small renovations to
                  multi-million pound builds.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-3"
                className="bg-white px-6 rounded-lg border"
              >
                <AccordionTrigger className="text-left font-semibold">
                  Are you affiliated with any builders or suppliers?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  No, we are completely independent. We don't receive
                  commissions or kickbacks from builders, suppliers, or
                  manufacturers. Our only source of revenue is from customers
                  paying for our analysis service, which means our loyalty is
                  100% to you.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-4"
                className="bg-white px-6 rounded-lg border"
              >
                <AccordionTrigger className="text-left font-semibold">
                  What types of building work do you cover?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  We analyze quotes for all types of building work including:
                  <ul className="mt-2 space-y-1">
                    <li>• Kitchen and bathroom renovations</li>
                    <li>• Home extensions (side, rear, wrap-around)</li>
                    <li>• Loft conversions</li>
                    <li>• Garage conversions</li>
                    <li>• New builds and self-builds</li>
                    <li>• Roofing work</li>
                    <li>• Landscaping and groundwork</li>
                    <li>• General renovations and refurbishments</li>
                  </ul>
                  If you're unsure whether we can help with your specific
                  project, just contact us!
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Service & Process */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Service & Process</h2>
            <Accordion
              type="single"
              collapsible
              className="space-y-4"
            >
              <AccordionItem
                value="item-5"
                className="bg-white px-6 rounded-lg border"
              >
                <AccordionTrigger className="text-left font-semibold">
                  How long does the analysis take?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Turnaround times depend on your project size:
                  <ul className="mt-2 space-y-1">
                    <li>• Small projects (up to £15k): 24 hours</li>
                    <li>• Medium projects (£15k-£50k): 24-48 hours</li>
                    <li>• Large projects (£50k-£150k): up to 72 hours</li>
                  </ul>
                  Most analyses are completed faster than these maximums. You'll
                  receive an email as soon as your report is ready.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-6"
                className="bg-white px-6 rounded-lg border"
              >
                <AccordionTrigger className="text-left font-semibold">
                  What information do I need to provide?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  You'll need to provide:
                  <ul className="mt-2 space-y-1">
                    <li>• Your builder's quote (PDF, image, or document)</li>
                    <li>• Project location (city/town)</li>
                    <li>• Type of work being quoted</li>
                    <li>• Any specific concerns you have (optional)</li>
                  </ul>
                  The more detailed your builder's quote, the more comprehensive
                  our analysis can be.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-7"
                className="bg-white px-6 rounded-lg border"
              >
                <AccordionTrigger className="text-left font-semibold">
                  What format should my quote be in?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  We accept quotes in any common format including PDF, JPG, PNG,
                  Word documents, or even photos taken on your phone. As long as
                  the text is readable, we can analyze it.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-8"
                className="bg-white px-6 rounded-lg border"
              >
                <AccordionTrigger className="text-left font-semibold">
                  What will I receive in the analysis report?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Your comprehensive PDF report includes:
                  <ul className="mt-2 space-y-1">
                    <li>
                      • Overall verdict (Fair, Overpriced, or Great Value)
                    </li>
                    <li>• Line-by-line cost breakdown and commentary</li>
                    <li>• Comparison to market rates in your area</li>
                    <li>• Red flags or concerns we've identified</li>
                    <li>• Specific negotiation tips and strategies</li>
                    <li>• Items that may be missing from the quote</li>
                    <li>• Timeline assessment</li>
                    <li>• Our recommendation on next steps</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-9"
                className="bg-white px-6 rounded-lg border"
              >
                <AccordionTrigger className="text-left font-semibold">
                  What if my quote is actually fair?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  That's great news! Knowing your quote is fair gives you the
                  confidence to proceed without doubt or second-guessing. Our
                  report will still provide valuable insights about the project,
                  timeline, and things to watch out for during the work. Many
                  customers tell us that peace of mind is worth the analysis fee
                  on its own. Plus, we offer a money-back guarantee if you're
                  not satisfied.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-10"
                className="bg-white px-6 rounded-lg border"
              >
                <AccordionTrigger className="text-left font-semibold">
                  Can you help me find a builder?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  We focus solely on quote analysis and don't recommend specific
                  builders to maintain our independence. However, our report
                  will give you the knowledge and confidence to evaluate
                  multiple builders effectively and make an informed choice.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Pricing & Payment */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Pricing & Payment</h2>
            <Accordion
              type="single"
              collapsible
              className="space-y-4"
            >
              <AccordionItem
                value="item-11"
                className="bg-white px-6 rounded-lg border"
              >
                <AccordionTrigger className="text-left font-semibold">
                  How much does it cost?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Pricing is based on your quote value:
                  <ul className="mt-2 space-y-1">
                    <li>• £69 for quotes up to £15,000</li>
                    <li>• £159 for quotes £15,000 - £50,000</li>
                    <li>• £299 for quotes £50,000 - £150,000</li>
                  </ul>
                  Plus, you get 30% off each additional quote when you submit
                  multiple quotes together.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-12"
                className="bg-white px-6 rounded-lg border"
              >
                <AccordionTrigger className="text-left font-semibold">
                  How does the 30% multi-quote discount work?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  If you're comparing multiple builder quotes (which we highly
                  recommend!), you'll receive 30% off the second and any
                  subsequent quote analyses when submitted together. For
                  example, if you have two £20,000 quotes, the first would be
                  £159 and the second only £111.30. The discount is
                  automatically applied at checkout.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-13"
                className="bg-white px-6 rounded-lg border"
              >
                <AccordionTrigger className="text-left font-semibold">
                  What payment methods do you accept?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  We accept all major credit and debit cards (Visa, Mastercard,
                  American Express) through our secure Stripe payment system.
                  Payment is required upfront before we begin the analysis.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-14"
                className="bg-white px-6 rounded-lg border"
              >
                <AccordionTrigger className="text-left font-semibold">
                  Do you offer refunds?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Yes! We offer a 100% money-back guarantee. If you're not
                  satisfied with our analysis for any reason, just let us know
                  within 7 days and we'll issue a full refund, no questions
                  asked. See our{" "}
                  <Link
                    href="/refund-policy"
                    className="text-blue-600 hover:underline"
                  >
                    refund policy
                  </Link>{" "}
                  for full details.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-15"
                className="bg-white px-6 rounded-lg border"
              >
                <AccordionTrigger className="text-left font-semibold">
                  What if my quote is larger than £150,000?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  For quotes above £150,000, please contact us directly at{" "}
                  {config.resend.supportEmail}. We'll provide a custom quote
                  based on the complexity and scale of your project.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Privacy & Security */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Privacy & Security</h2>
            <Accordion
              type="single"
              collapsible
              className="space-y-4"
            >
              <AccordionItem
                value="item-16"
                className="bg-white px-6 rounded-lg border"
              >
                <AccordionTrigger className="text-left font-semibold">
                  Is my information kept confidential?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Absolutely. All quotes and personal information are kept
                  strictly confidential and are never shared with third parties,
                  including builders or suppliers. We use bank-level encryption
                  to protect your data, and all reports are delivered securely
                  via email. See our{" "}
                  <Link
                    href="/privacy-policy"
                    className="text-blue-600 hover:underline"
                  >
                    privacy policy
                  </Link>{" "}
                  for details.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-17"
                className="bg-white px-6 rounded-lg border"
              >
                <AccordionTrigger className="text-left font-semibold">
                  Will my builder find out I had their quote analyzed?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Not unless you tell them. We operate with complete
                  confidentiality. Many customers choose to share our findings
                  with their builder as part of negotiations, but that's
                  entirely your decision. We never contact builders directly.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-18"
                className="bg-white px-6 rounded-lg border"
              >
                <AccordionTrigger className="text-left font-semibold">
                  How is my payment information secured?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  We use Stripe, a leading payment processor trusted by millions
                  of businesses worldwide. We never see or store your full card
                  details – they're handled entirely by Stripe's secure,
                  PCI-compliant systems.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-19"
                className="bg-white px-6 rounded-lg border"
              >
                <AccordionTrigger className="text-left font-semibold">
                  What do you do with my data after the analysis?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  We retain your quote and analysis for 12 months in case you
                  need to reference it again. After that, all data is securely
                  deleted. You can request early deletion at any time by
                  contacting {config.resend.supportEmail}.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Other Questions */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Other Questions</h2>
            <Accordion
              type="single"
              collapsible
              className="space-y-4"
            >
              <AccordionItem
                value="item-20"
                className="bg-white px-6 rounded-lg border"
              >
                <AccordionTrigger className="text-left font-semibold">
                  Can you review quotes for work outside the UK?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Currently, we only analyze quotes for projects in the UK. Our
                  expertise and market data are specific to UK building costs,
                  regulations, and practices.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-21"
                className="bg-white px-6 rounded-lg border"
              >
                <AccordionTrigger className="text-left font-semibold">
                  What if I need help understanding the report?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  We write our reports to be clear and easy to understand, but
                  if you have any questions, just email us at{" "}
                  {config.resend.supportEmail}. We're happy to clarify any
                  points or provide additional guidance.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-22"
                className="bg-white px-6 rounded-lg border"
              >
                <AccordionTrigger className="text-left font-semibold">
                  Can I get a quote analyzed before I receive it?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  We need to see the actual quote to analyze it. However, once
                  you receive it from your builder, you can upload it
                  immediately and we'll have your analysis ready within 24-72
                  hours.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-23"
                className="bg-white px-6 rounded-lg border"
              >
                <AccordionTrigger className="text-left font-semibold">
                  Do you offer bulk discounts for property developers?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Yes! If you're a property developer, landlord, or managing
                  agent who needs regular quote analysis, please contact us at{" "}
                  {config.resend.supportEmail} to discuss volume pricing.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Still have questions */}
          <div className="text-center bg-white p-8 rounded-lg border">
            <h3 className="text-2xl font-bold mb-4">Still have questions?</h3>
            <p className="text-muted-foreground mb-6">
              Can't find the answer you're looking for? Get in touch with our
              friendly team.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-6"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
