"use client";

import React, { useState } from "react";
import { Heading } from "@/components/ui/Typography";
import { submitWeb3Form } from "@/lib/submitWeb3Form";
import { CheckCircle2, AlertCircle } from "lucide-react";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    const result = await submitWeb3Form(data, "New Contact Request - Roundstone");
    
    if (result.success) {
      setSubmitStatus("success");
      e.currentTarget.reset();
    } else {
      setSubmitStatus("error");
    }
    
    setIsSubmitting(false);
  }

  if (submitStatus === "success") {
    return (
      <div className="bg-mystic/30 rounded-xl p-8 md:p-12 text-center border border-mystic h-full flex flex-col items-center justify-center">
        <CheckCircle2 className="w-16 h-16 text-biscay mb-6 mx-auto stroke-[1.5]" />
        <Heading level={3} className="mb-4">Message Received</Heading>
        <p className="text-palesky max-w-sm mx-auto">
          Thank you for reaching out. A member of our team will be in touch within 1 business day.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-lg border border-mystic p-6 md:p-10">
      <Heading level={4} className="mb-6">Send us a message</Heading>
      
      {submitStatus === "error" && (
        <div className="mb-6 p-4 bg-red-50 text-red-700 rounded-lg flex items-start gap-3 text-sm">
          <AlertCircle className="w-5 h-5 shrink-0" />
          <p>There was an issue sending your message. Please try again or email us directly.</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Honeypot field for spam prevention */}
        <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium text-biscay">Name *</label>
            <input required type="text" id="name" name="name" className="w-full px-4 py-3 rounded-lg border border-mystic focus:outline-none focus:ring-2 focus:ring-biscay/20 focus:border-biscay transition-all bg-mystic/20" placeholder="Jane Doe" />
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium text-biscay">Email *</label>
            <input required type="email" id="email" name="email" className="w-full px-4 py-3 rounded-lg border border-mystic focus:outline-none focus:ring-2 focus:ring-biscay/20 focus:border-biscay transition-all bg-mystic/20" placeholder="jane@company.com" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="company" className="text-sm font-medium text-biscay">Company</label>
            <input type="text" id="company" name="company" className="w-full px-4 py-3 rounded-lg border border-mystic focus:outline-none focus:ring-2 focus:ring-biscay/20 focus:border-biscay transition-all bg-mystic/20" placeholder="Company Name" />
          </div>
          <div className="space-y-2">
            <label htmlFor="phone" className="text-sm font-medium text-biscay">Phone</label>
            <input type="tel" id="phone" name="phone" className="w-full px-4 py-3 rounded-lg border border-mystic focus:outline-none focus:ring-2 focus:ring-biscay/20 focus:border-biscay transition-all bg-mystic/20" placeholder="+234 ..." />
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="service" className="text-sm font-medium text-biscay">Service of Interest *</label>
          <select required id="service" name="service" className="w-full px-4 py-3 rounded-lg border border-mystic focus:outline-none focus:ring-2 focus:ring-biscay/20 focus:border-biscay transition-all bg-mystic/20 text-palesky">
            <option value="">Select a service</option>
            <option value="Software Development">Software Development</option>
            <option value="ERP Consulting">ERP Implementation & Consulting</option>
            <option value="IT Infrastructure">IT Infrastructure & Security</option>
            <option value="AI & Data">AI & Data Solutions</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="space-y-2">
          <label htmlFor="message" className="text-sm font-medium text-biscay">Message *</label>
          <textarea required id="message" name="message" rows={4} className="w-full px-4 py-3 rounded-lg border border-mystic focus:outline-none focus:ring-2 focus:ring-biscay/20 focus:border-biscay transition-all bg-mystic/20 resize-none" placeholder="Tell us about your project..."></textarea>
        </div>

        <button 
          type="submit" 
          disabled={isSubmitting}
          className="w-full py-4 bg-burntsienna text-white font-medium rounded-lg hover:bg-[#e6843c] transition-colors shadow-lg shadow-burntsienna/20 disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center gap-2"
        >
          {isSubmitting ? (
            <>
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              Sending...
            </>
          ) : (
            "Send Message"
          )}
        </button>
      </form>
    </div>
  );
}
