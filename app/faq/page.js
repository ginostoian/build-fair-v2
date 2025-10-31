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
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export const metadata = getSEOTags({
  title: `FAQ | ${config.appName}`,
  description:
    "Frequently asked questions about Build Fair&apos;s builder quote analysis service. Get answers about pricing, turnaround times, and our process.",
  canonicalUrlRelative: "/faq",
});

export default function FAQPage() {
  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-gradient-to-b from-white to-slate-50">
      {/* Hero Section */}
      <section className="py-20 pt-28">
        <div className="container max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-4 bg-slate-100 text-slate-700 border-slate-200 px-4 py-1.5">
            Help Center
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-slate-900">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            Everything you need to know about Build Fair and our quote analysis
            service.
          </p>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="pb-20">
        <div className="container max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* General Questions */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-slate-900">General Questions</h2>
            <Accordion
              type="single"
              collapsible
              className="space-y-4"
            >
              <AccordionItem
                value="item-1"
                className="bg-white px-6 py-2 rounded-xl border-2 border-slate-200"
              >
                <AccordionTrigger className="text-left font-semibold text-slate-900 hover:no-underline">
                  What is Build Fair?
                </AccordionTrigger>
                <AccordionContent className="text-slate-700 leading-relaxed pt-2">
                  Build Fair is an independent quote analysis service for UK
                  homeowners. We review builder quotes to ensure you&apos;re
                  getting fair pricing before you commit to thousands of pounds
                  in building work. Our team of qualified quantity surveyors and
                  experienced builders analyze your quotes against market rates
                  and industry standards.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-2"
                className="bg-white px-6 py-2 rounded-xl border-2 border-slate-200"
              >
                <AccordionTrigger className="text-left font-semibold text-slate-900 hover:no-underline">
                  Who analyzes my quote?
                </AccordionTrigger>
                <AccordionContent className="text-slate-700 leading-relaxed pt-2">
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
                className="bg-white px-6 py-2 rounded-xl border-2 border-slate-200"
              >
                <AccordionTrigger className="text-left font-semibold text-slate-900 hover:no-underline">
                  Are you affiliated with any builders or suppliers?
                </AccordionTrigger>
                <AccordionContent className="text-slate-700 leading-relaxed pt-2">
                  No, we are completely independent. We don&apos;t receive
                  commissions or kickbacks from builders, suppliers, or
                  manufacturers. Our only source of revenue is from customers
                  paying for our analysis service, which means our loyalty is
                  100% to you.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-4"
                className="bg-white px-6 py-2 rounded-xl border-2 border-slate-200"
              >
                <AccordionTrigger className="text-left font-semibold text-slate-900 hover:no-underline">
                  What types of building work do you cover?
                </AccordionTrigger>
                <AccordionContent className="text-slate-700 leading-relaxed pt-2">
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
                  If you&apos;re unsure whether we can help with your specific
                  project, just contact us!
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Service & Process */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-slate-900">Service & Process</h2>
            <Accordion
              type="single"
              collapsible
              className="space-y-4"
            >
              <AccordionItem
                value="item-5"
                className="bg-white px-6 py-2 rounded-xl border-2 border-slate-200"
              >
                <AccordionTrigger className="text-left font-semibold text-slate-900 hover:no-underline">
                  How long does the analysis take?
                </AccordionTrigger>
                <AccordionContent className="text-slate-700 leading-relaxed pt-2">
                  Turnaround times depend on your project size:
                  <ul className="mt-2 space-y-1">
                    <li>• Small projects (up to £15k): 24 hours</li>
                    <li>• Medium projects (£15k-£50k): 24-48 hours</li>
                    <li>• Large projects (£50k-£150k): up to 72 hours</li>
                  </ul>
                  Most analyses are completed faster than these maximums.
                  You&apos;ll receive an email as soon as your report is ready.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-6"
                className="bg-white px-6 py-2 rounded-xl border-2 border-slate-200"
              >
                <AccordionTrigger className="text-left font-semibold text-slate-900 hover:no-underline">
                  What information do I need to provide?
                </AccordionTrigger>
                <AccordionContent className="text-slate-700 leading-relaxed pt-2">
                  You&apos;ll need to provide:
                  <ul className="mt-2 space-y-1">
                    <li>
                      • Your builder&apos;s quote (PDF, image, or document)
                    </li>
                    <li>• Project location (city/town)</li>
                    <li>• Type of work being quoted</li>
                    <li>• Any specific concerns you have (optional)</li>
                  </ul>
                  The more detailed your builder&apos;s quote, the more
                  comprehensive our analysis can be.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-7"
                className="bg-white px-6 py-2 rounded-xl border-2 border-slate-200"
              >
                <AccordionTrigger className="text-left font-semibold text-slate-900 hover:no-underline">
                  What format should my quote be in?
                </AccordionTrigger>
                <AccordionContent className="text-slate-700 leading-relaxed pt-2">
                  We accept quotes in any common format including PDF, JPG, PNG,
                  Word documents, or even photos taken on your phone. As long as
                  the text is readable, we can analyze it.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-8"
                className="bg-white px-6 py-2 rounded-xl border-2 border-slate-200"
              >
                <AccordionTrigger className="text-left font-semibold text-slate-900 hover:no-underline">
                  What will I receive in the analysis report?
                </AccordionTrigger>
                <AccordionContent className="text-slate-700 leading-relaxed pt-2">
                  Your comprehensive PDF report includes:
                  <ul className="mt-2 space-y-1">
                    <li>
                      • Overall verdict (Fair, Overpriced, or Great Value)
                    </li>
                    <li>• Line-by-line cost breakdown and commentary</li>
                    <li>• Comparison to market rates in your area</li>
                    <li>• Red flags or concerns we&apos;ve identified</li>
                    <li>• Specific negotiation tips and strategies</li>
                    <li>• Items that may be missing from the quote</li>
                    <li>• Timeline assessment</li>
                    <li>• Our recommendation on next steps</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-9"
                className="bg-white px-6 py-2 rounded-xl border-2 border-slate-200"
              >
                <AccordionTrigger className="text-left font-semibold text-slate-900 hover:no-underline">
                  What if my quote is actually fair?
                </AccordionTrigger>
                <AccordionContent className="text-slate-700 leading-relaxed pt-2">
                  That&apos;s great news! Knowing your quote is fair gives you
                  the confidence to proceed without doubt or second-guessing.
                  Our report will still provide valuable insights about the
                  project, timeline, and things to watch out for during the
                  work. Many customers tell us that peace of mind is worth the
                  analysis fee on its own. Plus, we offer a money-back guarantee
                  if you&apos;re not satisfied.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-10"
                className="bg-white px-6 py-2 rounded-xl border-2 border-slate-200"
              >
                <AccordionTrigger className="text-left font-semibold text-slate-900 hover:no-underline">
                  Can you help me find a builder?
                </AccordionTrigger>
                <AccordionContent className="text-slate-700 leading-relaxed pt-2">
                  We focus solely on quote analysis and don&apos;t recommend
                  specific builders to maintain our independence. However, our
                  report will give you the knowledge and confidence to evaluate
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
                className="bg-white px-6 py-2 rounded-xl border-2 border-slate-200"
              >
                <AccordionTrigger className="text-left font-semibold text-slate-900 hover:no-underline">
                  How much does it cost?
                </AccordionTrigger>
                <AccordionContent className="text-slate-700 leading-relaxed pt-2">
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
                className="bg-white px-6 py-2 rounded-xl border-2 border-slate-200"
              >
                <AccordionTrigger className="text-left font-semibold text-slate-900 hover:no-underline">
                  How does the 30% multi-quote discount work?
                </AccordionTrigger>
                <AccordionContent className="text-slate-700 leading-relaxed pt-2">
                  If you&apos;re comparing multiple builder quotes (which we
                  highly recommend!), you&apos;ll receive 30% off the second and
                  any subsequent quote analyses when submitted together. For
                  example, if you have two £20,000 quotes, the first would be
                  £159 and the second only £111.30. The discount is
                  automatically applied at checkout.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-13"
                className="bg-white px-6 py-2 rounded-xl border-2 border-slate-200"
              >
                <AccordionTrigger className="text-left font-semibold text-slate-900 hover:no-underline">
                  What payment methods do you accept?
                </AccordionTrigger>
                <AccordionContent className="text-slate-700 leading-relaxed pt-2">
                  We accept all major credit and debit cards (Visa, Mastercard,
                  American Express) through our secure Stripe payment system.
                  Payment is required upfront before we begin the analysis.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-14"
                className="bg-white px-6 py-2 rounded-xl border-2 border-slate-200"
              >
                <AccordionTrigger className="text-left font-semibold text-slate-900 hover:no-underline">
                  Do you offer refunds?
                </AccordionTrigger>
                <AccordionContent className="text-slate-700 leading-relaxed pt-2">
                  Yes! We offer a 100% money-back guarantee. If you&apos;re not
                  satisfied with our analysis for any reason, just let us know
                  within 7 days and we&apos;ll issue a full refund, no questions
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
                className="bg-white px-6 py-2 rounded-xl border-2 border-slate-200"
              >
                <AccordionTrigger className="text-left font-semibold text-slate-900 hover:no-underline">
                  What if my quote is larger than £150,000?
                </AccordionTrigger>
                <AccordionContent className="text-slate-700 leading-relaxed pt-2">
                  For quotes above £150,000, please contact us directly at{" "}
                  {config.resend.supportEmail}. We&apos;ll provide a custom
                  quote based on the complexity and scale of your project.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Privacy & Security */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-slate-900">Privacy & Security</h2>
            <Accordion
              type="single"
              collapsible
              className="space-y-4"
            >
              <AccordionItem
                value="item-16"
                className="bg-white px-6 py-2 rounded-xl border-2 border-slate-200"
              >
                <AccordionTrigger className="text-left font-semibold text-slate-900 hover:no-underline">
                  Is my information kept confidential?
                </AccordionTrigger>
                <AccordionContent className="text-slate-700 leading-relaxed pt-2">
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
                className="bg-white px-6 py-2 rounded-xl border-2 border-slate-200"
              >
                <AccordionTrigger className="text-left font-semibold text-slate-900 hover:no-underline">
                  Will my builder find out I had their quote analyzed?
                </AccordionTrigger>
                <AccordionContent className="text-slate-700 leading-relaxed pt-2">
                  Not unless you tell them. We operate with complete
                  confidentiality. Many customers choose to share our findings
                  with their builder as part of negotiations, but that&apos;s
                  entirely your decision. We never contact builders directly.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-18"
                className="bg-white px-6 py-2 rounded-xl border-2 border-slate-200"
              >
                <AccordionTrigger className="text-left font-semibold text-slate-900 hover:no-underline">
                  How is my payment information secured?
                </AccordionTrigger>
                <AccordionContent className="text-slate-700 leading-relaxed pt-2">
                  We use Stripe, a leading payment processor trusted by millions
                  of businesses worldwide. We never see or store your full card
                  details – they&apos;re handled entirely by Stripe&apos;s
                  secure, PCI-compliant systems.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-19"
                className="bg-white px-6 py-2 rounded-xl border-2 border-slate-200"
              >
                <AccordionTrigger className="text-left font-semibold text-slate-900 hover:no-underline">
                  What do you do with my data after the analysis?
                </AccordionTrigger>
                <AccordionContent className="text-slate-700 leading-relaxed pt-2">
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
            <h2 className="text-2xl font-bold mb-6 text-slate-900">Other Questions</h2>
            <Accordion
              type="single"
              collapsible
              className="space-y-4"
            >
              <AccordionItem
                value="item-20"
                className="bg-white px-6 py-2 rounded-xl border-2 border-slate-200"
              >
                <AccordionTrigger className="text-left font-semibold text-slate-900 hover:no-underline">
                  Can you review quotes for work outside the UK?
                </AccordionTrigger>
                <AccordionContent className="text-slate-700 leading-relaxed pt-2">
                  Currently, we only analyze quotes for projects in the UK. Our
                  expertise and market data are specific to UK building costs,
                  regulations, and practices.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-21"
                className="bg-white px-6 py-2 rounded-xl border-2 border-slate-200"
              >
                <AccordionTrigger className="text-left font-semibold text-slate-900 hover:no-underline">
                  What if I need help understanding the report?
                </AccordionTrigger>
                <AccordionContent className="text-slate-700 leading-relaxed pt-2">
                  We write our reports to be clear and easy to understand, but
                  if you have any questions, just email us at{" "}
                  {config.resend.supportEmail}. We&apos;re happy to clarify any
                  points or provide additional guidance.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-22"
                className="bg-white px-6 py-2 rounded-xl border-2 border-slate-200"
              >
                <AccordionTrigger className="text-left font-semibold text-slate-900 hover:no-underline">
                  Can I get a quote analyzed before I receive it?
                </AccordionTrigger>
                <AccordionContent className="text-slate-700 leading-relaxed pt-2">
                  We need to see the actual quote to analyze it. However, once
                  you receive it from your builder, you can upload it
                  immediately and we&apos;ll have your analysis ready within
                  24-72 hours.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-23"
                className="bg-white px-6 py-2 rounded-xl border-2 border-slate-200"
              >
                <AccordionTrigger className="text-left font-semibold text-slate-900 hover:no-underline">
                  Do you offer bulk discounts for property developers?
                </AccordionTrigger>
                <AccordionContent className="text-slate-700 leading-relaxed pt-2">
                  Yes! If you&apos;re a property developer, landlord, or
                  managing agent who needs regular quote analysis, please
                  contact us at {config.resend.supportEmail} to discuss volume
                  pricing.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Still have questions */}
          <div className="text-center bg-white p-8 rounded-lg border-2 border-slate-200">
            <h3 className="text-2xl font-bold mb-4 text-slate-900">Still have questions?</h3>
            <p className="text-slate-700 mb-6 leading-relaxed">
              Can&apos;t find the answer you&apos;re looking for? Get in touch
              with our friendly team.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium bg-slate-900 text-white hover:bg-slate-800 h-10 px-6 shadow-md"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
      </main>
      <SiteFooter />
    </>
  );
}
