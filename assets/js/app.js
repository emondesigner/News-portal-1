//--------------BACK TO TOP SCROLL BUTTON START --------------
let scrollBtn = document.querySelector(".scroll_btn")
window.addEventListener("scroll",function(){
    if(this.window.scrollY > 250){
        scrollBtn.classList.add('open') ;
    }else{
        scrollBtn.classList.remove('open') ;

    }
})
//-------------- BACK TO TOP SCROLL BUTTON END--------------