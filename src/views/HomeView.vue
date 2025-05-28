
<template>
  <div class="home-container">
    <div class="container flex h-[100vh]">
      <div class="details w-[40%] h-auto">
        <h5 class="text-">Hi, I am</h5>
        <h3>Sandrine DUSHIMIMANA</h3>
        <!-- This will be a place which displays every role that I can do like Frontend,Backend, etc -->
        <h6>Software Engineer</h6>
        <p>I am committed to playing a pivotal role in driving the technological transformations in Africa. Most importantly, I am highly committed to and excited to utilize study opportunities to broaden my horizons and intellectual curiosity.</p>
        <div class="icon flex w-[250px] py-6">
          <i class="pi pi-instagram"></i>
          <i class="pi pi-github"></i>
          <i class="pi pi-linkedin"></i>
          <i class="pi pi-envelope"></i>
          <i class="pi pi-reddit"></i>
        </div>
      </div>
      <div class="image w-[40%] relative  max-h-24 h-100" >
        <img src="../assets/images/profile/01.png" class="w-full max-w-[800px] absolute bottom-0 left-0 object-contain" style="height: inherit;"/>
      </div>
    </div>
  </div>
</template>

<style scoped>
@media (max-width: 768px) {
  .home-container {
  background: linear-gradient(150deg, #FAFAFA 55%, #F97316 45%);
  height: auto;
}

.container {
  margin: 0 auto;
  padding: 20px;
}

.flex {
  display: block;
  flex-direction: column;
}

.details {
  margin: 0 auto;
  padding: 20px;
  width: 100%;
}

}
</style>