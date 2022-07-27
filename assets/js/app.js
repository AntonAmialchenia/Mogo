$(function() {
    let header = $("#header"),
        introH = $("#intro").innerHeight(),
        scrollOffset = $(window).scrollTop();

        // Fixed header
    checkScroll (scrollOffset); // вызывается финкция для 
    
    
    $(window).on("scroll", function(){ // здесь следим за скролом в окне и с помощью функции делаем действия; load - проверяется позиция при загрузке; resize - проверяется высота при изменение устройства(смартфон, планшет или ноут)
        scrollOffset = $(this).scrollTop();// обнавляем прерменную на текущую позицию скрола
        // console.log(introH);
         
        // console.log(scrollOffset);
        checkScroll (scrollOffset);
   });
        // функция для фиксации шапки меню
   function checkScroll (scrollOffset) {
        if (scrollOffset >= introH ) {
            header.addClass("fixed")
        } else {
            header.removeClass("fixed")
        }
   }

   // Smooth scroll
   $("[data-scroll]").on("click", function(event) {
        event.preventDefault();
        let $this = $(this),
            blockId = $this.data('scroll'),
            blockOffset = $(blockId).offset().top;

        $("nav a").removeClass("active");
        $this.addClass("active");

        $("html, body").animate({ 

            scrollTop: blockOffset - 70
        }, 900);
   });

   // Nav Toggle

   $("#nav--toggel").on ("click", function(event) {
        event.preventDefault();
        $(this).toggleClass("active");
        $("#nav").toggleClass("active");
   });
   
   // Collapse
   $("[data-collapse]").on("click", function(event) {
        event.preventDefault();

        let $this = $(this),
            blockId = $this.data('collapse');

        $(this).toggleClass("active");
        
   });

   //Slider
   $("[data-slider]").slick({
        infinity: true,
        fade:false,
        slidesToShow: 1,
        slidesToScroll: 1
   });
});