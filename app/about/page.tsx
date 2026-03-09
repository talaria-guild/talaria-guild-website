export default function AboutPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-extrabold mb-6">
            Who We <span className="text-amber-400">Are</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl">
            Two operators with Fortune 500 backgrounds who got tired of watching small service businesses drown in admin work that AI could handle in seconds.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Story</h2>
            <div className="space-y-6 text-slate-700 leading-relaxed">
              <p>
                We started Talaria Guild after watching a family member's cleaning business struggle not from lack of clients, but from the chaos of managing them. Bookings came in through texts, Facebook messages, and voicemails. Follow-ups happened when there was time. Reminders did not always go out. Jobs occasionally got double-booked or forgotten.
              </p>
              <p>
                The problem was not effort — the owner worked constantly. The problem was that every hour spent on scheduling and admin was an hour not spent on the actual business. And the tools available were either priced for enterprises with full IT teams or so limited they barely helped.
              </p>
              <p>
                We knew what enterprise automation looked like from the inside. We had built and deployed it at Fortune 500 companies with unlimited budgets and dedicated engineering teams. The same underlying technology — AI-powered workflows, automated communications, visual job tracking — was completely out of reach for a 10-unit property manager or a three-person cleaning crew.
              </p>
              <p>
                So we built a version of it that is accessible, affordable, and actually maintained by real people who care whether it works.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founders */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">The Founders</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white rounded-xl p-8 border border-slate-200 shadow-sm">
              <div className="w-16 h-16 rounded-full bg-amber-500 text-slate-900 font-extrabold text-2xl flex items-center justify-center mb-6">A</div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Andrew</h3>
              <div className="text-amber-600 font-semibold text-sm mb-5">Software, AI/ML, Enterprise Automation</div>
              <div className="space-y-4 text-slate-600 text-sm leading-relaxed">
                <p>
                  Andrew brings over a decade of software engineering and AI/automation experience from Fortune 100 enterprise environments. He has designed and shipped production AI systems — workflow automation, machine learning pipelines, and intelligent data products — at a scale most companies never reach.
                </p>
                <p>
                  At Talaria Guild, Andrew architects every client's automation stack: choosing the right tools, designing the workflow logic, writing the integrations, and making sure the AI behaves the way the business actually needs it to.
                </p>
                <p>
                  His philosophy: enterprise-grade does not mean expensive. It means designed right, built to last, and actually maintained.
                </p>
              </div>
              <div className="mt-6 pt-6 border-t border-slate-100">
                <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">Expertise</div>
                <div className="flex flex-wrap gap-2">
                  {["n8n", "AI/LLM", "Node.js", "Python", "Workflow Design", "API Integration", "Twilio"].map((tag) => (
                    <span key={tag} className="px-2 py-1 bg-slate-100 text-slate-700 rounded text-xs font-medium">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-8 border border-slate-200 shadow-sm">
              <div className="w-16 h-16 rounded-full bg-amber-500 text-slate-900 font-extrabold text-2xl flex items-center justify-center mb-6">D</div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Dan</h3>
              <div className="text-amber-600 font-semibold text-sm mb-5">Hardware, Networking, Physical Security</div>
              <div className="space-y-4 text-slate-600 text-sm leading-relaxed">
                <p>
                  Dan has spent his career designing and installing the physical infrastructure layer that most software companies ignore: structured cabling, network architecture, security camera systems, access control, and the kind of hardened configurations that hold up in real-world deployments.
                </p>
                <p>
                  At Talaria Guild, Dan handles everything from VPS setup and server hardening to on-site security and networking installations. For property management clients in particular, he bridges the gap between the digital workflow system and the physical property — a combination most managed service providers simply cannot offer.
                </p>
                <p>
                  His philosophy: the software is only as reliable as the infrastructure underneath it.
                </p>
              </div>
              <div className="mt-6 pt-6 border-t border-slate-100">
                <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">Expertise</div>
                <div className="flex flex-wrap gap-2">
                  {["Networking", "Security Cameras", "Access Control", "VPS Hardening", "Structured Cabling", "Physical Security", "Linux"].map((tag) => (
                    <span key={tag} className="px-2 py-1 bg-slate-100 text-slate-700 rounded text-xs font-medium">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-10 text-center">How We Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "We eat our own cooking",
                body: "Every tool we recommend to clients runs our own business. We use n8n to automate our intake. We track everything in a job board. If we would not stake our own operations on it, we would not sell it to you.",
              },
              {
                title: "No upsell culture",
                body: "We tell you what you need, not what generates the biggest invoice. Some clients need a $500 starter setup. Others need the full service. We are honest about the difference on the first call.",
              },
              {
                title: "Long-term relationships",
                body: "Our model only works if clients stick around. That means the system has to actually work and deliver real value every month. We are not trying to lock you in — we are trying to earn your business indefinitely.",
              },
            ].map((item, i) => (
              <div key={i} className="p-8 bg-slate-50 rounded-xl border border-slate-200">
                <h3 className="font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-slate-900 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold mb-4">
            Want to work with us?
          </h2>
          <p className="text-slate-300 text-lg mb-8">
            We take on a limited number of new clients each month to make sure every onboarding gets the attention it deserves. Reach out to get on the list.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/contact"
              className="px-10 py-4 rounded-lg bg-amber-500 text-slate-900 font-bold text-lg hover:bg-amber-400 transition-colors"
            >
              Get in Touch
            </a>
            <a
              href="mailto:andrew@talariaguild.com"
              className="px-10 py-4 rounded-lg border border-slate-600 text-slate-200 font-semibold text-lg hover:border-amber-400 hover:text-amber-400 transition-colors"
            >
              Email Andrew Directly
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
