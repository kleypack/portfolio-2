$(document).ready(function(){
            
    // SMOOTH SCROLL
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) {
        // Disable for users who prefer reduced motion
    } else {
        // Add smooth scrolling to all links
        $("a").on('click', function(smoothScroll) {
  
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
          // Prevent default anchor click behavior
          smoothScroll.preventDefault();
    
          // Store hash
          let hash = this.hash;
    
          // Using jQuery's animate() method to add smooth page scroll
          // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
          $('html, body').animate({
            scrollTop: $(hash).offset().top
          }, 500, function(){
    
            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
          });
        } 
      });
    }
    
    // ADD CLASS TO NAV ON SCROLL
    let addClassOnScroll = function () {
        let windowTop = $(window).scrollTop();
        $('section[id]').each(function (index, elem) {
            let offsetTop = $(elem).offset().top;
            let outerHeight = $(this).outerHeight(true);
    
            if( windowTop > (offsetTop - 50) && windowTop < ( offsetTop + outerHeight)) {
                let elemId = $(elem).attr('id');
                $(".secondary-nav-items a.active-anchor").removeClass('active-anchor');
                $(".secondary-nav-items a[href='#" + elemId + "']").addClass('active-anchor');
            }
        });
    };

    // Add throttle
    function throttle(func, wait) {
        let waiting = false;
        return function () {
          if (waiting) {
            return;
          }
      
          waiting = true;
          setTimeout(() => {
            func.apply(this, arguments);
            waiting = false;
          }, wait);
        };
      }
      
      const onScroll = throttle(() => {
          // Call function
          addClassOnScroll();
      }, 500);
      
      // On page load
      window.addEventListener('load', addClassOnScroll);
      // On scroll with throttle
      document.addEventListener('scroll', onScroll);

});

