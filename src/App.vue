<template>
  <div>
    <!-- Header, & Random Quotes ~ Start -->
    <Header />
    <NavBar />
    <RandomQuotes />
    <!-- Random Quotes ~ End -->



    <router-view></router-view>

    <!-- Footer ~ Start -->
    <div class="pt-4">
      <Footer />
    </div>
    <!-- Footer ~ End -->
  </div>
</template>

<script setup lang="ts">
//  import { RouterLink, RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
import RandomQuotes from './components/RandomQuotes.vue'
import Footer from './components/Footer.vue'
import Header from './components/Header.vue'

// import 'https://maps.googleapis.com/maps/api/js?key=AIzaSyDao5q0i8BCKJPZ2tBqWNb5zPwg4UNxq1k&callback=myMap'; 
</script>

<style>
@import 'https://fonts.googleapis.com/css?family=Lato|Mukta+Malar'; 
@import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.9.0/css/all.min.css'; 
@import 'http://ryanhunter.ca/app/libs/w3/w3.css'; 
@import 'bootstrap/dist/css/bootstrap.min.css'; 
</style>
