"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  ArrowLeft,
  Mail,
  MessageSquare,
  Clock,
  CheckCircle2,
} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission - we'll implement the actual API call later
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });

      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

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
          <Badge className="mb-4">Get In Touch</Badge>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-muted-foreground">
            Have a question? We're here to help. Send us a message and we'll
            respond as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="pb-16">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {/* Email */}
            <Card>
              <CardContent className="pt-8 text-center">
                <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Mail className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold mb-2">Email Us</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Send us an email anytime
                </p>
                <a
                  href="mailto:support@buildfair.co.uk"
                  className="text-sm text-blue-600 hover:underline"
                >
                  support@buildfair.co.uk
                </a>
              </CardContent>
            </Card>

            {/* Response Time */}
            <Card>
              <CardContent className="pt-8 text-center">
                <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Clock className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-lg font-bold mb-2">Response Time</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  We typically respond within
                </p>
                <p className="text-sm font-semibold">24 hours</p>
              </CardContent>
            </Card>

            {/* Support */}
            <Card>
              <CardContent className="pt-8 text-center">
                <div className="mx-auto w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                  <MessageSquare className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-lg font-bold mb-2">Support Hours</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Monday - Friday
                </p>
                <p className="text-sm font-semibold">9:00 AM - 6:00 PM GMT</p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="max-w-2xl mx-auto">
            <Card className="shadow-xl">
              <CardContent className="pt-8">
                <h2 className="text-2xl font-bold mb-6 text-center">
                  Send Us a Message
                </h2>

                {isSubmitted && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-green-900">
                        Message sent successfully!
                      </div>
                      <p className="text-sm text-green-700">
                        We've received your message and will get back to you
                        soon.
                      </p>
                    </div>
                  </div>
                )}

                <form
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  {/* Name */}
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Name <span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="h-12"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Email <span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="h-12"
                    />
                  </div>

                  {/* Subject */}
                  <div className="space-y-2">
                    <label
                      htmlFor="subject"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Subject <span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      placeholder="What's this about?"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="h-12"
                    />
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Message <span className="text-red-500">*</span>
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us more about your question or concern..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full h-12 text-base"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="mr-2">Sending...</span>
                        <svg
                          className="animate-spin h-4 w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </Button>

                  <p className="text-xs text-center text-muted-foreground">
                    We'll get back to you within 24 hours during business days.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Reference */}
      <section className="py-16 bg-white">
        <div className="container max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">
            Looking for Quick Answers?
          </h2>
          <p className="text-muted-foreground mb-6">
            Check out our FAQ page for instant answers to common questions.
          </p>
          <Link href="/faq">
            <Button
              variant="outline"
              size="lg"
            >
              Visit FAQ
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
