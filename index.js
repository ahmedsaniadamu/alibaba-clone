window.addEventListener('load', pageLoaded)

function pageLoaded(){
   
   // global variables
   let signUpicon = document.querySelector('.sign-up'),
       signUpDropdownMenu = document.querySelector('div.sign-up-dropdown-menu'),
       orderIcon = document.querySelector('.orders'),
        orderDropdownMenu = document.querySelector('.orders-dropdown-menu'),
        languageBtn = document.querySelector('.english') ,
        languageDropdownMenu = document.querySelector('.language-dropdown-menu') ,
        shipToBtn = document.querySelector('.ship-to'),
        shipToDropdownMenu = document.querySelector('.ship-to-dropdown-menu')
   
   // display a  dropdown when sing up icon was hovered

   signUpicon.addEventListener('mouseover', (event) => {
          signUpDropdownMenu.style.display = `block`
          signUpDropdownMenu.style.left =  `${event.clientX - 300}px` ;
          orderDropdownMenu.style.display = 'none'

   }) 
   // hide dropdown when mouse is hovered out of sign up icon

   signUpDropdownMenu.addEventListener('mouseout', function () {
         this.style.display = `none`
   }) 
   // retain a  dropdown content from disappearing when user is hovering through dropdown container
   signUpDropdownMenu.addEventListener('mouseover', function (){
         this.style.display = `block`
   }) 

// display a dropdown menu when order icon was hovered

   orderIcon.addEventListener('mouseover', (event) => {
          orderDropdownMenu.style.display = `block`
          orderDropdownMenu.style.left =  `${event.clientX - 220}px` ;
          signUpDropdownMenu.style.display = 'none'
   }) 
   // hide dropdown when mouse is hovered out of the dropdown

   orderDropdownMenu.addEventListener('mouseout', function () {
         this.style.display = `none`
   }) 
   // retain dropdown content from disappearing when user is hovering through dropdown container
   orderDropdownMenu.addEventListener('mouseover', function (){
         this.style.display = `block`
   }) 

    languageBtn.addEventListener('mouseover', (event) => {
        languageDropdownMenu.style.display = 'block'
        languageDropdownMenu.style.left =   `${event.clientX - 220}px` ;
        shipToDropdownMenu.style.display = 'none'
    })
  
  languageDropdownMenu.addEventListener('mouseover', function(){
        this.style.display = 'block'
    })

   languageDropdownMenu.addEventListener('mouseout', function(){
        this.style.display = 'none'
    })

     shipToBtn.addEventListener('mouseover', (event) => {
        shipToDropdownMenu.style.display = 'block'
        shipToDropdownMenu.style.left =   `${ event.clientX - 400}px` ;
        languageDropdownMenu.style.display = 'none'
    })
  
  shipToDropdownMenu.addEventListener('mouseover', function(){
        this.style.display = 'block'
    })

   shipToDropdownMenu.addEventListener('mouseout', function(){
        this.style.display = 'none'
    })

// a function to display an overlay when service body is hovered
  
    const TradeServiceFunc = () => {

      // select all service container elements
      
        let allServiceBody = document.querySelectorAll('.service-body') ,
      
        //select all service content element.
         
            allServiceOverlay = document.querySelectorAll('.service-content')
      
        // loop through all service body elements 
      
        for(let index = 0 ; index < allServiceBody.length ; index++){

              // display an overlay on elements hover .

              allServiceBody[index].addEventListener('mouseover', function(){
                     allServiceOverlay[index].style.opacity = '1'
              });

              // hide an overlay when mouse is hovered out of the elements

             allServiceBody[index].addEventListener('mouseout', function(){
                     allServiceOverlay[index].style.opacity = '0'
              });
        }
    }
    TradeServiceFunc() ;
}