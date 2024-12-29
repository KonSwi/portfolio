const aboutContent = [
  {
    heading: "My background",
    content:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.\n\n Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.\n\nAt vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.\n\nAt vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.\n\nDuis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla.",
  },
  {
    heading: "My hobbies and interests",
    content:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.\n\nAt vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.\nLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.\n\nDuis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla.",
  },
];

function aboutSide() {
  homeLinks.forEach((item) => {
    item.style.color = "var(--white)";
  });
  projectLinks.forEach((item) => {
    item.style.color = "var(--white)";
  });
  aboutLinks.forEach((item) => {
    item.style.color = "var(--lightGray)";
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

  mySkillsContent.style.display = "none";
  messagesContainer.style.display = "none";
  mainContent.style.display = "flex";
  titleTextBig.textContent = "ABOUT ME";
  titleTextSmall.textContent = "IT’S A-ME, JAN!";
  projectsContainer.style.display = "none";
  aboutMeContent.innerHTML = "";

  aboutContent.forEach((item) => {
    const aboutMeContentContainer = document.createElement("div");
    const heading = document.createElement("h2");
    heading.innerText = item.heading;

    const content = document.createElement("p");
    content.innerText = item.content;

    aboutMeContentContainer.appendChild(heading);
    aboutMeContentContainer.appendChild(content);
    aboutMeContent.appendChild(aboutMeContentContainer);
  });
  const contactMeButtonArea = document.createElement("div");
  contactMeButtonArea.setAttribute("id", "addButtonArea");
  const contactMeButton = document.createElement("button");
  contactMeButton.setAttribute("class", "buttons");
  contactMeButton.setAttribute("id", "contactButton");
  contactMeButton.innerText = "Contact me";
  const buttonIcon = document.createElement("img");
  buttonIcon.setAttribute("src", "media/right.png");
  buttonIcon.setAttribute("alt", "add project");
  contactMeButton.appendChild(buttonIcon);
  contactMeButtonArea.appendChild(contactMeButton);
  aboutMeContent.appendChild(contactMeButtonArea);
  contactMeButtonArea.style.display = "flex";
  contactMeButtonArea.style.justifyContent = "center";
  contactMeButton.addEventListener("click", contactSide);
}
aboutLinks.forEach((aboutLink) => {
  aboutLink.addEventListener("click", aboutSide);
});
