import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Talaria Guild - AI Automation for Service Businesses",
  description: "24/7 AI-powered automation for cleaning services and property management. Save 15-20 hours per month with intelligent workflow automation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <nav className="border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16 items-center">
              <div className="flex-shrink-0 font-bold text-xl">
                Talaria Guild
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <a href="/" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-100">Home</a>
                  <a href="/services" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-100">Services</a>
                  <a href="/about" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-100">About</a>
                  <a href="/contact" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-100">Contact</a>
                </div>
              </div>
            </div>
          </div>
        </nav>
        {children}
        <footer className="border-t mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <p className="text-center text-gray-600">
              © {new Date().getFullYear()} Talaria Guild. All rights reserved.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
