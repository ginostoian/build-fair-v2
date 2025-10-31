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
  Lock,
  Users,
  FileText,
  TrendingUp,
  Sparkles,
  Zap,
  Banknote,
  Eye,
  Shield,
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
      <header className="sticky top-0 z-50 w-full border-b border-slate-200/60 bg-white/80 backdrop-blur-xl shadow-sm">
        <div className="container flex h-20 items-center justify-between max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 group"
          >
            <div className="p-2.5 bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl group-hover:from-slate-900 group-hover:to-slate-950 transition-all shadow-md">
              <ShieldCheck className="h-6 w-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-xl leading-tight tracking-tight text-slate-900">
                Build Fair
              </span>
              <span className="text-xs text-slate-600 font-medium">
                Expert Quote Analysis
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-2">
            <Link
              href="#how-it-works"
              className="px-4 py-2 text-sm font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-colors"
            >
              How It Works
            </Link>
            <Link
              href="#pricing"
              className="px-4 py-2 text-sm font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-colors"
            >
              Pricing
            </Link>
            <Link
              href="#testimonials"
              className="px-4 py-2 text-sm font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-colors"
            >
              Reviews
            </Link>
            <Link
              href="#faq"
              className="px-4 py-2 text-sm font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-colors"
            >
              FAQ
            </Link>
          </nav>

          {/* CTA Buttons */}
          <div className="flex items-center gap-3">
            <ButtonSignin text="Sign In" />
            <Button
              size="default"
              className="hidden sm:flex bg-slate-900 hover:bg-slate-800 text-white shadow-md"
              asChild
            >
              <Link href="#pricing">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-white pt-20 pb-32 sm:pt-28 sm:pb-40">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-[0.02]">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, rgb(15, 23, 42) 1px, transparent 0)`,
                backgroundSize: "48px 48px",
              }}
            ></div>
          </div>

          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Column - Hero Content */}
              <div className="flex flex-col gap-8">
                {/* Trust Badge */}
                <div className="flex items-center gap-3">
                  <Badge className="bg-amber-50 text-amber-900 border-amber-200 px-4 py-1.5 font-medium">
                    <Shield className="h-3.5 w-3.5 mr-1.5" />
                    Trusted by 500+ UK Homeowners
                  </Badge>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-[1.1]">
                  Don&apos;t Sign That Builder Quote
                  <span className="text-slate-600">
                    {" "}
                    Until You Know It&apos;s Fair
                  </span>
                </h1>

                <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-xl">
                  Get expert analysis from qualified UK building professionals.
                  Know if you&apos;re paying a fair price—or being
                  overcharged—before committing thousands to your project.
                </p>

                {/* Key Benefits Row */}
                <div className="flex flex-wrap gap-6 pt-2">
                  <div className="flex items-center gap-2 text-slate-700">
                    <CheckCircle2 className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                    <span className="font-medium">24-hour turnaround</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-700">
                    <CheckCircle2 className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                    <span className="font-medium">Money-back guarantee</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-700">
                    <CheckCircle2 className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                    <span className="font-medium">100% confidential</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button
                    size="lg"
                    className="text-lg h-14 px-8 bg-slate-900 hover:bg-slate-800 text-white shadow-lg hover:shadow-xl transition-all"
                    asChild
                  >
                    <Link href="#pricing">
                      Get Your Quote Analyzed
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="text-lg h-14 px-8 border-2 border-slate-300 hover:bg-slate-50"
                    asChild
                  >
                    <Link href="#how-it-works">See How It Works</Link>
                  </Button>
                </div>

                {/* Trust Indicators */}
                <div className="flex flex-wrap items-center gap-8 pt-6 border-t border-slate-200">
                  <div className="flex items-center gap-4">
                    <div className="flex -space-x-3">
                      {[1, 2, 3, 4].map((i) => (
                        <div
                          key={i}
                          className="w-10 h-10 rounded-full bg-gradient-to-br from-slate-400 to-slate-600 border-2 border-white shadow-sm"
                        />
                      ))}
                      <div className="w-10 h-10 rounded-full bg-slate-100 border-2 border-white shadow-sm flex items-center justify-center">
                        <span className="text-xs font-bold text-slate-700">
                          500+
                        </span>
                      </div>
                    </div>
                    <div className="text-sm">
                      <div className="font-semibold text-slate-900">
                        Quotes analyzed this year
                      </div>
                      <div className="text-slate-600">
                        Average saving:{" "}
                        <span className="font-semibold text-emerald-700">
                          £2,340
                        </span>{" "}
                        on £15k quotes
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Visual/Stats Card */}
              <div className="relative">
                <Card className="p-8 shadow-2xl border-slate-200 bg-white">
                  <CardContent className="p-0 space-y-6">
                    {/* Header */}
                    <div className="flex items-center justify-between pb-4 border-b border-slate-200">
                      <div className="flex items-center gap-3">
                        <div className="p-3 bg-emerald-50 rounded-xl">
                          <CheckCircle2 className="h-8 w-8 text-emerald-600" />
                        </div>
                        <div>
                          <div className="font-bold text-2xl text-slate-900">
                            £24,500
                          </div>
                          <div className="text-sm text-slate-600 font-medium">
                            Quote Amount
                          </div>
                        </div>
                      </div>
                      <Badge className="bg-emerald-50 text-emerald-700 border-emerald-200 font-medium">
                        FAIR PRICE
                      </Badge>
                    </div>

                    {/* Analysis Points */}
                    <div className="space-y-4">
                      <div className="flex justify-between items-center p-3 bg-slate-50 rounded-lg">
                        <div className="flex items-center gap-3">
                          <TrendingDown className="h-5 w-5 text-slate-400" />
                          <span className="text-sm font-medium text-slate-700">
                            Labour Costs
                          </span>
                        </div>
                        <Badge
                          variant="outline"
                          className="bg-emerald-50 text-emerald-700 border-emerald-200"
                        >
                          Competitive
                        </Badge>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-slate-50 rounded-lg">
                        <div className="flex items-center gap-3">
                          <FileText className="h-5 w-5 text-slate-400" />
                          <span className="text-sm font-medium text-slate-700">
                            Materials
                          </span>
                        </div>
                        <Badge
                          variant="outline"
                          className="bg-emerald-50 text-emerald-700 border-emerald-200"
                        >
                          Market Rate
                        </Badge>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-amber-50 rounded-lg border border-amber-200">
                        <div className="flex items-center gap-3">
                          <AlertTriangle className="h-5 w-5 text-amber-600" />
                          <span className="text-sm font-medium text-amber-900">
                            Timeline
                          </span>
                        </div>
                        <Badge
                          variant="outline"
                          className="bg-amber-100 text-amber-800 border-amber-300"
                        >
                          Review Needed
                        </Badge>
                      </div>
                    </div>

                    {/* Assessment */}
                    <div className="p-5 bg-slate-900 rounded-xl text-white">
                      <div className="flex items-start gap-3 mb-3">
                        <div className="p-2 bg-white/10 rounded-lg">
                          <Eye className="h-5 w-5" />
                        </div>
                        <div className="flex-1">
                          <div className="font-semibold text-lg mb-1">
                            Our Expert Assessment
                          </div>
                          <p className="text-sm text-slate-300 leading-relaxed">
                            This quote falls within fair market range for your
                            area. Materials are competitively priced. Consider
                            discussing timeline expectations with your builder
                            before signing.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Stats Footer */}
                    <div className="flex items-center justify-between pt-4 border-t border-slate-200 text-xs text-slate-600">
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        <span>Completed in 18 hours</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Lock className="h-4 w-4" />
                        <span>100% confidential</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Floating Trust Badge */}
                <div className="absolute -top-4 -right-4">
                  <Badge className="bg-gradient-to-r from-amber-500 to-amber-600 text-white px-4 py-2 text-sm shadow-xl border-0 font-semibold">
                    From £69
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Bar Section */}
        <section className="py-12 bg-slate-900 border-y border-slate-800">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
              <div className="flex items-center gap-3 text-white">
                <div className="p-2 bg-white/10 rounded-lg">
                  <Shield className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-2xl font-bold">500+</div>
                  <div className="text-sm text-slate-400">Quotes Analyzed</div>
                </div>
              </div>
              <div className="flex items-center gap-3 text-white">
                <div className="p-2 bg-white/10 rounded-lg">
                  <TrendingUp className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-2xl font-bold">£2.3M</div>
                  <div className="text-sm text-slate-400">
                    Savings Identified
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3 text-white">
                <div className="p-2 bg-white/10 rounded-lg">
                  <Users className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-2xl font-bold">4.9/5</div>
                  <div className="text-sm text-slate-400">Average Rating</div>
                </div>
              </div>
              <div className="flex items-center gap-3 text-white">
                <div className="p-2 bg-white/10 rounded-lg">
                  <Clock className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-2xl font-bold">18hrs</div>
                  <div className="text-sm text-slate-400">Avg. Turnaround</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section
          id="how-it-works"
          className="py-24 bg-white scroll-mt-20"
        >
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <Badge className="mb-4 bg-slate-100 text-slate-700 border-slate-200 px-4 py-1.5">
                Simple Process
              </Badge>
              <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-slate-900">
                How Build Fair Works
              </h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
                Three simple steps to protect yourself from overpricing and make
                informed decisions
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
              {/* Step 1 */}
              <Card className="relative pt-16 border-2 border-slate-200 hover:border-slate-300 transition-all hover:shadow-lg">
                <div className="absolute -top-6 left-1/2 -translate-x-1/2">
                  <div className="w-14 h-14 bg-slate-900 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-xl">
                    1
                  </div>
                </div>
                <CardContent className="text-center space-y-5 pb-8">
                  <div className="flex justify-center">
                    <div className="p-5 bg-slate-50 rounded-2xl">
                      <Upload className="h-10 w-10 text-slate-700" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">
                    Upload Your Quote
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    Simply upload your builder&apos;s quote as a PDF, image, or
                    photo. All information is encrypted and kept completely
                    confidential.
                  </p>
                  <div className="flex items-center justify-center gap-2 text-sm text-slate-500 pt-2">
                    <Lock className="h-4 w-4" />
                    <span>Bank-level security</span>
                  </div>
                </CardContent>
              </Card>

              {/* Step 2 */}
              <Card className="relative pt-16 border-2 border-slate-200 hover:border-slate-300 transition-all hover:shadow-lg">
                <div className="absolute -top-6 left-1/2 -translate-x-1/2">
                  <div className="w-14 h-14 bg-slate-900 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-xl">
                    2
                  </div>
                </div>
                <CardContent className="text-center space-y-5 pb-8">
                  <div className="flex justify-center">
                    <div className="p-5 bg-slate-50 rounded-2xl">
                      <FileSearch className="h-10 w-10 text-slate-700" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">
                    Expert Analysis
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    Our team of qualified UK building professionals analyzes
                    your quote against current market rates, materials costs,
                    and industry standards.
                  </p>
                  <div className="flex items-center justify-center gap-2 text-sm text-slate-500 pt-2">
                    <Award className="h-4 w-4" />
                    <span>50+ years combined experience</span>
                  </div>
                </CardContent>
              </Card>

              {/* Step 3 */}
              <Card className="relative pt-16 border-2 border-slate-200 hover:border-slate-300 transition-all hover:shadow-lg">
                <div className="absolute -top-6 left-1/2 -translate-x-1/2">
                  <div className="w-14 h-14 bg-slate-900 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-xl">
                    3
                  </div>
                </div>
                <CardContent className="text-center space-y-5 pb-8">
                  <div className="flex justify-center">
                    <div className="p-5 bg-slate-50 rounded-2xl">
                      <FileText className="h-10 w-10 text-slate-700" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">
                    Get Your Report
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    Receive a detailed, easy-to-understand report within 24
                    hours with our assessment, red flags, negotiation tips, and
                    next steps.
                  </p>
                  <div className="flex items-center justify-center gap-2 text-sm text-slate-500 pt-2">
                    <Zap className="h-4 w-4" />
                    <span>Usually within 18 hours</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section
          id="benefits"
          className="py-24 bg-gradient-to-b from-slate-50 to-white"
        >
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <Badge className="mb-4 bg-slate-100 text-slate-700 border-slate-200 px-4 py-1.5">
                Why Choose Us
              </Badge>
              <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-slate-900">
                Stop Overpaying on Your Build
              </h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
                UK homeowners overpay by an average of 18% on home improvements.
                Don&apos;t become another statistic.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Benefit 1 */}
              <Card className="border-2 border-slate-200 hover:border-red-300 transition-all hover:shadow-lg bg-white">
                <CardContent className="pt-6 space-y-4">
                  <div className="p-4 bg-red-50 rounded-xl w-fit">
                    <TrendingDown className="h-8 w-8 text-red-600" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">
                    Stop Overpaying
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    UK homeowners overpay by an average of 18% on home
                    improvements. Our analysis helps you avoid costly mistakes.
                  </p>
                </CardContent>
              </Card>

              {/* Benefit 2 */}
              <Card className="border-2 border-slate-200 hover:border-amber-300 transition-all hover:shadow-lg bg-white">
                <CardContent className="pt-6 space-y-4">
                  <div className="p-4 bg-amber-50 rounded-xl w-fit">
                    <AlertTriangle className="h-8 w-8 text-amber-600" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">
                    Spot Red Flags
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Our experts identify warning signs like inflated labour
                    costs, suspicious omissions, and unrealistic timelines
                    before you sign.
                  </p>
                </CardContent>
              </Card>

              {/* Benefit 3 */}
              <Card className="border-2 border-slate-200 hover:border-emerald-300 transition-all hover:shadow-lg bg-white">
                <CardContent className="pt-6 space-y-4">
                  <div className="p-4 bg-emerald-50 rounded-xl w-fit">
                    <Award className="h-8 w-8 text-emerald-600" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">
                    Expert Analysis
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Get insights from qualified builders and quantity surveyors
                    with decades of combined UK construction experience.
                  </p>
                </CardContent>
              </Card>

              {/* Benefit 4 */}
              <Card className="border-2 border-slate-200 hover:border-blue-300 transition-all hover:shadow-lg bg-white">
                <CardContent className="pt-6 space-y-4">
                  <div className="p-4 bg-blue-50 rounded-xl w-fit">
                    <Clock className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">
                    Fast Turnaround
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Get your detailed analysis report within 24 hours. Make
                    informed decisions quickly and confidently.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Money-Back Guarantee */}
            <div className="mt-16 max-w-4xl mx-auto">
              <Card className="border-2 border-emerald-200 bg-gradient-to-br from-emerald-50 to-white">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-emerald-100 rounded-xl flex-shrink-0">
                      <ShieldCheck className="h-8 w-8 text-emerald-700" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-slate-900 mb-2">
                        Our Money-Back Guarantee
                      </h3>
                      <p className="text-slate-700 leading-relaxed">
                        We&apos;re confident in our analysis. If you&apos;re not
                        completely satisfied with your report for any reason,
                        we&apos;ll issue a full refund—no questions asked. Your
                        peace of mind is our priority.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section
          id="pricing"
          className="py-24 bg-white scroll-mt-20"
        >
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <Badge className="mb-4 bg-slate-100 text-slate-700 border-slate-200 px-4 py-1.5">
                Transparent Pricing
              </Badge>
              <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-slate-900">
                Simple, Honest Pricing
              </h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
                Fair pricing that scales with your project size. Larger quotes
                require more detailed analysis—and deliver bigger potential
                savings.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {/* Tier 1 */}
              <Card className="border-2 border-slate-200 hover:border-slate-300 transition-all hover:shadow-xl bg-white">
                <CardContent className="pt-8">
                  <div className="text-center mb-8">
                    <Badge
                      variant="outline"
                      className="mb-4 bg-slate-50 border-slate-200"
                    >
                      Small Projects
                    </Badge>
                    <div className="text-5xl font-bold mb-2 text-slate-900">
                      £69
                    </div>
                    <p className="text-sm text-slate-600 font-medium">
                      For quotes up to £15,000
                    </p>
                  </div>

                  <Separator className="mb-6" />

                  <div className="space-y-4 mb-8">
                    <div className="flex items-start gap-3 text-sm">
                      <CheckCircle2 className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700">
                        Full cost breakdown analysis
                      </span>
                    </div>
                    <div className="flex items-start gap-3 text-sm">
                      <CheckCircle2 className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700">
                        Local market rate comparison
                      </span>
                    </div>
                    <div className="flex items-start gap-3 text-sm">
                      <CheckCircle2 className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700">Red flag detection</span>
                    </div>
                    <div className="flex items-start gap-3 text-sm">
                      <CheckCircle2 className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700">
                        24-hour turnaround guarantee
                      </span>
                    </div>
                  </div>

                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full border-2 border-slate-300 hover:bg-slate-50"
                    asChild
                  >
                    <Link href="#pricing">Choose Plan</Link>
                  </Button>

                  <p className="text-xs text-center text-slate-500 mt-4">
                    Perfect for bathrooms, kitchens, small renovations
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
                  <div className="text-center mb-8">
                    <Badge
                      variant="outline"
                      className="mb-4 border-slate-900 bg-slate-50"
                    >
                      Medium Projects
                    </Badge>
                    <div className="text-6xl font-bold mb-2 text-slate-900">
                      £159
                    </div>
                    <p className="text-sm text-slate-600 font-medium">
                      For quotes £15,000 - £50,000
                    </p>
                  </div>

                  <Separator className="mb-6" />

                  <div className="space-y-4 mb-8">
                    <div className="flex items-start gap-3 text-sm">
                      <CheckCircle2 className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700">
                        Everything in Small, plus:
                      </span>
                    </div>
                    <div className="flex items-start gap-3 text-sm">
                      <CheckCircle2 className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700">
                        Detailed materials analysis
                      </span>
                    </div>
                    <div className="flex items-start gap-3 text-sm">
                      <CheckCircle2 className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700">
                        Negotiation strategy guide
                      </span>
                    </div>
                    <div className="flex items-start gap-3 text-sm">
                      <CheckCircle2 className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700">
                        Timeline assessment
                      </span>
                    </div>
                    <div className="flex items-start gap-3 text-sm">
                      <CheckCircle2 className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700">24-48hr delivery</span>
                    </div>
                  </div>

                  <Button
                    size="lg"
                    className="w-full bg-slate-900 hover:bg-slate-800 text-white shadow-lg"
                    asChild
                  >
                    <Link href="#pricing">
                      Choose Plan
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>

                  <p className="text-xs text-center text-slate-500 mt-4">
                    Perfect for full home renovations, extensions
                  </p>
                </CardContent>
              </Card>

              {/* Tier 3 */}
              <Card className="border-2 border-slate-200 hover:border-slate-300 transition-all hover:shadow-xl bg-white">
                <CardContent className="pt-8">
                  <div className="text-center mb-8">
                    <Badge
                      variant="outline"
                      className="mb-4 bg-slate-50 border-slate-200"
                    >
                      Large Projects
                    </Badge>
                    <div className="text-5xl font-bold mb-2 text-slate-900">
                      £299
                    </div>
                    <p className="text-sm text-slate-600 font-medium">
                      For quotes £50,000 - £150,000
                    </p>
                  </div>

                  <Separator className="mb-6" />

                  <div className="space-y-4 mb-8">
                    <div className="flex items-start gap-3 text-sm">
                      <CheckCircle2 className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700">
                        Everything in Medium, plus:
                      </span>
                    </div>
                    <div className="flex items-start gap-3 text-sm">
                      <CheckCircle2 className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700">
                        Comprehensive project analysis
                      </span>
                    </div>
                    <div className="flex items-start gap-3 text-sm">
                      <CheckCircle2 className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700">
                        Multi-builder comparison
                      </span>
                    </div>
                    <div className="flex items-start gap-3 text-sm">
                      <CheckCircle2 className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700">Risk assessment</span>
                    </div>
                    <div className="flex items-start gap-3 text-sm">
                      <CheckCircle2 className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700">
                        Up to 72hr delivery
                      </span>
                    </div>
                  </div>

                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full border-2 border-slate-300 hover:bg-slate-50"
                    asChild
                  >
                    <Link href="#pricing">Choose Plan</Link>
                  </Button>

                  <p className="text-xs text-center text-slate-500 mt-4">
                    Perfect for large extensions, conversions, new builds
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Multi-quote Discount */}
            <Card className="max-w-3xl mx-auto bg-gradient-to-br from-amber-50 to-amber-100/50 border-2 border-amber-300 mb-16">
              <CardContent className="pt-8 pb-8">
                <div className="flex items-start gap-6">
                  <div className="p-4 bg-amber-200 rounded-2xl flex-shrink-0">
                    <Badge className="bg-amber-700 text-white text-lg px-4 py-2 border-0 font-bold">
                      30% OFF
                    </Badge>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">
                      Comparing Multiple Builders?
                    </h3>
                    <p className="text-slate-700 leading-relaxed mb-4">
                      Smart move! Get{" "}
                      <span className="font-bold text-amber-900">30% off</span>{" "}
                      each additional quote analysis when you submit 2 or more
                      quotes together. Perfect for ensuring you choose the best
                      builder—not just the cheapest.
                    </p>
                    <div className="flex items-center gap-2 text-sm text-slate-700 bg-white/60 rounded-lg p-3 w-fit">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 flex-shrink-0" />
                      <span>
                        <span className="font-semibold">Example:</span> 2nd
                        quote at £159 = only £111.30
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* What's Included */}
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-center mb-10 text-slate-900">
                Every Analysis Includes
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-slate-50 transition-colors">
                  <CheckCircle2 className="h-6 w-6 text-emerald-600 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold mb-1 text-slate-900">
                      Expert Analysis
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      Reviewed by qualified UK builders and quantity surveyors
                      with proven track records
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-slate-50 transition-colors">
                  <CheckCircle2 className="h-6 w-6 text-emerald-600 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold mb-1 text-slate-900">
                      Market Rate Comparison
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      Compare against real UK market rates for your specific
                      area and project type
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-slate-50 transition-colors">
                  <CheckCircle2 className="h-6 w-6 text-emerald-600 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold mb-1 text-slate-900">
                      Red Flag Detection
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      Identify overpricing, suspicious omissions, unrealistic
                      timelines, and hidden risks
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-slate-50 transition-colors">
                  <CheckCircle2 className="h-6 w-6 text-emerald-600 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold mb-1 text-slate-900">
                      Money-Back Guarantee
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      100% refund if you&apos;re not satisfied with the
                      analysis—no questions asked
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-slate-50 transition-colors">
                  <CheckCircle2 className="h-6 w-6 text-emerald-600 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold mb-1 text-slate-900">
                      Negotiation Tips
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      Actionable advice on how to negotiate better terms and
                      save money
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-slate-50 transition-colors">
                  <CheckCircle2 className="h-6 w-6 text-emerald-600 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold mb-1 text-slate-900">
                      Secure & Confidential
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      Bank-level encryption, never shared with third parties.
                      Your privacy is guaranteed
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
          className="py-24 bg-gradient-to-b from-white to-slate-50 scroll-mt-20"
        >
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <Badge className="mb-4 bg-slate-100 text-slate-700 border-slate-200 px-4 py-1.5">
                Success Stories
              </Badge>
              <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-slate-900">
                Trusted by UK Homeowners
              </h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
                Real reviews from real customers who avoided costly mistakes and
                saved thousands
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Testimonial 1 */}
              <Card className="border-2 border-slate-200 bg-white hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex gap-1 mb-6">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>
                  <p className="text-slate-700 mb-6 leading-relaxed">
                    &quot;Build Fair saved me £3,200! The builder quoted £18,500
                    for a kitchen refurb but Build Fair showed the labour costs
                    were inflated. I renegotiated using their negotiation tips
                    and got it done for £15,300. Worth every penny.&quot;
                  </p>
                  <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                    <Avatar className="h-12 w-12">
                      <AvatarFallback className="bg-slate-100 text-slate-700 font-semibold">
                        SJ
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold text-slate-900">
                        Sarah Johnson
                      </div>
                      <div className="text-sm text-slate-600">
                        London • Saved £3,200
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Testimonial 2 */}
              <Card className="border-2 border-slate-200 bg-white hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex gap-1 mb-6">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>
                  <p className="text-slate-700 mb-6 leading-relaxed">
                    &quot;The report spotted that materials were marked up 45%
                    above retail prices. The builder couldn&apos;t justify it
                    when I confronted him with the data. Ended up finding a more
                    honest tradesman who quoted fairly. Build Fair helped me
                    avoid a huge mistake.&quot;
                  </p>
                  <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                    <Avatar className="h-12 w-12">
                      <AvatarFallback className="bg-slate-100 text-slate-700 font-semibold">
                        MT
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold text-slate-900">
                        Michael Thompson
                      </div>
                      <div className="text-sm text-slate-600">
                        Manchester • Avoided overpricing
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Testimonial 3 */}
              <Card className="border-2 border-slate-200 bg-white hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex gap-1 mb-6">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>
                  <p className="text-slate-700 mb-6 leading-relaxed">
                    &quot;Best £159 I&apos;ve ever spent. The analysis showed
                    the quote was actually fair, which gave me complete
                    confidence to proceed. Peace of mind is priceless when
                    spending £30k on a renovation project. The report was
                    detailed and easy to understand.&quot;
                  </p>
                  <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                    <Avatar className="h-12 w-12">
                      <AvatarFallback className="bg-slate-100 text-slate-700 font-semibold">
                        EP
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold text-slate-900">
                        Emma Patterson
                      </div>
                      <div className="text-sm text-slate-600">
                        Birmingham • £30k renovation
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Trust Badge */}
            <div className="mt-16 text-center">
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-white rounded-full border-2 border-slate-200 shadow-sm">
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
                <span className="text-slate-900 font-semibold ml-2">4.9/5</span>
                <span className="text-slate-600">
                  from 200+ verified reviews
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section
          id="faq"
          className="py-24 bg-white scroll-mt-20"
        >
          <div className="container max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <Badge className="mb-4 bg-slate-100 text-slate-700 border-slate-200 px-4 py-1.5">
                FAQ
              </Badge>
              <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-slate-900">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-slate-600">
                Everything you need to know about our quote analysis service
              </p>
            </div>

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
                  How long does the analysis take?
                </AccordionTrigger>
                <AccordionContent className="text-slate-700 leading-relaxed pt-2">
                  We guarantee delivery within 24 hours of receiving your quote.
                  Most analyses are completed within 12-18 hours during business
                  days. You&apos;ll receive an email notification as soon as
                  your detailed report is ready for download. We never rush
                  quality—but we understand your time is valuable.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-2"
                className="bg-white px-6 py-2 rounded-xl border-2 border-slate-200"
              >
                <AccordionTrigger className="text-left font-semibold text-slate-900 hover:no-underline">
                  What types of building work do you cover?
                </AccordionTrigger>
                <AccordionContent className="text-slate-700 leading-relaxed pt-2">
                  We analyze quotes for all types of building work including
                  extensions, loft conversions, kitchen and bathroom
                  renovations, new builds, roofing, landscaping, and general
                  home improvements. If you&apos;re unsure whether we cover your
                  project type, just submit it—we&apos;ll let you know if we can
                  help.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-3"
                className="bg-white px-6 py-2 rounded-xl border-2 border-slate-200"
              >
                <AccordionTrigger className="text-left font-semibold text-slate-900 hover:no-underline">
                  What if my quote is fair? Is it still worth it?
                </AccordionTrigger>
                <AccordionContent className="text-slate-700 leading-relaxed pt-2">
                  Absolutely! Knowing your quote is fair gives you the
                  confidence to proceed without doubt. You&apos;ll also receive
                  valuable insights on timeline expectations, materials quality,
                  potential hidden costs, and what to watch for during the
                  project. Plus, with our money-back guarantee, you have nothing
                  to lose.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-4"
                className="bg-white px-6 py-2 rounded-xl border-2 border-slate-200"
              >
                <AccordionTrigger className="text-left font-semibold text-slate-900 hover:no-underline">
                  Who reviews my quote?
                </AccordionTrigger>
                <AccordionContent className="text-slate-700 leading-relaxed pt-2">
                  Your quote is analyzed by qualified UK building professionals
                  including experienced builders, quantity surveyors, and
                  project managers. Our team has over 50 years of combined
                  experience in the UK construction industry and stays current
                  with local market rates and industry standards.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-5"
                className="bg-white px-6 py-2 rounded-xl border-2 border-slate-200"
              >
                <AccordionTrigger className="text-left font-semibold text-slate-900 hover:no-underline">
                  Is my information kept confidential?
                </AccordionTrigger>
                <AccordionContent className="text-slate-700 leading-relaxed pt-2">
                  Yes, absolutely. All quotes and personal information are kept
                  strictly confidential and are never shared with third parties.
                  We use bank-level encryption to protect your data, and all
                  reports are delivered securely via email. Your builder will
                  never know you had the quote analyzed.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-6"
                className="bg-white px-6 py-2 rounded-xl border-2 border-slate-200"
              >
                <AccordionTrigger className="text-left font-semibold text-slate-900 hover:no-underline">
                  What if I&apos;m not satisfied with the analysis?
                </AccordionTrigger>
                <AccordionContent className="text-slate-700 leading-relaxed pt-2">
                  We offer a 100% money-back guarantee. If you&apos;re not
                  satisfied with the analysis for any reason, just let us know
                  within 7 days and we&apos;ll issue a full refund—no questions
                  asked. Your satisfaction and peace of mind are our top
                  priorities.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                backgroundSize: "48px 48px",
              }}
            ></div>
          </div>

          <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
            <Badge className="mb-6 bg-amber-500/20 text-amber-400 border-amber-500/30 px-4 py-1.5">
              Limited Time Offer
            </Badge>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Don&apos;t Sign That Quote Yet
            </h2>
            <p className="text-xl sm:text-2xl mb-10 text-slate-300 leading-relaxed max-w-2xl mx-auto">
              Join 500+ UK homeowners who avoided overpaying on their builds.
              Average saving on £15k quotes:{" "}
              <span className="font-bold text-white">£2,340</span>. On larger
              projects, savings can reach £10,000+. Investment starts at just
              £69.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button
                size="lg"
                className="bg-white text-slate-900 hover:bg-slate-100 text-lg h-14 px-8 shadow-xl"
                asChild
              >
                <Link href="#pricing">
                  Get Your Quote Analyzed Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white/30 text-black hover:bg-white/10 text-lg h-14 px-8"
                asChild
              >
                <Link href="/how-it-works">Learn More</Link>
              </Button>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-emerald-400" />
                <span>24-hour turnaround</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-emerald-400" />
                <span>Money-back guarantee</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-emerald-400" />
                <span>100% confidential</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-16 border-t border-slate-800">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-овых">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            {/* Brand Column */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-6 w-6 text-white" />
                <span className="font-bold text-xl text-white">Build Fair</span>
              </div>
              <p className="text-sm text-slate-500 leading-relaxed">
                Expert builder quote analysis for UK homeowners. Make informed
                decisions and avoid overpaying on your building projects.
              </p>
              <div className="flex items-center gap-2 text-xs text-slate-600">
                <Lock className="h-4 w-4" />
                <span>Bank-level security</span>
              </div>
            </div>

            {/* Company Column */}
            <div>
              <h3 className="font-semibold text-white mb-4">Company</h3>
              <ul className="space-y-3 text-sm">
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
              <ul className="space-y-3 text-sm">
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
              <ul className="space-y-3 text-sm">
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

          <Separator className="bg-slate-800 mb-8" />

          <div className="flex flex-col md:flex-row justify-between items-center text-sm">
            <p className="text-slate-600">
              © 2025 Build Fair. All rights reserved.
            </p>
            <p className="text-slate-600">
              Helping UK homeowners make informed building decisions
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
