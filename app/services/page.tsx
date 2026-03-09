export default function ServicesPage() {
  const services = [
    {
      title: "AI Workflow Automation",
      description: "We design and build custom n8n-powered workflows that connect your intake channels, CRM, and communications into a single automated system. Every workflow is built around your specific business logic — not a generic template you try to fit your process into.",
      details: [
        "Custom intake routing based on request type, urgency, and availability",
        "Multi-step approval and escalation workflows",
        "Automated status updates and notifications",
        "Integration with your existing tools (Google Sheets, QuickBooks, Slack, etc.)",
      ],
    },
    {
      title: "SMS and WhatsApp Intake",
      description: "Clients text your business number. An AI assistant responds instantly, gathers the details it needs, confirms the booking or service request, and logs everything in your job board. No app downloads required for your clients — they text the way they already text.",
      details: [
        "Twilio-powered dedicated SMS number",
        "WhatsApp Business integration available",
        "AI-powered conversation handling with escalation to human",
        "Automatic qualification and intake form collection",
      ],
    },
    {
      title: "Visual Job Boards",
      description: "Every active job, booking, and maintenance request lives in a Kanban-style board your team can access from any device. Drag cards between columns to update status. Your AI assistant updates the board automatically as jobs progress.",
      details: [
        "Planka-powered Kanban boards (self-hosted)",
        "Custom columns matched to your workflow stages",
        "Mobile-friendly for field crews",
        "Automated card creation from SMS/email intake",
      ],
    },
    {
      title: "Lease Renewal Automation",
      description: "For property managers, lease renewals are a recurring revenue event that gets missed when you're managing 50+ units manually. We build a pipeline that starts reminding tenants at 90 days out, tracks responses, and escalates non-responsive tenants automatically.",
      details: [
        "90/60/30-day automated reminder sequences",
        "Tenant response tracking with status board",
        "Escalation to property manager for non-responsive tenants",
        "Renewal rate reporting",
      ],
    },
    {
      title: "White-Glove Onboarding",
      description: "This isn't a self-serve product. When you sign up, we spend time with you to understand your workflows, build the system to match, migrate your existing data, and train you and your team. Most clients are fully operational within two weeks of kickoff.",
      details: [
        "Dedicated onboarding call to map your workflow",
        "We build and configure everything (no DIY)",
        "Data migration from your current system",
        "Team training session before launch",
        "30-day post-launch check-in included",
      ],
    },
    {
      title: "Infrastructure and Networking",
      description: "For clients who need more than software — Dan brings Fortune 500-caliber networking and security experience to small business deployments. From VPS setup and hardening to on-site security cameras, access control, and structured cabling, we handle the physical layer too.",
      details: [
        "Dedicated VPS setup and hardening",
        "Security camera system design and installation",
        "Access control and smart locks",
        "Network infrastructure and structured cabling",
        "Ongoing infrastructure support retainer",
      ],
    },
  ];

  return (
    <main>
      {/* Hero */}
      <section className="bg-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-extrabold mb-6">
            What We <span className="text-amber-400">Build</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Every engagement is custom-built for your business. Here is what we offer and how each piece fits together.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="space-y-12">
            {services.map((service, index) => (
              <div key={index} className="grid grid-cols-1 md:grid-cols-5 gap-8 pb-12 border-b border-slate-100 last:border-0">
                <div className="md:col-span-3">
                  <div className="text-amber-500 font-bold text-sm uppercase tracking-wider mb-2">Service {String(index + 1).padStart(2, "0")}</div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h2>
                  <p className="text-slate-600 leading-relaxed">{service.description}</p>
                </div>
                <div className="md:col-span-2">
                  <div className="bg-slate-50 rounded-xl p-6 border border-slate-200 h-full">
                    <h3 className="font-semibold text-slate-900 mb-4 text-sm uppercase tracking-wider">What is included</h3>
                    <ul className="space-y-3">
                      {service.details.map((detail, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                          <span className="text-amber-500 font-bold mt-0.5 flex-shrink-0">&#10003;</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-slate-900 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold mb-4">
            Not sure which services you need?
          </h2>
          <p className="text-slate-300 text-lg mb-8">
            Most clients start with a 30-minute discovery call. We will learn about your workflow and tell you exactly what would make the biggest impact.
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
