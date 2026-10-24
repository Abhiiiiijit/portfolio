import "./App.css";
import portrait from "./assets/portrait.jpg";

const EMAIL = "abhijeetbosedas8@gmail.com";
const GITHUB = "https://github.com/Abhiiiiijit";
const LINKEDIN = "https://www.linkedin.com/in/abhijit-bose-das-5b6b1719b/";
const PHONE = "+917506426396";
const PHONE_LABEL = "+91 75064 26396";
const WHATSAPP = "https://wa.me/917506426396";

const BALANCES = [
  { value: "150K+", label: "Student App downloads", accent: true },
  { value: "−80%", label: "Loan sanction time" },
  { value: "03", label: "Products shipped" },
  { value: "8.72", label: "GPA, B.Tech CSE · VIT-AP" },
];

const ROLES = [
  {
    when: "MAY 2024 → NOW",
    current: true,
    title: "Software Development Engineer I",
    text: "Student App, LOS Portal and Partner Portal across Android, iOS and Web. Security, DigiLocker/AA integrations and release automation.",
    stack: "Flutter · Dart · BLoC · Clean Architecture · REST · GoRouter · Firebase · Fastlane · GitLab CI/CD",
  },
  {
    when: "JAN → MAY 2024",
    title: "SDE Intern",
    note: "→ converted to full-time",
    text: "Partner Onboarding portal for the LOS: responsive layouts for mobile, tablet and web with BLoC/Cubit, built test-first, plus code reviews and QA/UAT support.",
    stack: "Flutter · Dart · BLoC · TDD · Unit & widget testing · Git",
  },
];

const STAGES = [
  { name: "Lead & onboarding", text: "Partner Portal for agent leads. Onboarding automated for 100+ partners." },
  { name: "KYC & documents", text: "In-app CKYC replacing manual calls. DigiLocker and Account Aggregator." },
  { name: "Credit & sanction", text: "Sanction workflow redesign, 80% faster. Multi-insurance in the flow." },
  { name: "Disbursement", text: "SOA, IC, NOC and RPS downloads in the LOS." },
  { name: "Repayment", text: "EMI plans, self-serve documents and FCM push notifications." },
];

const LEDGER = [
  { product: "LOS Portal", title: "Loan sanction redesign.", text: "Credit team sees every applicant detail in one place.", effect: "−80% time", accent: true },
  { product: "Student App", title: "Post-disbursement journey.", text: "Self-serve SOA, IC, NOC and RPS downloads for borrowers.", effect: "−80% effort", accent: true },
  { product: "Partner Onboarding", title: "Automated onboarding", text: "for 100+ partners (internship).", effect: "−90% work", accent: true },
  { product: "LOS Portal", title: "Multi-insurance selection", text: "introduced into the loan flow.", effect: "−70% effort", accent: true },
  { product: "Student App", title: "In-app CKYC.", text: "Replaced the credit team's manual calls; applications fully compliant.", effect: "compliance" },
  { product: "All platforms", title: "Security.", text: "MFA (OTP/TOTP), JWT sessions and data encryption for applicant and loan data.", effect: "3 platforms" },
  { product: "All platforms", title: "DigiLocker & Account Aggregator", text: "for a document-free journey.", effect: "2 flows" },
  { product: "Student App", title: "EMI repayment plans", text: "and in-house FCM push notifications via platform channels.", effect: "shipped" },
  { product: "Release", title: "Fastlane + GitLab CI/CD", text: "automating Android and iOS releases; Crashlytics root-cause fixes.", effect: "automated" },
  { product: "Partner Portal", title: "Lead onboarding platform", text: "where agents and partners submit loan leads.", effect: "launched" },
];

const STACK = [
  { group: "Flutter & Dart", core: true, items: "BLoC / Cubit · Clean Architecture · Dio · GoRouter · GetIt · Freezed · Flutter Web · Material 3 · Platform Channels · FCM · Deep Linking · Offline-first" },
  { group: "Quality", items: "Unit & widget testing · TDD · SOLID · MVVM · Crashlytics" },
  { group: "Release & DevOps", items: "Fastlane · Play Store · App Store · GitLab CI/CD · Git · Gradle" },
  { group: "Security & data", items: "MFA · JWT · Encryption · Secure Storage · SQL · Firestore · Remote Config" },
  { group: "Also", items: "Java · React / Next · Agile / Scrum · Low-level design" },
  { group: "Tools", items: "Claude Code · Cursor · Android Studio · Xcode · Jira · Postman · Swagger" },
];

