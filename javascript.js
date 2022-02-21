//Navbar
	//Navbar animation
	var prevScrollpos = window.pageYOffset;
	window.onscroll = function() {
	var currentScrollPos = window.pageYOffset;
	  if (prevScrollpos > currentScrollPos) {
	    document.getElementById("topnav").style.top = "0";
	  } else {
	    document.getElementById("topnav").style.top = "-15vh";
	  }
	  prevScrollpos = currentScrollPos;
	}

	//Navbar Responsive
	function myFunction() {
	  var x = document.getElementById("topnav");
	  if (x.className === "nav") {
	    x.className += " responsive";
	  } else {
	    x.className = "nav";
	  }
	}
//Header
	//Header animation
	  var slideIndex = 0;
	  showSlides();

	  function showSlides() {
	    var i;
	    var slides = document.getElementsByClassName("mySlides");
	    var dots = document.getElementsByClassName("dot");
	    for (i = 0; i < slides.length; i++) {
	      slides[i].style.display = "none";  
	    }
	    slideIndex++;
	    if (slideIndex > slides.length) {slideIndex = 1}    
	    for (i = 0; i < dots.length; i++) {
	      dots[i].className = dots[i].className.replace(" active", "");
	    }
	    slides[slideIndex-1].style.display = "block";  
	    dots[slideIndex-1].className += " active";
	    setTimeout(showSlides, 3000); // Change image every 3 seconds
	  }
//Footer
	//Google Maps
	function iniciarMap(){
	    var coord = {lat:-11.949985013276372 ,lng: -77.04676240682429};
	    var map = new google.maps.Map(document.getElementById('map'),{
	      zoom: 10,
	      center: coord
	    });
	    var marker = new google.maps.Marker({
	      position: coord,
	      map: map
	    });
	}