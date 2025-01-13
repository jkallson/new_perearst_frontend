<template>
  <fragment>
    <h1
      class="display-2 font-weight-bold mb-3 text-md-left primary--text text-h4 text-md-h3"
    >
      KONTAKT
    </h1>
    <h2 class="text-md-left mb-3">
      Küsimuste või probleemide korral helistage või kirjutage meile. Vastame
      Teile esimesel võimalusel!
    </h2>
    <h2 class="text-md-left mb-3 primary--text">
      Kontakt informatsioon
    </h2>
    <h3 class="text-md-left">Telefon</h3>
    <h4 class="text-md-left mb-2 secondary--text">
      7921476
    </h4>
    <h3 class="text-md-left">Aadress</h3>
    <h4 class="text-md-left mb-2 secondary--text">
      Illimari 6, Ahja, Põlva vald 63710
    </h4>
  </fragment>
</template>

<script>
export default {
  name: "ContactInformation",
  props: {
    contactInformation: Object
  }
};
</script>

<style scoped>
h1 {
  font-size: 1.5em;
}

h2 {
  font-size: 1.17em;
}

h3 {
  font-size: 1em;
}

h4 {
  font-size: 0.83em;
}
</style>
