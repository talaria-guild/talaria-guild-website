export default function PricingPage() {
  const tiers = [
    {
      name: "Starter",
      setup: "$500",
      monthly: "$75–100/mo",
      description: "One core workflow to replace your most painful manual process. Perfect for solo operators or small teams getting started with automation.",
      features: [
        "1 core automated workflow",
        "SMS intake channel (dedicated Twilio number)",
        "Visual job board (Kanban)",
        "Automated booking confirmation",
        "Basic reminder sequence (24hr + same-day)",
        "White-glove onboarding and training",
        "30-day post-launch support",
        "Self-hosted on your VPS",
      ],
      notIncluded: [
        "Multi-channel intake",
        "Automated quoting",
        "Recurring client management",
        "Custom reporting",
      ],
      cta: "Get Started",
      featured: false,
    },
    {
      name: "Growth",
      setup: "$1,000",
      monthly: "$150–250/mo",
      description: "Two to three interconnected workflows covering your full intake, communication, and scheduling cycle. Designed for growing businesses with multiple staff.",
      features: [
        "2–3 automated workflows",
        "Multi-channel intake (SMS + WhatsApp + web form)",
        "Automated quoting based on your pricing rules",
        "Full communication automation (confirmations, reminders, follow-ups)",
        "Visual job board with crew assignments",
        "Recurring client management",
        "Post-job re-booking sequences",
        "Monthly performance reporting",
        "White-glove onboarding and data migration",
        "90-day post-launch support",
        "Self-hosted on your VPS",
      ],
      notIncluded: [
        "Custom multi-property workflows",
        "Infrastructure (networking, cameras)",
        "Owner/investor reporting",
      ],
      cta: "Get Started",
      featured: true,
    },
    {
      name: "Full Service",
      setup: "$2,000+",
      monthly: "$400+/mo",
      description: "End-to-end automation for your entire operation, including custom workflows, full infrastructure, and Dan's hardware and networking expertise for physical deployments.",
      features: [
        "Unlimited custom workflows",
        "Full tech stack setup and configuration",
        "Multi-property or multi-location support",
        "Owner, investor, or client reporting automation",
        "Integration with your existing tools (QuickBooks, Google Workspace, etc.)",
        "VPS setup, hardening, and ongoing management",
        "Security camera and access control (Dan's specialty)",
        "Network infrastructure and structured cabling",
        "Priority support with dedicated Slack channel",
        "Quarterly strategy review",
        "Self-hosted, fully owned infrastructure",
      ],
      notIncluded: [],
      cta: "Let's Talk",
      featured: false,
    },
  ];

  const faqs = [
    {
      q: "What is the difference between setup and monthly fees?",
      a: "The setup fee covers the design, build, and configuration of your workflows — this is where we do the heavy lifting. The monthly fee covers hosting costs (Twilio, VPS), ongoing maintenance, workflow updates as your business evolves, and support.",
    },
    {
      q: "Do I own the system or am I renting it?",
      a: "You own it. Everything runs on your self-hosted infrastructure. If you ever stop working with us, you keep the system. We can provide documentation so you or another developer can maintain it independently.",
    },
    {
      q: "What does 'white-glove onboarding' actually mean?",
      a: "It means we build the whole thing for you. We start with a kickoff call to map your current workflow, then we design and build the automations, connect your channels, migrate any existing data, and run a training session with you and your team. You are not expected to configure anything yourself.",
    },
    {
      q: "How long does it take to go live?",
      a: "Most clients are fully operational within two weeks of the kickoff call. Complex multi-property or multi-location setups can take three to four weeks.",
    },
    {
      q: "What are the ongoing costs beyond the monthly fee?",
      a: "Twilio SMS/WhatsApp costs are typically $5-20/month for most small businesses. VPS hosting is around $20-50/month depending on your plan. These pass-through costs are included in the monthly fee estimate above.",
    },
    {
      q: "Can I upgrade plans later?",
      a: "Yes. Many clients start on Starter and upgrade to Growth as their workflow expands. There is an upgrade fee to cover the additional build work, but you do not lose any of what was already built.",
    },
    {
      q: "Do you work with businesses outside property management and cleaning?",
      a: "We are focused on these two verticals right now so we can go deep and build something that actually works rather than a generic tool. If your business is adjacent — landscaping, pest control, HVAC — reach out and we will tell you honestly if we can help.",
    },
  ];

  return (
    <main>
      {/* Hero */}
      <section className="bg-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-extrabold mb-6">
            Simple, Transparent <span className="text-amber-400">Pricing</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            One-time setup fee. Low monthly cost. No per-seat fees. No contracts. You own everything.
          </p>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className={`rounded-xl p-8 shadow-sm flex flex-col ${
                  tier.featured
                    ? "bg-slate-900 text-white border-2 border-amber-500 relative"
                    : "bg-white text-slate-900 border border-slate-200"
                }`}
              >
                {tier.featured && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-amber-500 text-slate-900 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
                    Most Popular
                  </div>
                )}
                <div>
                  <div className={`font-bold text-sm uppercase tracking-wider mb-2 ${tier.featured ? "text-amber-400" : "text-slate-500"}`}>
                    {tier.name}
                  </div>
                  <div className={`text-4xl font-extrabold mb-1 ${tier.featured ? "text-white" : "text-slate-900"}`}>
                    {tier.setup}
                  </div>
                  <div className={`text-sm mb-2 ${tier.featured ? "text-slate-400" : "text-slate-500"}`}>one-time setup</div>
                  <div className={`text-2xl font-bold mb-4 ${tier.featured ? "text-white" : "text-slate-900"}`}>
                    {tier.monthly}
                  </div>
                  <p className={`text-sm mb-6 leading-relaxed ${tier.featured ? "text-slate-300" : "text-slate-600"}`}>
                    {tier.description}
                  </p>
                </div>
                <div className="flex-1">
                  <ul className="space-y-2 mb-8">
                    {tier.features.map((f, i) => (
                      <li key={i} className={`flex items-start gap-2 text-sm ${tier.featured ? "text-slate-300" : "text-slate-700"}`}>
                        <span className={`font-bold flex-shrink-0 mt-0.5 ${tier.featured ? "text-amber-400" : "text-amber-500"}`}>&#10003;</span>
                        <span>{f}</span>
                      </li>
                    ))}
                    {tier.notIncluded.map((f, i) => (
                      <li key={i} className={`flex items-start gap-2 text-sm ${tier.featured ? "text-slate-600" : "text-slate-400"}`}>
                        <span className="flex-shrink-0 mt-0.5">&#10005;</span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <a
                  href="/contact"
                  className={`block w-full py-3 rounded-lg font-bold text-center transition-colors ${
                    tier.featured
                      ? "bg-amber-500 text-slate-900 hover:bg-amber-400"
                      : "bg-slate-900 text-white hover:bg-slate-800"
                  }`}
                >
                  {tier.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison context */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">How we compare to the alternatives</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="text-left py-3 pr-6 font-semibold text-slate-700">Solution</th>
                  <th className="text-right py-3 px-4 font-semibold text-slate-700">Monthly Cost</th>
                  <th className="text-right py-3 px-4 font-semibold text-slate-700">Setup</th>
                  <th className="text-right py-3 px-4 font-semibold text-slate-700">Data Ownership</th>
                  <th className="text-right py-3 pl-4 font-semibold text-slate-700">Customization</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr className="bg-amber-50">
                  <td className="py-3 pr-6 font-bold text-slate-900">Talaria Guild (Growth)</td>
                  <td className="text-right py-3 px-4 text-slate-700">$150–250</td>
                  <td className="text-right py-3 px-4 text-slate-700">$1,000 one-time</td>
                  <td className="text-right py-3 px-4 text-green-600 font-medium">Full</td>
                  <td className="text-right py-3 pl-4 text-green-600 font-medium">Built for you</td>
                </tr>
                <tr>
                  <td className="py-3 pr-6 text-slate-700">AppFolio</td>
                  <td className="text-right py-3 px-4 text-slate-700">$250–1,400+</td>
                  <td className="text-right py-3 px-4 text-slate-700">Included</td>
                  <td className="text-right py-3 px-4 text-red-500">Vendor-owned</td>
                  <td className="text-right py-3 pl-4 text-yellow-600">Limited</td>
                </tr>
                <tr>
                  <td className="py-3 pr-6 text-slate-700">Buildium</td>
                  <td className="text-right py-3 px-4 text-slate-700">$150–475</td>
                  <td className="text-right py-3 px-4 text-slate-700">Included</td>
                  <td className="text-right py-3 px-4 text-red-500">Vendor-owned</td>
                  <td className="text-right py-3 pl-4 text-yellow-600">Limited</td>
                </tr>
                <tr>
                  <td className="py-3 pr-6 text-slate-700">Jobber</td>
                  <td className="text-right py-3 px-4 text-slate-700">$69–349</td>
                  <td className="text-right py-3 px-4 text-slate-700">Included</td>
                  <td className="text-right py-3 px-4 text-red-500">Vendor-owned</td>
                  <td className="text-right py-3 pl-4 text-yellow-600">Moderate</td>
                </tr>
                <tr>
                  <td className="py-3 pr-6 text-slate-700">Hire in-house admin</td>
                  <td className="text-right py-3 px-4 text-slate-700">$2,500+</td>
                  <td className="text-right py-3 px-4 text-slate-700">High (hiring)</td>
                  <td className="text-right py-3 px-4 text-green-600 font-medium">Full</td>
                  <td className="text-right py-3 pl-4 text-green-600 font-medium">High</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Frequently Asked Questions</h2>
          <div className="space-y-8">
            {faqs.map((faq, i) => (
              <div key={i} className="border-b border-slate-200 pb-8 last:border-0">
                <h3 className="font-bold text-slate-900 mb-3">{faq.q}</h3>
                <p className="text-slate-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-slate-900 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold mb-4">
            Not sure which plan is right for you?
          </h2>
          <p className="text-slate-300 text-lg mb-8">
            Book a free 30-minute call. We will look at your current workflow and tell you exactly what we would build and what it would cost.
          </p>
          <a
            href="/contact"
            className="inline-block px-10 py-4 rounded-lg bg-amber-500 text-slate-900 font-bold text-lg hover:bg-amber-400 transition-colors"
          >
            Book a Free Discovery Call
          </a>
        </div>
      </section>
    </main>
  );
}
