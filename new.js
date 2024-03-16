let vis=document.getElementsByClassName("vis");
let mis=document.getElementsByClassName("mis");

let vis_mis_content=document.getElementById("vis-mis-content");
function vision(){
    vis[0].classList.add("btn-primary");
    vis[0].classList.remove("btn-outline-primary");
    mis[0].classList.remove("btn-primary");
    mis[0].classList.add("btn-outline-primary");
    
    vis_mis_content.innerText="To contribute for sustainable development of nation through achieving excellence in technical education and research while facilitating transformation of students into responsible citizens and competent professionals.";
}
function mission(){
    mis[0].classList.add("btn-primary");
    mis[0].classList.remove("btn-outline-primary");
    vis[0].classList.remove("btn-primary");
    vis[0].classList.add("btn-outline-primary");

    vis_mis_content.innerText="To impart affordable and quality education in order to meet the needs of industries and achieve excellence in teaching-learning process.";
}

// Swiper JS
