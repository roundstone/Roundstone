import Link from "next/link";
import Image from "next/image";
import { COMPANY, SERVICES } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-nearblack text-mystic pt-20 pb-10">
      <div className="max-w-[1280px] mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-biscay pb-12 mb-8">
        {/* Company Info */}
        <div className="col-span-1">
          <Link href="/" className="inline-block mb-6">
            <Image
              src="/image/logo.png"
              alt="Roundstone Logo"
              width={180}
              height={40}
              className="h-8 w-auto object-contain brightness-0 invert"
            />
          </Link>
          <p className="text-palesky text-sm leading-relaxed mb-6">
            The technology partner behind Nigeria&apos;s most trusted institutions.
          </p>
          <p className="text-sm text-palesky mb-6">
            Nexus Workspaces, No. 8 Bida Road, <br />
            Off Yakubu Gowon Road, Kaduna
          </p>
          <div className="flex items-center space-x-4 text-palesky">
            <a href="https://x.com/RoundstoneC" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="X (Twitter)">
              <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
            </a>
            <a href="https://www.instagram.com/roundstoneconsulting" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="Instagram">
              <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </a>
            <a href="https://www.linkedin.com/company/roundstone-consulting" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="LinkedIn">
              <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="col-span-1">
          <h4 className="text-white font-medium mb-6">Quick Links</h4>
          <ul className="space-y-4 text-sm text-palesky">
            <li><Link href="/about" className="hover:text-white transition-colors">Our Story</Link></li>
            <li><Link href="/about#team" className="hover:text-white transition-colors">Leadership Team</Link></li>
            <li><Link href="/careers" className="hover:text-white transition-colors">Careers</Link></li>
            <li><Link href="/work" className="hover:text-white transition-colors">Case Studies</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div className="col-span-1">
          <h4 className="text-white font-medium mb-6">Services</h4>
          <ul className="space-y-4 text-sm text-palesky">
            {SERVICES.map((service, idx) => (
              <li key={idx}>
                <Link href={service.href} className="hover:text-white transition-colors">
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="col-span-1">
          <h4 className="text-white font-medium mb-6">Contact</h4>
          <ul className="space-y-4 text-sm text-palesky">
            <li>
              <a href={`mailto:${COMPANY.email}`} className="hover:text-white transition-colors">
                {COMPANY.email}
              </a>
            </li>
            <li>
              <Link href="/contact" className="text-burntsienna hover:text-white transition-colors font-medium inline-block mt-2">
                Book a Consultation &rarr;
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-xs text-palesky">
        <p>&copy; {new Date().getFullYear()} Roundstone Consulting. All rights reserved.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
