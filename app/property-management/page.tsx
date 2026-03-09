export default function PropertyManagementPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-slate-900 text-white py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-amber-400 font-bold text-sm uppercase tracking-wider mb-4">Property Management</div>
          <h1 className="text-5xl font-extrabold leading-tight mb-6">
            Stop Losing Maintenance Requests<br />
            <span className="text-amber-400">in Your Text Messages</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mb-10">
            You are managing 20, 50, maybe 100 units across multiple properties. Maintenance requests come in by text, phone, email, and voicemail. Lease renewals sneak up on you. Vendors go silent. We fix all of that.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="/contact" className="px-8 py-4 rounded-lg bg-amber-500 text-slate-900 font-bold text-lg hover:bg-amber-400 transition-colors">
              Book a Demo
            </a>
            <a href="/pricing" className="px-8 py-4 rounded-lg border border-slate-600 text-slate-200 font-semibold text-lg hover:border-amber-400 hover:text-amber-400 transition-colors">
              See Pricing
            </a>
          </div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-slate-900">Sound Familiar?</h2>
            <p className="mt-3 text-slate-600 text-lg">These are the problems property managers tell us about most.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                problem: "Maintenance requests get buried",
                detail: "A tenant texts about a broken heater at 6pm Friday. By Monday morning, you have forgotten and they are furious — and the repair is now an emergency.",
              },
              {
                problem: "Lease renewals sneak up on you",
                detail: "You meant to send renewal notices last month but it slipped. Now the tenant is looking at other places and you might have an unexpected vacancy.",
              },
              {
                problem: "Vendor communication is chaos",
                detail: "You are playing phone tag between tenants, plumbers, electricians, and HVAC techs. Every job requires 10 texts and two calls to coordinate.",
              },
              {
                problem: "You can not see what is in progress",
                detail: "Is the electrician at unit 4B today or tomorrow? Did the tenant in 12A acknowledge the repair notification? You have no single place to check.",
              },
            ].map((item, i) => (
              <div key={i} className="p-6 border-l-4 border-amber-500 bg-slate-50 rounded-r-xl">
                <h3 className="font-bold text-slate-900 mb-2">{item.problem}</h3>
                <p className="text-slate-600 text-sm">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution: Maintenance Triage */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-amber-500 font-bold text-sm uppercase tracking-wider mb-3">Solution 1</div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Maintenance Triage System</h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Tenants text your dedicated number with maintenance issues. The AI assistant gathers the details — unit number, issue type, severity, photos — and immediately routes it to the right vendor with a priority tag. You see every open request in a visual board. Nothing gets lost.
              </p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="text-amber-500 font-bold flex-shrink-0">&#10003;</span>
                  <span>AI triage categorizes requests by type and urgency automatically</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-500 font-bold flex-shrink-0">&#10003;</span>
                  <span>Vendors get notified immediately with all relevant details</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-500 font-bold flex-shrink-0">&#10003;</span>
                  <span>Tenants receive automatic status updates at each stage</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-500 font-bold flex-shrink-0">&#10003;</span>
                  <span>All requests logged with timestamps for owner reporting</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-500 font-bold flex-shrink-0">&#10003;</span>
                  <span>Emergency escalation triggers immediate call/text to you</span>
                </li>
              </ul>
            </div>
            <div className="bg-slate-900 text-slate-300 rounded-xl p-6 font-mono text-sm">
              <div className="text-amber-400 mb-4 font-sans font-bold text-xs uppercase tracking-wider">Example: Tenant Intake Flow</div>
              <div className="space-y-3">
                <div><span className="text-slate-500">10:42 PM</span> <span className="text-white">Tenant:</span> "Heat not working in unit 8B, it's 30 degrees outside"</div>
                <div><span className="text-slate-500">10:42 PM</span> <span className="text-amber-400">AI:</span> "Hi Sarah — I have logged this as an emergency. Can you confirm the thermostat setting and whether the pilot light is on?"</div>
                <div><span className="text-slate-500">10:43 PM</span> <span className="text-white">Tenant:</span> "Thermostat says 68 but it's freezing, no idea about pilot"</div>
                <div><span className="text-slate-500">10:43 PM</span> <span className="text-amber-400">AI:</span> "Got it. I have flagged this as emergency HVAC and notified your HVAC contractor. You will hear from them within the hour. I have also notified your property manager."</div>
                <div className="border-t border-slate-700 pt-3 text-xs text-slate-500">
                  Board updated: Unit 8B — HVAC Emergency — Vendor notified — Owner alerted
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution: Lease Renewal */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
                <h3 className="font-bold text-slate-900 mb-4 text-sm uppercase tracking-wider">Lease Renewal Timeline</h3>
                <div className="space-y-4">
                  {[
                    { day: "90 days out", action: "First renewal notice sent via SMS + email. Tenant asked to confirm intent." },
                    { day: "60 days out", action: "Follow-up for non-responders. Renewal terms included." },
                    { day: "45 days out", action: "Signed renewal or escalation to property manager for non-responders." },
                    { day: "30 days out", action: "Final reminder. Non-responses trigger vacancy prep workflow." },
                    { day: "Renewal signed", action: "New lease dates logged, next renewal cycle automatically scheduled." },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="w-24 flex-shrink-0 text-xs font-bold text-amber-600 pt-0.5">{item.day}</div>
                      <div className="text-sm text-slate-600">{item.action}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="text-amber-500 font-bold text-sm uppercase tracking-wider mb-3">Solution 2</div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Lease Renewal Pipeline</h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                The system tracks every lease expiration date and automatically starts the renewal sequence at 90 days. You only touch it when a tenant needs your personal attention — everything else is handled.
              </p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="text-amber-500 font-bold flex-shrink-0">&#10003;</span>
                  <span>Automated 90/60/30-day reminder sequences</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-500 font-bold flex-shrink-0">&#10003;</span>
                  <span>Tenant response tracking in visual pipeline board</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-500 font-bold flex-shrink-0">&#10003;</span>
                  <span>Escalation to you for non-responsive tenants at 45 days</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-500 font-bold flex-shrink-0">&#10003;</span>
                  <span>Vacancy prep workflow triggers automatically if needed</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Property Management Pricing</h2>
          <p className="text-slate-600 text-lg mb-12">
            Compare to AppFolio ($1.49/unit/mo minimum $250) or Buildium ($150-475/mo). We start at a fraction of the cost with full data ownership.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl border border-slate-200 p-8 shadow-sm">
              <div className="font-bold text-slate-500 text-sm uppercase tracking-wider mb-2">Growth</div>
              <div className="text-4xl font-extrabold text-slate-900 mb-1">$1,000</div>
              <div className="text-slate-500 text-sm mb-2">one-time setup</div>
              <div className="text-2xl font-bold text-slate-900 mb-6">+ $150-300/mo</div>
              <ul className="text-left space-y-2 text-sm text-slate-600 mb-8">
                <li className="flex gap-2"><span className="text-amber-500">&#10003;</span> Maintenance triage workflow</li>
                <li className="flex gap-2"><span className="text-amber-500">&#10003;</span> Lease renewal pipeline (up to 3 properties)</li>
                <li className="flex gap-2"><span className="text-amber-500">&#10003;</span> Tenant SMS intake channel</li>
                <li className="flex gap-2"><span className="text-amber-500">&#10003;</span> Visual job board</li>
                <li className="flex gap-2"><span className="text-amber-500">&#10003;</span> Vendor notification workflows</li>
                <li className="flex gap-2"><span className="text-amber-500">&#10003;</span> White-glove onboarding</li>
              </ul>
              <a href="/contact" className="block w-full py-3 rounded-lg bg-slate-900 text-white font-bold hover:bg-slate-800 transition-colors text-center">
                Get Started
              </a>
            </div>
            <div className="bg-slate-900 rounded-xl border border-amber-500 p-8 shadow-lg relative">
              <div className="absolute top-4 right-4 bg-amber-500 text-slate-900 text-xs font-bold px-2 py-1 rounded-full">Most Popular</div>
              <div className="font-bold text-amber-400 text-sm uppercase tracking-wider mb-2">Full Service</div>
              <div className="text-4xl font-extrabold text-white mb-1">$2,000+</div>
              <div className="text-slate-400 text-sm mb-2">one-time setup</div>
              <div className="text-2xl font-bold text-white mb-6">+ $400+/mo</div>
              <ul className="text-left space-y-2 text-sm text-slate-300 mb-8">
                <li className="flex gap-2"><span className="text-amber-400">&#10003;</span> Everything in Growth</li>
                <li className="flex gap-2"><span className="text-amber-400">&#10003;</span> Custom workflows for your portfolio</li>
                <li className="flex gap-2"><span className="text-amber-400">&#10003;</span> Owner reporting automation</li>
                <li className="flex gap-2"><span className="text-amber-400">&#10003;</span> Multi-property support (unlimited)</li>
                <li className="flex gap-2"><span className="text-amber-400">&#10003;</span> Infrastructure setup (VPS, networking)</li>
                <li className="flex gap-2"><span className="text-amber-400">&#10003;</span> Priority support</li>
              </ul>
              <a href="/contact" className="block w-full py-3 rounded-lg bg-amber-500 text-slate-900 font-bold hover:bg-amber-400 transition-colors text-center">
                Get Started
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-amber-500">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-slate-900 mb-4">
            See exactly how it would work for your portfolio
          </h2>
          <p className="text-slate-800 text-lg mb-8">
            30-minute call. We will map your current workflow and show you what automation would look like for your specific properties.
          </p>
          <a
            href="/contact"
            className="inline-block px-10 py-4 rounded-lg bg-slate-900 text-white font-bold text-lg hover:bg-slate-800 transition-colors"
          >
            Book a Free Demo
          </a>
        </div>
      </section>
    </main>
  );
}
