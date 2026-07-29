// ===================================
// TESTIMONIAL SLIDER
// ===================================

const slider = document.querySelector(".testimonial-slider");

if(slider){

    let index = 0;

    const cards = slider.children;

    function showSlides(){

        for(let i=0;i<cards.length;i++){

            cards[i].style.display = "none";

        }

        cards[index].style.display = "block";

        index++;

        if(index >= cards.length){

            index = 0;

        }

    }

    showSlides();

    setInterval(showSlides,4000);

}