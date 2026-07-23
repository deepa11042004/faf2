import Link from "next/link";
import Image from "next/image";
import { Globe, MessageCircle, Share2, Rss, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black text-white pt-20 pb-10 border-t border-zinc-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand & About */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="flex items-center group w-fit">
              <Image
                src="/logo.png"
                alt="Family Anchor Facilities"
                width={100}
                height={100}
                className="h-20 w-auto object-contain"
              />
            </Link>
            <p className="text-zinc-400 text-sm leading-relaxed pr-4">
              Your Trusted Partner in Comprehensive Security & Facilities. Delivering advanced solutions for over a decade.
            </p>
            <div className="flex items-center gap-4 mt-2">
              {[Globe, MessageCircle, Share2, Rss].map((Icon, idx) => (
                <a 
                  key={idx} 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center hover:bg-[#4338CA] hover:border-[#4338CA] transition-colors duration-300"
                >
                  <Icon className="w-5 h-5 text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-poppins font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="flex flex-col gap-3">
              {["Home", "About Us", "Our Services", "Industries", "Featured Projects", "Contact Us"].map((link, idx) => (
                <li key={idx}>
                  <Link href="#" className="text-zinc-400 hover:text-[#4338CA] transition-colors text-sm">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-poppins font-semibold text-lg mb-6">Our Services</h4>
            <ul className="flex flex-col gap-3">
              {["CCTV Installation", "Fire Alarm Systems", "Access Control", "Security Guards", "Facility Management", "AMC Support"].map((link, idx) => (
                <li key={idx}>
                  <Link href="#" className="text-zinc-400 hover:text-[#4338CA] transition-colors text-sm">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-poppins font-semibold text-lg mb-6">Newsletter</h4>
            <p className="text-zinc-400 text-sm mb-4">
              Subscribe to our newsletter for the latest security updates and offers.
            </p>
            <form className="flex flex-col gap-3">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#4338CA] transition-colors text-white w-full"
              />
              <button 
                type="button" 
                className="bg-[#0070c0] hover:bg-[#005ba3] text-white font-semibold rounded-xl py-3 transition-colors text-sm w-full shadow-md font-bebas uppercase tracking-wider text-base"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-zinc-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-zinc-500 text-sm">
            © {new Date().getFullYear()} Family Anchor Facilities Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-zinc-500">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
