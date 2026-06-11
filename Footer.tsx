import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-luxury-charcoal border-t border-gold/10 pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand */}
        <div className="space-y-6">
          <Link href="/" className="block">
            <img src="/logo.jpg" alt="Brajone Logo" className="h-20" />
          </Link>
          <p className="text-gray-400 text-sm leading-relaxed">
            Redefining spiritual luxury in the holy land of Vrindavan. Brajone brings international standards of real estate to the heart of Braj.
          </p>
          <div className="flex gap-4">
            <a href="https://instagram.com/@brajone.in" className="text-gold hover:text-white transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
            <a href="https://facebook.com/@brajone.com" className="text-gold hover:text-white transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            </a>
            <a href="https://linkedin.com/company/brajone.in" className="text-gold hover:text-white transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-gold font-serif text-xl mb-6">Quick Links</h4>
          <ul className="space-y-4 text-sm text-gray-400">
            <li><Link href="/properties" className="hover:text-gold">Properties</Link></li>
            <li><Link href="/projects" className="hover:text-gold">Upcoming Projects</Link></li>
            <li><Link href="/about" className="hover:text-gold">About Us</Link></li>
            <li><Link href="/gallery" className="hover:text-gold">Media Gallery</Link></li>
            <li><Link href="/blog" className="hover:text-gold">Latest News</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-gold font-serif text-xl mb-6">Regional Offices</h4>
          <ul className="space-y-4 text-sm text-gray-400">
            <li className="flex items-center gap-3">
              <MapPin size={18} className="text-gold" />
              <span>Vrindavan • Mathura • Barsana</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-gold" />
              <span>+91 7900780022 / 23</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-gold" />
              <span>brajone.com@gmail.com</span>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="text-gold font-serif text-xl mb-6">Newsletter</h4>
          <p className="text-sm text-gray-400 mb-4">Subscribe for exclusive project launches.</p>
          <form className="flex">
            <input
              type="email"
              placeholder="Email Address"
              className="bg-black/50 border border-gold/30 px-4 py-2 text-sm focus:outline-none focus:border-gold w-full"
            />
            <button className="bg-gold text-black px-4 py-2 font-bold uppercase text-xs">Join</button>
          </form>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 uppercase tracking-widest">
        <p>© 2026 Brajone. All Rights Reserved.</p>
        <div className="flex gap-8">
          <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-white">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
