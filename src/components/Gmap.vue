<template>
  <div>
    <gmap-map :center="center" :zoom="15" style="width:100%;  height: 400px;">
      <gmap-marker
        :position="{ lat: 32.054086, lng: 34.77895 }"
        :clickable="true"
        :draggable="true"
      ></gmap-marker>
    </gmap-map>
  </div>
</template>

<script>
export default {
  name: "GoogleMap",
  data() {
    return {
      // default to Montreal to keep it simple
      // change this to whatever makes sense
      center: { lat: 32.054086, lng: 34.778956 },
      markers: [],
      places: [],
      currentPlace: null
    };
  },

  methods: {
    // receives a place object via the autocomplete component
    setPlace(place) {
      this.currentPlace = place;
    },
    addMarker() {
      if (this.currentPlace) {
        const marker = {
          lat: this.currentPlace.geometry.location.lat(),
          lng: this.currentPlace.geometry.location.lng()
        };
        this.markers.push({ position: marker });
        this.places.push(this.currentPlace);
        this.center = marker;
        this.currentPlace = null;
      }
    }
  }
};
</script>
