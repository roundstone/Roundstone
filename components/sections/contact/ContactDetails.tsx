import React from "react";
import { Heading, Text } from "@/components/ui/Typography";
import { COMPANY } from "@/lib/constants";
import { MapPin, Mail, Phone, Clock } from "lucide-react";

export default function ContactDetails() {
  return (
    <div className="h-full flex flex-col">
      <div className="mb-12">
        <Heading level={2} className="mb-6">
          Let&apos;s talk about what you&apos;re building.
        </Heading>
        <Text variant="lead" className="text-palesky">
          Whether you need a custom platform built from scratch or robust infrastructure to keep your systems running, our team is ready to assist.
        </Text>
      </div>

      <div className="bg-mystic/20 rounded-xl p-8 border border-mystic space-y-8 flex-grow">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm">
            <MapPin className="w-5 h-5 text-biscay" />
          </div>
          <div>
            <h4 className="font-medium text-biscay mb-1">Our Office</h4>
            <p className="text-palesky text-sm leading-relaxed max-w-[240px]">
              {COMPANY.address}
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm">
            <Mail className="w-5 h-5 text-biscay" />
          </div>
          <div>
            <h4 className="font-medium text-biscay mb-1">Email Us</h4>
            <a href={`mailto:${COMPANY.email}`} className="text-palesky text-sm hover:text-burntsienna transition-colors">
              {COMPANY.email}
            </a>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm">
            <Phone className="w-5 h-5 text-biscay" />
          </div>
          <div>
            <h4 className="font-medium text-biscay mb-1">Call Us</h4>
            <a href={`tel:${COMPANY.phoneRaw}`} className="text-palesky text-sm hover:text-burntsienna transition-colors">
              {COMPANY.phone}
            </a>
          </div>
        </div>

        <div className="pt-8 border-t border-mystic mt-8">
          <div className="flex items-center gap-3 text-palesky text-sm">
            <Clock className="w-5 h-5 text-burntsienna" />
            <p>We typically respond within <strong>1 business day</strong>.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
