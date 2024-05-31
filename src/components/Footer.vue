// src/components/Footer.vue
<template>
  <footer class="footer mt-auto py-3 bg-tertiary ">
    <div class="container text-center">
      <h1 class="footerTitle" >Confident Savvy Speaker</h1>
      <h4>A blog & information resources to improve your public speaking & presentations.</h4>

      <p>
        Copyright &copy; 2024 | All rights reserved.  | Buiult & maintained by Ryan Hunter | GitHub username <span style="color:#00008b;font-weight: bold;font-style: italic;"><a href="https://github.com/systemsvanguard" class="link_no_underline">SystemsVanguard</a></span>.
      </p>
      
      <p> 
        <router-link to="/"          class="link_no_underline">Home</router-link> | 
        <router-link to="/resources" class="link_no_underline">Resources</router-link> | 
        <router-link to="/about"     class="link_no_underline">About</router-link> | 
        <router-link to="/contact"   class="link_no_underline">Contact</router-link>
      </p>
      
      <p class="text-center">
        <a href="https://github.com/systemsvanguard"><i class="fab fa-github-alt w3-hover-opacity" style="color:#00008b;" title="GitHub"></i></a>  
        <a href="https://stackoverflow.com/users/1247476/funtasticapps"><i class="fab fa-stack-overflow  w3-hover-opacity"  style="color:#ff8c00;" title="StackOverflow"></i></a>  
        <a href="https://stackexchange.com/users/1296565/funtasticapps"><i class="fab fa-stack-exchange w3-hover-opacity" style="color:#00008b;" title="StackExchange"></i></a>   
        <a href="https://www.linkedin.com/in/ryan-hunter-4a166013/"><i class="fab fa-linkedin  w3-hover-opacity" style="color:#00008b;" title="LinkedIn"></i></a>   
        <a href="https://www.meetup.com/members/41724382/"><i class="fab fa-meetup w3-hover-opacity" style="color:#ff0000;" title="MeetUp"></i></a> 
      </p>
      

    </div>
  </footer>
</template>

<script setup lang="ts"></script>

<style scoped>
.footer {
  /* position: fixed; */
  bottom: 0;
  width: 100%;
  background-color: #ffffe0; /* light yellow */
  background-image: url("../assets/images/background.jpg");
}

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

.footerTitle {
  color:#00008b; 
  font-weight:bold;
  font-family: "Mukta Malar", Helvetica, sans-serif;
  font-size: 1.875em;
}

</style>