const FUN_PROJECTS = [
  { name: "Filmo Ki Duniya", text: "Movie discovery app — every kind of film in one place.", live: "https://filmokiduniya.vercel.app/", code: "https://github.com/Abhiiiiijit/movie_app" },
  { name: "Bring Me Meal", text: "Food-ordering app on React, Node, Express and MongoDB.", code: "https://github.com/Abhiiiiijit/Food-Delivery" },
  { name: "Alcohol-Sensed Engine Lock", text: "IoT group build on Arduino UNO with a gas sensor, motors, LCD and Wi-Fi.", code: "https://github.com/Abhiiiiijit/Alcohol-Sensed-Engine-Lock-System" },
  { name: "Anti-Theft Delivery Vehicle", text: "4WD robot on Arduino UNO + Mega, driven by RF remote.", code: "https://github.com/Abhiiiiijit/IoT-based-Anti-Theft-Ecommerce-Vehicle" },
  { name: "Sales Forecasting", text: "Power BI visualisation of sales forecast data.", code: "https://github.com/Abhiiiiijit/Forecasting-Sales" },
];

const HOBBIES = ["Photography", "Travel", "Sports"];

const SCHOOLS = [
  { name: "PACE Junior Science College", detail: "Borivali, Mumbai · 12th HSC", score: "88.9%" },
  { name: "SSPM's SSRVM", detail: "Borivali, Mumbai · 10th CBSE", score: "94.6%" },
];

