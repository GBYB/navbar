function display() {
  if (screen.width > 425) {
    // clear children of low display
    if (
      document.querySelector(".right").contains(document.querySelector(".list"))
    ) {
      document.querySelector(".list").remove();
      if (
        document
          .querySelector(".navContainer")
          .contains(document.querySelector(".dropDown"))
      )
        document.querySelector(".dropDown").remove();
    }
    if (
      !document
        .querySelector(".right")
        .contains(document.querySelector(".heading"))
    ) {
      function addItem(title) {
        let node = document.createElement("div");
        node.innerText = title;
        node.className = "heading";
        document.querySelector(".right").appendChild(node);
      }
      addItem("Home");
      addItem("Offers");
      addItem("Profile");
      addItem("About Us");
      addItem("Carreers");
    }

    node = document.querySelector(".heading");
    console.log(node);
    node.onmouseover = () => {
      let node = document.querySelector(".heading");
      console.log(node);

      node.style.borderBottom = "2px solid white";
      node.style.cursor = "pointer";
    };

    node.onmouseout = () => {
      let node = document.querySelector(".heading");
      node.style.borderBottom = "0";
    };
  } else {
    // clear children of big display
    if (
      document
        .querySelector(".right")
        .contains(document.querySelector(".heading"))
    ) {
      document.querySelectorAll(".heading").forEach((el) => el.remove());
    }
    if (
      !document
        .querySelector(".right")
        .contains(document.querySelector(".list"))
    ) {
      let node = document.createElement("div");
      node.className = "list";
      document.querySelector(".right").append(node);
      node = document.createElement("i");
      node.className = "fa-solid fa-bars";
      node.id = "list";
      document.querySelector(".list").append(node);
      node = document.querySelector(".list");
      node.onclick = displayM;
    }
  }
}

function displayM() {
  console.log("hello");
  let element = document.createElement("div");
  element.className = "dropDown";
  document.querySelector(".navContainer").appendChild(element);
  function addItem(title) {
    element = document.createElement("h3");
    element.innerText = title;
    document.querySelector(".dropDown").appendChild(element);
  }
  addItem("Home");
  addItem("Offers");
  addItem("Profile");
  addItem("About Us");
  addItem("Carreers");

  let node = document.querySelector("#list");
  node.remove();

  node = document.createElement("i");
  node.className = "fa-solid fa-x";
  node.id = "list";
  document.querySelector(".list").appendChild(node);

  node = document.querySelector(".list");
  node.onclick = rDisplayM;
}

function rDisplayM() {
  console.log("bye");

  document.querySelector(".dropDown").remove();
  document.querySelector("#list").remove();

  let node = document.createElement("i");
  node.className = "fa-solid fa-bars";
  node.id = "list";
  document.querySelector(".list").append(node);

  node = document.querySelector(".list");
  node.onclick = displayM;
}
