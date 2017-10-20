(function(){
    var menuTrigger = document.querySelector(".menu__trigger");

    function toggleMenu(){
        menuTrigger.classList.toggle("open");
    }

    menuTrigger.addEventListener("click", toggleMenu);

    window.addEventListener("click", function(event){
        if(event.target !== menuTrigger ){
            toggleMenu();
        }
    });
})();
