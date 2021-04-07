$('body').on('click', '.btn', () => {
    $("html, body").stop().animate({scrollTop: $(document).height()}, 500, 'swing', function() { 
        
     });
})