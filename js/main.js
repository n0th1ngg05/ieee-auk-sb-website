/* ============================================================
   IEEE AUK SB — Main JavaScript
   Features: Dynamic events, notices, stats, navbar, gallery
   ============================================================ */
const events = [
  {
    id: 1,
    title: "IEEE Xtreme 18.0 Hackathon",
    date: "2025-10-26",
    displayDate: "26 Oct 2025",
    description: "Join the world's most intense 24-hour programming competition. Team up, solve problems, and compete globally.",
    image: "",
    category: "Competition",
    venue: "Amity University Kolkata, Lab Complex",
    status: "upcoming",
    registerLink: "#"
  },
  {
    id: 2,
    title: "Workshop on Machine Learning & Deep Learning",
    date: "2025-09-15",
    displayDate: "15 Sep 2025",
    description: "A two-day intensive hands-on workshop covering ML fundamentals, neural networks, and real-world applications.",
    image: "",
    category: "Workshop",
    venue: "Seminar Hall, AUK",
    status: "upcoming",
    registerLink: "#"
  },
  {
    id: 3,
    title: "Industry Connect: Emerging Tech Careers",
    date: "2025-08-20",
    displayDate: "20 Aug 2025",
    description: "Panel discussion with industry leaders from Google, TCS, and Infosys on career paths in emerging technologies.",
    image: "",
    category: "Seminar",
    venue: "Auditorium, AUK",
    status: "upcoming",
    registerLink: "#"
  },
  {
    id: 4,
    title: "Robotics Workshop: Build & Program",
    date: "2025-03-12",
    displayDate: "12 Mar 2025",
    description: "Participants built and programmed Arduino-based robots in this hands-on weekend workshop.",
    image: "",
    category: "Workshop",
    venue: "Robotics Lab, AUK",
    status: "past",
    registerLink: null
  },
  {
    id: 5,
    title: "WIE Empowerment Seminar 2025",
    date: "2025-02-28",
    displayDate: "28 Feb 2025",
    description: "IEEE Women in Engineering chapter hosted a career empowerment seminar with prominent women tech leaders.",
    image: "",
    category: "Seminar",
    venue: "Conference Hall, AUK",
    status: "past",
    registerLink: null
  },
  {
    id: 6,
    title: "Signal Processing Symposium",
    date: "2025-01-18",
    displayDate: "18 Jan 2025",
    description: "Technical symposium covering DSP, image processing, and speech recognition with demos from final-year students.",
    image: "",
    category: "Symposium",
    venue: "Electronics Lab Complex, AUK",
    status: "past",
    registerLink: null
  }
];

// ── Data: Notices ──────────────────────────────────────────────
const ieeeNotices = [
  {
    title: "IEEE Student Membership Renewal 2025–26",
    date: "15 Jul 2025",
    description: "Renew your IEEE Student Membership for the academic year 2025–26. Early renewal offers discounted rates.",
    link: "https://ieee.org/membership"
  },
  {
    title: "IEEE Region 10 Student Paper Contest",
    date: "01 Jul 2025",
    description: "Asia-Pacific Region 10 invites student paper submissions. Prizes and publication opportunities available.",
    link: "https://ieeer10.org"
  },
  {
    title: "IEEE Young Professionals Webinar Series",
    date: "20 Jun 2025",
    description: "Monthly webinar series on career development, industry trends, and IEEE volunteer opportunities.",
    link: "https://yp.ieee.org"
  },
  {
    title: "STEM Volunteer Program — IEEE India Council",
    date: "10 Jun 2025",
    description: "Volunteer to mentor school students in STEM subjects through the IEEE India Council initiative.",
    link: "https://ieeeindiacouncil.org"
  }
];

const sbNotices = [
  {
    title: "General Body Meeting — August 2025",
    date: "05 Aug 2025",
    description: "Monthly GBM to discuss upcoming events, chapter activities, and annual planning. All members welcome.",
    link: "#"
  },
  {
    title: "Call for Executive Committee Nominations",
    date: "28 Jul 2025",
    description: "Nominations are open for IEEE AUK SB Executive positions for 2025–26. Submit your candidacy by August 10.",
    link: "#"
  },
  {
    title: "Technical Project Showcase — Register Now",
    date: "15 Jul 2025",
    description: "Present your final-year or personal tech project at the IEEE AUK SB Annual Project Showcase.",
    link: "#"
  },
  {
    title: "Volunteer Opportunities — Event Coordinators Needed",
    date: "05 Jul 2025",
    description: "We are looking for enthusiastic student volunteers to help coordinate our upcoming workshops and events.",
    link: "#"
  }
];

// ── IEEE Chapters under SB ───────────────────────────────────────────

