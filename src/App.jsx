import React, { useEffect, useState } from "react";
import "./App.css";
import manusysLogo from "./assets/ame_logo.jpg";
import deptBuilding from "./assets/dept_building.png";
import kollywoodQuizImg from "./assets/kollywood_quiz.png";
import quantumQuiverImg from "./assets/quantum_quiver.png";
import technicalQuizImg from "./assets/technical_quiz.png";
import projectDisplayImg from "./assets/project_display.png";
import silentIdeationImg from "./assets/silent_ideation.png";
import connexionsImg from "./assets/connexions.png";
import treasureHuntImg from "./assets/treasure_hunt.png";
import soundPartyImg from "./assets/sound_party.png";
import sponsorRp3d from "./assets/sponsor_rp3d.png";
import sponsorElcon from "./assets/sponsor_elcon.png";
import sponsorDome from "./assets/sponsor_dome.png";
import sponsorMte from "./assets/sponsor_mte.png";
import sponsorAddblu from "./assets/sponsor_addblu.png";
import sponsorPremierSteel from "./assets/sponsor_premier_steel.png";
import sponsorMastek from "./assets/sponsor_mastek.png";
import sponsorMassPower from "./assets/sponsor_mass_power.png";
import sponsorTspc from "./assets/sponsor_tspc.png";
import sponsorVinayaga from "./assets/sponsor_vinayaga.png";
import sponsorNanoTech from "./assets/sponsor_nano_tech.png";
import thankyouBunny from "./assets/thankyou_bunny.png";
import teamAkash from "./assets/team_akash.png";
import teamVishnu from "./assets/team_vishnu.png";
import teamDhivya from "./assets/team_dhivya.png";
import teamHariharan from "./assets/team_hariharan.png";
import teamAlthin from "./assets/team_althin.png";
import teamRoshan from "./assets/team_roshan.png";
import teamDaksshin from "./assets/team_daksshin.png";
import teamNavinkumaar from "./assets/team_navinkumaar.png";
import teamRahul from "./assets/team_rahul.png";
import teamSanthosh from "./assets/team_santhosh.png";
import teamMadhusree from "./assets/team_madhusree.png";
import teamDhatshayini from "./assets/team_dhatshayini.png";
import teamManikandan from "./assets/team_manikandan.png";
import teamKiruthika from "./assets/team_kiruthika.png";
import teamSanjana from "./assets/team_sanjana.png";
import teamSaranya from "./assets/team_saranya.png";
import teamMadhumitha from "./assets/team_madhumitha.png";
import teamRusil from "./assets/team_rusil.png";
import teamPranav from "./assets/team_pranav.png";
import teamEzhilarasu from "./assets/team_ezhilarasu.png";

/* ─── STARFIELD ──────────────────────────────────────────── */
const Starfield = () => {
  useEffect(() => {
    const container = document.getElementById("stars");
    if (!container || container.children.length > 0) return;
    for (let i = 0; i < 150; i++) {
      const s = document.createElement("div");
      s.className = "star";
      const size = Math.random() * 2.5 + 0.5;
      s.style.cssText = `
        width:${size}px; height:${size}px;
        top:${Math.random() * 100}%; left:${Math.random() * 100}%;
        --d:${(Math.random() * 4 + 2).toFixed(1)}s;
        --delay:-${(Math.random() * 6).toFixed(1)}s;
      `;
      container.appendChild(s);
    }
  }, []);
  return <div id="stars" />;
};

