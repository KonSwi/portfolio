const messagesArray = [
  {
    name: "Karol",
    email: "karol@email.com",
    message:
      "Hello, I've reviewed your impressive portfolio and am interested in discussing a potential collaboration. Please call me at 712-218-123 to talk further.",
  },
  {
    name: "Ernest",
    email: "ernest@email.com",
    message: "Hello, Please call me at 351-152-555 to talk further.",
  },
  {
    name: "Jan",
    email: "jan@email.com",
    message: "Welcome Jan. You created really nice project.",
  },
];

function messagesSide() {
  aboutMeContainer.style.display = "none";
  projectsContainer.style.display = "none";
  messagesContainer.style.display = "block";

  titleTextBig.textContent = "MESSAGES";
  titleTextSmall.textContent = "MESSAGE FROM THE INTERESTED PERSON";
  homeLinks.forEach((item) => {
    item.style.color = "var(--white)";
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
    item.style.color = "var(--lightGray)";
  });
  const formContactContainer = document.querySelector("#formContactContainer");
  if (formContactContainer) {
    formContactContainer.remove();
  }

  showMessages();

  function showMessages() {
    const messages = document.querySelector("#messages");

    messages.innerHTML = "";

    messagesArray.forEach((oneMessage) => {
      const message = document.createElement("p");
      message.innerText = `Name: ${oneMessage.name}\nEmail: ${oneMessage.email}\nMessage: ${oneMessage.message}`;
      messages.appendChild(message);
    });
  }
}

messagesLinks.forEach((messagesLink) => {
  messagesLink.addEventListener("click", messagesSide);
});
