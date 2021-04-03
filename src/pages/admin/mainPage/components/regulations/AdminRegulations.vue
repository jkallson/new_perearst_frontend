<template>
  <EditTable
    label="KODUKORD"
    :items="regulations"
    @createEvent="createRegulation"
    @updateEvent="updateRegulation"
    @deleteEvent="deleteRegulation"
  ></EditTable>
</template>

<script>
import EditTable from "@/components/editTable/EditTable";
export default {
  name: "AdminRegulations",
  components: { EditTable },
  data() {
    return {
      regulations: [
        {
          name: "Vastuvõtule registreerimisest",
          content:
            "Sed massa justo, lacinia eu gravida ut, accumsan ut justo. Donec tincidunt massa non quam feugiat pellentesque. Curabitur congue blandit tincidunt. Donec eros nisl, sodales rutrum sem vitae, fringilla dictum lorem. Pellentesque semper mauris sit amet mauris elementum consectetur. Aenean tempor, purus non pellentesque gravida, quam ipsum commodo urna, in vestibulum libero neque quis lorem. Vestibulum in augue quis neque lobortis volutpat. Etiam molestie egestas massa in dapibus. Quisque dapibus et nulla vel egestas. Morbi purus orci, ullamcorper eu iaculis sit amet, pharetra et est. Donec ultricies ac magna eget posuere. In aliquam neque non dapibus hendrerit."
        },
        {
          name: "Retseptide tellimisest",
          content:
            "Sed massa justo, lacinia eu gravida ut, accumsan ut justo. Donec tincidunt massa non quam feugiat pellentesque. Curabitur congue blandit tincidunt. Donec eros nisl, sodales rutrum sem vitae, fringilla dictum lorem. Pellentesque semper mauris sit amet mauris elementum consectetur. Aenean tempor, purus non pellentesque gravida, quam ipsum commodo urna, in vestibulum libero neque quis lorem. Vestibulum in augue quis neque lobortis volutpat. Etiam molestie egestas massa in dapibus. Quisque dapibus et nulla vel egestas. Morbi purus orci, ullamcorper eu iaculis sit amet, pharetra et est. Donec ultricies ac magna eget posuere. In aliquam neque non dapibus hendrerit."
        },
        {
          name: "Töövõimetus- ja hoolduslehtedest",
          content:
            "Sed massa justo, lacinia eu gravida ut, accumsan ut justo. Donec tincidunt massa non quam feugiat pellentesque. Curabitur congue blandit tincidunt. Donec eros nisl, sodales rutrum sem vitae, fringilla dictum lorem. Pellentesque semper mauris sit amet mauris elementum consectetur. Aenean tempor, purus non pellentesque gravida, quam ipsum commodo urna, in vestibulum libero neque quis lorem. Vestibulum in augue quis neque lobortis volutpat. Etiam molestie egestas massa in dapibus. Quisque dapibus et nulla vel egestas. Morbi purus orci, ullamcorper eu iaculis sit amet, pharetra et est. Donec ultricies ac magna eget posuere. In aliquam neque non dapibus hendrerit."
        },
        { name: "Telefoniajad", content: "qwe" },
        { name: "Analüüside võtmine", content: "qwe" },
        { name: "Nimistusse registreerimine", content: "qwe" },
        { name: "Juhilubade taotlemisest", content: "qwe" },
        { name: "Väljaspool perearsti tööaega saate pöörduda", content: "qwe" },
        { name: "Muud kontaktnumbrid", content: "qwe" }
      ]
    };
  },
  methods: {
    createRegulation(regulation) {
      console.log(regulation, "createRegulation");
    },
    updateRegulation(regulation) {
      console.log(regulation, "updateRegulation");
    },
    deleteRegulation(regulation) {
      console.log(regulation, "deleteRegulation");
    }
  }
};
</script>

<style scoped></style>