/* ─── NAV ────────────────────────────────────────────────── */
const Nav = ({ activeTab, setActiveTab }) => {
  const tabs = ["Home", "Events", "Workshops", "Domain Heads", "Contact"];
  return (
    <nav className="nav-bar">
      <div className="nav-logo-small">
        <img src={manusysLogo} alt="Manusys" className="nav-logo-img" />
      </div>
      <div className="nav-tabs">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`nav-tab ${activeTab === tab ? "active" : ""}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
    </nav>
  );
};

/* ─── SPONSORS ───────────────────────────────────────────── */
const sponsors = [
  { img: sponsorRp3d, name: "RP3D Products" },
  { img: sponsorElcon, name: "Elcon" },
  { img: sponsorDome, name: "DoME Alumni" },
  { img: sponsorMte, name: "MTE Engineering" },
  { img: sponsorAddblu, name: "Addblu" },
  { img: sponsorPremierSteel, name: "Premier Steel Components" },
  { img: sponsorMastek, name: "Mastek Engineering" },
  { img: sponsorMassPower, name: "Mass Power" },
  { img: sponsorTspc, name: "TSPC" },
  { img: sponsorVinayaga, name: "Vinayaga Graphics" },
  { img: sponsorNanoTech, name: "Nano Tech" },
];

const SponsorsMarquee = () => {
  const [current, setCurrent] = useState(0);
  const [fading, setFading] = useState(false);

  const goTo = (idx) => {
    setFading(true);
    setTimeout(() => {
      setCurrent(idx);
      setFading(false);
    }, 400);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      goTo((current + 1) % sponsors.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [current]);

  return (
    <div className="sponsors-section">
      <div className="sponsors-label">
        <span className="sponsors-line" />
        <span className="sponsors-title">OUR SPONSORS</span>
        <span className="sponsors-line" />
      </div>

      <div className="sponsor-full-card">
        {/* Blurred bg */}
        <div
          className="sponsor-full-bg"
          style={{ backgroundImage: `url(${sponsors[current].img})` }}
        />
        {/* Logo centered */}
        <div className={`sponsor-full-logo ${fading ? "sp-fade-out" : "sp-fade-in"}`}>
          <img src={sponsors[current].img} alt={sponsors[current].name} />
        </div>
        {/* Dots */}
        <div className="sponsor-dots">
          {sponsors.map((_, i) => (
            <span
              key={i}
              className={`sponsor-dot ${i === current ? "active" : ""}`}
              onClick={() => goTo(i)}
            />
          ))}
        </div>
      </div>

      <div className="sponsors-thankyou">
        <img src={thankyouBunny} alt="Thank you" className="thankyou-bunny" />
        <div className="thankyou-heading">Thank you for Sponsoring</div>
      </div>
    </div>
  );
};

/* ─── HOME ───────────────────────────────────────────────── */
const aboutSections = [
  {
    label: "Department",
    content: "The Department of Manufacturing Engineering at College of Engineering, Guindy is one of the premier departments dedicated to advancing knowledge and innovation in manufacturing technologies. With a strong academic legacy, the department focuses on equipping students with both theoretical foundations and practical skills required in modern industrial environments. The department offers undergraduate, postgraduate, and research programs that cover key areas such as production processes, automation, computer-aided manufacturing (CAM), robotics, industrial engineering, and smart manufacturing systems.",
  },
  {
    label: "AME",
    content: "The Association of Manufacturing Engineering (AME) is the official student body of the Department of Manufacturing Engineering at College of Engineering, Guindy. It serves as a platform to promote technical knowledge, innovation, and professional development among students. AME plays a vital role in bridging the gap between academic learning and industrial practices by organizing a wide range of activities, including technical workshops, seminars, symposiums, guest lectures, and industrial visits.",
  },
  {
    label: "Manusys",
    content: "MANUSYS is the flagship national-level technical symposium organized by the Association of Manufacturing Engineering (AME) of the Department of Manufacturing Engineering at College of Engineering, Guindy.",
  },
];

const Home = () => {
  const letters = ["M", "A", "N", "U", "S", "Y", "S"];

  return (
    <section className="home-section">
      {/* Hero letters */}
      <div className="manusys-row">
        {letters.map((letter, i) => <span key={i} style={{ animationDelay: `${i * 0.2}s` }}>{letter}</span>)}
      </div>
      <div className="industry-tag">
        <span className="industry-line" />
        <span className="industry-text">INDUSTRY 5.0</span>
        <span className="industry-line" />
      </div>

      {/* Department building image */}
      <div className="dept-building-wrap">
        <img src={deptBuilding} alt="Department of Manufacturing Engineering" className="dept-building-img" />
        <div className="dept-building-overlay">
          <span>Department of Manufacturing Engineering</span>
          <span className="dept-building-sub">College of Engineering, Guindy · Anna University</span>
        </div>
      </div>

      {/* About — stacked single page */}
      <div className="about-stack-panel">
        <div className="about-stack-heading">About</div>
        {aboutSections.map((s, i) => (
          <div key={i} className="about-stack-block">
            <div className="about-stack-label">{s.label}</div>
            <p className="about-stack-text">{s.content}</p>
          </div>
        ))}
      </div>

      <SponsorsMarquee />
    </section>
  );
};

/* ─── EVENT CARD ─────────────────────────────────────────── */
const EventCard = ({ image, title, description, date, prize, contacts, registerLink, delay }) => (
  <div className="ev-card" style={{ animationDelay: `${delay}s` }}>
    <div className="ev-card-img-wrap">
      <img src={image} alt={title} className="ev-card-img" />
    </div>
    <div className="ev-card-body">
      <h3 className="ev-card-title">{title}</h3>
      {date && <div className="ev-card-meta">📅 {date}</div>}
      {prize && <div className="ev-card-meta ev-card-prize">💰 {prize}</div>}
      <p className="ev-card-desc">{description}</p>
      {contacts && contacts.length > 0 && (
        <div className="ev-card-contacts">
          {contacts.map((c, i) => <div key={i} className="ev-contact-row"><span className="ev-contact-icon">📞</span><span>{c}</span></div>)}
        </div>
      )}
      <a href={registerLink || "#"} target="_blank" rel="noopener noreferrer" className="ev-register-btn">Register Now →</a>
    </div>
  </div>
);

const techEventsData = [
  { image: quantumQuiverImg, title: "Quantum Quiver", description: "Description coming soon.", date: "March 26 & 27", prize: "Entry Free", contacts: ["Haresh G: 6369610507", "Nithesh SK: 8608126812"], registerLink: "#" },
  { image: technicalQuizImg, title: "Technical Quiz", description: "Description coming soon.", date: "March 26", prize: "Entry Free · Win Exciting Prizes", contacts: ["Divya K: +91 81226 84027", "Rushwanth: +91 80566 58677"], registerLink: "#" },
  { image: projectDisplayImg, title: "Project Display", description: "Description coming soon.", date: "March 27", prize: null, contacts: ["Viswa Karthick: 7695988617", "Malavika: 7358084937"], registerLink: "#" },
  { image: silentIdeationImg, title: "Silent Ideation", description: "Description coming soon.", date: "March 26", prize: null, contacts: ["Mansha DF: +91 81226 59768", "Viswa Karthick: +91 76959 88617"], registerLink: "#" },
];
const nonTechEventsData = [
  { image: connexionsImg, title: "Connexions", description: "Description coming soon.", date: "March 27", prize: null, contacts: ["Pavisree: +91 89401 85215", "Rakshanth: +91 95249 29459"], registerLink: "#" },
  { image: treasureHuntImg, title: "Treasure Hunt", description: "Description coming soon.", date: "March 26", prize: null, contacts: ["Jayanth: +91 86673 12615", "Dhyanesh: +91 99449 99728"], registerLink: "#" },
  { image: soundPartyImg, title: "Sound Party", description: "Description coming soon.", date: "March 26", prize: null, contacts: ["Venkat: +91 98428 04962", "Abdul Rahman: +91 84288 14584"], registerLink: "#" },
  { image: kollywoodQuizImg, title: "Kollywood Quiz", description: "Lights… Camera… Quiz! 🎥✨ Are you a true Kollywood fan? Test your knowledge on movies, actors, iconic dialogues, and music from Tamil cinema! From classic hits to blockbuster films — bring your movie knowledge and compete with fellow cinema lovers! 🍿🔥", date: "March 26", prize: "Exciting cash prize", contacts: ["Rithik: +91 98846 37968", "Bhavna: +91 63839 69100"], registerLink: "#" },
];

/* ─── EVENTS ─────────────────────────────────────────────── */
const Events = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const filters = ["All", "Tech Events", "Non-Tech Events"];
  return (
    <section className="content-section">
      <div className="events-subnav">
        {filters.map((f) => <button key={f} className={`events-subnav-tab ${activeFilter === f ? "active" : ""}`} onClick={() => setActiveFilter(f)}>{f}</button>)}
      </div>
      <div className="events-body">
        {activeFilter === "All" && <div className="ev-cards-grid">{[...techEventsData, ...nonTechEventsData].map((e, i) => <EventCard key={i} {...e} delay={i * 0.06} />)}</div>}
        {activeFilter === "Tech Events" && <div className="ev-cards-grid">{techEventsData.map((e, i) => <EventCard key={i} {...e} delay={i * 0.08} />)}</div>}
        {activeFilter === "Non-Tech Events" && <div className="ev-cards-grid">{nonTechEventsData.map((e, i) => <EventCard key={i} {...e} delay={i * 0.08} />)}</div>}
      </div>
    </section>
  );
};

/* ─── WORKSHOPS ──────────────────────────────────────────── */
const Workshops = () => (
  <section className="content-section">
    <h2 className="section-title">WORKSHOPS</h2>
    <div className="events-coming-soon"><span>Nothing Yet</span></div>
  </section>
);

/* ─── DOMAIN HEADS ───────────────────────────────────────── */
const domains = [
  {
    name: "Human Resources",
    color: "rgba(0,150,255,0.7)",
    members: [
      { name: "Akash J", img: teamAlthin },
      { name: "Vishnu K", img: teamRoshan },
      { name: "Dhivya E", img: teamDaksshin },
      { name: "Hariharan M", img: teamNavinkumaar },
    ],
  },
  {
    name: "Industrial Relations",
    color: "rgba(230,120,180,0.7)",
    members: [
      { name: "Althin S V", img: teamAkash },
      { name: "Roshan T", img: teamVishnu },
      { name: "Daksshin G", img: teamDhivya },
      { name: "Navinkumaar P", img: teamHariharan },
    ],
  },
  {
    name: "Content & Documentation",
    color: "rgba(26,251,240,0.65)",
    members: [
      { name: "Rahul B T", img: teamRahul },
      { name: "Santhosh Kumar K", img: teamSanthosh },
      { name: "Madhusree G S", img: teamMadhusree },
    ],
  },
  {
    name: "Marketing & Media",
    color: "rgba(212,168,67,0.75)",
    members: [
      { name: "Dhatshayini R", img: teamDhatshayini },
      { name: "Manikandan M", img: teamManikandan },
    ],
  },
  {
    name: "Hospitality",
    color: "rgba(180,120,255,0.7)",
    members: [
      { name: "Kiruthika M", img: teamKiruthika },
      { name: "Sanjana Sree S", img: teamSanjana },
      { name: "Saranya R", img: teamSaranya },
    ],
  },
  {
    name: "Website & Magazine",
    color: "rgba(100,220,130,0.7)",
    members: [
      { name: "Madhumitha R", img: teamMadhumitha },
      { name: "Rusil V", img: teamRusil },
      { name: "Pranav Naren A V", img: teamPranav },
      { name: "Ezhilarasu S", img: teamEzhilarasu },
    ],
  },
];

const DomainHeads = () => (
  <section className="content-section dh-section">
    {domains.map((d, di) => (
      <div key={di} className="dh-domain-block">
        <div className="dh-domain-title" style={{ color: d.color }}>
          <span className="dh-title-bar" style={{ background: d.color }} />
          {d.name}
        </div>
        <div className="dh-members-grid">
          {d.members.map((m, i) => (
            <div
              key={i}
              className="dh-member-card"
              style={{ animationDelay: `${(di * 4 + i) * 0.06}s`, borderColor: d.color }}
            >
              <img src={m.img} alt={m.name} className="dh-member-photo" />
              <div className="dh-member-badge">
                <div className="dh-member-name">{m.name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    ))}
  </section>
);

/* ─── CONTACT ────────────────────────────────────────────── */
const MAPS_URL = "https://www.google.com/maps/dir/13.1200686,80.2255645/Department+Of+Manufacturing+Engineering,+Department,+MANUFACTURING+ENGINEERING+LAB,+ANNA+UNIVERSITY,+1,+1st+Cross+Rd,+Anna+University,+Kotturpuram,+Chennai,+Tamil+Nadu+600025/@13.0692565,80.1463476,12z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x3a52679f852757c9:0x32065fe84d11a197!2m2!1d80.234133!2d13.0120241?entry=ttu&g_ep=EgoyMDI2MDMxOC4xIKXMDSoASAFQAw%3D%3D";

const hrTeam = [
  { name: "Akash J",   phone: "+918825816578" },
  { name: "Vishnu K",  phone: "+918300362201" },
  { name: "Hariharan", phone: "+918248537781" },
  { name: "Swatiha V", phone: "+918925083884" },
  { name: "Dhivya E",  phone: "+919345668253" },
];

const Contact = () => (
  <section className="content-section contact-section">
    <div className="contact-grid">

      {/* Secretary — phone tap */}
      <a href="tel:+917094450191" className="contact-card contact-card-link">
        <div className="contact-icon">📞</div>
        <div className="contact-role">Secretary</div>
        <div className="contact-name">Rusil V</div>
        <div className="contact-detail">+91 70944 50191</div>
      </a>

      {/* Venue — Google Maps */}
      <div className="contact-card contact-card-link" onClick={() => window.open(MAPS_URL, "_blank")}>
        <div className="contact-icon">📍</div>
        <div className="contact-role">Venue</div>
        <div className="contact-name">Manufacturing Engg. Block</div>
        <div className="contact-detail">CEG Main Campus · Get Directions →</div>
      </div>

      {/* Instagram */}
      <div className="contact-card contact-card-link" onClick={() => window.open("https://www.instagram.com/manusys_ceg/", "_blank")}>
        <div className="contact-icon">📸</div>
        <div className="contact-role">Instagram</div>
        <div className="contact-name">@manusys_ceg</div>
        <div className="contact-detail">Follow for updates</div>
      </div>

    </div>

    {/* HR Team */}
    <div className="contact-hr-block">
      <div className="contact-hr-title">
        <span className="contact-hr-line" />
        <span>Human Resources</span>
        <span className="contact-hr-line" />
      </div>
      <div className="contact-hr-grid">
        {hrTeam.map((p, i) => (
          <a key={i} href={"tel:" + p.phone} className="contact-hr-chip">
            <span className="contact-hr-icon">📞</span>
            <div className="contact-hr-info">
              <div className="contact-hr-name">{p.name}</div>
              <div className="contact-hr-num">
                {p.phone.slice(0,3) + " " + p.phone.slice(3,8) + " " + p.phone.slice(8)}
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  </section>
);

/* ─── FOOTER ─────────────────────────────────────────────── */
const Footer = () => (
  <footer className="footer-note">
    <img src={manusysLogo} alt="Manusys" className="footer-logo-img" />
    <span>MANUSYS · Manufacturing Symposium · AME · CEG · Anna University</span>
  </footer>
);

/* ─── APP ────────────────────────────────────────────────── */
export default function App() {
  const [activeTab, setActiveTab] = useState("Home");
  const renderSection = () => {
    switch (activeTab) {
      case "Home": return <Home />;
      case "Events": return <Events />;
      case "Workshops": return <Workshops />;
      case "Domain Heads": return <DomainHeads />;
      case "Contact": return <Contact />;
      default: return <Home />;
    }
  };
  return (
    <div className="app">
      <Starfield />
      <Nav activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="homepage">
        {activeTab === "Home" && <Home />}
        {activeTab !== "Home" && <div className="tab-content-area">{renderSection()}</div>}
      </div>
      <Footer />
    </div>
  );
}