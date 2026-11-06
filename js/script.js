
// ===================================
// PERSONAL INFORMATION
// ===================================

const profile = {
  name: "Yassine Daouib",
  email: "daouib.yassine@gmail.com",
  github: "https://github.com/daouib-yassine",
  linkedin: "https://www.linkedin.com/in/yassine-daouib-5437b0423/",
  cv: "assets/cv.pdf"
};

// ===================================
// SKILLS
// ===================================

const skills = [
  {
    group: "Frontend Development",
    icon: "globe",
    items: ["HTML5", "CSS3", "JavaScript", "React"]
  },
  {
    group: "Backend Development",
    icon: "code",
    items: ["PHP", "Laravel", "Node.js"]
  },
  {
    group: "Database & Tools",
    icon: "database",
    items: ["MySQL", "Git", "GitHub"]
  },
  {
    group: "Other Technologies",
    icon: "layers",
    items: ["REST APIs", "Responsive Design", "Figma", "Tailwind CSS"]
  }
];

// ===================================
// PROJECTS
// ===================================

const projects = [
  {
    number: "01",
    status: "IN PROGRESS",
    type: "WEB APPLICATION",
    name: "DistribuConnect",
    description: "A web application designed to manage and organize distribution operations, helping users track activities, manage information, and improve workflow efficiency.",
    stack: ["React", "PHP", "MySQL"],
    image: "assets/images/Distribuconnect.png",
    github: "",
    demo: ""
  },
  {
    number: "02",
    status: "COMPLETED",
    type: "WEB DEVELOPMENT",
    name: "Travel Manager",
    description: "A travel management application designed to organize client information, manage reservations, and simplify travel agency operations.",
    stack: ["HTML", "CSS", "JavaScript","Node.js","Express","Mysql"],
    image: "assets/images/travelsysteme.jpeg",
    github: "",
    demo: ""
  }
];

// ===================================
// RENDER SKILLS
// ===================================

const skillsGrid = document.getElementById("skillsGrid");

skills.forEach((group, index) => {
  const card = document.createElement("article");
  card.className = "skill-card";

  card.innerHTML = `
    <div class="skill-card-top">
      <span class="skill-icon">
        <i data-lucide="${group.icon}"></i>
      </span>
      <span class="mono">0${index + 1}</span>
    </div>

    <h3>${group.group}</h3>

    <div class="skill-tags">
      ${group.items.map(item => `<span>${item}</span>`).join("")}
    </div>
  `;

  skillsGrid.appendChild(card);
});

// ===================================
// RENDER PROJECTS
// ===================================

const projectsGrid = document.getElementById("projectsGrid");

projects.forEach(project => {
  const card = document.createElement("article");
  card.className = "project-card";

  card.innerHTML = `
<div class="project-image">

  <img
    src="${project.image}"
    alt="${project.name} screenshot"
    class="project-preview"
    onerror="this.style.display='none'"
  />

  <span class="project-number">${project.number}</span>
  <span class="project-status">${project.status}</span>

</div>

    <div class="project-info">
      <div class="project-type">${project.type}</div>
      <h3>${project.name}</h3>
      <p>${project.description}</p>

      <div class="tag-list">
        ${project.stack.map(tag => `<span>${tag}</span>`).join("")}
      </div>

      <div class="project-links">
        ${project.github
          ? `<a href="${project.github}" target="_blank" rel="noopener noreferrer">GitHub <i data-lucide="arrow-up-right"></i></a>`
          : ""
        }

        ${project.demo
          ? `<a href="${project.demo}" target="_blank" rel="noopener noreferrer">Live preview <i data-lucide="external-link"></i></a>`
          : ""
        }

        ${!project.github && !project.demo
          ? `<span class="link-placeholder">Add repository / demo links in script.js</span>`
          : ""
        }
      </div>
    </div>
  `;

  projectsGrid.appendChild(card);
});

// ===================================
// CONTACT INFORMATION
// ===================================

document.getElementById("contactEmail").href =
  `mailto:${profile.email}`;

document.getElementById("contactEmail").innerHTML =
  `${profile.email} <i data-lucide="arrow-up-right"></i>`;

document.getElementById("socialLinks").innerHTML = `
  <a href="${profile.github}" target="_blank" rel="noopener noreferrer">
    <i data-lucide="github"></i> GitHub
    <i data-lucide="arrow-up-right"></i>
  </a>

  <a href="${profile.linkedin}" target="_blank" rel="noopener noreferrer">
    <i data-lucide="linkedin"></i> LinkedIn
    <i data-lucide="arrow-up-right"></i>
  </a>
`;

// ===================================
// MOBILE NAVIGATION
// ===================================

const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");

menuToggle.addEventListener("click", () => {
  nav.classList.toggle("nav-open");

  menuToggle.innerHTML = nav.classList.contains("nav-open")
    ? '<i data-lucide="x"></i>'
    : '<i data-lucide="menu"></i>';

  lucide.createIcons();
});

document.querySelectorAll(".nav a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("nav-open");
    menuToggle.innerHTML = '<i data-lucide="menu"></i>';
    lucide.createIcons();
  });
});

// ===================================
// ACTIVE NAVIGATION ON SCROLL
// ===================================

const sections = document.querySelectorAll("main section[id]");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let current = "home";

  sections.forEach(section => {
    if (section.getBoundingClientRect().top <= 140) {
      current = section.id;
    }
  });

  navLinks.forEach(link => {
    link.classList.toggle(
      "active",
      link.getAttribute("href") === `#${current}`
    );
  });
});


// ===================================
// CONTACT FORM - EMAILJS
// ===================================

const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

contactForm.addEventListener("submit", function (event) {
  event.preventDefault();

  emailjs.sendForm(
    "service_8jzdc8t",
    "template_5ctgdek",
    contactForm
  )
  .then(function () {
    formStatus.textContent = "Message sent successfully!";
    contactForm.reset();
  })
  .catch(function (error) {
    console.error(error);
    formStatus.textContent = "Failed to send message. Try again.";
  });
});

// ===================================
// FOOTER YEAR
// ===================================

document.getElementById("year").textContent =
  new Date().getFullYear();

// ===================================
// INITIALIZE ICONS
// ===================================

lucide.createIcons();
