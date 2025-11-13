function openSidebar() {
    document.getElementById("mySidebar").style.width = "250px";
    }

function closeSidebar() {
    document.getElementById("mySidebar").style.width = "0";
    }

function submitForm() {
    alert("Thank you for contacting us! We will get back to you ASAP.");
    return false;
    }

function myMap() {
        // Set coordinates for your business location
    var mapProp = {
      center: new google.maps.LatLng(51.508742, -0.120850),
      zoom: 15,
    };
    var map = new google.maps.Map(document.getElementById("map"), mapProp);
        
        // Add a marker at your business location
    var marker = new google.maps.Marker({
        position: {lat: 51.508742, lng: -0.120850},
        map: map,
        title: "Business Name - 88 Clean St"
    });
      }

    