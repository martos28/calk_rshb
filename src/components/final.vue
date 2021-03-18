<template>
  <div class="final-section">
    <h2>Итог:</h2>
    <div class="green-calert-container green-calert-container_norm-marg">
      Чтобы съездить к зимнему Байкалу, вам понадобится примерно от <br>
      <span class="font-summ">{{ summ }}</span>
      рублей на человека.
    </div>
  </div>
</template>

<script>

export default {
  // summa
  // https://clck.ru/TdzWC
  name: 'final',
  props: {
    summ: String,
  },
  methods: {

  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
