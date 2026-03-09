import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Talaria Guild — AI Automation for Service Businesses",
  description: "Enterprise-grade automation at small business prices. 24/7 AI handles your intake, we handle the tech. Built for property management and cleaning services.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-white text-slate-900">
        {/* Navigation */}
        <nav className="bg-slate-900 text-white sticky top-0 z-50 shadow-lg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16 items-center">
              <a href="/" className="flex-shrink-0 font-bold text-xl tracking-tight">
                <span className="text-amber-400">Talaria</span>{" "}
                <span className="text-white">Guild</span>
              </a>
              <div className="hidden md:flex items-center space-x-1">
                <a href="/" className="px-3 py-2 rounded-md text-sm font-medium text-slate-300 hover:text-amber-400 transition-colors">Home</a>
                <a href="/services" className="px-3 py-2 rounded-md text-sm font-medium text-slate-300 hover:text-amber-400 transition-colors">Services</a>
                <a href="/property-management" className="px-3 py-2 rounded-md text-sm font-medium text-slate-300 hover:text-amber-400 transition-colors">Property Mgmt</a>
                <a href="/cleaning" className="px-3 py-2 rounded-md text-sm font-medium text-slate-300 hover:text-amber-400 transition-colors">Cleaning</a>
                <a href="/pricing" className="px-3 py-2 rounded-md text-sm font-medium text-slate-300 hover:text-amber-400 transition-colors">Pricing</a>
                <a href="/about" className="px-3 py-2 rounded-md text-sm font-medium text-slate-300 hover:text-amber-400 transition-colors">About</a>
                <a
                  href="/contact"
                  className="ml-4 px-4 py-2 rounded-md text-sm font-semibold bg-amber-500 text-slate-900 hover:bg-amber-400 transition-colors"
                >
                  Book a Demo
                </a>
              </div>
              {/* Mobile fallback */}
              <div className="md:hidden">
                <a href="/contact" className="px-4 py-2 rounded-md text-sm font-semibold bg-amber-500 text-slate-900">
                  Demo
                </a>
              </div>
            </div>
          </div>
          {/* Mobile nav links */}
          <div className="md:hidden border-t border-slate-700 px-4 py-3 flex flex-wrap gap-2 text-sm">
            <a href="/" className="px-2 py-1 text-slate-300 hover:text-amber-400">Home</a>
            <a href="/services" className="px-2 py-1 text-slate-300 hover:text-amber-400">Services</a>
            <a href="/property-management" className="px-2 py-1 text-slate-300 hover:text-amber-400">Property Mgmt</a>
            <a href="/cleaning" className="px-2 py-1 text-slate-300 hover:text-amber-400">Cleaning</a>
            <a href="/pricing" className="px-2 py-1 text-slate-300 hover:text-amber-400">Pricing</a>
            <a href="/about" className="px-2 py-1 text-slate-300 hover:text-amber-400">About</a>
          </div>
        </nav>

        {children}

        {/* Footer */}
        <footer className="bg-slate-900 text-slate-300 mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="col-span-1 md:col-span-2">
                <div className="font-bold text-xl mb-3">
                  <span className="text-amber-400">Talaria</span>{" "}
                  <span className="text-white">Guild</span>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
                  Enterprise-grade automation at small business prices. We build AI-powered workflows that run your intake, communications, and scheduling — so you can focus on the work.
                </p>
                <p className="mt-4 text-sm">
                  <a href="mailto:info@talariaguild.com" className="text-amber-400 hover:text-amber-300">
                    info@talariaguild.com
                  </a>
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-white mb-3 text-sm uppercase tracking-wider">Services</h3>
                <ul className="space-y-2 text-sm">
                  <li><a href="/services" className="hover:text-amber-400 transition-colors">All Services</a></li>
                  <li><a href="/property-management" className="hover:text-amber-400 transition-colors">Property Management</a></li>
                  <li><a href="/cleaning" className="hover:text-amber-400 transition-colors">Cleaning Services</a></li>
                  <li><a href="/pricing" className="hover:text-amber-400 transition-colors">Pricing</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-white mb-3 text-sm uppercase tracking-wider">Company</h3>
                <ul className="space-y-2 text-sm">
                  <li><a href="/about" className="hover:text-amber-400 transition-colors">About Us</a></li>
                  <li><a href="/contact" className="hover:text-amber-400 transition-colors">Contact</a></li>
                  <li><a href="/contact" className="hover:text-amber-400 transition-colors">Book a Demo</a></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-slate-700 mt-10 pt-6 text-center text-sm text-slate-500">
              © {new Date().getFullYear()} Talaria Guild. All rights reserved.
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
