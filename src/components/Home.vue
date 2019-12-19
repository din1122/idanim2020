<template>
  <v-container fluid grid-list-xs pa-0>
    <v-layout row wrap justify-start fill-height align-end>
      <v-img
        aspect-ratio="2"
        class="main-image"
        :src="require('@/assets/H5/H5-main.jpg')"
      >
        <v-container fill-height fluid class="image-screen">
          <v-layout fill-height row justify-center align-center>
            <v-flex xs12 text-xs-center>
              <!--  <h1 class="display-3">מעניקים חוויה טובה ונעימה של ניקיון</h1>
             <h2 class="second-title">
                קבוצת עידנים עם 25 שנות ניסיון
                .רואה את נושא השירות ואיכות העבודה כיעד ראשון
              </h2> -->
            </v-flex>
          </v-layout>
        </v-container>
      </v-img>
      <div></div>
      <!--
      <div class="floating-box">
        <div class="main-text">
          <h1 class="main-title">מעניקים חוויה טובה ונעימה של ניקיון</h1>
          <h2 class="second-title">
            קבוצת עידנים עם 25 שנות ניסיון
            .רואה את נושא השירות ואיכות העבודה כיעד ראשון
          </h2>
        </div>
      </div>
      -->
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>
<style scoped>
.main-pic {
  background-image: url("../assets/main.jpg"); /* The image used */
  background-color: #cccccc; /* Used if the image is unavailable */
  height: 75vh;
  background-position: center 40%;
  background-repeat: no-repeat;
  background-size: cover;
}

.image-screen {
  /* background: #c8f18d;
  opacity: 0.75; */
  height: 100%;
  width: 100%;
  position: absolute;
}
.main-text {
  margin: auto;
  position: relative;
  width: 530px;
}
.floating-box {
  width: 100%;
  height: 800px;
  text-align: center;
  justify-content: center;
  position: absolute;
}
.main-title {
  font-size: 5em;
  font-weight: 500;
}
.second-title {
  font-weight: 500;
}
</style>
