<template>
  <fragment>
    <h2 class="display-2 font-weight-bold mb-3 text-md-left primary--text">
      KONTAKT
    </h2>
    <h4 class="text-md-left mb-3">
      Küsimuste või probleemide korral helistage või kirjutage meile. Vastame
      Teile esimesel võimalusel!
    </h4>
    <h3 class="text-md-left mb-3 primary--text">
      Kontakt informatsioon
    </h3>
    <h4 class="text-md-left">Telefon</h4>
    <h5 class="text-md-left mb-2 secondary--text">
      {{ contactInformation.phone }}
    </h5>
    <h4 class="text-md-left">Email</h4>
    <h5 class="text-md-left mb-2 secondary--text">
      {{ contactInformation.email }}
    </h5>
    <h4 class="text-md-left">Aadress</h4>
    <h5 class="text-md-left mb-2 secondary--text">
      {{ contactInformation.address }}
    </h5>
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

<style scoped></style>
