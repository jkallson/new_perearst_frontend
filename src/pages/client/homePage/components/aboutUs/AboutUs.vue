<template>
  <v-container fluid class="text-center pb-10">
    <SectionName name="MEIST"></SectionName>
    <v-card width="100%">
      <v-card-text>
        <p class="text--primary">
          Duis nec commodo enim. Curabitur pretium mauris nec scelerisque
          faucibus. Sed eget porta enim, sit amet volutpat enim. Integer ac
          tempor risus, ut fermentum sem. Fusce venenatis odio vel metus
          fringilla rhoncus. Vestibulum ante ipsum primis in faucibus orci
          luctus et ultrices posuere cubilia curae; Nulla porta porta justo, vel
          auctor enim pellentesque non. Phasellus congue semper sapien.
          Suspendisse at tincidunt tortor.
        </p>
      </v-card-text>
      <v-row class="px-5">
        <v-col cols="12" md="3" v-for="n in 4" :key="n">
          <v-card>
            <v-img src="https://bit.ly/30C4nHi"></v-img>
          </v-card>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
import SectionName from "@/components/SectionName";
export default {
  name: "AboutUs",
  components: { SectionName }
};
</script>

<style scoped></style>
