import Link from "next/link";
import { getSEOTags } from "@/libs/seo";
import config from "@/config";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { CheckCircle2, ArrowRight } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export const metadata = getSEOTags({
  title: `Pricing | ${config.appName}`,
  description:
    "Transparent pricing for builder quote analysis. From £69 for small projects to £299 for large builds. 30% discount on multiple quotes.",
  canonicalUrlRelative: "/pricing",
});

export default function PricingPage() {
  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-gradient-to-b from-white to-slate-50">

      {/* Hero Section */}
      <section className="py-20 pt-28">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-4 bg-slate-100 text-slate-700 border-slate-200 px-4 py-1.5">
            Transparent Pricing
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-slate-900">
            Simple, Fair Pricing
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            Pay based on your quote value. The bigger the project, the more
            comprehensive the analysis.
          </p>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-8">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {/* Tier 1 */}
            <Card className="border-2 border-slate-200 hover:border-slate-300 transition-all hover:shadow-xl bg-white">
              <CardContent className="pt-8">
                <div className="text-center mb-6">
                  <Badge
                    variant="outline"
                    className="mb-4 bg-slate-50 border-slate-200"
                  >
                    Small Projects
                  </Badge>
                  <div className="text-5xl font-bold mb-2 text-slate-900">£69</div>
                  <p className="text-sm text-slate-600 font-medium">
                    For quotes up to £15,000
                  </p>
                </div>

                <Separator className="mb-6" />

                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0" />
                    <span>Full cost breakdown</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0" />
                    <span>Market comparison</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0" />
                    <span>Red flag detection</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0" />
                    <span>24hr turnaround</span>
                  </div>
                </div>

                <Link href="/#pricing">
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full"
                  >
                    Choose Plan
                  </Button>
                </Link>

                <p className="text-xs text-center text-muted-foreground mt-4">
                  Perfect for bathrooms, kitchens
                </p>
              </CardContent>
            </Card>

            {/* Tier 2 - Featured */}
            <Card className="border-2 border-slate-900 shadow-2xl relative bg-white">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <Badge className="bg-slate-900 text-white px-4 py-1.5 font-semibold border-0">
                  Most Popular
                </Badge>
              </div>
              <CardContent className="pt-8">
                <div className="text-center mb-6">
                  <Badge
                    variant="outline"
                    className="mb-4 border-slate-900 bg-slate-50"
                  >
                    Medium Projects
                  </Badge>
                  <div className="text-6xl font-bold mb-2 text-slate-900">£159</div>
                  <p className="text-sm text-slate-600 font-medium">
                    For quotes £15,000 - £50,000
                  </p>
                </div>

                <Separator className="mb-6" />

                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0" />
                    <span>Detailed cost breakdown</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0" />
                    <span>Market comparison</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0" />
                    <span>Red flag detection</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0" />
                    <span>Negotiation strategy</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0" />
                    <span>24hr-48hr turnaround</span>
                  </div>
                </div>

                <Link href="/#pricing">
                  <Button
                    size="lg"
                    className="w-full"
                  >
                    Choose Plan
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>

                <p className="text-xs text-center text-muted-foreground mt-4">
                  Perfect for full home renovations
                </p>
              </CardContent>
            </Card>

            {/* Tier 3 */}
            <Card className="border-2 border-slate-200 hover:border-slate-300 transition-all hover:shadow-xl bg-white">
              <CardContent className="pt-8">
                 <div className="text-center mb-6">
                  <Badge
                    variant="outline"
                    className="mb-4 bg-slate-50 border-slate-200"
                  >
                    Large Projects
                  </Badge>
                  <div className="text-5xl font-bold mb-2 text-slate-900">£299</div>
                  <p className="text-sm text-slate-600 font-medium">
                    For quotes £50,000 - £150,000
                  </p>
                </div>

                <Separator className="mb-6" />

                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0" />
                    <span>Comprehensive analysis</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0" />
                    <span>Detailed market comparison</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0" />
                    <span>Red flag detection</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0" />
                    <span>Negotiation strategy</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0" />
                    <span>Up to 72hr delivery</span>
                  </div>
                </div>

                <Link href="/#pricing">
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full"
                  >
                    Choose Plan
                  </Button>
                </Link>

                <p className="text-xs text-center text-muted-foreground mt-4">
                  Perfect for extensions, conversions
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Multi-quote Discount */}
          <Card className="max-w-3xl mx-auto bg-gradient-to-br from-amber-50 to-amber-100/50 border-2 border-amber-300 mb-16">
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-orange-100 rounded-lg flex-shrink-0">
                  <Badge className="bg-orange-600 text-white text-lg px-3 py-1">
                    30% OFF
                  </Badge>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">
                    Multiple Quote Discount
                  </h3>
                  <p className="text-muted-foreground mb-3">
                    Comparing multiple builders? Smart move! Get{" "}
                    <span className="font-bold text-orange-700">30% off</span>{" "}
                    each additional quote analysis when you submit 2 or more
                    quotes together.
                  </p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                    <span>Example: 2nd quote at £159 = only £111.30</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* What&apos;s Included */}
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-center mb-8">
              Every Plan Includes
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <div className="font-semibold mb-1">Expert Analysis</div>
                  <p className="text-sm text-muted-foreground">
                    Reviewed by qualified builders and quantity surveyors
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <div className="font-semibold mb-1">
                    Market Rate Comparison
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Compare against real UK market rates for your area
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <div className="font-semibold mb-1">Red Flag Detection</div>
                  <p className="text-sm text-muted-foreground">
                    Identify overpricing, suspicious omissions, and risks
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <div className="font-semibold mb-1">Money-Back Guarantee</div>
                  <p className="text-sm text-muted-foreground">
                    100% refund if you&apos;re not satisfied with the analysis
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <div className="font-semibold mb-1">Negotiation Tips</div>
                  <p className="text-sm text-muted-foreground">
                    Actionable advice on how to negotiate better terms
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <div className="font-semibold mb-1">
                    Secure & Confidential
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Bank-level encryption, never shared with third parties
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="container max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-slate-900">Pricing FAQs</h2>

          <div className="space-y-6">
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-bold mb-2">
                  What if my quote is larger than £150,000?
                </h3>
                <p className="text-sm text-muted-foreground">
                  For quotes above £150,000, please contact us directly at{" "}
                  {config.resend.supportEmail}. We&apos;ll provide a custom
                  quote for your analysis based on the project complexity.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="font-bold mb-2">Do you offer refunds?</h3>
                <p className="text-sm text-muted-foreground">
                  Yes! We offer a 100% money-back guarantee within 7 days if
                  you&apos;re not satisfied with our analysis. No questions
                  asked. See our{" "}
                  <Link
                    href="/refund-policy"
                    className="text-blue-600 hover:underline"
                  >
                    refund policy
                  </Link>{" "}
                  for details.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="font-bold mb-2">
                  How does the 30% multi-quote discount work?
                </h3>
                <p className="text-sm text-muted-foreground">
                  When you submit 2 or more quotes together in the same order,
                  you&apos;ll receive 30% off the second and any subsequent
                  quotes. The discount is automatically applied at checkout.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="font-bold mb-2">
                  What payment methods do you accept?
                </h3>
                <p className="text-sm text-muted-foreground">
                  We accept all major credit and debit cards (Visa, Mastercard,
                  American Express) through our secure Stripe payment system.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-slate-900">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-slate-600 mb-8 leading-relaxed">
            Upload your quote and get expert analysis within 24-72 hours.
          </p>
          <Button
            size="lg"
            className="text-lg h-14 px-8 bg-slate-900 hover:bg-slate-800 text-white shadow-lg"
            asChild
          >
            <Link href="/pricing">
              Choose Your Plan
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
      </main>
      <SiteFooter />
    </>
  );
}
