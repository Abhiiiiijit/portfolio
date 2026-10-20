import { useState } from "react";
import "./App.css";
import portrait from "./assets/portrait.jpg";

const EMAIL = "abhijeetbosedas8@gmail.com";
const GITHUB = "https://github.com/Abhiiiiijit";
const LINKEDIN = "https://linkedin.com/in/abhijitbosedas";

const STATS = [
  { value: "150K+", label: "Student App downloads" },
  { value: "3", label: "Products shipped" },
  { value: "80%", label: "Faster loan sanction" },
  { value: "2.5+ yrs", label: "Flutter in fintech" },
];

const LIFECYCLE = [
  {
    stage: "Lead & onboarding",
    items: [
      ["Partner Portal", " for agents to submit loan leads"],
      ["Partner onboarding", " automated for 100+ partners"],
    ],
  },
  {
    stage: "KYC & documents",
    items: [
      ["In-app CKYC", " replacing manual calls"],
      ["DigiLocker & Account Aggregator", " flows"],
    ],
  },
  {
    stage: "Credit & sanction",
    items: [
      ["Sanction workflow", " redesign, 80% faster"],
      ["Multi-insurance", " selection in the loan flow"],
    ],
  },
  {
    stage: "Disbursement",
    items: [["SOA, IC, NOC, RPS", " downloads in the LOS"]],
  },
  {
    stage: "Repayment & servicing",
    items: [
      ["EMI repayment plans", " for customers"],
      ["Self-serve documents", " and FCM push notifications"],
    ],
  },
];

const PRODUCTS = [
  {
    name: "Kuhoo Student App",
    platform: "Android & iOS · 100K+ Play Store · 50K+ App Store",
    items: [
      { title: "Post-disbursement journey.", text: "Built self-serve SOA, IC, NOC and RPS downloads for borrowers.", metric: "−80%", unit: "manual effort" },
      { title: "CKYC.", text: "Designed the in-app CKYC journey, replacing the credit team's manual calls and making applications fully compliant." },
      { title: "Repayment plans.", text: "Added predefined EMI plans so repayment is simpler and more predictable." },
      { title: "Push notifications.", text: "Took in-house notifications from requirement to production with FCM and native platform channels." },
    ],
  },
  {
    name: "Loan Origination System Portal",
    platform: "Flutter Web",
    items: [
      { title: "Loan sanction.", text: "Redesigned the sanction workflow so the credit team sees every applicant detail in one place.", metric: "−80%", unit: "sanction time" },
      { title: "Multi-insurance.", text: "Introduced multi-insurance selection into the loan flow.", metric: "−70%", unit: "manual effort" },
      { title: "Document downloads.", text: "Shipped post-disbursement downloads for 4 document types, giving LOS users complete applicant records.", metric: "4", unit: "doc types" },
    ],
  },
  {
    name: "Partner Portal",
    platform: "Flutter Web",
    items: [
      { title: "Lead onboarding.", text: "Launched the platform where agents and onboarded partners submit loan leads." },
    ],
  },
  {
    name: "Cross-platform work",
    platform: "Web, Android & iOS",
    items: [
      { title: "Security.", text: "Implemented multi-factor authentication (OTP/TOTP), JWT-based sessions and data encryption, protecting sensitive applicant and loan data.", metric: "3", unit: "platforms" },
      { title: "DigiLocker & Account Aggregator.", text: "Defined and integrated both flows for a document-free journey with minimal manual input.", metric: "2", unit: "flows" },
      { title: "Stability.", text: "Diagnosed and fixed crashes through root cause analysis and Firebase Crashlytics." },
      { title: "Release automation.", text: "Improved the CI/CD pipeline and automated Android and iOS releases with Fastlane and GitLab CI/CD." },
    ],
  },
];

const INTERN_ITEMS = [
  { title: "Automated partner onboarding", text: " for 100+ partners.", metric: "−90%", unit: "manual work" },
  { title: "Responsive layouts", text: " for mobile, tablet and web using BLoC/Cubit and REST APIs, built test-first with unit and widget tests, plus code reviews and QA/UAT support.", metric: "3", unit: "form factors" },
];

