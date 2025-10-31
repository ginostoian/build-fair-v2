import Link from "next/link";
import { getSEOTags } from "@/libs/seo";
import config from "@/config";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ShieldCheck,
  ArrowRight,
  Award,
  Users,
  Target,
  Heart,
} from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export const metadata = getSEOTags({
  title: `About Us | ${config.appName}`,
  description:
    "Learn about Build Fair&apos;s mission to protect UK homeowners from unfair builder quotes through expert analysis.",
  canonicalUrlRelative: "/about",
});

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-gradient-to-b from-white to-slate-50">

      {/* Hero Section */}
      <section className="py-20 pt-28">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-4 bg-slate-100 text-slate-700 border-slate-200 px-4 py-1.5">
            About Build Fair
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-slate-900">
            Protecting UK Homeowners From Unfair Building Quotes
          </h1>
          <p className="text-xl text-slate-600 mb-8 leading-relaxed">
            We&apos;re on a mission to bring transparency to the UK construction
            industry, one quote at a time.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-2 border-slate-200 shadow-lg bg-white">
            <CardContent className="pt-8">
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <div className="prose prose-lg max-w-none space-y-4 text-slate-700 leading-relaxed">
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
                  the truth about what they&apos;re being charged.
                </p>
                <p>
                  With over 50 years of combined experience in the UK
                  construction industry, our team has reviewed thousands of
                  building projects. We know what fair pricing looks like, and
                  we&apos;re passionate about helping homeowners make informed
                  decisions about their biggest investments.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-slate-900">
            Our Values
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Value 1 */}
            <Card className="border-2 border-slate-200 hover:border-slate-300 transition-all hover:shadow-lg bg-white">
              <CardContent className="pt-8 text-center">
                <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <ShieldCheck className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-900">
                  Transparency
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
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
                  We&apos;re not affiliated with any builders. Our only loyalty
                  is to our customers and the truth.
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
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-gradient-to-br from-slate-50 to-slate-100 border-2 border-slate-200 shadow-lg">
            <CardContent className="pt-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-slate-900 rounded-lg flex-shrink-0">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-4 text-slate-900">
                    Our Mission
                  </h2>
                  <p className="text-lg text-slate-700 mb-4 leading-relaxed">
                    To empower UK homeowners with expert knowledge and
                    independent analysis, ensuring they never overpay for
                    building work again.
                  </p>
                  <p className="text-slate-700 leading-relaxed">
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
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-slate-900">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-slate-600 mb-8 leading-relaxed">
            Join hundreds of UK homeowners who&apos;ve avoided overpaying on
            their building projects.
          </p>
          <Button
            size="lg"
            className="text-lg h-14 px-8 bg-slate-900 hover:bg-slate-800 text-white shadow-lg"
            asChild
          >
            <Link href="/pricing">
              Get Your Quote Analyzed
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
