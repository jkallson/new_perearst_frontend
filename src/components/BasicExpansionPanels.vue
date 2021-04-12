<template>
  <v-expansion-panels accordion focusable>
    <v-expansion-panel v-for="(item, i) in items" :key="i">
      <v-expansion-panel-header>
        <div>
          {{ item.name }}
        </div>
        <div class="text-end pr-3" v-if="type === 'notification'">
          {{ item.date }}
        </div>
      </v-expansion-panel-header>
      <v-expansion-panel-content
        class="px-6"
        v-html="item.content"
      ></v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script>
export default {
  name: "BasicExpansionPanels",
  props: {
    items: Array,
    type: {
      type: String,
      default: "regulation"
    }
  }
};
</script>

<style scoped></style>
