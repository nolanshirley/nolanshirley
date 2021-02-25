AOS.init({
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 400, // values from 0 to 3000, with steps of 50ms
    once: false, // whether animation should happen only onece - while scrolling down 
    mirror: false // whether element should animate out while scrolling past them 
  }); 
  
   const func = () => {
       if (window.screen.width < 600) {
       const transition = document.querySelector(".transition").attributes["data-aos"].value = " "
       const transition2 = document.querySelector(".transition2").attributes["data-aos"].value = " "
       const transition3 = document.querySelector('.transition3').attributes["data-aos"].value = " "
       const transition4 = document.querySelector('.transition4').attributes["data-aos"].value = " "
       const transition5 = document.querySelector('.transition5').attributes["data-aos"].value = " "
       const transition6 = document.querySelector('.transition6').attributes["data-aos"].value = " "

      console.log(transition.attributes["data-aos"]) 
   }
}
func();