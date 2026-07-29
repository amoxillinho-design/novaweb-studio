// ===================================
// COUNTER ANIMATION
// ===================================

const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            const counter = entry.target;
            const target = Number(counter.dataset.target);

            let count = 0;

            const speed = target / 100;

            const update = ()=>{

                count += speed;

                if(count < target){

                    counter.textContent = Math.floor(count);

                    requestAnimationFrame(update);

                }else{

                    counter.textContent = target;

                }

            };

            update();

            counterObserver.unobserve(counter);

        }

    });

},{threshold:.5});

counters.forEach(counter=>{

    counterObserver.observe(counter);

});