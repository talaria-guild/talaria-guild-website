export default function CleaningPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-slate-900 text-white py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-amber-400 font-bold text-sm uppercase tracking-wider mb-4">Cleaning Services</div>
          <h1 className="text-5xl font-extrabold leading-tight mb-6">
            Turn Text Messages Into<br />
            <span className="text-amber-400">Confirmed Bookings — Automatically</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mb-10">
            Whether you are a solo cleaner or running a crew, you are losing bookings every week to phone tag, missed messages, and scattered requests. We build the system that handles all of that while you are on the job.
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
            <h2 className="text-3xl font-bold text-slate-900">The Reality of Running a Cleaning Business</h2>
            <p className="mt-3 text-slate-600 text-lg">You are great at the actual cleaning. The admin is killing you.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                problem: "Bookings come from everywhere",
                detail: "SMS. Facebook Messenger. Instagram DMs. Yelp. Voicemail. A referral who texted your personal number. You are checking five places to make sure nothing fell through.",
              },
              {
                problem: "Phone tag loses clients",
                detail: "Someone texts asking about availability. You are mid-job and cannot reply. Two hours later you finally text back. They have already booked someone else.",
              },
              {
                problem: "No-shows hurt your schedule",
                detail: "You drive 20 minutes to a job and no one answers the door. No reminder was sent, the client forgot. That slot is now gone and you are 20 minutes behind.",
              },
              {
                problem: "Repeat booking is manual",
                detail: "Your best clients want to book every two weeks but you are the one remembering to reach out, confirm, and schedule. That is an hour a week of admin work for clients you already have.",
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

      {/* Solution: Booking Automation */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-amber-500 font-bold text-sm uppercase tracking-wider mb-3">Solution 1</div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Instant Booking Automation</h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                New clients text your dedicated business number. An AI assistant responds immediately, collects service details, checks your availability, sends a quote, and confirms the booking — all in under 5 minutes. You get a notification with the job details. The client gets a confirmation.
              </p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="text-amber-500 font-bold flex-shrink-0">&#10003;</span>
                  <span>Instant AI response to every new inquiry</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-500 font-bold flex-shrink-0">&#10003;</span>
                  <span>Collects address, square footage, and service preferences</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-500 font-bold flex-shrink-0">&#10003;</span>
                  <span>Sends quote based on your pricing rules</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-500 font-bold flex-shrink-0">&#10003;</span>
                  <span>Confirms booking and adds to your crew board</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-500 font-bold flex-shrink-0">&#10003;</span>
                  <span>Works via SMS and WhatsApp</span>
                </li>
              </ul>
            </div>
            <div className="bg-slate-900 text-slate-300 rounded-xl p-6 font-mono text-sm">
              <div className="text-amber-400 mb-4 font-sans font-bold text-xs uppercase tracking-wider">Example: New Client Booking</div>
              <div className="space-y-3">
                <div><span className="text-slate-500">2:15 PM</span> <span className="text-white">Client:</span> "Hi, do you clean houses? I need a deep clean"</div>
                <div><span className="text-slate-500">2:15 PM</span> <span className="text-amber-400">AI:</span> "Yes! We would love to help. What is the address and roughly how many bedrooms/bathrooms?"</div>
                <div><span className="text-slate-500">2:17 PM</span> <span className="text-white">Client:</span> "123 Oak St, 3 bed 2 bath"</div>
                <div><span className="text-slate-500">2:17 PM</span> <span className="text-amber-400">AI:</span> "Great — a deep clean for 3/2 is $275. We have availability Thursday at 9am or Friday at 1pm. Which works better?"</div>
                <div><span className="text-slate-500">2:18 PM</span> <span className="text-white">Client:</span> "Thursday works!"</div>
                <div><span className="text-slate-500">2:18 PM</span> <span className="text-amber-400">AI:</span> "You are confirmed for Thursday at 9am. You will get a reminder the day before. See you then!"</div>
                <div className="border-t border-slate-700 pt-3 text-xs text-slate-500">
                  Job added to board: Thu 9am — 123 Oak St — Deep Clean — $275
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution: Reminders */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
                <h3 className="font-bold text-slate-900 mb-4 text-sm uppercase tracking-wider">Automated Reminder Sequence</h3>
                <div className="space-y-4">
                  {[
                    { time: "Day before, 5pm", message: "Reminder: Your cleaning is tomorrow at 9am. Reply CONFIRM to confirm or RESCHEDULE to change." },
                    { time: "Morning of, 7am", message: "Your cleaning team arrives in 2 hours at 9am. Reply CONFIRM or call us to reschedule." },
                    { time: "Job complete", message: "Your cleaning is done! Hope everything looks great. Ready to schedule your next clean?" },
                    { time: "2 weeks later", message: "Hi — your home was cleaned 2 weeks ago. Ready to book your next session?" },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="w-28 flex-shrink-0 text-xs font-bold text-amber-600 pt-0.5 leading-tight">{item.time}</div>
                      <div className="text-sm text-slate-600 italic">"{item.message}"</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="text-amber-500 font-bold text-sm uppercase tracking-wider mb-3">Solution 2</div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Reminders and Re-Booking</h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Every confirmed job gets a day-before and morning-of reminder. Clients who do not confirm get a follow-up call prompt for you. After each job, the system automatically asks about re-booking — turning one-time clients into regulars without you lifting a finger.
              </p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="text-amber-500 font-bold flex-shrink-0">&#10003;</span>
                  <span>24hr and morning-of reminders sent automatically</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-500 font-bold flex-shrink-0">&#10003;</span>
                  <span>Confirmation required to lock in slot</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-500 font-bold flex-shrink-0">&#10003;</span>
                  <span>Post-job re-booking nudge sent automatically</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-500 font-bold flex-shrink-0">&#10003;</span>
                  <span>No-show tracking for at-risk slots</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Cleaning Service Pricing</h2>
          <p className="text-slate-600 text-lg mb-12">
            Jobber runs $69-349/month with limited AI. We start lower, do more, and you own the system.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl border border-slate-200 p-8 shadow-sm">
              <div className="font-bold text-slate-500 text-sm uppercase tracking-wider mb-2">Starter</div>
              <div className="text-4xl font-extrabold text-slate-900 mb-1">$500</div>
              <div className="text-slate-500 text-sm mb-2">one-time setup</div>
              <div className="text-2xl font-bold text-slate-900 mb-6">+ $75-100/mo</div>
              <ul className="text-left space-y-2 text-sm text-slate-600 mb-8">
                <li className="flex gap-2"><span className="text-amber-500">&#10003;</span> SMS booking intake workflow</li>
                <li className="flex gap-2"><span className="text-amber-500">&#10003;</span> Automated reminders (24hr + same-day)</li>
                <li className="flex gap-2"><span className="text-amber-500">&#10003;</span> Visual job board for crew</li>
                <li className="flex gap-2"><span className="text-amber-500">&#10003;</span> Post-job re-booking nudge</li>
                <li className="flex gap-2"><span className="text-amber-500">&#10003;</span> White-glove onboarding</li>
              </ul>
              <a href="/contact" className="block w-full py-3 rounded-lg bg-slate-900 text-white font-bold hover:bg-slate-800 transition-colors text-center">
                Get Started
              </a>
            </div>
            <div className="bg-slate-900 rounded-xl border border-amber-500 p-8 shadow-lg relative">
              <div className="absolute top-4 right-4 bg-amber-500 text-slate-900 text-xs font-bold px-2 py-1 rounded-full">Best Value</div>
              <div className="font-bold text-amber-400 text-sm uppercase tracking-wider mb-2">Growth</div>
              <div className="text-4xl font-extrabold text-white mb-1">$1,000</div>
              <div className="text-slate-400 text-sm mb-2">one-time setup</div>
              <div className="text-2xl font-bold text-white mb-6">+ $150-250/mo</div>
              <ul className="text-left space-y-2 text-sm text-slate-300 mb-8">
                <li className="flex gap-2"><span className="text-amber-400">&#10003;</span> Everything in Starter</li>
                <li className="flex gap-2"><span className="text-amber-400">&#10003;</span> Multi-channel intake (SMS + WhatsApp + web form)</li>
                <li className="flex gap-2"><span className="text-amber-400">&#10003;</span> Automated quoting based on your pricing rules</li>
                <li className="flex gap-2"><span className="text-amber-400">&#10003;</span> Recurring client management</li>
                <li className="flex gap-2"><span className="text-amber-400">&#10003;</span> Crew scheduling and dispatch</li>
                <li className="flex gap-2"><span className="text-amber-400">&#10003;</span> Monthly reporting</li>
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
            Ready to stop losing bookings?
          </h2>
          <p className="text-slate-800 text-lg mb-8">
            30-minute call. We will map your current booking process and show you what it looks like fully automated.
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
