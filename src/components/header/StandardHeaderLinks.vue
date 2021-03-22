<template>
  <fragment
    ><v-toolbar-items>
      <v-btn text @click="redirectUser(0)">
        Dr. Diana Kirss OÜ
      </v-btn>
    </v-toolbar-items>
    <v-spacer></v-spacer>
    <v-toolbar-items
      v-for="link in links"
      :key="link.text"
      class="hidden-sm-and-down"
    >
      <v-btn text @click="redirectUser(link.route)">
        <v-icon>{{ link.icon }}</v-icon>
        {{ link.text }}
      </v-btn>
    </v-toolbar-items></fragment
  >
</template>

<script>
export default {
  name: "StandardHeaderLinks",
  props: {
    links: Array
  },
  methods: {
    redirectUser(value) {
      this.$emit("redirectUser", value);
    }
  }
};
</script>

<style scoped></style>
