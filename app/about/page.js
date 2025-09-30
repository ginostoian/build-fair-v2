import Link from "next/link";
import { getSEOTags } from "@/libs/seo";
import config from "@/config";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ShieldCheck,
  ArrowLeft,
  Award,
  Users,
  Target,
  Heart,
} from "lucide-react";

export const metadata = getSEOTags({
  title: `About Us | ${config.appName}`,
  description:
    "Learn about Build Fair's mission to protect UK homeowners from unfair builder quotes through expert analysis.",
  canonicalUrlRelative: "/about",
});

export default function AboutPage() {
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
          <Badge className="mb-4">About Build Fair</Badge>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Protecting UK Homeowners From Unfair Building Quotes
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            We're on a mission to bring transparency to the UK construction
            industry, one quote at a time.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container max-w-4xl mx-auto px-4">
          <Card>
            <CardContent className="pt-8">
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <div className="prose prose-lg max-w-none space-y-4 text-muted-foreground">
                <p>
                  Build Fair was founded in 2024 by a team of experienced
                  quantity surveyors and building professionals who were tired
                  of seeing homeowners get taken advantage of by unscrupulous
                  builders.
                </p>
                <p>
                  After witnessing countless cases of inflated quotes, hidden
                  costs, and unfair pricing, we realized that homeowners needed
                  an independent expert in their corner – someone who could
                  analyze builder quotes with a professional eye and tell them
                  the truth about what they're being charged.
                </p>
                <p>
                  With over 50 years of combined experience in the UK
                  construction industry, our team has reviewed thousands of
                  building projects. We know what fair pricing looks like, and
                  we're passionate about helping homeowners make informed
                  decisions about their biggest investments.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16">
        <div className="container max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Value 1 */}
            <Card>
              <CardContent className="pt-8 text-center">
                <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <ShieldCheck className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Transparency</h3>
                <p className="text-sm text-muted-foreground">
                  We believe in complete honesty about pricing, methods, and
                  what homeowners should expect from their builders.
                </p>
              </CardContent>
            </Card>

            {/* Value 2 */}
            <Card>
              <CardContent className="pt-8 text-center">
                <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Award className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Expertise</h3>
                <p className="text-sm text-muted-foreground">
                  Every quote is reviewed by qualified professionals with
                  real-world construction experience.
                </p>
              </CardContent>
            </Card>

            {/* Value 3 */}
            <Card>
              <CardContent className="pt-8 text-center">
                <div className="mx-auto w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Independence</h3>
                <p className="text-sm text-muted-foreground">
                  We're not affiliated with any builders. Our only loyalty is to
                  our customers and the truth.
                </p>
              </CardContent>
            </Card>

            {/* Value 4 */}
            <Card>
              <CardContent className="pt-8 text-center">
                <div className="mx-auto w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                  <Heart className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Fairness</h3>
                <p className="text-sm text-muted-foreground">
                  We believe builders deserve fair compensation, and homeowners
                  deserve fair pricing. Balance is key.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-16">
        <div className="container max-w-4xl mx-auto px-4">
          <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
            <CardContent className="pt-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-600 rounded-lg flex-shrink-0">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
                  <p className="text-lg text-muted-foreground mb-4">
                    To empower UK homeowners with expert knowledge and
                    independent analysis, ensuring they never overpay for
                    building work again.
                  </p>
                  <p className="text-muted-foreground">
                    We envision a future where unfair pricing in the
                    construction industry is eliminated, builders compete on
                    quality and service rather than information asymmetry, and
                    every homeowner has access to professional advice before
                    committing to major building work.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16">
        <div className="container max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-6">Our Team</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Our analysis team includes chartered quantity surveyors, experienced
            builders, and construction project managers, all with extensive
            knowledge of the UK market.
          </p>
          <Card>
            <CardContent className="pt-8">
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-4xl font-bold text-blue-600 mb-2">
                    50+
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Years Combined Experience
                  </div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-green-600 mb-2">
                    500+
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Quotes Analyzed
                  </div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-purple-600 mb-2">
                    £2.3K
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Average Saving
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join hundreds of UK homeowners who've avoided overpaying on their
            building projects.
          </p>
          <Link href="/#pricing">
            <Button
              size="lg"
              className="text-lg h-14 px-8"
            >
              Get Your Quote Analyzed
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
