export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-24 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-block bg-amber-500 text-slate-900 text-xs font-bold px-3 py-1 rounded-full mb-6 uppercase tracking-wider">
            AI Automation for Service Businesses
          </div>
          <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight leading-tight mb-6">
            Enterprise-grade automation.<br />
            <span className="text-amber-400">Small business prices.</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-10">
            AI handles your intake around the clock. We handle the tech. Purpose-built for property managers and cleaning businesses that are tired of losing jobs to voicemail.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/contact"
              className="w-full sm:w-auto px-8 py-4 rounded-lg bg-amber-500 text-slate-900 font-bold text-lg hover:bg-amber-400 transition-colors shadow-lg"
            >
              Book a Free Demo
            </a>
            <a
              href="/services"
              className="w-full sm:w-auto px-8 py-4 rounded-lg border border-slate-600 text-slate-200 font-semibold text-lg hover:border-amber-400 hover:text-amber-400 transition-colors"
            >
              See How It Works &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-amber-500 py-8">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-4xl font-extrabold text-slate-900">15-20 hrs</div>
              <div className="text-slate-800 font-medium mt-1">Saved per month</div>
            </div>
            <div>
              <div className="text-4xl font-extrabold text-slate-900">3.2x</div>
              <div className="text-slate-800 font-medium mt-1">Average ROI</div>
            </div>
            <div>
              <div className="text-4xl font-extrabold text-slate-900">2 weeks</div>
              <div className="text-slate-800 font-medium mt-1">To fully operational</div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-slate-900">How It Works</h2>
            <p className="mt-3 text-slate-600 text-lg">From zero to automated in three steps</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-slate-50 rounded-xl border border-slate-200">
              <div className="w-12 h-12 rounded-full bg-amber-500 text-slate-900 font-extrabold text-xl flex items-center justify-center mb-5">1</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Connect</h3>
              <p className="text-slate-600">
                We map your existing intake channels — SMS, email, voicemail, web forms — and connect them to your new automated workflow. No disruption to your current operations.
              </p>
            </div>
            <div className="p-8 bg-slate-50 rounded-xl border border-slate-200">
              <div className="w-12 h-12 rounded-full bg-amber-500 text-slate-900 font-extrabold text-xl flex items-center justify-center mb-5">2</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Automate</h3>
              <p className="text-slate-600">
                AI handles intake conversations, qualifies requests, assigns jobs, sends confirmations, and follows up 24/7. It speaks your business language from day one.
              </p>
            </div>
            <div className="p-8 bg-slate-50 rounded-xl border border-slate-200">
              <div className="w-12 h-12 rounded-full bg-amber-500 text-slate-900 font-extrabold text-xl flex items-center justify-center mb-5">3</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Track</h3>
              <p className="text-slate-600">
                Every request, booking, and follow-up lives in a visual job board you can check from your phone. Full visibility, no spreadsheets, no sticky notes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Value Props */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-slate-900">Why Talaria Guild?</h2>
            <p className="mt-3 text-slate-600 text-lg">Not another generic SaaS subscription. We build it. We run it. You own it.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 bg-white rounded-xl border border-slate-200 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 mb-2">24/7 AI Intake</h3>
              <p className="text-slate-600">
                Your AI assistant answers every inquiry the moment it comes in midnight, weekends, holidays. No more missed calls. Clients get instant confirmation, you get qualified leads in your board.
              </p>
            </div>
            <div className="p-8 bg-white rounded-xl border border-slate-200 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 mb-2">5x Cheaper Than Enterprise SaaS</h3>
              <p className="text-slate-600">
                AppFolio, Buildium, Jobber — they run $300-1,000/month in subscription fees alone, often per-seat. We start at $75/month total, with a one-time setup and no per-seat fees.
              </p>
            </div>
            <div className="p-8 bg-white rounded-xl border border-slate-200 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 mb-2">Self-Hosted, Full Data Ownership</h3>
              <p className="text-slate-600">
                Your tenant data, your client records, your business history — all on infrastructure you control. No vendor lock-in, no data sharing with competitors, no feature sunset surprises.
              </p>
            </div>
            <div className="p-8 bg-white rounded-xl border border-slate-200 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 mb-2">White-Glove Onboarding</h3>
              <p className="text-slate-600">
                We don't hand you a login and a YouTube tutorial. We build the system for you, migrate your data, train your team, and stay available after launch. You're live in two weeks, not two months.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vertical Cards */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-slate-900">Built for Your Industry</h2>
            <p className="mt-3 text-slate-600 text-lg">We go deep on two verticals so you get something that actually fits.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 bg-slate-900 text-white rounded-xl shadow-lg">
              <div className="text-amber-400 font-bold text-sm uppercase tracking-wider mb-3">Property Management</div>
              <h3 className="text-2xl font-bold mb-4">Stop Losing Maintenance Requests in Your Text Messages</h3>
              <p className="text-slate-300 mb-6">
                Automated triage routes every maintenance request to the right vendor. Lease renewal pipelines start 90 days out. Tenants get status updates automatically. Nothing falls through the cracks.
              </p>
              <ul className="text-slate-300 space-y-2 text-sm mb-8">
                <li>&#10003; AI-powered maintenance triage</li>
                <li>&#10003; Automated lease renewal reminders</li>
                <li>&#10003; Vendor coordination workflows</li>
                <li>&#10003; Tenant communication portal</li>
              </ul>
              <a href="/property-management" className="inline-block px-6 py-3 bg-amber-500 text-slate-900 font-bold rounded-lg hover:bg-amber-400 transition-colors">
                Learn More &rarr;
              </a>
            </div>
            <div className="p-8 bg-slate-800 text-white rounded-xl shadow-lg">
              <div className="text-amber-400 font-bold text-sm uppercase tracking-wider mb-3">Cleaning Services</div>
              <h3 className="text-2xl font-bold mb-4">Turn Text Messages Into Confirmed Bookings Automatically</h3>
              <p className="text-slate-300 mb-6">
                Every SMS, Facebook message, and web inquiry gets an instant response, quote, and booking confirmation without you touching your phone. Reminders go out automatically, no-shows drop dramatically.
              </p>
              <ul className="text-slate-300 space-y-2 text-sm mb-8">
                <li>&#10003; Instant SMS/WhatsApp booking</li>
                <li>&#10003; Automated quote and confirmation</li>
                <li>&#10003; 24hr reminder sequences</li>
                <li>&#10003; Visual crew job board</li>
              </ul>
              <a href="/cleaning" className="inline-block px-6 py-3 bg-amber-500 text-slate-900 font-bold rounded-lg hover:bg-amber-400 transition-colors">
                Learn More &rarr;
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-slate-900 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold mb-4">
            Ready to get your <span className="text-amber-400">15 hours back</span> every month?
          </h2>
          <p className="text-slate-300 text-lg mb-10">
            Book a free 30-minute demo. We will show you exactly what an automated intake system looks like for your specific business, no generic demos, no pressure.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/contact"
              className="w-full sm:w-auto px-10 py-4 rounded-lg bg-amber-500 text-slate-900 font-bold text-lg hover:bg-amber-400 transition-colors shadow-lg"
            >
              Book Your Free Demo
            </a>
            <a
              href="/pricing"
              className="w-full sm:w-auto px-10 py-4 rounded-lg border border-slate-600 text-slate-200 font-semibold text-lg hover:border-amber-400 hover:text-amber-400 transition-colors"
            >
              See Pricing
            </a>
          </div>
          <p className="mt-6 text-slate-500 text-sm">No contracts. No per-seat fees. Cancel anytime.</p>
        </div>
      </section>
    </main>
  );
}
