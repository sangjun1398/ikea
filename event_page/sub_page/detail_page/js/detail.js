
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
  

new Swiper('.detail_main_tab>.swiper', {
    slidesPerView: 3,
    spaceBetween: 20,
    direction: 'vertical',
    loop: false,
    centeredSlides: false,
    autoplay: false,
    navigation: {
        nextEl: '.detail_main .swiper-button-next',
        prevEl: '.detail_main .swiper-button-prev',
    }
}) // main_tab_slide

const mainImg = document.querySelector('.detail_main_img>img')
const mainTabs = document.querySelectorAll('.detail_main_tab>.swiper>.swiper-wrapper>div')

mainTabs.forEach((mainTab, index) => {
    mainTab.addEventListener('click', function() {
        mainImg.src = this.querySelector('img').src
    })
}) // main_img change


new Swiper('.relation>.swiper', {
    slidesPerView: 4,
    spaceBetween: 90,
    loop: true,
    centeredSlides: false,
    autoplay: false,
    pagination: {
        el: '.relation .swiper-pagination',
        clickable:true,
    },
    navigation: {
        nextEl: '.relation .swiper-button-next',
        prevEl: '.relation .swiper-button-prev',
    }
}) // relation_slide


new Swiper('.recommend>.swiper', {
    slidesPerView: 4,
    spaceBetween: 100,
    loop: true,
    centeredSlides: false,
    autoplay: false,
    pagination: {
        el: '.recommend .swiper-pagination',
        clickable:true,
    },
    navigation: {
        nextEl: '.recommend .swiper-button-next',
        prevEl: '.recommend .swiper-button-prev',
    }
}) // recommend_slide

  
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