<template>
  <div class="container mt-4">
      <!-- The Contact Section -->
  <div class="w3-container w3-content w3-padding-24" style="max-width:800px;margin-top:46px" id="contact">
    <h2 class="w3-wide w3-center myheading">CONTACT ME</h2>
    <p class="w3-opacity w3-center">
	  <i class="far fa-comment-dots fa-2x" style="color:#00008b;"></i> 
	  <i> Let's chat! How can my web development & IT skills help you? </i>
	</p>
	
    <div class="w3-row w3-padding-8"> 
      <div class="w3-col m6 w3-large w3-margin-bottom">
        <i class="fas fa-map-marker-alt" style="width:30px; color:#00008b;"></i> Brampton, Ontario, Canada<br />
        <i class="fas fa-phone" style="width:30px; color:#00008b;"></i> Phone: <strong>416-312-9703</strong><br />
        <i class="fas fa-envelope" style="width:30px; color:#00008b;"> </i> Email: <strong>ryan @ RyanHunter.org</strong><br />
		<i class="fab fa-github-alt" style="width:30px; color:#00008b;"> </i> <a href="https://github.com/systemsvanguard" class="link_no_underline">GitHub</a> : <em><small>github.com/systemsvanguard</small></em> <br />
		<i class="fab fa-linkedin" style="width:30px; color:#00008b;"> </i> <a href="https://www.linkedin.com/in/ryan-hunter-4a166013/" class="link_no_underline">LinkedIn</a> : <em><small>Linkedin for Ryan Hunter</small></em>
	  

        <br>
      </div>
    </div>
  </div> 
 
  


  
<!-- End Page Content -->
  <!--- Add Google Maps ~ for downtown Brampton, ON -->
  <!---  <div id="googleMap" style="height:400px;" class="map_location"></div>    -->
  
</div>
</template>

<script setup lang="ts">
/*
  function myMap() {  
	myCenter=new google.maps.LatLng(43.7032499, -79.8228933); 
	var mapOptions= {
	  center:myCenter, 
	  zoom:12, scrollwheel: false, draggable: true, 
	  mapTypeId:google.maps.MapTypeId.ROADMAP 
	};
	var map=new google.maps.Map(document.getElementById("googleMap"),mapOptions);
	var marker = new google.maps.Marker({
	  position: myCenter, 
	});
	marker.setMap(map);
  }
  */
</script>

<style scoped>

/* remove link underlines  */
.link_no_underline:link {
  text-decoration: none;
}
.link_no_underline:visited {
  text-decoration: none;
}
.link_no_underline:hover {
  text-decoration: none;
}


</style>