const chapters = [
{
name: "Computer Society",
abbr: "IEEE CS",
logo: "assets/chapters/cs.png",
description: "Promotes computing research, programming competitions, software development, AI, cybersecurity and cloud technologies.",
chair: "Rohit Chakraborty",
faculty: "Prof. Amit Banerjee",
focus: "AI, Cybersecurity, Cloud, Software Engineering",
members: "40+ active members"
},

{
name: "Robotics & Automation Society",
abbr: "IEEE RAS",
logo: "assets/chapters/ras.png",
description: "Focused on robotics, automation, control systems and autonomous robots with competitions and robotics labs.",
chair: "Tanmoy Ghosh",
faculty: "Prof. Sanjay Dutta",
focus: "Robotics, Automation, Computer Vision, Control",
members: "35+ active members"
},

{
name: "Signal Processing Society",
abbr: "IEEE SPS",
logo: "assets/chapters/sps.png",
description: "Explores digital signal processing, image processing, communications and speech recognition technologies.",
chair: "Debleena Roy",
faculty: "Dr. Rajeev Kumar",
focus: "DSP, Communications, Image Processing, ML",
members: "28+ active members"
},

{
name: "Women in Engineering",
abbr: "IEEE WIE",
logo: "assets/chapters/wie.png",
description: "Promotes women participation in engineering through mentorship, leadership and career development programs.",
chair: "Ananya Das",
faculty: "Dr. Meenakshi Roy",
focus: "Leadership, Mentorship, Career Development",
members: "32+ active members"
},

{
name: "Power & Energy Society",
abbr: "IEEE PES",
logo: "assets/chapters/pes.png",
description: "Focuses on renewable energy, smart grids and sustainable electrical power systems.",
chair: "Sourav Bera",
faculty: "Prof. Amit Banerjee",
focus: "Smart Grid, Renewable Energy, Power Systems",
members: "22+ active members"
}
];

// ── Data: Publications ──────────────────────────────────────────
const publications = [
  {
    id: 1,
    title: "Deep Learning Approaches for Medical Image Segmentation: A Comparative Study",
    authors: "Arjun Bose, Priya Sharma, Dr. Rajeev Kumar",
    venue: "IEEE International Conference on Biomedical Engineering (ICBME), 2024",
    year: "2024",
    type: "Student Paper",
    doi: "#",
    pdf: "assets/pdfs/paper1.pdf"
  },
  {
    id: 2,
    title: "IoT-Based Smart Agriculture System with ML-Driven Predictive Analytics",
    authors: "Sneha Ghosh, Rahul Sen, Ananya Das",
    venue: "IEEE Transactions on IoT Applications, Vol. 5, 2024",
    year: "2024",
    type: "Student Paper",
    doi: "#",
    pdf: "assets/pdfs/paper2.pdf"
  },
  {
    id: 3,
    title: "Federated Learning for Privacy-Preserving Healthcare Data Analysis",
    authors: "Dr. Meenakshi Roy, Prof. Sanjay Dutta",
    venue: "IEEE Journal of Biomedical and Health Informatics, 2024",
    year: "2024",
    type: "Faculty Paper",
    doi: "#",
    pdf: "assets/pdfs/paper3.pdf"
  },
  {
    id: 4,
    title: "Autonomous Navigation of Mobile Robots in Dynamic Environments",
    authors: "Karthik Menon, Debjit Pal",
    venue: "IEEE International Conference on Robotics and Automation (ICRA) Workshop, 2023",
    year: "2023",
    type: "Conference Paper",
    doi: "#",
    pdf: "assets/pdfs/paper4.pdf"
  },
  {
    id: 5,
    title: "5G Network Slicing: Architecture, Challenges, and Future Directions",
    authors: "Prof. Amit Banerjee, Dr. Meenakshi Roy",
    venue: "IEEE Communications Surveys & Tutorials, 2023",
    year: "2023",
    type: "Faculty Paper",
    doi: "#",
    pdf: "assets/pdfs/paper5.pdf"
  },
  {
    id: 6,
    title: "Real-Time Signal Processing for EEG-Based Brain-Computer Interfaces",
    authors: "Tanya Chakraborty, Niladri Mondal, Ritwik Basu",
    venue: "IEEE Signal Processing Letters, 2023",
    year: "2023",
    type: "Student Paper",
    doi: "#",
    pdf: "assets/pdfs/paper6.pdf"
  }
];




// ── Navbar Scroll Shrink ───────────────────────────────────────
function initNavbar() {
  const navbar = document.getElementById('navbar');
  const mobileNav = document.getElementById('mobile-nav');
  const navToggle = document.querySelector('.nav-toggle');

  if (!navbar) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  if (navToggle) {
    navToggle.addEventListener('click', () => {
      navToggle.classList.toggle('open');
      if (mobileNav) mobileNav.classList.toggle('open');
    });
  }

  // Active link
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, #mobile-nav a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
}

