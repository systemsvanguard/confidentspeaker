// src/components/NavBar.vue
<template>

<nav class="navbar navbar-expand-lg bg-light" data-bs-theme="light"> 
  <div class="container-fluid">
    <router-link to="/" class="navbar-brand">
        <img src="../assets/images/logo_confidentsavvyspeaker.png" alt="Logo" style="width:122px;height:30px;">
    </router-link>

    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link to="/resources" class="nav-link active" aria-current="page">Resources</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/about" class="nav-link">About</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/contact" class="nav-link">Contact</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/" class="nav-link">Home</router-link>
        </li>
      </ul>
    </div>
  </div>
</nav>

</template>

<script setup lang="ts">
</script>

<style scoped>
</style>

