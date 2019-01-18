    //ScrollSpy
    $('body').scrollspy({target: '#main-nav'});

    $('#main-nav a').on('click', function(e){
      if (this.hash !== ''){
        e.preventDefault();

        const hash = this.hash;

        $('html, body').animate({
          scrollTop: $(hash).offset().top}, 800, function(){
            window.location.hash = hash;
          });
        }
      
    });

// Get the current year for the copyright
    $("#year").text(new Date().getFullYear());