function App() {
  return (
    <div className="page">
      <nav className="nav" aria-label="Primary">
        <div className="wrap nav-inner">
          <a className="brand" href="#top">Abhijit Bose Das</a>
          <div className="nav-links">
            <a href="#entries">01 Job</a>
            <a href="#stack">02 Stack</a>
            <a href="#side">03 Side work</a>
            <a href="#personal">04 Off the clock</a>
            <a href="#contact">05 Contact</a>
          </div>
        </div>
      </nav>

      <main>
        <header id="top" className="wrap hero">
          <div className="meta">
            <span>Statement of account</span>
            <span>Holder: Abhijit Bose Das</span>
            <span>Branch: Mumbai</span>
            <span className="accent">● Open to Flutter roles</span>
          </div>
          <div className="hero-row">
            <h1>Flutter engineer.<br />Student-loan fintech.<br /><span className="dim">2.5 years, compounding.</span></h1>
            <img className="portrait" src={portrait} alt="Abhijit Bose Das" />
          </div>
          <p className="lede">
            SDE I at Kuhoo Finance. Three products shipped across the loan lifecycle — onboarding, CKYC, sanction and
            servicing — cutting manual effort by 70–90% for credit, partner and servicing teams.
          </p>
          <div className="cta">
            <a className="btn primary" href="#entries">View the statement</a>
            <a className="btn" href={GITHUB} target="_blank" rel="noreferrer">GitHub ↗</a>
            <a className="btn" href={LINKEDIN} target="_blank" rel="noreferrer">LinkedIn ↗</a>
          </div>
        </header>

        <section className="balances" aria-label="Balance summary">
          <div className="wrap balances-grid">
            {BALANCES.map((b) => (
              <div className="balance" key={b.label}>
                <div className={b.accent ? "balance-value accent" : "balance-value"}>{b.value}</div>
                <div className="balance-label">{b.label}</div>
              </div>
            ))}
          </div>
        </section>

        <section id="entries" className="wrap section">
          <div className="sec-head">
            <h2>01 — Job</h2>
            <span className="mono muted">Jan 2024 → present</span>
          </div>

          <div className="job">
            <div className="employer">
              <div className="label">EMPLOYER</div>
              <h3>Kuhoo Finance</h3>
              <p>Student-lending fintech (NBFC) · BKC, Mumbai</p>
              <p>
                I own features across three products — the borrower app, the credit team's LOS and the partner portal —
                from requirements and low-level design to release, in Agile sprints with product, backend, design and credit.
              </p>
              <div className="employer-links">
                <a href="https://www.kuhoo.com/" target="_blank" rel="noreferrer">kuhoo.com ↗</a>
                <a href="https://www.linkedin.com/company/kuhoo-edufintech/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
              </div>
            </div>
            <ol className="roles">
              {ROLES.map((r) => (
                <li key={r.title}>
                  <div className={r.current ? "role-when accent" : "role-when"}>{r.when}</div>
                  <div className="role-body">
                    <h3>{r.title}{r.note && <span className="role-note"> {r.note}</span>}</h3>
                    <p>{r.text}</p>
                    <p className="role-stack">{r.stack}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <h3 className="kicker accent">ACROSS THE LOAN LIFECYCLE · 5 STAGES</h3>
          <ol className="stages">
            {STAGES.map((s, i) => (
              <li className={i === 0 ? "stage first" : "stage"} key={s.name}>
                <div className="stage-num">{String(i + 1).padStart(2, "0")}</div>
                <h4>{s.name}</h4>
                <p>{s.text}</p>
              </li>
            ))}
          </ol>

          <h3 className="kicker accent">WHAT I SHIPPED · LEDGER</h3>
          <div className="table-scroll">
            <table className="ledger">
              <thead>
                <tr>
                  <th className="col-product">Product</th>
                  <th>Entry</th>
                  <th className="col-effect">Effect</th>
                </tr>
              </thead>
              <tbody>
                {LEDGER.map((row) => (
                  <tr key={row.title}>
                    <td className="cell-product">{row.product}</td>
                    <td><strong>{row.title}</strong> {row.text}</td>
                    <td className={row.accent ? "cell-effect accent" : "cell-effect"}>{row.effect}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section id="stack" className="wrap section">
          <h2>02 — Stack</h2>
          <div className="stack-grid">
            {STACK.map((s) => (
              <div className="stack-cell" key={s.group}>
                <h3 className={s.core ? "label accent" : "label"}>{s.group.toUpperCase()}</h3>
                <p>{s.items}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="side" className="wrap section">
          <h2>03 — Side work</h2>
          <div className="side">
            <article className="side-project">
              <div className="label">2026 · FLUTTER · SQLITE · OFFLINE-FIRST</div>
              <h3>Khush-Hal</h3>
              <p>
                An MSME health app and field-officer portal for rural small businesses — offline-first with an on-device sync
                engine, Hindi and English, live-location maps, and a 6-feature officer portal.
              </p>
              <a className="mono" href="https://github.com/RishabhSharma02/Khushhal-Frontend" target="_blank" rel="noreferrer">View on GitHub ↗</a>
            </article>
            <aside className="award">
              <div className="mono">NABARD HACKATHON · GFF 2026</div>
              <div className="award-rank">Top 10</div>
              <p>Finish at Global Fintech Fest 2026 with a 5-member team.</p>
            </aside>
          </div>
        </section>

        <section id="personal" className="wrap section">
          <div className="sec-head">
            <h2>04 — Off the clock</h2>
            <span className="mono muted">Unaudited entries</span>
          </div>

          <h3 className="kicker accent">BUILT FOR FUN · BEFORE FLUTTER</h3>
          <div className="table-scroll">
            <table className="ledger fun">
              <thead>
                <tr>
                  <th className="col-project">Project</th>
                  <th>What it is</th>
                  <th className="col-links">Links</th>
                </tr>
              </thead>
              <tbody>
                {FUN_PROJECTS.map((p) => (
                  <tr key={p.name}>
                    <td className="cell-name">{p.name}</td>
                    <td className="cell-dim">{p.text}</td>
                    <td className="cell-links">
                      {p.live && <><a href={p.live} target="_blank" rel="noreferrer">Live</a> · </>}
                      <a href={p.code} target="_blank" rel="noreferrer">Code</a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <a className="more mono" href={GITHUB} target="_blank" rel="noreferrer">More on GitHub ↗</a>

          <h3 className="kicker muted spaced">HOBBIES</h3>
          <p className="hobbies">{HOBBIES.join(" · ")}</p>

          <h3 className="kicker muted spaced">OPENING BALANCE · SCHOOL</h3>
          <div className="schools">
            {SCHOOLS.map((s) => (
              <div className="school" key={s.name}>
                <span><strong>{s.name}</strong> <span className="muted">· {s.detail}</span></span>
                <span className="mono">{s.score}</span>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="wrap contact">
          <h2>Have something to build?<br /><span className="dim">Let's reconcile.</span></h2>
          <div className="contact-lines">
            <div className="cline"><span className="k">EMAIL</span><a href={`mailto:${EMAIL}`}>{EMAIL}</a></div>
            <div className="cline"><span className="k">LINKEDIN</span><a href={LINKEDIN} target="_blank" rel="noreferrer">in/abhijit-bose-das</a></div>
            <div className="cline"><span className="k">PHONE</span><a href={`tel:${PHONE}`}>{PHONE_LABEL}</a></div>
            <div className="cline"><span className="k">WHATSAPP</span><a href={WHATSAPP} target="_blank" rel="noreferrer">Message on WhatsApp ↗</a></div>
            <div className="cline"><span className="k">GITHUB</span><a href={GITHUB} target="_blank" rel="noreferrer">github.com/Abhiiiiijit</a></div>
          </div>
          <footer className="footer">
            <span>© {new Date().getFullYear()} Abhijit Bose Das</span>
            <span>Closing balance: still compounding</span>
          </footer>
        </section>
      </main>
    </div>
  );
}

export default App;
