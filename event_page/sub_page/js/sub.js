
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


const product = document.querySelector('.product')
const space = document.querySelector('.space')
const contents = document.querySelectorAll('.content')

contents.forEach((content, index) => {

    content.addEventListener('mouseover', function() {
        this.querySelector('img').src = this.querySelector('img').src.replace('_off', '_on')
    });
    content.addEventListener('mouseout', function() {
        this.querySelector('img').src = this.querySelector('img').src.replace('_on', '_off')
    });
})
product.addEventListener('click', ()=>{
    contents.forEach((content, index) => {
        content.querySelector('img').src = content.querySelector('img').src.replace('_on', '_off')

        content.addEventListener('mouseover', function() {
            this.querySelector('img').src = this.querySelector('img').src.replace('_off', '_on')
        });

        content.addEventListener('mouseout', function() {
            this.querySelector('img').src = this.querySelector('img').src.replace('_on', '_off')
        });
    })
    product.style.backgroundColor='#264989'
    product.style.color='white'
    space.style.backgroundColor='white'
    space.style.color='black'
})
space.addEventListener('click', ()=>{
    contents.forEach((content, index) => {
        content.querySelector('img').src = content.querySelector('img').src.replace('_off', '_on')

        content.addEventListener('mouseover', function() {
            this.querySelector('img').src = this.querySelector('img').src.replace('_on', '_off')
        });
        content.addEventListener('mouseout', function() {
            this.querySelector('img').src = this.querySelector('img').src.replace('_off', '_on')
        });
    })
    product.style.backgroundColor='white'
    product.style.color='black'
    space.style.backgroundColor='#264989'
    space.style.color='white'
}) // content

const filters = document.querySelectorAll('.contents_filter>li')

filters.forEach((filter) => {
    filter.addEventListener('mouseover', ()=>{
        filter.querySelector('ul').style.display='block'
    })
    filter.addEventListener('mouseleave', ()=>{
        filter.querySelector('ul').style.display='none'
    })
})











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