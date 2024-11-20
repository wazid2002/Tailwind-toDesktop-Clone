let nav=document.getElementById("inset-nav")

function handleMenu(){
    nav.classList.toggle('hidden');
}

const initialTranslateLTR=-48*4;
const initialTranslateRTL=36*4;


function setupIntersectionObserver(element, isLTR, speed) {
    let scrollHandlerAdded = false;

    const intersectionCallback = (entries) => { 
        const isIntersecting = entries[0].isIntersecting;
        if (isIntersecting) {
            if (!scrollHandlerAdded) {
                document.addEventListener('scroll', scrollHandler);
                scrollHandlerAdded = true;
            }
        } else {
            if (scrollHandlerAdded) {
                document.removeEventListener('scroll', scrollHandler);
                scrollHandlerAdded = false;
            }
        }
    };

    const intersectionObserver = new IntersectionObserver(intersectionCallback);

    intersectionObserver.observe(element);

    function scrollHandler() {
        const translateX = (window.innerHeight - element.getBoundingClientRect().top) * speed;
        
        let totalTranslate=0;
        if(isLTR){
            totalTranslate=translateX+initialTranslateLTR;

        }else{

            totalTranslate=-(translateX+initialTranslateRTL)

        }
        
        element.style.transform = `translateX(${totalTranslate}px)`;
    }
}

const line1 = document.getElementById('line-1');
const line2 = document.getElementById('line-2');
const line3 = document.getElementById('line-3');
const line4 = document.getElementById('line4');


setupIntersectionObserver(line1, true, 0.15);
setupIntersectionObserver(line2, false, 0.15);
setupIntersectionObserver(line3, true, 0.15);
setupIntersectionObserver(line4, true, 0.8);


const dtElements=document.querySelectorAll('dt');
dtElements.forEach(element =>{
    element.addEventListener('click',()=>{
        const ddId=element.getAttribute('aria-controls');
        const ddElement=document.getElementById(ddId);
        const ddArrowicon=element.querySelectorAll('i')[0];

        ddElement.classList.toggle('hidden');
        ddArrowicon.classList.toggle('-rotate-180');
    })
})


