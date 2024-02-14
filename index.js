const menuBtn = $(".menu-btn");
const navigation = $(".navigation");
const btns = document.querySelectorAll('.nav-btn'); //$(".nav-btn");
const slides = document.querySelectorAll('.video-slide');
const contents = document.querySelectorAll('.content')

menuBtn.click(()=>{
    menuBtn.toggleClass("active");
    navigation.toggleClass("active");
})

function slideNav(num) {
    btns.forEach((btn)=>{
        btn.classList.remove('active');
    })

    slides.forEach((slide)=>{
        slide.classList.remove('active');
    })

    contents.forEach((content)=>{
        content.classList.remove('active');
    })

    btns[num].classList.add('active');
    slides[num].classList.add('active');
    contents[num].classList.add('active');
}

btns.forEach((btn,i) => {

    btn.addEventListener("click", ()=>{
        slideNav(i);
    });
})
