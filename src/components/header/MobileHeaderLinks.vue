<template>
  <v-list>
    <v-list-item
      v-for="link in links"
      :key="link.text"
      @click="redirectUser(link.route)"
    >
      <v-list-item-action>
        <v-icon>{{ link.icon }}</v-icon>
      </v-list-item-action>
      <v-list-item-content>
        <v-list-item-title>
          {{ link.text }}
        </v-list-item-title>
      </v-list-item-content>
    </v-list-item>
  </v-list>
</template>

<script>
export default {
  name: "MobileHeaderLinks",
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
