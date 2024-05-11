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

/*=============== LOGIN ===============*/

const loginButton = document.getElementById('login-button'),
      loginClose = document.getElementById('login-close'),
      loginContent = document.getElementById('login-content')

/*=============== Login Show ===============*/

if(loginButton){
    loginButton.addEventListener('click',() =>{
        loginContent.classList.add('show-login')
    })
}
/*=============== Login  Hidden ===============*/

if(loginClose){
    loginClose.addEventListener('click', () =>{
        loginContent.classList.remove('show-login')

    })
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
//////////////////////////////////////////////////////////
cartButton = document.getElementById('cart-button'),
 cartButton1 = document.getElementById('button1'),
 cartButton2 = document.getElementById('button2'),
 cartButton3 = document.getElementById('button3'),
 cartButton4 = document.getElementById('button4'),
 cartButton5 = document.getElementById('button5'),
 cartButton6 = document.getElementById('button6'),
 cartButton7 = document.getElementById('button7'),
 cartButton8 = document.getElementById('button8'),
 cartButton9 = document.getElementById('button9'),
 cartButton10 = document.getElementById('button10'),
 cartButton11=document.getElementById('button111'),

      cartClose = document.getElementById('cart-close'),
      cartContent = document.getElementById('cart-content')

/*===============  ===============*/

s="The Giver  $11.19";

    cartButton.addEventListener('click',() =>{
        cartContent.classList.add('show-cart');
        
    })
    cartButton1.addEventListener('click',() =>{
        cartContent.classList.add('show-cart');
       
        addBookToArray("The Lord Of The King  $16.99");
    })
    cartButton3.addEventListener('click',() =>{
        cartContent.classList.add('show-cart');
        addBookToArray("Simple&Minimalist $14.99");
    })
    cartButton2.addEventListener('click',() =>{
        cartContent.classList.add('show-cart');
        addBookToArray("Muted Poster $10.99");
    })
    cartButton4.addEventListener('click',() =>{
        cartContent.classList.add('show-cart');
        addBookToArray("Pouring Dreams $11.99");
    })
    cartButton5.addEventListener('click',() =>{
        cartContent.classList.add('show-cart');
        addBookToArray("Customize Clothes $11.99");
    })
    cartButton6.addEventListener('click',() =>{
        cartContent.classList.add('show-cart');
        addBookToArray("Designed For Work $19.99");
    })
    cartButton7.addEventListener('click',() =>{
        cartContent.classList.add('show-cart');
        addBookToArray("Plant Tree $11.99");
    })
    cartButton8.addEventListener('click',() =>{
        cartContent.classList.add('show-cart');
        addBookToArray("Modern Poster $11.99");

    })
    cartButton9.addEventListener('click',() =>{
        cartContent.classList.add('show-cart');
        addBookToArray("Bird Park $11.99");

    })
    cartButton10.addEventListener('click',() =>{
        cartContent.classList.add('show-cart');
        addBookToArray("Memories of sword $11.99");
        
    })
   

////////////////////////////////////////////////////////////////////



/*=============== cart variables ===============*/

let bookDiv = document.getElementById("bookkk");



let  arrayOfBooks=[];

// if there is books add in localstorage
if(localStorage.getItem("bookkk")){
    arrayOfBooks=JSON.parse(localStorage.getItem("bookkk"));
}
getDataFromLocalStorage();
 





/*=============== close the cart ===============*/
if (cartClose) {
    cartClose.addEventListener('click', () => {
        cartContent.classList.remove('show-cart');
       
    });
}
/*=============== purchase ===============*/

if(cartButton11){
    cartButton11.addEventListener('click', () =>{
        cartButton11.classList.remove('show-cart')
        window.location.href = 'https://app.fatora.io/register/?src=www.google.com&for=pg&lang=ar';
    })
}
if(cartClose){
    cartClose.addEventListener('click', () =>{
        cartContent.classList.remove('show-cart')

    })
}
/*=============== adding and removing ===============*/


  ///remove 
bookDiv.addEventListener("click",(e)=>{
    if(e.target.classList.contains("del")){
        deleteBookWith(e.target.parentElement.getAttribute("data-id"));
        e.target.parentElement.remove();
        
    }
}

);


function addBookToArray(textText){
      const book ={
        id: Date.now(),
        title: textText,
      };
      arrayOfBooks.push(book);
      console.log(arrayOfBooks);
      addElementToPageForm(arrayOfBooks);
 // add to local storage
 addDataTolocalStorage(arrayOfBooks);
 // for testing 
 console.log(arrayOfBooks);
 console.log(JSON.stringify(addBookToArray));
}

/*=============== add book to page ===============*/



function addElementToPageForm(arrayOfBooks) {
    bookDiv.innerHTML = "";
    arrayOfBooks.forEach((book) => {
        let div = document.createElement("div");
        div.className = "bookk";
         div.setAttribute("data-id",book.id)
        div.style.border = "1px solid grey"; 
        div.style.padding = "10px"; 
        div.style.display = "flex"; 
        let textSpan = document.createElement("span");
        textSpan.textContent = book.title;
        textSpan.style.paddingTop="7px"
        textSpan.style.flex = "1"; 
        textSpan.style.fontWeight = "bold"; 
        //buton remove
        let button = document.createElement("button");
        button.textContent = "Remove";
        button.className="del";
        button.style.backgroundColor = "red"; 
        button.style.color = "white"; 
        button.style.fontWeight = "bold";
        button.style.padding="10px";

        
        // Append text and button to div
        div.appendChild(textSpan);
        div.appendChild(button);

        // Add margin between divs
        div.style.marginBottom = "10px";

        // Append div to bookDiv
        bookDiv.appendChild(div);
    });



}
// add to local storage

function addDataTolocalStorage(arrayOfBooks){
    window.localStorage.setItem("bookkk", JSON.stringify(arrayOfBooks)); 
}
function getDataFromLocalStorage(){
    let data = window.localStorage.getItem("bookkk");
    if(data){
        let books=JSON.parse(data);
        addElementToPageForm(books);
       
    }
}
function deleteBookWith(bookid){
    arrayOfBooks = arrayOfBooks.filter((book) => book.id != bookid);
    addDataTolocalStorage(arrayOfBooks);
}




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




