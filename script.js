
    $(document).ready(function(){
        // Show hide popover
        $(".dropdown").click(function(){
            $(this).find(".dropdown-menu").slideToggle("fast");
        });
    });
    $(document).on("click", function(event){
        var $trigger = $(".dropdown");
        if($trigger !== event.target && !$trigger.has(event.target).length){
            $(".dropdown-menu").slideUp("fast");
        }            
    });


/* Preloader */

let loader = document.getElementById("preloader");

    window.addEventListener("load", function() 
    {
        loader.style.display = "none"
    })
window.onload = load;

function load()
{
     let el = document.querySelector('.border');
     el.classList.add("show1");
}


/* Top navigation bar */

let scrollUpFunc = function () 
{
            let header = document.querySelector('header');
            let windowPosition = window.scrollY > 0;
            header.classList.toggle('scrolling-active', windowPosition);
}

let myScrollUpFunc = function () 
{
    let y = window.scrollY;
    let z = window.scrollMaxY - 300;
    if (y >= 400) {
        document.getElementById("scr").classList.remove("hide");
        document.getElementById("scr").classList.add("show");
    } else {
        document.getElementById("scr").classList.remove("show");
        document.getElementById("scr").classList.add("hide");
    }
};

window.addEventListener('scroll', () => 
{
        myScrollUpFunc(); /* ScrollUp Button */
        scrollUpFunc(); /* Nav bar style */
});


/* jQuerry TopNavBar */

  $(document).ready(function() 
  {
    
    /* Every time the window is scrolled ... */
    $(window).scroll( function()
    {
    
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

/* Open hours live */

let otwartee = document.querySelector('.otwarte');
let zamknietee = document.querySelector('.zamkniete');
let d = new Date();
let n = d.getDay();
let now = d.getHours() + "." + d.getMinutes();
let weekdays = [
        ["Saturday", 9.00,13.00],
        ["Monday", 9.00,17.00],
        ["Tuesday", 9.00,17.00],
        ["Wednesday", 9.00,17.00],
        ["Thursday",  9.00,17.00],
        ["Friday", 9.00,17.00],
        ["Sunday"] // we are closed, sorry!
    ];
let day = weekdays[n];


    if (now > day[1] && now < day[2] || now > day[3] && now < day[4]) {
        zamknietee.style.display = "none"
    }
     else {
        otwartee.style.display = "none"
    }



    

