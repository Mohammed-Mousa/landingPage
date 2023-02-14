$(document).ready(function () {

	 // Close Nav When Click On it
	 var WinWidth = $(window).width()
	 if (WinWidth < 992) {
		 $('.nav-link').on('click', function () {
			 $('#nav-container').removeClass('show');
		 });
		 $(window).on("scroll", function () {
			 $('#nav-container').removeClass('show');

		 })
	 }

    
	// اذا كانت الشاشة شاشة كومبيوتر حصرا طبق ما يلي 
	//  ليست شاشة موبايل 
	if(!window.matchMedia("(pointer: coarse)").matches) {
		$(".color-container").hover(
			function(){
				$("#control-color-theme").addClass("rotate-control");
				$("div.collor").addClass("open-collor")
			},
			function(){
				$("#control-color-theme").removeClass("rotate-control");
				$("div.collor").removeClass("open-collor")
			}
	
		)
	}
	// اذا كانت الشاشة شاشة موبايل حصرا طبق ما يلي 
	if(window.matchMedia("(pointer: coarse)").matches) {
		
		$("#control-color-theme").click(function(){
			$(this).toggleClass("rotate-control");
			$("div.collor").toggleClass("open-collor")
		})
		// Hide Box That Contain Span Color
		$(window).on("scroll" , function(){
			$("#control-color-theme").removeClass("rotate-control");
			$("div.collor").removeClass("open-collor")
		})
	}
	
	// Themes Change
	$(".collor span").click( function(){

		T_color = $(this).attr("data-color");
		
		$("#control-color-theme").removeClass("rotate-control");
		$("div.collor").removeClass("open-collor")

        console.log(T_color + "the color");
		
		// البنفسجي
		if (T_color == "#800080"){
			$(".themes").attr("href","css/purple.css");
		}
		// ازرق
		else if(T_color == "#343cff"){
			$(".themes").attr("href","css/blue.css");
		}
		// زهري
		else if(T_color == "#cc0066"){
			$(".themes").attr("href","css/pink.css");
		}
		// اخضر
		else if(T_color == "#44B92D"){
			$(".themes").attr("href","css/green.css");
		}
		// برتقالي
		else{
			$(".themes").attr("href","css/orange.css");
		}
	


	})
	
	


    // Add padding-top Equal to hieght of Nav
    var NavHeight = $("nav").innerHeight() + 20;
    $("#body > section").css("padding-top", NavHeight);
    // $("#body > section").css("padding-bottom", NavHeight);



    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }
                form.classList.add('was-validated')
            }, false)
        })



   
    // Up Arrow Click
    $("#up-arrow").click(function () {
        $("body, html").animate({
            scrollTop: $("header").offset().top
        }, 0)
    });

	// Up Arrow Click
    $(window).on("scroll", function () {
        if ($(window).scrollTop() > 25) {
            $("#up-arrow").css({ "opacity": "1", "transform": "translateX(0%)" })

        } else {
            $("#up-arrow").css({ "opacity": "0", "transform": "translateX(200%)" })
        }

    })

	

    // Enable Plugin Animation On Scroll (AOS)
    AOS.init({
        duration: 1000,
        delay: 250,
        offset: 00
    })


	var year = new Date().getFullYear();
    $("#year").text(year);

    $("#cover").hide();
    $("#body").css("opacity", "1");


}); //End ready() ==> End Code JQuery