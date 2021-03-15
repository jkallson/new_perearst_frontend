<template>
  <fragment>
    <Header></Header>
    <v-container fluid>
      <v-card>
        <BasicToolbar name="Kodukorrast"></BasicToolbar>
        <v-tabs vertical>
          <v-tab>Vastuvõtule registreerimisest</v-tab>
          <v-tab>Retseptide tellimisest</v-tab>
          <v-tab>Töövõimetus- ja hoolduslehtedest</v-tab>
          <v-tab>Telefoniajad</v-tab>
          <v-tab>Analüüside võtmine</v-tab>
          <v-tab-item v-for="n in 4" :key="n">
            <v-card flat>
              <v-card-text>
                <p>
                  Sed aliquam ultrices mauris. Donec posuere vulputate arcu.
                  Morbi ac felis. Etiam feugiat lorem non metus. Sed a libero.
                </p>

                <p>
                  Nam ipsum risus, rutrum vitae, vestibulum eu, molestie vel,
                  lacus. Aenean tellus metus, bibendum sed, posuere ac, mattis
                  non, nunc. Aliquam lobortis. Aliquam lobortis. Suspendisse non
                  nisl sit amet velit hendrerit rutrum.
                </p>

                <p class="mb-0">
                  Phasellus dolor. Fusce neque. Fusce fermentum odio nec arcu.
                  Pellentesque libero tortor, tincidunt et, tincidunt eget,
                  semper nec, quam. Phasellus blandit leo ut odio.
                </p>
              </v-card-text>
            </v-card>
          </v-tab-item>
          <v-tab-item>
            <v-card flat>
              <v-card-text>
                <p>
                  Sed aliquam ultrices mauris. Donec posuere vulputate arcu.
                  Morbi ac felis. Etiam feugiat lorem non metus. Sed a libero.
                </p>

                <p>
                  Nam ipsum risus, rutrum vitae, vestibulum eu, molestie vel,
                  lacus. Aenean tellus metus, bibendum sed, posuere ac, mattis
                  non, nunc. Aliquam lobortis. Aliquam lobortis. Suspendisse non
                  nisl sit amet velit hendrerit rutrum. Nam ipsum risus, rutrum
                  vitae, vestibulum eu, molestie vel, lacus. Aenean tellus
                  metus, bibendum sed, posuere ac, mattis non, nunc. Aliquam
                  lobortis. Aliquam lobortis. Suspendisse non nisl sit amet
                  velit hendrerit rutrum. Nam ipsum risus, rutrum vitae,
                  vestibulum eu, molestie vel, lacus. Aenean tellus metus,
                  bibendum sed, posuere ac, mattis non, nunc. Aliquam lobortis.
                  Aliquam lobortis. Suspendisse non nisl sit amet velit
                  hendrerit rutrum.
                </p>

                <p class="mb-0">
                  Phasellus dolor. Fusce neque. Fusce fermentum odio nec arcu.
                  Pellentesque libero tortor, tincidunt et, tincidunt eget,
                  semper nec, quam. Phasellus blandit leo ut odio.
                </p>
              </v-card-text>
            </v-card>
          </v-tab-item>
        </v-tabs>
      </v-card>
    </v-container>
  </fragment>
</template>

<script>
import Header from "@/components/Header";
import BasicToolbar from "@/components/BasicToolbar";

export default {
  name: "RegulationsTab",
  components: { BasicToolbar, Header }
};
</script>

<style scoped></style>
