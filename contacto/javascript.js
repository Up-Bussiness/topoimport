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