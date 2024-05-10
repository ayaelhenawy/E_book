/*=============== SEARCH ===============*/
const searchButton = document.getElementById('search-button'),
      searchClose = document.getElementById('search-close'),
      searchContent = document.getElementById('search-content')

/*=============== Search Show ===============*/

if(searchButton){
    searchButton.addEventListener('click',() =>{
        searchContent.classList.add('show-search')
    })
}
/*=============== Search Hidden ===============*/

if(searchClose){
    searchClose.addEventListener('click', () =>{
        searchContent.classList.remove('show-search')

    })
}

/*=============== Sign up ===============*/

const loginButton = document.getElementById('login-button'),
      signClose = document.getElementById('sign-close'),
      signContent = document.getElementById('sign-content')

/*=============== sign up Show ===============*/

if(loginButton){
    loginButton.addEventListener('click',() =>{
        signContent.classList.add('show-sign')
    })
}
/*=============== sign up  Hidden ===============*/

if(signClose){
    signClose.addEventListener('click', () =>{
        signContent.classList.remove('show-sign')

    })
}
/*================login=================*/

const loginClose = document.getElementById('login-close'),
      loginContent = document.getElementById('login-content')



if(loginClose){
    loginClose.addEventListener('click', () =>{
        loginContent.classList.remove('show-login')

    })
}



    //localstorage sign up

    let signupName = document.getElementById('username');
    let signupEmail = document.getElementById('useremail');
    let signupPass = document.getElementById('userpassword');

    function signup(){
        if(signupName.value !=='' && signupEmail.value !== '' && signupPass.value !== ''){
            localStorage.setItem('name' , signupName.value);
            localStorage.setItem('email' , signupEmail.value);
            localStorage.setItem('password' , signupPass.value);

            //window.location.href = "login.html" ;
        }
        else{
            alert("Please Fill out all fields")
        }

    }

    // localstorage login 

    let loginEmail = document.getElementById('email');
    let loginPass = document.getElementById('password');

    function login(){
        let storeMail = localStorage.getItem('email');
        let storePass = localStorage.getItem('password');

        if(loginEmail.value == storeMail && loginPass.value == storePass){
            alert("Welcome");

            //window.location.href = "index.html";
        }
        else{
            alert("Please Enter Valid Email/Password")
        }
    }
    
    //show user 

    let userNameStore = localStorage.getItem('name');
    let User = document.getElementById('showname');

    User.textContent = userNameStore;


    // search 
 const search = () =>{
    const searchbox = document.getElementById('search-item').value.toUpperCae();
    const storeitems = document.getElementById('book-list')
    const product = document.querySelectorAll('.featured__card ')
    const pname = storeitems.getElementsByName('h2')


    for(var i =0; i< pname.length; i++){

        let match = product[i].getElementsByTagName('h2')[0];

        if(match){
            let textvalue = match.textContent || match.innerHTML

            if(textvalue.toUpperCase().indexOf(searchbox) > -1){
                product[i].style.display = "";

            }
            else{
                product[i].style.display = "none";

            }
        }
    }

 } 

/*=============== ADD SHADOW HEADER ===============*/
const shadowHeader = () =>{
  const header = document.getElementById('header')

  this.scrollY >= 50 ? header.classList.add('shadow-header')
                     : header.classList.remove('shadow-header')
                  
}
window.addEventListener('scroll', shadowHeader) 

/*=============== HOME SWIPER = ==============*/
let swiperHome = new Swiper('.home__swiper', {
    loop: true,
    spaceBetween: -24, 
    grabCursor: true,
    slidesPerView: 'auto',
    centeredSlides: 'auto',

    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    breakpoints: {
      1220: {
          spaceBetween: -32,
        }
    }
  
  })

  /*=============== FEATURED WSIPER = ==============*/
  let swiperFeatured = new Swiper('.featured__swiper', {
    loop: true,
    spaceBetween: 16,
    grabCursor: true,
    slidesPerView: 'auto',
    centeredSlides: 'auto',

    navigation:{
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      1150: {
         slidesPerView: 4,
         centeredSlides: false
        }
    }
});

/*=============== NEW SWIPER ===============*/
let swiperNew = new Swiper('.new__swiper', {
    loop: true,
    spaceBetween: 16,
    slidesPerView: 'auto',
    breakpoints: {
        1150: {
            slidesPerView: 3,
        }
    }
})

/*=============== TESTIMONIAL SWIPER ===============*/
let swiperTestimonial = new Swiper('.testimonial__swiper', {
    loop: true,
    spaceBetween: 16,
    grabCursor: true,
    slidesPerView: 'auto',
    centeredSlides: 'auto',

    breakpoints: {
        1150: {
            slidesPerView: 3,
            centeredSlides: false,
        }
    }
})

/*=============== SHOW SCROLL UP ===============*/
const scrollUp = ()=>{
    const scrollUp = document.getElementById('scroll-up')
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                 : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollDown = window.scrollY

  sections.forEach(current =>{
    const sectionHeight = current.offsetHeight,
         sectionTop = current.offsetTop - 58,
         sectionId = current.getAttribute('id'),
         sectionClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
        
    if(scrollDown > sectionTop && scrollDown <= sectionTop+ sectionHeight){
        sectionClass.classList.add('active-link')
    }
    else{
        sectionClass.classList.remove('active-link')
    }

  })
}
window.addEventListener('scroll',scrollActive)

/*=============== DARK LIGHT THEME ===============*/

const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

if (selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

themeButton.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)

    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())

 })

/*=============== SCROLL REVEAL ANIMATION ===============*/

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
});

sr.reveal(`.home__data, .featured__container, .new__container, .join__data, .testimonial__container,.footer`);
sr.reveal(`.home__images`, {delay: 600})
sr.reveal(`.services__card`, {interval: 100})
sr.reveal(`.discount__data`, {origin: 'left'})
sr.reveal(`.discount__images`, {origin: 'right'});