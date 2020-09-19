let about = document.querySelector('#about');
let detailsCard = document.querySelector('.details-card');
let dataCard = document.querySelector('.data');

about.addEventListener("click",()=>{
    detailsCard.style.display="none";
    dataCard.style.display="block";
})