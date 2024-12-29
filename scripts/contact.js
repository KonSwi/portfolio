function contactSide() {
  mainContent.style.display = "none";
  projectsContainer.style.display = "none";
  messagesContainer.style.display = "none";

  titleTextBig.textContent = "CONTACT ME";
  titleTextSmall.textContent = "SAY HELLO TO ME";

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
    item.style.color = "var(--lightGray)";
  });
  messagesLinks.forEach((item) => {
    item.style.color = "var(--white)";
  });

  const formContactContainer = main.querySelector("#formContactContainer");
  if (!formContactContainer) {
    const formContactContainer = document.createElement("div");
    formContactContainer.setAttribute("id", "formContactContainer");
    const contactContent = document.createElement("div");
    contactContent.setAttribute("id", "contactContent");
    const formContact = document.createElement("form");
    formContact.setAttribute("id", "formContact");

    const heading = document.createElement("h2");
    heading.innerText = "Contact me";
    heading.style.marginBottom = "-10px";

    const formRowOne = document.createElement("div");
    formRowOne.setAttribute("id", "formRowOne");
    formRowOne.setAttribute("class", "formRow");
    const rowName = document.createElement("span");
    rowName.setAttribute("class", "smallRow");
    const contactNameLabel = document.createElement("label");
    contactNameLabel.setAttribute("for", "input-name");
    contactNameLabel.innerText = "Name";
    const contactNameInput = document.createElement("input");
    contactNameInput.setAttribute("class", "inputText");
    contactNameInput.setAttribute("type", "text");
    contactNameInput.setAttribute("placeholder", "Your Name");
    const contactNameInputAlert = document.createElement("span");
    contactNameInputAlert.setAttribute("class", "alertContainer");

    const rowEmail = document.createElement("span");
    rowEmail.setAttribute("class", "smallRow");
    const contactEmailLabel = document.createElement("label");
    contactEmailLabel.setAttribute("for", "input-email");
    contactEmailLabel.innerText = "Email";
    const contactEmailInput = document.createElement("input");
    contactEmailInput.setAttribute("class", "inputText");
    contactEmailInput.setAttribute("type", "email");
    contactEmailInput.setAttribute("placeholder", "email@example.com");
    const contactEmailInputAlert = document.createElement("span");
    contactEmailInputAlert.setAttribute("class", "alertContainer");

    const formRowTwo = document.createElement("div");
    formRowTwo.setAttribute("id", "formRowTwo");
    formRowTwo.setAttribute("class", "formRow");
    const contactMessageLabel = document.createElement("label");
    contactMessageLabel.setAttribute("for", "input-message");
    contactMessageLabel.innerText = "Message";
    const contactMessageInput = document.createElement("input");
    contactMessageInput.setAttribute("class", "inputText");
    contactMessageInput.setAttribute("type", "text");
    contactMessageInput.setAttribute("placeholder", "Hello, my name is . . .");
    const contactMessageInputAlert = document.createElement("span");
    contactMessageInputAlert.setAttribute("class", "alertContainer");

    main.appendChild(formContactContainer);
    formContactContainer.appendChild(contactContent);
    contactContent.appendChild(formContact);
    formContact.appendChild(heading);
    formContact.appendChild(formRowOne);
    formRowOne.appendChild(rowName);
    rowName.appendChild(contactNameLabel);
    rowName.appendChild(contactNameInput);
    rowName.appendChild(contactNameInputAlert);

    formRowOne.appendChild(rowEmail);
    rowEmail.appendChild(contactEmailLabel);
    rowEmail.appendChild(contactEmailInput);
    rowEmail.appendChild(contactEmailInputAlert);

    formContact.appendChild(formRowTwo);
    formRowTwo.appendChild(contactMessageLabel);
    formRowTwo.appendChild(contactMessageInput);
    formRowTwo.appendChild(contactMessageInputAlert);

    const sendMessageButton =
      contactContent.querySelector("#sendMessageButton");
    if (!sendMessageButton) {
      const sendMessageButton = document.createElement("button");
      sendMessageButton.setAttribute("class", "buttons");
      sendMessageButton.setAttribute("id", "sendMessageButton");
      sendMessageButton.innerText = "Send message";
      contactContent.appendChild(sendMessageButton);
      sendMessageButton.addEventListener("click", confirmMessage);
    }

    ///////////////////////////////  WALIDACJE
    function validationName() {
      contactNameInput.style.borderColor = "var(--darkBlue)";
      contactNameInputAlert.innerText = "";
      if (contactNameInput.value.replace(/\s+/g, "").length < 3) {
        contactNameInputAlert.innerText =
          "The name must be at least 3 characters long.";
        contactNameInput.style.borderColor = "var(--red)";
        return false;
      } else if (contactNameInput.value.length > 20) {
        contactNameInputAlert.innerText =
          "The title must not exceed 20 characters.";
        contactNameInput.style.borderColor = "var(--red)";
        return false;
      } else {
        contactNameInputAlert.innerText = "";
        contactNameInput.style.borderColor = "var(--darkBlue)";
        return true;
      }
    }
    function validationEmail() {
      contactEmailInput.style.borderColor = "var(--darkBlue)";
      contactEmailInputAlert.innerText = "";
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contactEmailInput.value)) {
        contactEmailInputAlert.innerText =
          "Please enter a valid email address.";
        contactEmailInput.style.borderColor = "var(--red)";
        isValid = false;
      } else {
        contactEmailInputAlert.innerText = "";
        contactEmailInput.style.borderColor = "var(--darkBlue)";
        return true;
      }
    }
    function validationMessage() {
      contactMessageInput.style.borderColor = "var(--darkBlue)";
      contactMessageInputAlert.innerText = "";

      if (contactMessageInput.value.trim() === "") {
        contactMessageInputAlert.innerText = "The message cannot be empty.";
        contactMessageInput.style.borderColor = "var(--red)";
        isValid = false;
      } else if (contactMessageInput.value.length > 100) {
        contactMessageInputAlert.innerText =
          "The message must not exceed 100 characters.";
        contactMessageInput.style.borderColor = "var(--red)";
        isValid = false;
      } else {
        contactMessageInputAlert.innerText = "";
        contactMessageInput.style.borderColor = "var(--darkBlue)";
        return true;
      }
    }
    contactNameInput.addEventListener("input", validationName);
    contactEmailInput.addEventListener("input", validationEmail);
    contactMessageInput.addEventListener("input", validationMessage);

    function confirmMessage() {
      let isValid = true;
      if (!validationName()) {
        isValid = false;
      }
      if (!validationEmail()) {
        isValid = false;
      }
      if (!validationMessage()) {
        isValid = false;
      }

      if (isValid) {
        const messageContent = {
          name: contactNameInput.value,
          email: contactEmailInput.value,
          message: contactMessageInput.value,
        };
        messagesArray.push(messageContent);
        updateMessages();

        contactNameInput.value = "";
        contactEmailInput.value = "";
        contactMessageInput.value = "";
      }
    }
    function updateMessages() {
      const messages = document.querySelector("#messages");

      messagesArray.forEach((oneMessage) => {
        const message = document.createElement("p");
        message.innerText = `Name: ${oneMessage.name}\nEmail: ${oneMessage.email}\nMessage: ${oneMessage.message}`;
        messages.appendChild(message);
      });
    }
  }
}

contactLinks.forEach((contactLink) => {
  contactLink.addEventListener("click", contactSide);
});
