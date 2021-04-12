<template>
  <v-app>
    <v-main>
      <router-view></router-view>
      <notifications position="bottom right"></notifications>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App"
};
</script>
<style>
.background {
  background: rgb(240, 159, 84);
  background: linear-gradient(
    180deg,
    rgba(240, 159, 84, 1) 0%,
    rgba(242, 185, 132, 1) 35%,
    rgba(238, 203, 171, 1) 100%
  );
}
body {
  overflow: hidden;
}
</style>
