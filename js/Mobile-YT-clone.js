` use strict`


/*
header = document.querySelector(`header`);
const copyrights = document.querySelector(`.copyrights`);
const socialIcons = document.querySelector(`.social-icons`);
const up = document.querySelector(`.up`);


function toCopyrights( moveADistance ) {
    window.scrollTo({top: 100 , behavior : `smooth`})
}

copyrights.addEventListener(`click` , toCopyrights() )
up.addEventListener(`click` , toCopyrights(header.getBoundingClientRect().top) )

//up.style.color = "red";
//socialIcons.style.background = "red";

*/


header = document.querySelector(`header`);
const copyrights = document.querySelector(`.copyrights`);
const copyrightsModal = document.querySelector(`#copyrights-modal`);
const socialIcons = document.querySelector(`.icons`);
const up = document.querySelector(`.up`);




copyrights.addEventListener(`click` ,  function () {
    window.scrollTo({top: 10000 , behavior : `smooth`});
    
    }
    )
    
    up.addEventListener(`click` ,  function () {
    window.scrollTo({top: header.getBoundingClientRect().top , behavior : `smooth`})
    }
    )
    
 window.addEventListener(`scroll`, function () {
       if (window.scrollY >= 2430) {
        up.style.transform = "translateY(-200px)";
        copyrights.style.transform = "translateY(-200px)";
        //copyrightsModal.classList.remove(`hide`);
    } else {
         up.style.transform = "translateY(0)"
        copyrights.style.transform = "translateY(0)"
    }
     
    })
    
        
    
    
//console.log(socialIcons.getBoundingClientRect().top)

