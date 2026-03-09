export default function ContactPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-extrabold mb-6">
            Let's <span className="text-amber-400">Talk</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl">
            Book a free 30-minute call or send us a message. We will respond within one business day.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
            {/* Contact Info */}
            <div className="md:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Contact Information</h2>
                <div className="space-y-4">
                  <div>
                    <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">General Inquiries</div>
                    <a href="mailto:info@talariaguild.com" className="text-amber-600 hover:text-amber-500 font-medium">
                      info@talariaguild.com
                    </a>
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Work Directly with Andrew</div>
                    <a href="mailto:andrew@talariaguild.com" className="text-amber-600 hover:text-amber-500 font-medium">
                      andrew@talariaguild.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="border-t border-slate-100 pt-8">
                <h3 className="font-bold text-slate-900 mb-4">What to Expect</h3>
                <div className="space-y-4">
                  {[
                    { step: "1", title: "You submit the form", body: "Tell us about your business and the biggest admin headache you have right now." },
                    { step: "2", title: "We review and respond", body: "Within one business day, Andrew will reach out to schedule a call or answer your questions." },
                    { step: "3", title: "Discovery call (30 min)", body: "We map your current workflow and tell you exactly what automation would look like for your business." },
                    { step: "4", title: "You decide", body: "No pressure. We send a proposal and you take the time you need." },
                  ].map((item) => (
                    <div key={item.step} className="flex gap-3">
                      <div className="w-6 h-6 rounded-full bg-amber-500 text-slate-900 font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                        {item.step}
                      </div>
                      <div>
                        <div className="font-semibold text-slate-900 text-sm">{item.title}</div>
                        <div className="text-slate-600 text-sm">{item.body}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t border-slate-100 pt-8">
                <h3 className="font-bold text-slate-900 mb-3">We work with:</h3>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>• Property managers (20–200 units)</li>
                  <li>• Cleaning services (solo to small crew)</li>
                  <li>• Adjacent service businesses — ask us</li>
                </ul>
              </div>
            </div>

            {/* Form */}
            <div className="md:col-span-3">
              <div className="bg-slate-50 rounded-xl p-8 border border-slate-200">
                <h2 className="text-xl font-bold text-slate-900 mb-6">Send Us a Message</h2>
                <form action="https://formspree.io/f/xpwzgkjl" method="POST" className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        placeholder="Jane Smith"
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-white"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        placeholder="jane@company.com"
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-white"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-1.5">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        placeholder="(555) 000-0000"
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-white"
                      />
                    </div>
                    <div>
                      <label htmlFor="business_type" className="block text-sm font-semibold text-slate-700 mb-1.5">
                        Business Type *
                      </label>
                      <select
                        id="business_type"
                        name="business_type"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-white"
                      >
                        <option value="">Select one</option>
                        <option value="property_management">Property Management</option>
                        <option value="cleaning_service">Cleaning Service</option>
                        <option value="other">Other Service Business</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-1.5">
                      What is your biggest admin headache right now? *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      placeholder="Tell us about your current workflow, what is taking the most time, or what is falling through the cracks. The more specific you are, the more useful our first call will be."
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-white resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-lg bg-amber-500 text-slate-900 font-bold text-lg hover:bg-amber-400 transition-colors shadow-sm"
                  >
                    Send Message
                  </button>
                  <p className="text-xs text-slate-500 text-center">
                    We respond to every inquiry within one business day. No spam, ever.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
