let colorSquares = document.querySelectorAll("ul li");
let exp = document.querySelector(".experiment");


if(window.localStorage.getItem("color")){

  // change div color
  exp.style.backgroundColor = window.localStorage.getItem("color");

  // remove the active class from all lis
  colorSquares.forEach((li) => {
    li.classList.remove("active");
  });

  // add active class to current item
  document.querySelector(`[data-color="${window.localStorage.getItem("color")}"]`).classList.add("active")
}

colorSquares.forEach((li) => {
  li.addEventListener("click", (e) => {

    // Remove Active Class From all Lis
    colorSquares.forEach((li) => {
      li.classList.remove("active");
    });

    // Add Active Class To Current Element
    e.currentTarget.classList.add("active");

    // Add Current Color To Local Storage
    window.localStorage.setItem("color", e.currentTarget.dataset.color);
    
    // Change Div Background Color
    exp.style.backgroundColor = e.currentTarget.dataset.color;
  });
});