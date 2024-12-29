const homeContent = [
  {
    heading: "About me",
    content:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.",
  },
];

const skillsArray = [
  {
    skill: "HTML",
    experience: "2 years",
  },
  {
    skill: "CSS",
    experience: "1 year",
  },
  {
    skill: "JS",
    experience: "0 years",
  },
  {
    skill: "Git",
    experience: "0 years",
  },
  {
    skill: "Figma",
    experience: "1 year",
  },
  {
    skill: "Chrome",
    experience: "5 years",
  },
  {
    skill: "VSC",
    experience: "2 years",
  },
  {
    skill: "GitHub",
    experience: "0 years",
  },
];

document.addEventListener("DOMContentLoaded", function () {
  aboutMeContent.innerHTML = "";
  homeContent.forEach((item) => {
    const aboutMeContentContainer = document.createElement("div");
    const heading = document.createElement("h2");
    heading.innerText = item.heading;

    const content = document.createElement("p");
    content.innerText = item.content;

    aboutMeContentContainer.appendChild(heading);
    aboutMeContentContainer.appendChild(content);
    aboutMeContent.appendChild(aboutMeContentContainer);
  });

  addSkills();
});
/////////////////////////////// ADD SKILLS

function addSkills() {
  const skills = document.querySelector(".skills");
  skillsArray.forEach((item) => {
    const skill = document.createElement("div");
    skill.setAttribute("class", "skill");

    const skillLogo = document.createElement("img");
    skillLogo.src = `media/logo${item.skill}.png`;
    skillLogo.alt = `${item.skill} logo`;

    skill.appendChild(skillLogo);
    const skillContent = document.createElement("div");
    skillContent.setAttribute("class", "skillContent");

    const skillName = document.createElement("p");
    skillName.textContent = item.skill;
    skillContent.appendChild(skillName);

    const progress = document.createElement("div");
    progress.setAttribute("class", "progress");

    const years = parseInt(item.experience);
    const progressImages = [];
    for (let i = 1; i <= 5; i++) {
      const progressImage = document.createElement("img");
      progressImage.setAttribute("class", `${i}Year`);
      progressImage.src =
        i <= years ? "media/Complited.png" : "media/notComplited.png";
      progressImage.alt = "experience logo";
      progressImages.push(progressImage);
    }

    progressImages.forEach((img) => {
      progress.appendChild(img);
    });

    skillContent.appendChild(progress);
    const yearsOfExperience = document.createElement("p");
    yearsOfExperience.setAttribute("class", "yearsOfExperience");
    yearsOfExperience.textContent = item.experience;
    skillContent.appendChild(yearsOfExperience);
    skill.appendChild(skillContent);
    skills.appendChild(skill);
  });
}

/////////////////////////////// HAMBURGER MENU

const hamburgerButton = document.querySelector("#hamburger");
const headerMenuHamburger = document.querySelector(".headerMenuHamburger");

hamburgerButton.addEventListener("click", function () {
  this.classList.toggle("hamburgerContainerOpen");
  headerMenuHamburger.classList.toggle("headerMenuHamburgerOpen");
});

///////////////////////////////  HOME
const main = document.querySelector("main");
const mainContainer = document.querySelector("#mainContainer");
const titleTextBig = document.querySelector("#titleTextBig");
const titleTextSmall = document.querySelector("#titleTextSmall");
const homeLinks = document.querySelectorAll("#homeOne, #homeTwo, #homeThree");
const aboutMeContent = document.querySelector(".aboutMeContent");
const mySkillsContent = document.querySelector(".mySkillsContent");
const projectsContainer = document.querySelector("#projectsContainer");
const formContactContainer = document.querySelector("#contactContent");
const mainContent = document.querySelector("#aboutMeContainer");
const projectLinks = document.querySelectorAll(
  "#projectsOne, #projectsTwo, #projectsThree"
);
const aboutLinks = document.querySelectorAll(
  "#aboutOne, #aboutTwo, #aboutThree"
);
const contactLinks = document.querySelectorAll(
  "#contactOne, #contactTwo, #contactThree"
);
const messagesLinks = document.querySelectorAll(
  "#messagesOne, #messagesTwo, #messagesThree"
);

