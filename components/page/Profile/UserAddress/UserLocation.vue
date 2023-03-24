<template>
  <div id="map-wrap" style="height: 50vh">
    <client-only>
      <l-map :zoom="15" :center="[mapValue.latitude, mapValue.longitude]">
        <l-tile-layer
          url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
        ></l-tile-layer>
        <l-marker :lat-lng="[mapValue.latitude, mapValue.longitude]"></l-marker>
      </l-map>
    </client-only>
  </div>
</template>
<script>
export default {
    name:'UserLocation',
  props: {
    mapValue: {
      type: Object,
      default: () => {}
    }
  }
}
</script>
