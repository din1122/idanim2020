import Vue from "vue";
import "./plugins/vuetify";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/style.css";
import "viewerjs/dist/viewer.css";
var VueScrollTo = require("vue-scrollto");
import VueAnalytics from "vue-analytics";
import VueYoutube from "vue-youtube";
import * as VueGoogleMaps from "vue2-google-maps";
import Viewer from "v-viewer";
Vue.use(Viewer);
Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyAfadAd_19lorSH8SaDNfQP1rorYOirzOY",
    libraries: "places" // This is required if you use the Autocomplete plugin
    // OR: libraries: 'places,drawing'
    // OR: libraries: 'places,drawing,visualization'
    // (as you require)

    //// If you want to set the version, you can do so:
    // v: '3.26',
  }
});
Vue.use(VueYoutube);
Vue.use(VueScrollTo);
Vue.use(VueAnalytics, {
  id: "UA-89031274-8",
  autoTracking: {
    screenview: true
  }
});
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: function(h) {
    return h(App);
  }
}).$mount("#app");
