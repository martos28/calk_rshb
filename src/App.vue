<template>
  <div class="cacl-baykal" id="app" >
    <StepOneTwo v-bind:myinp="myinp"
      @chose_tour="tourclick"
      @change="stepOne"
      v-on:click="showEntert($event)"
      ></StepOneTwo>
    <entertainment
      v-on:click="showEntert($event2)"
      v-on:input="calcEnt"
      v-bind:clickEntertainment="clickEntertainment"
      v-if="clickEntertainment === 'ent' ">
    </entertainment>
    <nature
      @chose_nature_tour="tourclick_nature"
      v-on:click="showEntert($event2)"
      v-on:input="calcEnt"
      v-bind:clickEntertainment="clickEntertainment"
      v-if="clickEntertainment === 'nature' ">
    </nature>
    <restActive
      v-on:click="showEntert($event3)"
      v-on:input="calcEnt"
      v-bind:clickEntertainment="clickEntertainment"
      v-if="clickEntertainment === 'activ_rest' ">
    </restActive>
    <health
      v-on:click="showEntert($event2)"
      v-on:input="calcEnt"
      @excursion_tour_add="excursion_add"
      v-bind:clickEntertainment="clickEntertainment"
      v-if="clickEntertainment === 'health' ">
    </health>
    <summBott v-bind:summ="fullSumm"></summBott>
    <final v-bind:summ="fullSumm"></final>
  </div>
</template>

<script>
// npx vue-cli-service build --modern
import StepOneTwo from './components/StepOneTwo.vue';
import summBott from './components/summBott.vue';
import entertainment from './components/entertainment.vue';
import nature from './components/nature.vue';
import restActive from './components/restActive.vue';
import health from './components/health.vue';
import final from './components/final.vue';

export default {
  name: 'App',
  components: {
    StepOneTwo, summBott, entertainment, restActive, final, nature, health,
  },
  data() {
    return {
      summ: '0',
      header: 'текст из App.vue',
      myinp: 0,
      slider_ent: 0,
      nature_zero: 0,
      excursion_zero: 0,
      clickEntertainment: '889',
    };
  },
  methods: {
    tourclick(data) {
      console.log('yyy');
      // console.log(data);
      const num = parseInt(data.price, 10);
      this.myinp = num + this.myinp;
      this.clickEntertainment = data.id;
      // тут
    },
    tourclick_nature(data) {
      this.nature_zero = data;
    },
    stepOne(data) {
      console.log(data);
      this.myinp = data;
    },
    calcEnt(b) {
      console.log('vvv');
      console.log(b);
      this.slider_ent = b;
    },
    showEntert(zoz) {
      console.log(zoz);
      this.clickEntertainment = zoz;
    },
    excursion_add(data) {
      console.log('excursion');
      this.excursion_zero = data;
    },
  },
  computed: {
    fullSumm() {
      const summ = this.myinp + this.slider_ent + this.nature_zero + this.excursion_zero;
      const numsFormat = summ.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
      return numsFormat;
    },
  },
};
</script>

<style>

#app {
  margin-top: 6px;
}

</style>