/////////////////////////////// ARROWS VISIBILITY
function checkArrowVisibility() {
  const projects = document.querySelector(".projects");
  const projectCards = document.querySelectorAll(".projectCard");
  if (projectCards.length >= 4) {
    arrows.style.display = "flex";
  } else {
    arrows.style.display = "none";
    const projects = document.querySelector(".projects");
    projects.style.margin = "0rem 0rem 5.25rem 0rem";
  }
}

checkArrowVisibility();

function homeSide() {
  mainContent.style.display = "flex";
  mySkillsContent.style.display = "flex";
  projectsContainer.style.display = "flex";
  titleTextBig.textContent = "JAN KOWALSKI";
  titleTextSmall.textContent = "WEB-DESIGNER";
  aboutMeContent.style.display = "flex";
  messagesContainer.style.display = "none";
  noProjects.style.display = "none";
  const projects = document.querySelector(".projects");
  const projectCards = document.querySelectorAll(".projectCard");

  const deleteButton = document.querySelectorAll("#deleteButton");

  deleteButton.forEach((card) => {
    card.style.display = "none";
  });

  aboutMeContent.innerHTML = "";
  homeContent.forEach((item) => {
    const aboutMeContentContainer = document.createElement("div");
    const heading = document.createElement("h2");
    heading.innerText = item.heading;

    const content = document.createElement("p");
    content.innerText = item.content;

    aboutMeContentContainer.appendChild(heading);
    aboutMeContentContainer.appendChild(content);
    aboutMeContent.appendChild(aboutMeContentContainer);
  });
  homeLinks.forEach((item) => {
    item.style.color = "var(--lightGray)";
  });
  projectLinks.forEach((item) => {
    item.style.color = "var(--white)";
  });
  aboutLinks.forEach((item) => {
    item.style.color = "var(--white)";
  });
  contactLinks.forEach((item) => {
    item.style.color = "var(--white)";
  });
  messagesLinks.forEach((item) => {
    item.style.color = "var(--white)";
  });

  ///////////////////////////////  ARROWS

  const arrows = document.querySelector("#arrows");
  function arrowsVisibility() {
    if (projectCards.length >= 4) {
      arrows.style.display = "flex";
    } else {
      arrows.style.display = "none";
      projects.style.margin = "0rem 0rem 5.25rem 0rem";
    }
  }
  const addButton = addProject.querySelector("#addButton");
  if (addButton) {
    addButton.remove();
  }

  const formContactContainer = document.querySelector("#formContactContainer");

  if (formContactContainer) {
    formContactContainer.remove();
  }

  arrowsVisibility();

  ///////////////////////////////  PROJECTS

  const totalProjects = projectCards.length;
  const rightArrow = document.querySelector("#rightArrow");
  const leftArrow = document.querySelector("#leftArrow");
  const visibleCards = 3;
  let firstDisplayedProject = 0;

  function updateProjectView() {
    if (projectCards.length === 0) {
      return;
    }

    projectCards.forEach((card, index) => {
      card.style.display = "none";
      card.style.order = "";
    });

    for (let i = 0; i < visibleCards; i++) {
      const cardIndex = (firstDisplayedProject + i) % totalProjects;
      projectCards[cardIndex].style.display = "flex";
      projectCards[cardIndex].style.order = i;
    }
  }

  /////////////////////////////// ARROWS FUNCTION
  function moveRight() {
    firstDisplayedProject = (firstDisplayedProject + 1) % totalProjects;
    updateProjectView();
  }

  function moveLeft() {
    firstDisplayedProject =
      (firstDisplayedProject - 1 + totalProjects) % totalProjects;
    updateProjectView();
  }

  rightArrow.addEventListener("click", moveRight);
  leftArrow.addEventListener("click", moveLeft);

  updateProjectView();
}
homeLinks.forEach((homeLinks) => {
  homeLinks.addEventListener("click", homeSide);
});
