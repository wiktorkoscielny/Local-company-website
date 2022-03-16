
let myScrollFunc = function () {
    let y = window.scrollY;
    if (y >= 100) {
        document.getElementById("myID").classList.remove("hide");
        document.getElementById("myID").classList.add("show");
    } else {
        document.getElementById("myID").classList.remove("show");
        document.getElementById("myID").classList.add("hide");
    }
};

let myScrollUpFunc = function () {
    let y = window.scrollY;
    if (y >= 100) {
        document.getElementById("scr").classList.remove("hide");
        document.getElementById("scr").classList.add("show");
    } else {
        document.getElementById("scr").classList.remove("show");
        document.getElementById("scr").classList.add("hide");
    }
};



/* Top navigation bar */
let srakaFunction = function () {
            let header = document.querySelector('header');
            let windowPosition = window.scrollY > 0;
            header.classList.toggle('scrolling-active', windowPosition);
}


window.addEventListener('scroll', () => {
        srakaFunction();
        myScrollFunc();
        myScrollUpFunc();
});



/* jQuerry */
  $(document).ready(function() {
    
    /* Every time the window is scrolled ... */
    $(window).scroll( function(){
    
        /* Check the location of each desired element */
        $('.hideme').each( function(i){
            
            let bottom_of_object = $(this).offset().top + $(this).outerHeight();
            let bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({'opacity':'1'},500);
                    
            }
            
        }); 
    
    });
    
});

/*Mvn logo*/

var textWrapper = document.querySelector('.ml3');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml3 .letter',
    opacity: [0,1],
    easing: "easeInOutQuad",
    duration: 1250,
    delay: (el, i) => 100 * (i+1)
  }).add({
    targets: '.ml3',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000000 //how long displayed (wth opacity 1) animation should be, but i should rather find a different way to set that kind of property - it's not look really good accualy
  });

var textWrapper = document.querySelector('.ml4');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter1'>$&</span>");




  /* Slideshow container 

let numer = Math.floor(Math.random()*5)+1; 

            let timer1 = 0;
            let timer2 = 0;
            let timer3 = 0;

            function ustawslajd(nrslajdu)
            {
                clearTimeout(timer1);
                clearTimeout(timer2);
                numer = numer += nrslajdu;
                if (numer<0) numer=4;
            
                
                schowaj();
                clearTimeout(timer3);
                timer3 = setTimeout("zmienslajd()", 500);


            }

            function schowaj()
            {
                 $("#slider").stop();
                $("#slider").fadeOut(500);
            }

            function zmienslajd()
            {
                clearTimeout(timer3);

                numer++; if (numer>5) numer=1;
                var plik = "<img src=\"slides/slajd" + numer + ".png\"/>";

                document.getElementById("slider").innerHTML = plik;

                $("#slider").fadeIn(500);

                timer1 = setTimeout("zmienslajd()", 5000);
                timer2 = setTimeout("schowaj()", 4500);

            } */
