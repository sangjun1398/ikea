
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


const tableMain = document.querySelector('.table_main>a>img')
const tableTabs = document.querySelectorAll('.table_tab>li')
const tableBefore = document.querySelector('.table_title_before')

tableTabs.forEach((tableTab) => {
    tableTab.addEventListener('click', function() {
        tableMain.src = tableTab.querySelector('img').src
    })
}) // sleep_click_event


const sleepMain = document.querySelector('.sleep_main>a>img')
const sleepTabs = document.querySelectorAll('.sleep_tab>li')
const sleepBefore = document.querySelector('.sleep_title_before')

sleepTabs.forEach((sleepTab) => {
    sleepTab.addEventListener('click', function() {
        sleepMain.src = sleepTab.querySelector('img').src
    })
}) // sleep_click_event


const accordions = document.querySelectorAll('.accordion')

accordions.forEach((accordion, index) => {

    accordion.addEventListener('mouseover', function() {
        this.style.width='80%'
    })
    accordion.addEventListener('mouseout', function() {
        this.style.width='25%'
    })
}) // accordion


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