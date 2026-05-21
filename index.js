  const menuIcon = document.querySelector(".fa-bars");
      const dropDownMenu = document.querySelector(".dropdown");
      const homeSection = document.getElementById("home-section");
      const submitComplaint = document.getElementById("submit-complaint");
      const submit = document.querySelectorAll(".submit");
      const home = document.querySelector(".hom");

      submit.forEach((button) => {
        button.addEventListener("click", () => {
          homeSection.style.display = "none";
          submitComplaint.style.display = "block";
        });
      });

      home.addEventListener("click", () => {
        homeSection.style.display = "block";
        submitComplaint.style.display = "none";
      });

      menuIcon.addEventListener("click", (e) => {
        dropDownMenu.classList.toggle("open");
        if (dropDownMenu.classList.contains("open")) {
          menuIcon.classList.add("fa-x");
          menuIcon.classList.remove("fa-bars");
        } else {
          menuIcon.classList.remove("fa-x");
          menuIcon.classList.add("fa-bars");
        }
        // e.stopPropagation();
      });
      document.addEventListener("click", (e) => {
        if (!menuIcon.contains(e.target) && !dropDownMenu.contains(e.target)) {
          dropDownMenu.classList.remove("open");
          menuIcon.classList.remove("fa-x");
          menuIcon.classList.add("fa-bars");
        }
      });

      