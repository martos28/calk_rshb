<template>
  <div class="bottom-green">
      <div class="left">Итоговая сумма поездки :</div>
      <div class="summ">
        <span class="num">{{ summ }}</span>
        <span class="rub">
          <img src="@/assets/img/general/rub.svg" width="16" height="26" alt="">
        </span>
      </div>
  </div>
</template>

<script>

export default {
  // summa
  // https://clck.ru/TdzWC
  name: 'summBott',
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
