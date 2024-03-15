// ИЗМЕНЕНИЕ ВЕРТИКАЛЬНОГО СЛАЙДЕРА

// ПСЕВДО СКРОЛЛ 

// let scrollableElement = document.getElementById("scrollable");
// let resizableElement = document.getElementById("resizable");

// scrollableElement.addEventListener("scroll", function() {
//   let scrollTop = scrollableElement.scrollTop;
//   let scrollHeight = scrollableElement.scrollHeight - scrollableElement.clientHeight;
//   let scrollPercentage = (scrollTop / scrollHeight) * 100;

//   resizableElement.style.height = scrollPercentage + "%";
// });



// ПСЕВДО СКРОЛЛ
    

// Add the scroll event listener and execute the code inside only for wider screens


    // scrollableElement.addEventListener("scroll", function() {
    //     let scrollTop = scrollableElement.scrollTop;
    //     let scrollHeight = scrollableElement.scrollHeight - scrollableElement.clientHeight;
    //     let item2 = document.querySelector('.perks-item-2');
    //     let item3 = document.querySelector('.perks-item-3');
    //     let scrollPercentage = (scrollTop / scrollHeight) * 100;
    
    //     resizableElement.style.height = scrollPercentage + "%";
    
    //     if (scrollPercentage > 10) {
    //       item2.classList.add("perks-item-active"); 
    //     } else {
    //       item2.classList.remove("perks-item-active"); 
    //     }
    
    //     if (scrollPercentage > 20) {
    //       item3.classList.add("perks-item-active");
    //     } else {
    //       item3.classList.remove("perks-item-active"); 
    //     }
    //   });

    let body = document.body;
    let resizableElement = document.getElementById("resizable");
    
    window.addEventListener("scroll", function() {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      let scrollHeight = body.scrollHeight - window.innerHeight;
      let scrollPercentage = (scrollTop / scrollHeight) * 100;
    
      if (scrollPercentage <= 10) {
        resizableElement.style.height = "1%";
      } 

      if (scrollPercentage >= 15) {
        resizableElement.style.height = "33%";
      } 

      if (scrollPercentage >= 25) {
        resizableElement.style.height = "66%";
      } 

      if (scrollPercentage >= 30) {
        resizableElement.style.height = "100%";
      } 
    });

      document.addEventListener("DOMContentLoaded", function() {
        let body = document.body;
    
        function calculateScrollPercentage() {
          let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
          let scrollHeight = body.scrollHeight - window.innerHeight;
          let scrollPercentage = (scrollTop / scrollHeight) * 100;
          let item2 = document.querySelector('.perks-item-2');
          let item3 = document.querySelector('.perks-item-3');
    
          if (scrollPercentage >= 25) {
            item2.classList.add('perks-item-active')
          } else {
            item2.classList.remove('perks-item-active')
          }
    
          if (scrollPercentage >= 30) {
            item3.classList.add('perks-item-active')
          } else {
            item3.classList.remove('perks-item-active')
          }
    
          requestAnimationFrame(calculateScrollPercentage);
        }
    
        calculateScrollPercentage();
      });
  
  // ИЗМЕНЕНИЕ ВЕРТИКАЛЬНОГО СЛАЙДЕРА

// ДОБАВЛЕНИЕ КЛАССА В УСЛУГАХ
  document.addEventListener("DOMContentLoaded", function() {
    let body = document.body;

    function calculateScrollPercentage() {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      let scrollHeight = body.scrollHeight - window.innerHeight;
      let scrollPercentage = (scrollTop / scrollHeight) * 100;
      let title1 = document.querySelector(".title-wrap-1");
      let title2 = document.querySelector(".title-wrap-2");

      // if (scrollPercentage >= 42) {
      if (scrollPercentage >= 57) {
        title1.classList.add('overlap')
      } else {
        title1.classList.remove('overlap')
      }

      if (scrollPercentage >= 68) {
        title2.classList.add('overlap')
      } else {
        title2.classList.remove('overlap')
      }

      requestAnimationFrame(calculateScrollPercentage);
    }

    calculateScrollPercentage();
  });

// ДОБАВЛЕНИЕ КЛАССА В УСЛУГАХ