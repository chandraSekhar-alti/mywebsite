function sendEmail(){
    console.log("function calling!!!!")
    let params = {
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        subject : document.getElementById("subject").value,
        message : document.getElementById("message").value,
    }

    console.log("params :- ",params)

    emailjs.send("service_0d46s1k","template_pxbks3l",params).then(alert("Your email has been sent !!!!!!"));

    console.log("function ended !!!!!!")
}



// let menuIcon = document.querySelector("#menu-icon");
// let navbar = document.querySelector(".navbar");

// let sections = document.querySelectorAll("section");
// let navLinks = document.querySelectorAll("header nav a");

// window.onscroll = () => {
//     sections.forEach((sec) => {
//       let top = window.scrollY;
//       let offset = sec.offsetTop - 150;
//       let height = sec.offsetHeight;
//       let id = sec.getAttribute("id");
  
//       if (top >= offset && top < offset + height) {
//         navLinks.forEach((link) => {
//           link.classList.remove("active");
//         });
//         document
//           .querySelector("header nav a[href*=" + id + "]")
//           .classList.add("active");
//       }
//     });
//   };
  

//   menuIcon.onclick = () => {
//     menuIcon.classList.toggle("bx-x");
//     navbar.classList.toggle("active");
//   };





