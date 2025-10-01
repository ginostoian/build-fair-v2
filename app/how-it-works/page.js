import Link from "next/link";
import { getSEOTags } from "@/libs/seo";
import config from "@/config";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowLeft,
  Upload,
  FileSearch,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Mail,
  AlertCircle,
} from "lucide-react";

export const metadata = getSEOTags({
  title: `How It Works | ${config.appName}`,
  description:
    "Learn how Build Fair analyzes your builder quotes to ensure you&apos;re getting fair pricing on your UK building project.",
  canonicalUrlRelative: "/how-it-works",
});

export default function HowItWorksPage() {
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
        <div className="container max-w-4xl mx-auto px-4 text-center">
          <Badge className="mb-4">Simple Process</Badge>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            How Build Fair Works
          </h1>
          <p className="text-xl text-muted-foreground">
            Get expert analysis of your builder quote in three simple steps.
            From upload to detailed report in under 24 hours.
          </p>
        </div>
      </section>

      {/* Steps Overview */}
      <section className="py-16">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <Card className="relative pt-12 border-2">
              <div className="absolute -top-6 left-1/2 -translate-x-1/2">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  1
                </div>
              </div>
              <CardContent className="text-center space-y-4">
                <div className="flex justify-center">
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <Upload className="h-10 w-10 text-blue-600" />
                  </div>
                </div>
                <h3 className="text-xl font-bold">Upload Your Quote</h3>
                <p className="text-muted-foreground">
                  Upload your builder&apos;s quote securely. We accept PDFs,
                  images, and documents.
                </p>
              </CardContent>
            </Card>

            {/* Step 2 */}
            <Card className="relative pt-12 border-2">
              <div className="absolute -top-6 left-1/2 -translate-x-1/2">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  2
                </div>
              </div>
              <CardContent className="text-center space-y-4">
                <div className="flex justify-center">
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <FileSearch className="h-10 w-10 text-blue-600" />
                  </div>
                </div>
                <h3 className="text-xl font-bold">Expert Analysis</h3>
                <p className="text-muted-foreground">
                  Our team analyzes every line item against market rates and
                  industry standards.
                </p>
              </CardContent>
            </Card>

            {/* Step 3 */}
            <Card className="relative pt-12 border-2">
              <div className="absolute -top-6 left-1/2 -translate-x-1/2">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  3
                </div>
              </div>
              <CardContent className="text-center space-y-4">
                <div className="flex justify-center">
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <ShieldCheck className="h-10 w-10 text-blue-600" />
                  </div>
                </div>
                <h3 className="text-xl font-bold">Get Your Report</h3>
                <p className="text-muted-foreground">
                  Receive a comprehensive report with our verdict and
                  recommendations.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Detailed Process */}
      <section className="py-16">
        <div className="container max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            The Detailed Process
          </h2>

          <div className="space-y-8">
            {/* Step 1 Detailed */}
            <Card>
              <CardContent className="pt-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-600 rounded-lg flex-shrink-0">
                    <Upload className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-4">
                      Step 1: Upload Your Quote
                    </h3>
                    <div className="space-y-3 text-muted-foreground">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <p>Choose your pricing tier based on the quote value</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <p>
                          Upload your quote as a PDF, image (JPG/PNG), or Word
                          document
                        </p>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <p>
                          Provide basic project details (location, type of work,
                          builder info)
                        </p>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <p>
                          Complete secure payment (30% discount for additional
                          quotes)
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Step 2 Detailed */}
            <Card>
              <CardContent className="pt-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-600 rounded-lg flex-shrink-0">
                    <FileSearch className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-4">
                      Step 2: Expert Analysis
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Your quote is assigned to one of our qualified quantity
                      surveyors or experienced builders who will:
                    </p>
                    <div className="space-y-3 text-muted-foreground">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <p>
                          <strong>Break down every cost</strong> - Labour,
                          materials, overheads, and profit margins
                        </p>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <p>
                          <strong>Compare to market rates</strong> - Check
                          against current UK prices for your area
                        </p>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <p>
                          <strong>Identify red flags</strong> - Spot inflated
                          costs, missing items, or unusual terms
                        </p>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <p>
                          <strong>Review timeline</strong> - Assess if the
                          proposed schedule is realistic
                        </p>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <p>
                          <strong>Check terms & conditions</strong> - Look for
                          unfair clauses or missing protections
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Step 3 Detailed */}
            <Card>
              <CardContent className="pt-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-600 rounded-lg flex-shrink-0">
                    <ShieldCheck className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-4">
                      Step 3: Receive Your Report
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Within 24-72 hours (depending on your tier), you&apos;ll
                      receive a comprehensive PDF report including:
                    </p>
                    <div className="space-y-3 text-muted-foreground">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <p>
                          <strong>Overall Verdict</strong> - Is the quote fair,
                          overpriced, or a great deal?
                        </p>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <p>
                          <strong>Line-by-line breakdown</strong> - Commentary
                          on each cost item
                        </p>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <p>
                          <strong>Market comparison</strong> - How it compares
                          to typical prices in your area
                        </p>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <p>
                          <strong>Red flags identified</strong> - Any concerns
                          or warning signs we spotted
                        </p>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <p>
                          <strong>Negotiation tips</strong> - Specific advice on
                          how to negotiate a better deal
                        </p>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <p>
                          <strong>Next steps</strong> - Our recommendation on
                          whether to proceed, negotiate, or get more quotes
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-white">
        <div className="container max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Expected Timeline
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="text-center">
              <CardContent className="pt-8">
                <Clock className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <div className="text-3xl font-bold mb-2">24 hrs</div>
                <div className="font-semibold mb-2">Small Projects</div>
                <p className="text-sm text-muted-foreground">
                  Quotes up to £15,000
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-2 border-blue-600">
              <CardContent className="pt-8">
                <Clock className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <div className="text-3xl font-bold mb-2">24-48 hrs</div>
                <div className="font-semibold mb-2">Medium Projects</div>
                <p className="text-sm text-muted-foreground">
                  Quotes £15,000 - £50,000
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-8">
                <Clock className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <div className="text-3xl font-bold mb-2">Up to 72 hrs</div>
                <div className="font-semibold mb-2">Large Projects</div>
                <p className="text-sm text-muted-foreground">
                  Quotes £50,000 - £150,000
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What We Look For */}
      <section className="py-16">
        <div className="container max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            What We Look For
          </h2>

          <Card className="bg-gradient-to-br from-red-50 to-orange-50 border-red-200 mb-6">
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <AlertCircle className="h-8 w-8 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-3">
                    Common Red Flags We Identify:
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>
                      • Labour costs inflated by more than 20% above market rate
                    </li>
                    <li>
                      • Materials marked up excessively (standard is 10-15%)
                    </li>
                    <li>
                      • Vague descriptions like "preliminaries" or "sundries"
                      with high costs
                    </li>
                    <li>
                      • Missing essential items (scaffolding, skip hire,
                      permits)
                    </li>
                    <li>
                      • Unrealistic timelines (too fast or unnecessarily long)
                    </li>
                    <li>
                      • Unfair payment terms (large upfront payments before work
                      starts)
                    </li>
                    <li>• Missing insurance or warranty information</li>
                    <li>• Unclear scope of work or deliverables</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Analyze Your Quote?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Get expert analysis within 24-72 hours. Starting from just £69.
          </p>
          <Link href="/#pricing">
            <Button
              size="lg"
              className="text-lg h-14 px-8"
            >
              Get Started Now
            </Button>
          </Link>
          <p className="text-sm text-muted-foreground mt-4">
            100% money-back guarantee if you&apos;re not satisfied
          </p>
        </div>
      </section>
    </main>
  );
}
