
const headerInner = document.querySelector('.header_inner')
const headerLeft = document.querySelector('.header_left')
const headerRight = document.querySelector('.header_right')
const lnbWrap = document.querySelector('.lnb_wrap')

window.addEventListener('scroll', () => {
    if(window.scrollY> 50) {
        headerInner.style.height='70px'
        headerLeft.style.marginTop='25px'
        headerRight.style.marginTop='25px'
        lnbWrap.style.top='70px'
    } else {
        headerInner.style.height='120px'
        headerLeft.style.marginTop='50px'
        headerRight.style.marginTop='50px'
        lnbWrap.style.top='120px'
    }
}) // header_croll


const searchBar = document.querySelector('.search_bar')
const searchIcon = document.querySelector('.search_icon img')

searchIcon.addEventListener('click', ()=>{
    searchBar.classList.toggle('on')
    searchBar.focus()
}) // search


const all = document.querySelector('.all_products')

all.addEventListener('mouseenter', ()=> {
    lnbWrap.style.display='block'
    all.style.color='#FECA15'
    all.querySelector('.lnb_wrap').style.color='black'
})
all.addEventListener('mouseleave', ()=> {
    lnbWrap.style.display='none'
    all.style.color='black'
}) // lnb

const lnbs = document.querySelectorAll('.lnb_menu>li')

lnbs.forEach((lnb) => {
    lnb.addEventListener('mouseover', ()=>{
        lnb.querySelector('p').style.backgroundColor='#264989'
        lnb.querySelector('p').style.color='white'
        lnb.querySelector('.lnb_list').style.display='block'
    })
    lnb.addEventListener('mouseout', ()=>{
        lnb.querySelector('p').style.backgroundColor='white'
        lnb.querySelector('p').style.color='black'
        lnb.querySelector('.lnb_list').style.display='none'
    })
}) // lnb_list


new Swiper('.main_visual .swiper', {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    centeredSlides: true,
    autoplay:false,
    pagination: {
        el: '.main_visual .swiper-pagination',
        // type: 'prograssbar',
        clickable:true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
}) // main_visual_swiper


const bestLeftSlide = new Swiper('.left_swiper .swiper', {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    centeredSlides: true,
    autoplay: false,
    navigation: {
        nextEl: '.best_next',
        prevEl: '.best_prev',
    },
    on: {
        slideChange: bestSlideText
    }
}) // best_left_swiper

new Swiper('.right_swiper .swiper', {
    slidesPerView: 3,
    spaceBetween: 0,
    loop: true,
    centeredSlides: false,
    autoplay: false,
    navigation: {
        nextEl: '.best_next',
        prevEl: '.best_prev',
    }
}) // best_right_swiper

function bestSlideText() {
    const textBoxs = document.querySelectorAll('.best_text_wrap .best_text')
    textBoxs.forEach((textBox) => {
      textBox.classList.remove('on')
    })
    textBoxs[this.realIndex].classList.add('on')
} // best_swiper_on


const hovers = document.querySelectorAll('.hover')

hovers.forEach((hover, i) => {
    hover.addEventListener('mouseover', () => {
        hovers.forEach((hover) => {
            hover.classList.remove('hover_on')
        })
    hovers[i].classList.add('hover_on')
    })
}) // hover



const categoryTabs = document.querySelectorAll('.category_tabs li')
const categorySheets = document.querySelectorAll('.category_sheet')

categoryTabs.forEach((categoryTab, i) => {
    categoryTab.addEventListener('click', () => {
        categoryTabs.forEach((categoryTab) => {
            categoryTab.classList.remove('on')
        })
    categoryTabs[i].classList.add('on')
    categorySheets.forEach((categorySheet) => {
        categorySheet.classList.remove('on')
    })
    categorySheets[i].classList.add('on')
    })
}) // category_tab


const hour = document.querySelector('.new_time_hour')
const minutes = document.querySelector('.new_time_minute')
const seconds = document.querySelector('.new_time_second')
let today = new Date()
let getToday = today.getTime()

setInterval(() => {
    getToday -= 1000
    let now = new Date(getToday)
    hour.textContent = now.getHours().toString().padStart(2, '0')
    minutes.textContent = now.getMinutes().toString().padStart(2, '0')
    seconds.textContent = now.getSeconds().toString().padStart(2, '0')
}, 1000) // time_event


/*----- instagram_swiper -----*/
new Swiper('.instagram .swiper', {
    slidesPerView: 4,
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay:1000
    },
    pagination: {
        el: '.instagram .swiper-pagination',
        clickable:true,
        type: 'progressbar'
    }
}) // instagram



const topBtn = document.querySelector('.top_btn')

window.addEventListener('scroll', () => {
    if(window.scrollY>400) {
        topBtn.style.opacity='1'
    } else {
        topBtn.style.opacity='0';
    }
})
topBtn.addEventListener('click', ()=>{
    gsap.to(window, 1, {
        scrollTo: 0,
    })
}) // top_btn