// ── Animated Statistics Counter ───────────────────────────────
function initCounters() {
  const counters = document.querySelectorAll('.stat-number[data-target]');
  if (!counters.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.dataset.target);
        const suffix = el.dataset.suffix || '';
        const duration = 2000;
        const step = target / (duration / 16);
        let current = 0;

        const timer = setInterval(() => {
          current += step;
          if (current >= target) {
            current = target;
            clearInterval(timer);
          }
          el.textContent = Math.floor(current) + suffix;
        }, 16);

        observer.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(c => observer.observe(c));
}

// ── Fade-up Scroll Animations ─────────────────────────────────
function initFadeAnimations() {
  const elements = document.querySelectorAll('.fade-up');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  elements.forEach(el => observer.observe(el));
}

// ── Render Home Events ─────────────────────────────────────────
function renderHomeEvents() {
  const container = document.getElementById('home-events-grid');
  if (!container) return;

  const upcomingEvents = events.filter(e => e.status === 'upcoming').slice(0, 3);
  container.innerHTML = upcomingEvents.map(ev => `
    <div class="event-card fade-up">
      <div class="event-card-img">
        ${ev.image ? `<img src="${ev.image}" alt="${ev.title}">` : `
          <div style="text-align:center;color:rgba(255,255,255,0.5);">
            <div style="font-size:2.5rem;">📡</div>
            <div style="font-family:'IBM Plex Mono';font-size:0.7rem;letter-spacing:0.1em;margin-top:8px;text-transform:uppercase">${ev.category}</div>
          </div>
        `}
        <div class="event-date-badge">${ev.displayDate}</div>
      </div>
      <div class="event-card-body">
        <h3>${ev.title}</h3>
        <p>${ev.description}</p>
        <a href="events.html" class="btn btn-primary btn-sm">View Details →</a>
      </div>
    </div>
  `).join('');
  initFadeAnimations();
}

// ── Render Home Notices ────────────────────────────────────────
function renderHomeNotices() {
  const ieeeContainer = document.getElementById('ieee-notices');
  const sbContainer = document.getElementById('sb-notices');

  if (ieeeContainer) {
    ieeeContainer.innerHTML = ieeeNotices.map(n => `
      <div class="notice-item fade-up">
        <div class="notice-meta">🔔 ${n.date}</div>
        <h4>${n.title}</h4>
        <p>${n.description}</p>
        <a href="${n.link}" target="_blank">Read More →</a>
      </div>
    `).join('');
  }

  if (sbContainer) {
    sbContainer.innerHTML = sbNotices.map(n => `
      <div class="notice-item fade-up">
        <div class="notice-meta">📢 ${n.date}</div>
        <h4>${n.title}</h4>
        <p>${n.description}</p>
        <a href="${n.link}">Read More →</a>
      </div>
    `).join('');
  }
  initFadeAnimations();
}

// ── Render Publications (Home) ────────────────────────────────
function renderHomePubs() {
  const container = document.getElementById('home-pubs-grid');
  if (!container) return;

  container.innerHTML = publications.slice(0, 4).map(p => `
    <div class="pub-card fade-up">
      <div class="pub-type">${p.type}</div>
      <h4>${p.title}</h4>
      <div class="authors">${p.authors}</div>
      <div class="venue">${p.venue}</div>
      <div style="display:flex;justify-content:space-between;align-items:center;margin-top:12px;">
        <span class="year">${p.year}</span>
        <a href="${p.pdf}" target="_blank">PDF ↗</a>
      </div>
    </div>
  `).join('');
  initFadeAnimations();
}

