import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ShieldCheck, ArrowRight } from "lucide-react";
import ButtonSignin from "@/components/ButtonSignin";

export default function SiteHeader() {
  return (
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
            href="/how-it-works"
            className="px-4 py-2 text-sm font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-colors"
          >
            How It Works
          </Link>
          <Link
            href="/pricing"
            className="px-4 py-2 text-sm font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-colors"
          >
            Pricing
          </Link>
          <Link
            href="/faq"
            className="px-4 py-2 text-sm font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-colors"
          >
            FAQ
          </Link>
          <Link
            href="/contact"
            className="px-4 py-2 text-sm font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-colors"
          >
            Contact
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
            <Link href="/pricing">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}

