import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  CheckCircle2,
  Upload,
  FileSearch,
  ShieldCheck,
  ArrowRight,
  TrendingDown,
  AlertTriangle,
  Award,
  Clock,
  Star,
  MessageSquare,
  Mail,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";
import ButtonSignin from "@/components/ButtonSignin";

export default function Page() {
  return (
    <>
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 shadow-sm">
        <div className="container flex h-20 items-center justify-between max-w-7xl mx-auto px-4">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 group"
          >
            <div className="p-2 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg group-hover:from-blue-700 group-hover:to-blue-800 transition-all">
              <ShieldCheck className="h-6 w-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-xl leading-none">Build Fair</span>
              <span className="text-xs text-muted-foreground">
                Quote Analysis Experts
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            <Link
              href="#how-it-works"
              className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent rounded-md transition-colors"
            >
              How It Works
            </Link>
            <Link
              href="#benefits"
              className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent rounded-md transition-colors"
            >
              Benefits
            </Link>
            <Link
              href="#pricing"
              className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent rounded-md transition-colors"
            >
              Pricing
            </Link>
            <Link
              href="#testimonials"
              className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent rounded-md transition-colors"
            >
              Reviews
            </Link>
            <Link
              href="#faq"
              className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent rounded-md transition-colors"
            >
              FAQ
            </Link>
          </nav>

          {/* CTA Buttons */}
          <div className="flex items-center gap-3">
            <ButtonSignin text="Sign In" />
            <Button
              size="default"
              className="hidden sm:flex"
            >
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white py-20 sm:py-32">
          <div className="container max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Column - Hero Content */}
              <div className="flex flex-col gap-8">
                <Badge
                  className="w-fit"
                  variant="secondary"
                >
                  🇬🇧 Trusted by UK Homeowners
                </Badge>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
                  Don&apos;t Get Ripped Off By{" "}
                  <span className="text-primary">Builder Quotes</span>
                </h1>

                <p className="text-xl text-muted-foreground leading-relaxed">
                  Upload your builder quote and get expert analysis within 24
                  hours. Know if you&apos;re paying a fair price before
                  committing to thousands in work.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    className="text-lg h-14 px-8"
                  >
                    Get Your Quote Analyzed
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="text-lg h-14 px-8"
                  >
                    See How It Works
                  </Button>
                </div>

                {/* Trust Indicators */}
                <div className="flex items-center gap-6 pt-4">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 border-2 border-white"
                      />
                    ))}
                  </div>
                  <div className="text-sm">
                    <div className="font-semibold">500+ quotes analyzed</div>
                    <div className="text-muted-foreground">
                      Avg. saving: £2,340 (on £15k quotes)
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">
                      Bigger quotes = bigger savings
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Visual/Stats */}
              <div className="relative">
                <Card className="p-8 shadow-2xl">
                  <CardContent className="p-0 space-y-6">
                    <div className="flex items-center gap-3">
                      <div className="p-3 bg-green-100 rounded-lg">
                        <CheckCircle2 className="h-8 w-8 text-green-600" />
                      </div>
                      <div>
                        <div className="font-bold text-2xl">£24,500</div>
                        <div className="text-sm text-muted-foreground">
                          Quote Amount
                        </div>
                      </div>
                    </div>

                    <div className="h-px bg-border" />

                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Labour Cost Analysis</span>
                        <Badge
                          variant="outline"
                          className="bg-green-50 text-green-700"
                        >
                          Fair
                        </Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Materials Pricing</span>
                        <Badge
                          variant="outline"
                          className="bg-green-50 text-green-700"
                        >
                          Good
                        </Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Timeline Estimate</span>
                        <Badge
                          variant="outline"
                          className="bg-yellow-50 text-yellow-700"
                        >
                          Review
                        </Badge>
                      </div>
                    </div>

                    <div className="h-px bg-border" />

                    <div className="p-4 bg-blue-50 rounded-lg">
                      <div className="font-semibold text-blue-900 mb-1">
                        Our Assessment
                      </div>
                      <p className="text-sm text-blue-800">
                        This quote is within fair market range for your area.
                        Materials are competitively priced.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Floating Badge */}
                <div className="absolute -top-4 -right-4 rotate-12">
                  <Badge className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-4 py-2 text-sm shadow-lg">
                    From £69
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section
          id="how-it-works"
          className="py-20 bg-white scroll-mt-20"
        >
          <div className="container max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <Badge className="mb-4">Simple Process</Badge>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                How Build Fair Works
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Get expert analysis of your builder quote in three simple steps
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Step 1 */}
              <Card className="relative pt-12">
                <div className="absolute -top-6 left-1/2 -translate-x-1/2">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                    1
                  </div>
                </div>
                <CardContent className="text-center space-y-4">
                  <div className="flex justify-center">
                    <div className="p-4 bg-blue-50 rounded-lg">
                      <Upload className="h-10 w-10 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold">Upload Your Quote</h3>
                  <p className="text-muted-foreground">
                    Simply upload your builder&apos;s quote as a PDF or image.
                    All information is kept confidential and secure.
                  </p>
                </CardContent>
              </Card>

              {/* Step 2 */}
              <Card className="relative pt-12">
                <div className="absolute -top-6 left-1/2 -translate-x-1/2">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                    2
                  </div>
                </div>
                <CardContent className="text-center space-y-4">
                  <div className="flex justify-center">
                    <div className="p-4 bg-blue-50 rounded-lg">
                      <FileSearch className="h-10 w-10 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold">Expert Analysis</h3>
                  <p className="text-muted-foreground">
                    Our team of building professionals analyzes your quote
                    against market rates, materials costs, and industry
                    standards.
                  </p>
                </CardContent>
              </Card>

              {/* Step 3 */}
              <Card className="relative pt-12">
                <div className="absolute -top-6 left-1/2 -translate-x-1/2">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                    3
                  </div>
                </div>
                <CardContent className="text-center space-y-4">
                  <div className="flex justify-center">
                    <div className="p-4 bg-blue-50 rounded-lg">
                      <ShieldCheck className="h-10 w-10 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold">Get Your Report</h3>
                  <p className="text-muted-foreground">
                    Receive a detailed report within 24 hours with our
                    assessment, red flags, and negotiation tips.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section
          id="benefits"
          className="py-20 bg-gradient-to-b from-white to-blue-50 scroll-mt-20"
        >
          <div className="container max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <Badge className="mb-4">Why Choose Us</Badge>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                The Problems We Solve
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Don&apos;t fall victim to unfair pricing. Get the confidence you
                need.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Benefit 1 */}
              <Card className="border-2 hover:border-primary transition-colors">
                <CardContent className="pt-6 space-y-4">
                  <div className="p-3 bg-red-100 rounded-lg w-fit">
                    <TrendingDown className="h-8 w-8 text-red-600" />
                  </div>
                  <h3 className="text-lg font-bold">Stop Overpaying</h3>
                  <p className="text-sm text-muted-foreground">
                    UK homeowners overpay by an average of 18% on home
                    improvements. We help you avoid this costly mistake.
                  </p>
                </CardContent>
              </Card>

              {/* Benefit 2 */}
              <Card className="border-2 hover:border-primary transition-colors">
                <CardContent className="pt-6 space-y-4">
                  <div className="p-3 bg-orange-100 rounded-lg w-fit">
                    <AlertTriangle className="h-8 w-8 text-orange-600" />
                  </div>
                  <h3 className="text-lg font-bold">Spot Red Flags</h3>
                  <p className="text-sm text-muted-foreground">
                    Our experts identify warning signs like inflated labour
                    costs, suspicious omissions, and unrealistic timelines.
                  </p>
                </CardContent>
              </Card>

              {/* Benefit 3 */}
              <Card className="border-2 hover:border-primary transition-colors">
                <CardContent className="pt-6 space-y-4">
                  <div className="p-3 bg-blue-100 rounded-lg w-fit">
                    <Award className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-bold">Expert Analysis</h3>
                  <p className="text-sm text-muted-foreground">
                    Get insights from qualified builders and quantity surveyors
                    with decades of combined experience.
                  </p>
                </CardContent>
              </Card>

              {/* Benefit 4 */}
              <Card className="border-2 hover:border-primary transition-colors">
                <CardContent className="pt-6 space-y-4">
                  <div className="p-3 bg-green-100 rounded-lg w-fit">
                    <Clock className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-lg font-bold">24hr Turnaround</h3>
                  <p className="text-sm text-muted-foreground">
                    Get your detailed analysis report within 24 hours. Make
                    informed decisions quickly and confidently.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section
          id="pricing"
          className="py-20 bg-blue-50 scroll-mt-20"
        >
          <div className="container max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <Badge className="mb-4">Transparent Pricing</Badge>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Pricing Based On Quote Value
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Fair pricing that scales with your project size. The larger the
                quote, the more complex the analysis.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {/* Tier 1 */}
              <Card className="border-2 hover:border-primary transition-all hover:shadow-xl">
                <CardContent className="pt-8">
                  <div className="text-center mb-6">
                    <Badge
                      variant="outline"
                      className="mb-4"
                    >
                      Small Projects
                    </Badge>
                    <div className="text-4xl font-bold mb-2">£69</div>
                    <p className="text-sm text-muted-foreground font-medium">
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

                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full"
                  >
                    Choose Plan
                  </Button>

                  <p className="text-xs text-center text-muted-foreground mt-4">
                    Perfect for bathrooms, kitchens
                  </p>
                </CardContent>
              </Card>

              {/* Tier 2 - Featured */}
              <Card className="border-2 border-primary shadow-2xl relative">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <Badge className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-1">
                    Most Popular
                  </Badge>
                </div>
                <CardContent className="pt-8">
                  <div className="text-center mb-6">
                    <Badge
                      variant="outline"
                      className="mb-4 border-primary"
                    >
                      Medium Projects
                    </Badge>
                    <div className="text-5xl font-bold mb-2">£159</div>
                    <p className="text-sm text-muted-foreground font-medium">
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

                  <Button
                    size="lg"
                    className="w-full"
                  >
                    Choose Plan
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>

                  <p className="text-xs text-center text-muted-foreground mt-4">
                    Perfect for full home renovations
                  </p>
                </CardContent>
              </Card>

              {/* Tier 3 */}
              <Card className="border-2 hover:border-primary transition-all hover:shadow-xl">
                <CardContent className="pt-8">
                  <div className="text-center mb-6">
                    <Badge
                      variant="outline"
                      className="mb-4"
                    >
                      Large Projects
                    </Badge>
                    <div className="text-4xl font-bold mb-2">£299</div>
                    <p className="text-sm text-muted-foreground font-medium">
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
                      <span> up to 72hr delivery</span>
                    </div>
                  </div>

                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full"
                  >
                    Choose Plan
                  </Button>

                  <p className="text-xs text-center text-muted-foreground mt-4">
                    Perfect for extensions, conversions
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Multi-quote Discount */}
            <Card className="max-w-2xl mx-auto bg-gradient-to-br from-orange-50 to-yellow-50 border-2 border-orange-200 mb-16">
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
                    <div className="font-semibold mb-1">
                      Money-Back Guarantee
                    </div>
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

        {/* Testimonials Section */}
        <section
          id="testimonials"
          className="py-20 bg-white scroll-mt-20"
        >
          <div className="container max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <Badge className="mb-4">Success Stories</Badge>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                What Our Customers Say
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Real reviews from UK homeowners who avoided costly mistakes
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Testimonial 1 */}
              <Card>
                <CardContent className="pt-6">
                  <div className="flex gap-1 mb-4">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6">
                    &quot;Build Fair saved me £3,200! The builder quoted £18,500
                    for a kitchen refurb but Build Fair showed the labour costs
                    were inflated. I renegotiated and got it done for
                    £15,300.&quot;
                  </p>
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarFallback className="bg-blue-100 text-blue-700">
                        SJ
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold">Sarah Johnson</div>
                      <div className="text-sm text-muted-foreground">
                        London
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Testimonial 2 */}
              <Card>
                <CardContent className="pt-6">
                  <div className="flex gap-1 mb-4">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6">
                    &quot;The report spotted that materials were marked up 45%
                    above retail prices. The builder couldn&apos;t justify it
                    when I confronted him. Ended up finding a more honest
                    tradesman.&quot;
                  </p>
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarFallback className="bg-green-100 text-green-700">
                        MT
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold">Michael Thompson</div>
                      <div className="text-sm text-muted-foreground">
                        Manchester
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Testimonial 3 */}
              <Card>
                <CardContent className="pt-6">
                  <div className="flex gap-1 mb-4">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6">
                    &quot;Best £159 I&apos;ve ever spent. The analysis showed
                    the quote was actually fair, which gave me confidence to
                    proceed. Peace of mind is priceless when spending £30k on a
                    renovation project.&quot;
                  </p>
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarFallback className="bg-purple-100 text-purple-700">
                        EP
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold">Emma Patterson</div>
                      <div className="text-sm text-muted-foreground">
                        Birmingham
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section
          id="faq"
          className="py-20 bg-gradient-to-b from-white to-blue-50 scroll-mt-20"
        >
          <div className="container max-w-3xl mx-auto px-4">
            <div className="text-center mb-16">
              <Badge className="mb-4">FAQ</Badge>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Frequently Asked Questions
              </h2>
            </div>

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
                  How long does the analysis take?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  We guarantee delivery within 24 hours of receiving your quote.
                  Most analyses are completed within 12 hours during business
                  days. You&apos;ll receive an email as soon as your report is
                  ready.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-2"
                className="bg-white px-6 rounded-lg border"
              >
                <AccordionTrigger className="text-left font-semibold">
                  What types of building work do you cover?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  We analyze quotes for all types of building work including
                  extensions, loft conversions, kitchen and bathroom
                  renovations, new builds, roofing, landscaping, and general
                  home improvements. If you&apos;re unsure, just submit it and
                  we&apos;ll let you know.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-3"
                className="bg-white px-6 rounded-lg border"
              >
                <AccordionTrigger className="text-left font-semibold">
                  What if my quote is fair? Is it still worth £29?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Absolutely! Knowing your quote is fair gives you the
                  confidence to proceed without doubt. You&apos;ll also get
                  insights on the timeline, materials quality, and what to watch
                  out for during the project. Plus, we offer a money-back
                  guarantee if you&apos;re not satisfied.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-4"
                className="bg-white px-6 rounded-lg border"
              >
                <AccordionTrigger className="text-left font-semibold">
                  Who reviews my quote?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Your quote is analyzed by qualified building professionals
                  including experienced builders, quantity surveyors, and
                  project managers. Our team has over 50 years of combined
                  experience in the UK construction industry.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-5"
                className="bg-white px-6 rounded-lg border"
              >
                <AccordionTrigger className="text-left font-semibold">
                  Is my information kept confidential?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Yes, absolutely. All quotes and personal information are kept
                  strictly confidential and are never shared with third parties.
                  We use bank-level encryption to protect your data, and all
                  reports are delivered securely via email.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-6"
                className="bg-white px-6 rounded-lg border"
              >
                <AccordionTrigger className="text-left font-semibold">
                  What if I&apos;m not satisfied with the analysis?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  We offer a 100% money-back guarantee. If you&apos;re not
                  satisfied with the analysis for any reason, just let us know
                  within 7 days and we&apos;ll issue a full refund, no questions
                  asked.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
          <div className="container max-w-4xl mx-auto px-4 text-center">
            <Badge className="mb-6 bg-white text-blue-600">
              Limited Time Offer
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Don&apos;t Sign That Quote Yet
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Join 500+ UK homeowners who avoided overpaying on their builds.
              Average saving on £15k quotes: £2,340. On larger projects, savings
              can reach £10,000+. Investment starts at just £69.
            </p>
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-blue-50 text-lg h-14 px-8 mb-4"
            >
              Get Your Quote Analyzed Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <p className="text-sm text-blue-200">
              ✓ 24-hour turnaround ✓ Money-back guarantee ✓ 100% confidential
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Brand Column */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-6 w-6 text-blue-400" />
                <span className="font-bold text-xl text-white">Build Fair</span>
              </div>
              <p className="text-sm">
                Expert builder quote analysis for UK homeowners. Make informed
                decisions and avoid overpaying.
              </p>
            </div>

            {/* Company Column */}
            <div>
              <h3 className="font-semibold text-white mb-4">Company</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="/about"
                    className="hover:text-white transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/how-it-works"
                    className="hover:text-white transition-colors"
                  >
                    How It Works
                  </Link>
                </li>
                <li>
                  <Link
                    href="/pricing"
                    className="hover:text-white transition-colors"
                  >
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog"
                    className="hover:text-white transition-colors"
                  >
                    Blog
                  </Link>
                </li>
              </ul>
            </div>

            {/* Support Column */}
            <div>
              <h3 className="font-semibold text-white mb-4">Support</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="/faq"
                    className="hover:text-white transition-colors"
                  >
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="hover:text-white transition-colors"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <a
                    href="mailto:support@buildfair.co.uk"
                    className="hover:text-white transition-colors"
                  >
                    support@buildfair.co.uk
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal Column */}
            <div>
              <h3 className="font-semibold text-white mb-4">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="/privacy-policy"
                    className="hover:text-white transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/tos"
                    className="hover:text-white transition-colors"
                  >
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link
                    href="/refund-policy"
                    className="hover:text-white transition-colors"
                  >
                    Refund Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <Separator className="bg-gray-700 mb-8" />

          <div className="flex flex-col md:flex-row justify-between items-center text-sm">
            <p>© 2025 Build Fair. All rights reserved.</p>
            <p className="text-gray-400">
              Helping UK homeowners make informed building decisions
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
