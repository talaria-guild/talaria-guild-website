export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              AI Automation for Service Businesses
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
              Save 15-20 hours per month with 24/7 AI-powered automation.
              Purpose-built for cleaning services and property management.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="/contact"
                className="rounded-md bg-indigo-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Book a Demo
              </a>
              <a href="/services" className="text-base font-semibold leading-7 text-gray-900">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Why Talaria Guild?</h2>
            <p className="mt-4 text-lg text-gray-600">
              White-glove AI automation that actually works
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 border rounded-lg">
              <h3 className="text-xl font-semibold mb-3">24/7 AI Coverage</h3>
              <p className="text-gray-600">
                Never miss a booking. Our AI handles customer requests, schedules jobs, and manages follow-ups around the clock.
              </p>
            </div>
            <div className="p-6 border rounded-lg">
              <h3 className="text-xl font-semibold mb-3">5x Cheaper</h3>
              <p className="text-gray-600">
                $350-500/month vs $1,000+ for enterprise SaaS. No per-seat fees, no hidden costs.
              </p>
            </div>
            <div className="p-6 border rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Custom-Built</h3>
              <p className="text-gray-600">
                Not a one-size-fits-all product. We optimize the system specifically for your workflow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof / Stats */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-indigo-600">15-20</div>
              <div className="mt-2 text-gray-600">Hours saved per month</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-indigo-600">3.2x</div>
              <div className="mt-2 text-gray-600">Average ROI</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-indigo-600">2 weeks</div>
              <div className="mt-2 text-gray-600">To fully operational</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-4">Ready to save 15 hours per month?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Schedule a 30-minute demo to see how we can automate your workflow.
          </p>
          <a
            href="/contact"
            className="inline-block rounded-md bg-indigo-600 px-8 py-4 text-lg font-semibold text-white shadow-sm hover:bg-indigo-500"
          >
            Book Your Demo
          </a>
        </div>
      </section>
    </main>
  );
}
