<template>
  <v-container fluid class="text-center pb-10">
    <h2 class="display-2 font-weight-bold mb-3">MEIST</h2>

    <v-responsive class="mx-auto mb-4" width="56">
      <v-divider style="border: 3px solid #F09F54"></v-divider>

      <v-divider></v-divider>
    </v-responsive>
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
export default {
  name: "AboutUs"
};
</script>

<style scoped></style>