const SKILLS = [
  { group: "Flutter & Dart", core: true, items: ["BLoC / Cubit", "Clean Architecture", "Dio", "GoRouter", "GetIt", "Freezed", "Flutter Web", "Material 3", "Platform Channels", "FCM", "Deep Linking", "Offline-first", "Responsive UI"] },
  { group: "Quality", items: ["Unit Testing", "Widget Testing", "TDD", "SOLID", "MVVM", "Crashlytics"] },
  { group: "Release & DevOps", items: ["Fastlane", "Play Store", "App Store", "GitLab CI/CD", "Git", "Gradle"] },
  { group: "Security & data", items: ["MFA", "JWT", "Encryption", "Secure Storage", "SQL", "Firestore", "Remote Config"] },
  { group: "Process", items: ["Agile / Scrum", "Low-Level Design", "Design Reviews"] },
  { group: "Also", items: ["Java", "React / Next"] },
  { group: "Tools", items: ["Claude Code", "Cursor", "VS Code", "Android Studio", "Xcode", "DBeaver", "Jira", "Swagger", "Postman"] },
];

const SDE_STACK = ["Flutter", "Dart", "BLoC", "Clean Architecture", "REST APIs", "GoRouter", "Firebase", "Fastlane", "GitLab CI/CD", "Claude Code"];
const INTERN_STACK = ["Flutter", "Dart", "BLoC", "TDD", "Unit & Widget Testing", "Git"];

function Chips({ items }) {
  return (
    <div className="stack">
      {items.map((s) => (
        <span className="chip" key={s}>{s}</span>
      ))}
    </div>
  );
}

