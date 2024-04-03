
var swiper = new Swiper(",mySwiper-1",{
    slidesPerView:1,
    spacebetween: 30,
    loop:true,
    pagination:{
        el:".swiper-pagination",
        clickable:true,
    },
    navigation:{
        nextEl:".swiper-button-next",
        prevEl:".swiper-button-prev"
    }

})
var swiper = new Swiper(",mySwiper-2",{
    slidesPerView:4,
    spacebetween: 30,
    loop:true,
    loopfillGroupwithalank: true,
    navigation:{
        nextEl:".swiper-button-next",
        pervEl:".swiper-button-prev"
    },
    breakpoints :{
        0:{
            slidesPerView:1
        },
        520:{
            slidesPerView:2
        },
        950:{
            slidesPerView:3
        }
    }

})
var pageA = document.getElementById("page-a");
var pageB = document.getElementById("page-b");
const customButtons = document.querySelectorAll('.custom-button');
let responses = {
    pageOne: "",
    pageTwo: "",
};

function goPageB() {
    pageA.classList.remove("fade-in");
    pageA.classList.add("fade-out");
    setTimeout(() => {
        pageA.style.display = "none";
        pageB.style.display = "flex";
        pageB.classList.remove("fade-out");
        pageB.classList.add("fade-in");
    }, 500);
}

const goPageA = () => {
    pageB.classList.remove("fade-in");
    pageB.classList.add("fade-out");
    setTimeout (() => {
        pageB.style.display = "none";
        pageA.style.display = "flex";
        pageA.classList.remove("fade-out");
        pageA.classList.add("fade-in");
    }, 500);
}

const algo = (e) => {
    Array.from(document.getElementsByClassName('custom-button')).forEach(el => {
        el.classList.remove('active');
    });
    e.currentTarget.classList.add('active');
    if(!!document.getElementsByClassName('page-one')){
        if(document.getElementsByClassName('page-one') && document.getElementById('page-b').style.display === 'none'){
            console.log("desde 1", e.currentTarget);
            responses.pageOne = e.currentTarget.getAttribute('data-info');
        };
    };

    if(!!document.getElementsByClassName('page-two')){
        if(document.getElementsByClassName('page-two') && document.getElementById('page-a').style.display === 'none'){
            console.log("desde 2", e.currentTarget);
            responses.pageTwo = e.currentTarget.getAttribute('data-info');
        };
    };
    
    console.log(responses);
}


customButtons.forEach(button => {
    button.addEventListener('click', algo);
});