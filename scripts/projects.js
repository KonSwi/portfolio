const projectList = [];

function projectSide() {
  titleTextBig.textContent = "MY PROJECTS";
  titleTextSmall.textContent = "MADE WITH LOVE";
  mainContent.style.display = "none";
  projectsContainer.style.display = "flex";
  messagesContainer.style.display = "none";
  const projects = document.querySelector(".projects");
  if (projects) {
    projects.setAttribute("class", "projects");
  }

  homeLinks.forEach((item) => {
    item.style.color = "var(--white)";
  });
  projectLinks.forEach((item) => {
    item.style.color = "var(--lightGray)";
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
  const formContactContainer = document.querySelector("#formContactContainer");
  if (formContactContainer) {
    formContactContainer.remove();
  }
  const arrows = document.querySelector("#arrows");
  arrows.style.display = "none";

  const deleteButton = document.querySelectorAll("#deleteButton");

  deleteButton.forEach((card) => {
    card.style.display = "flex";
  });

  const addProject = document.querySelector("#addProject");
  const addButton = addProject.querySelector("#addButton");
  if (!addButton) {
    const addProjectButton = document.createElement("button");
    addProjectButton.setAttribute("class", "buttons");
    addProjectButton.setAttribute("id", "addButton");
    addProjectButton.innerText = "Add project";
    const buttonIcon = document.createElement("img");
    1;
    buttonIcon.setAttribute("src", "media/add.png");
    buttonIcon.setAttribute("alt", "add project");
    addProjectButton.appendChild(buttonIcon);
    addProject.appendChild(addProjectButton);

    addProjectButton.addEventListener("click", addProjectFn);

    ///////////////////////////////  ADD FUNCTION
    function addProjectFn() {
      const allView = document.querySelector("#allView");
      const projectModalContainer = document.createElement("div");
      projectModalContainer.setAttribute("id", "projectModalContainer");
      const modalContent = document.createElement("div");
      modalContent.setAttribute("id", "modalContent");

      const closeButton = document.createElement("img");
      closeButton.setAttribute("id", "closeButton");
      closeButton.setAttribute("src", "media/close.png");

      const formProject = document.createElement("form");
      formProject.setAttribute("id", "formProject");

      const projectTitleLabel = document.createElement("label");
      projectTitleLabel.setAttribute("for", "input-title");
      projectTitleLabel.innerText = "Project title";

      const projectTitleInput = document.createElement("input");
      projectTitleInput.setAttribute("class", "inputText");
      projectTitleInput.setAttribute("type", "text");
      projectTitleInput.setAttribute("placeholder", "Project title");
      const projectTitleAlert = document.createElement("span");
      projectTitleAlert.setAttribute("class", "alertContainer");

      const technologiesLabel = document.createElement("label");
      technologiesLabel.setAttribute("for", "input-technologies");
      technologiesLabel.setAttribute("id", "labelTechnologies");
      technologiesLabel.innerText = "Technologies";

      const technologiesInput = document.createElement("input");
      technologiesInput.setAttribute("class", "inputText");
      technologiesInput.setAttribute("type", "text");
      technologiesInput.setAttribute("placeholder", "html-css-javascript");
      const technologiesAlert = document.createElement("span");
      technologiesAlert.setAttribute("class", "alertContainer");

      const confirmProjectButton = document.createElement("button");
      confirmProjectButton.setAttribute("class", "buttons");
      confirmProjectButton.setAttribute("id", "confirmButton");
      confirmProjectButton.innerText = "Add project";
      const buttonIcon = document.createElement("img");
      buttonIcon.setAttribute("src", "media/add.png");
      buttonIcon.setAttribute("alt", "add project");
      confirmProjectButton.appendChild(buttonIcon);

      projectModalContainer.appendChild(modalContent);
      modalContent.appendChild(closeButton);
      modalContent.appendChild(formProject);
      formProject.appendChild(projectTitleLabel);
      formProject.appendChild(projectTitleInput);
      formProject.appendChild(projectTitleAlert);
      formProject.appendChild(technologiesLabel);
      formProject.appendChild(technologiesInput);
      formProject.appendChild(technologiesAlert);
      modalContent.appendChild(confirmProjectButton);
      allView.appendChild(projectModalContainer);
      document.body.style.overflow = "hidden";

      closeButton.addEventListener("click", closeModal);

      /////////////////////////////// CLOSE MODAL
      function closeModal() {
        projectModalContainer.remove();
        document.body.style.overflow = "";
      }

      confirmProjectButton.addEventListener("click", confirmProject);

      /////////////////////////////// WALIDACJE
      function validationProjectTitle() {
        projectTitleInput.style.borderColor = "var(--darkBlue)";
        projectTitleAlert.innerText = "";

        if (projectTitleInput.value.replace(/\s+/g, "").length < 3) {
          projectTitleAlert.innerText =
            "The title must be at least 3 characters long.";
          projectTitleInput.style.borderColor = "var(--red)";
          return false;
        } else if (projectTitleInput.value.length > 30) {
          projectTitleAlert.innerText =
            "The title must not exceed 30 characters.";
          projectTitleInput.style.borderColor = "var(--red)";
          return false;
        } else {
          projectTitleAlert.innerText = "";
          projectTitleInput.style.borderColor = "var(--darkBlue)";
          return true;
        }
      }
      function validationTechnologies() {
        technologiesInput.style.borderColor = "var(--darkBlue)";
        technologiesAlert.innerText = "";

        if (technologiesInput.value.trim() === "") {
          technologiesAlert.innerText = "Please add some technologies.";
          technologiesInput.style.borderColor = "var(--red)";
          return false;
        } else {
          technologiesAlert.innerText = "";
          technologiesInput.style.borderColor = "var(--darkBlue)";
          return true;
        }
      }

      projectTitleInput.addEventListener("input", validationProjectTitle);
      technologiesInput.addEventListener("input", validationTechnologies);

      /////////////////////////////// CONFIRM PROJECT
      function confirmProject() {
        let isValid = true;

        if (!validationProjectTitle()) {
          isValid = false;
        }
        if (!validationTechnologies()) {
          isValid = false;
        }

        if (isValid) {
          const projectCard = document.createElement("div");
          projectCard.setAttribute("class", "projectCard");
          projects.appendChild(projectCard);

          const titleProject = document.createElement("h2");
          titleProject.innerText = projectTitleInput.value;
          projectCard.appendChild(titleProject);

          const unorderedList = document.createElement("ul");
          projectCard.appendChild(unorderedList);

          const technologies = technologiesInput.value
            .toUpperCase()
            .split(/[.,\-\s]+/)
            .map((tech) => tech.trim())
            .filter((tech) => tech !== "");

          technologies.forEach((tech) => {
            const listElement = document.createElement("li");
            listElement.innerText = tech;
            unorderedList.appendChild(listElement);
          });

          const deleteButton = document.createElement("img");
          deleteButton.setAttribute("id", "deleteButton");
          deleteButton.setAttribute("src", "media/delete.png");
          projectCard.appendChild(deleteButton);

          const projectCards = projects.querySelectorAll(".projectCard");
          const maxOrder = Math.max(
            ...Array.from(projectCards).map((card) => {
              return parseInt(card.style.order || 0, 10);
            })
          );

          projectCard.style.order = maxOrder + 1;

          const newProject = {
            title: projectTitleInput.value,
            technologies: technologies,
          };
          projectList.push(newProject);

          closeModal();
          projectSide();
          deleteButton.addEventListener("click", deleteProjectCard);

          /////////////////////////////// DELETE PROJECT CARD
          function deleteProjectCard() {
            projectCard.remove();

            const index = projectList.findIndex(
              (proj) => proj.title === newProject.title
            );
            if (index > -1) {
              projectList.splice(index, 1);
            }

            checkProjectCards();
          }

          checkProjectCards();
        }
      }
    }
  } else {
    addButton.style.display = "flex";
  }
  const noProjects = document.querySelector("#noProjects");

  /////////////////////////////// CHECK PEOJECT CARDS
  function checkProjectCards() {
    const numberOfCards = projects.querySelectorAll(".projectCard");
    if (numberOfCards.length > 0) {
      noProjects.style.display = "none";
    } else {
      noProjects.style.display = "flex";
    }
  }
  const projectCard = projects.querySelectorAll(".projectCard");
  projectCard.forEach((card) => (card.style.display = "flex"));
  checkProjectCards();
}
projectLinks.forEach((projectLinks) => {
  projectLinks.addEventListener("click", projectSide);
});
