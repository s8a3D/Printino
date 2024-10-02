const btn = document.querySelector(".fa-bars");
const li = document.querySelector(".contenedor__de__listas");

btn.addEventListener("click",()=>{
        li.classList.toggle("active");
});
