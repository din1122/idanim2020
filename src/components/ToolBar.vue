<template>
  <div>
    <v-toolbar fixed>
      <v-toolbar-side-icon
        @click.stop="drawer = !drawer"
        class="hidden-md-and-up"
      ></v-toolbar-side-icon>

      <v-toolbar-items class="hidden-sm-and-down RTL">
        <!-- <img class="logo" :src="require('@/assets/trans.png')"> -->
        <img class="logo1" :src="require('@/assets/logo2.png')" />
        <v-btn
          flat
          v-scroll-to="{
            el: '#one'
          }"
          >בית</v-btn
        >
        <v-btn
          flat
          v-scroll-to="{
            el: '#two',
            offset: -70
          }"
          >מוצרים</v-btn
        >
        <v-btn
          flat
          v-scroll-to="{
            el: '#four',
            offset: -70
          }"
          >עלינו</v-btn
        >
        <v-btn
          flat
          v-scroll-to="{
            el: '#six',
            offset: -70
          }"
          >צור קשר</v-btn
        >
      </v-toolbar-items>

      <v-spacer></v-spacer>
      <div class="hidden-md-and-up" style="width: 13rem;">
        <div class="topbar-contact hidden-sm-and-down">
          <span>טלפון</span>:
          <span>03-6208656/7</span>
        </div>
        <img class="topbar-logo" :src="require('@/assets/trans.png')" />
      </div>
      <!-- <div class="topbar-contact pl-2">
        <span>כתובת</span>:
        <span>בעל העקידה 57</span>
        <br>
        <span>idanim11@gmail.com</span>
      </div>
     -->
    </v-toolbar>
    <v-navigation-drawer
      class="idanim-bg darken-3"
      dark
      v-model="drawer"
      fixed
      temporary
    >
      <v-list>
        <v-list-tile
          @click.prevent="drawer = !drawer"
          v-scroll-to="{
            el: '#One'
          }"
        >
          <v-list-tile-content>
            <v-list-tile-title>בית</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile
          @click.prevent="drawer = !drawer"
          v-scroll-to="{
            el: '#Two',
            offset: -100
          }"
        >
          <v-list-tile-content>
            <v-list-tile-title>מוצרים</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile
          @click.prevent="drawer = !drawer"
          v-scroll-to="{
            el: '#Three',
            offset: -100
          }"
        >
          <v-list-tile-content>
            <v-list-tile-title>צור קשר</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile
          @click.prevent="drawer = !drawer"
          v-scroll-to="{
            el: '#Four',
            offset: -100
          }"
        >
          <v-list-tile-content>
            <v-list-tile-title>עלינו</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: null
    };
  }
};
</script>
<style scoped>
.logo1 {
  width: 725px;
}
.v-btn {
  font-size: 1.2em;
  font-weight: 800;
}
>>> .v-list__tile__title {
  font-size: 1.2em;
}
>>> .theme--light.v-toolbar {
  background: #f5f5f5db;
}
</style>