function Product({ name, platform, items }) {
  return (
    <div className="product">
      <div className="product-head">
        <h3>{name}</h3>
        <span className="platform">{platform}</span>
      </div>
      <ul className="items">
        {items.map((it) => (
          <li key={it.title}>
            <p><strong>{it.title}</strong> {it.text}</p>
            {it.metric && (
              <span className="metric">{it.metric}<small>{it.unit}</small></span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

function CopyEmail() {
  const [label, setLabel] = useState("Copy");
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setLabel("Copied");
    } catch {
      setLabel("Press Ctrl+C");
    }
    setTimeout(() => setLabel("Copy"), 1600);
  };
  return <button className="copy" type="button" onClick={copy}>{label}</button>;
}

function App() {
  return (
    <>
      <nav className="nav" aria-label="Primary">
        <div className="wrap">
          <a className="brand" href="#top">abhijitbosedas<span>.</span>com</a>
          <ul>
            <li><a href="#lifecycle">Lifecycle</a></li>
            <li><a href="#work">Work</a></li>
            <li className="hide-sm"><a href="#skills">Skills</a></li>
            <li className="hide-sm"><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      <main id="top">
        <header className="wrap hero">
          <div className="hero-grid">
            <div className="hero-text">
              <div className="eyebrow">
                <span className="dot" aria-hidden="true"></span>
                <span>SDE I at Kuhoo Finance</span>
                <span>Mumbai, Maharashtra</span>
              </div>
              <h1>Abhijit Bose Das<br /><span className="soft">builds Flutter apps for student loans.</span></h1>
              <p className="lede">
                Flutter developer with 2.5+ years in student-lending fintech. I've shipped three products across the loan
                lifecycle, from onboarding and CKYC to sanction and post-disbursement, and <mark>cut manual effort by 70–90%</mark>{" "}
                for credit, partner and servicing teams with RBI-compliant journeys.
              </p>
              <div className="cta">
                <a className="btn primary" href="#work">See the work</a>
                <a className="btn" href={GITHUB} target="_blank" rel="noreferrer">GitHub</a>
                <a className="btn" href={LINKEDIN} target="_blank" rel="noreferrer">LinkedIn</a>
              </div>
            </div>
            <img className="portrait" src={portrait} alt="Abhijit Bose Das" width="280" height="280" />
          </div>
          <div className="stats">
            {STATS.map((s) => (
              <div className="stat" key={s.label}><b>{s.value}</b><span>{s.label}</span></div>
            ))}
          </div>
        </header>

        <section id="lifecycle" className="wrap">
          <div className="sec-head">
            <h2>Across the loan lifecycle</h2>
            <span className="sec-note">What I shipped at each stage of a student loan</span>
          </div>
          <div className="track">
            {LIFECYCLE.map((s, i) => (
              <div className="stage" key={s.stage}>
                <div className="node">{i + 1}</div>
                <h4>{s.stage}</h4>
                <ul>
                  {s.items.map(([bold, rest]) => (
                    <li key={bold}><strong>{bold}</strong>{rest}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section id="work" className="wrap">
          <div className="sec-head">
            <h2>Experience</h2>
            <span className="sec-note">Kuhoo Finance · Jan 2024 – present</span>
          </div>

          <article className="role">
            <div className="role-meta">
              <div className="when">May 2024 – Present</div>
              <h3>Software Development Engineer I</h3>
              <div className="org">Kuhoo Finance, Mumbai</div>
            </div>
            <div className="role-body">
              <p>
                I own features across three products, from requirement analysis and low-level design through to release,
                working with product, backend, design and credit teams in Agile sprints.
              </p>
              <Chips items={SDE_STACK} />
              {PRODUCTS.map((p) => <Product key={p.name} {...p} />)}
            </div>
          </article>

          <article className="role">
            <div className="role-meta">
              <div className="when">Jan 2024 – May 2024</div>
              <h3>SDE Intern</h3>
              <div className="org">Kuhoo Finance, Mumbai</div>
            </div>
            <div className="role-body">
              <Chips items={INTERN_STACK} />
              <Product name="Partner Onboarding Portal" platform="LOS sub-portal · Flutter" items={INTERN_ITEMS} />
            </div>
          </article>
        </section>

        <section id="skills" className="wrap">
          <div className="sec-head"><h2>Technical skills</h2></div>
          <div className="skills">
            {SKILLS.map((s) => (
              <div className={s.core ? "skill core" : "skill"} key={s.group}>
                <h4>{s.group}</h4>
                <Chips items={s.items} />
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="wrap">
          <div className="sec-head"><h2>Projects &amp; recognition</h2></div>
          <div className="duo">
            <article className="project">
              <div className="product-head">
                <h3>Khush-Hal</h3>
                <span className="platform">2026 · Flutter · SQLite · Offline-first</span>
              </div>
              <p>An MSME health app and field-officer portal for rural small businesses, built with a 5-member team.</p>
              <ul>
                <li>Offline-first Flutter app with on-device SQLite and a sync engine, so it works where connectivity doesn't.</li>
                <li>Localized in Hindi and English, with live-location maps, built with AI-assisted development.</li>
                <li>Field-officer portal with 6 features: one-eye view, document parsing, alerts, review-based filters, AI-driven plans and forecasting.</li>
              </ul>
              <a href="https://github.com/RishabhSharma02/Khushhal-Frontend" target="_blank" rel="noreferrer">View on GitHub →</a>
            </article>
            <aside className="award">
              <div className="when">NABARD Hackathon · GFF 2026</div>
              <div className="rank">Top 10<small>finish</small></div>
              <p>Placed in the top 10 at the NABARD Hackathon at Global Fintech Fest 2026 with a 5-member team.</p>
            </aside>
          </div>
        </section>

        <section id="education" className="wrap">
          <div className="sec-head"><h2>Education</h2></div>
          <div className="edu">
            <div>
              <h3>Vellore Institute of Technology, AP</h3>
              <p>B.Tech, Computer Science and Engineering · 2020 – 2024</p>
            </div>
            <div className="gpa">8.72 <small>/ 10 GPA</small></div>
          </div>
        </section>

        <section id="contact" className="wrap contact">
          <h2>Building something in Flutter? Let's talk.</h2>
          <div className="contact-grid">
            <div className="cline">
              <span className="k">Email</span>
              <a className="v" href={`mailto:${EMAIL}`}>{EMAIL}</a>
              <CopyEmail />
            </div>
            <div className="cline"><span className="k">LinkedIn</span><a className="v" href={LINKEDIN} target="_blank" rel="noreferrer">in/abhijitbosedas</a></div>
            <div className="cline"><span className="k">GitHub</span><a className="v" href={GITHUB} target="_blank" rel="noreferrer">github.com/Abhiiiiijit</a></div>
          </div>
        </section>
      </main>

      <footer>
        <div className="wrap">
          <span>© {new Date().getFullYear()} Abhijit Bose Das</span>
          <span>Flutter · Android · iOS · Web</span>
        </div>
      </footer>
    </>
  );
}

export default App;