// ── Render Full Events Page ────────────────────────────────────
function renderFullEvents() {
  const container = document.getElementById('events-grid-full');
  if (!container) return;

  const filterBtns = document.querySelectorAll('.filter-btn[data-filter]');
  let currentFilter = 'all';

  function renderFiltered() {
    const filtered = events.filter(e => {
      if (currentFilter === 'all') return true;
      if (currentFilter === 'upcoming') return e.status === 'upcoming';
      if (currentFilter === 'past') return e.status === 'past';
      return e.category.toLowerCase() === currentFilter;
    });

    container.innerHTML = filtered.length ? filtered.map(ev => `
      <div class="event-full-card fade-up">
        <div class="efc-img">
          ${ev.image ? `<img src="${ev.image}" alt="${ev.title}">` : `
            <div style="text-align:center;color:rgba(255,255,255,0.5);">
              <div style="font-size:3rem;">📡</div>
            </div>
          `}
          <div class="efc-badge ${ev.status === 'past' ? 'past' : ''}">${ev.status === 'upcoming' ? 'UPCOMING' : 'PAST'}</div>
        </div>
        <div class="efc-body">
          <div class="event-meta">// ${ev.category.toUpperCase()} · ${ev.displayDate}</div>
          <h3>${ev.title}</h3>
          <p>${ev.description}</p>
          <div class="efc-footer">
            <span class="efc-venue">📍 ${ev.venue}</span>
            ${ev.registerLink ? `<a href="${ev.registerLink}" class="btn btn-primary btn-sm">Register →</a>` : '<span class="btn btn-sm" style="opacity:0.4;cursor:default">Event Ended</span>'}
          </div>
        </div>
      </div>
    `).join('') : '<p style="color:var(--text-light);padding:24px 0;">No events found for this filter.</p>';

    initFadeAnimations();
  }

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentFilter = btn.dataset.filter;
      renderFiltered();
    });
  });

  renderFiltered();
}

// ── Render Full Chapters Page ─────────────────────────────────

function renderChapters(){

const container = document.getElementById("chapters-grid");
if(!container) return;

container.innerHTML = chapters.map(ch => `

<div class="chapter-full-card fade-up">

<div class="chapter-card-top">

<div class="chapter-logo-box">
<img src="${ch.logo}" alt="${ch.abbr}" style="width:36px;height:36px;object-fit:contain;">
</div>

<div>
<div class="chapter-abbr">${ch.abbr}</div>
<h3>${ch.name}</h3>
</div>

</div>

<div class="chapter-card-body">

<p>${ch.description}</p>

<div class="chapter-meta">

<div class="chapter-meta-item">
<span class="key">Chairperson</span>
<span class="val">${ch.chair}</span>
</div>

<div class="chapter-meta-item">
<span class="key">Faculty</span>
<span class="val">${ch.faculty}</span>
</div>

<div class="chapter-meta-item">
<span class="key">Focus Areas</span>
<span class="val">${ch.focus}</span>
</div>

<div class="chapter-meta-item">
<span class="key">Members</span>
<span class="val">${ch.members}</span>
</div>

</div>

<a href="contact.html" class="btn btn-primary btn-sm">
Contact Chapter →
</a>

</div>

</div>

`).join("");

initFadeAnimations();

}

// ── Render Full Publications Page ──────────────────────────────
function renderFullPublications() {
  const container = document.getElementById('pub-list-container');
  const tabs = document.querySelectorAll('.pub-tab[data-type]');
  if (!container) return;

  let currentType = 'all';

  function renderPubs() {
    const filtered = publications.filter(p => {
      if (currentType === 'all') return true;
      return p.type.toLowerCase().includes(currentType.toLowerCase());
    });

    container.innerHTML = filtered.map((p, i) => `
      <div class="pub-entry fade-up">
        <div class="pub-entry-num">${String(i + 1).padStart(2, '0')}</div>
        <div class="pub-entry-content">
          <span class="pub-tag">${p.type}</span>
          <h3>${p.title}</h3>
          <div class="pub-authors">👤 ${p.authors}</div>
          <div class="pub-venue">📚 ${p.venue}</div>
          <div class="pub-entry-actions">
            <a href="${p.pdf}" target="_blank" class="btn btn-primary btn-sm">⬇ Download PDF</a>
            <a href="${p.doi}" target="_blank" class="btn btn-outline-dark btn-sm">DOI ↗</a>
          </div>
        </div>
      </div>
    `).join('');

    initFadeAnimations();
  }

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      currentType = tab.dataset.type;
      renderPubs();
    });
  });

  renderPubs();
}

// ── Contact Form ───────────────────────────────────────────────
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    const originalText = btn.textContent;
    btn.textContent = 'Sending…';
    btn.disabled = true;

    setTimeout(() => {
      btn.textContent = '✓ Message Sent!';
      btn.style.background = '#22c55e';
      form.reset();
      setTimeout(() => {
        btn.textContent = originalText;
        btn.style.background = '';
        btn.disabled = false;
      }, 3000);
    }, 1500);
  });
}

// ── Smooth Scroll for anchor links ────────────────────────────
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      const href = anchor.getAttribute('href');
      if (href === '#') return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        const navH = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-h'));
        const top = target.getBoundingClientRect().top + window.scrollY - navH - 20;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });
}

// ── Init ──────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initCounters();
  initFadeAnimations();
  renderHomeEvents();
  renderHomeNotices();
  renderHomePubs();
  renderFullEvents();
  renderChapters();
  renderFullPublications();
  initContactForm();
  initSmoothScroll();
  renderHomeEvents();
  renderHomeNotices();
  renderHomePubs();
});
