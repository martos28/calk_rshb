<template>
    <section   class="component-hide entertainment">
      <h2>{{restActivTitle}}</h2>
      <p class="lh1_8">{{restActivDescriptions}} </p>
      <h2 class="red-middle">Средняя стоимость - {{middlePrice}} &#8381;</h2>
      <img class="max100" src="@/assets/img/general/activ_rest.jpg" alt="">
      <p class="lh1_8"><b>На сайте Booking.com предлагается около 40 гостиниц в Байкальске. Какой вариант жилья вы рассматриваете?</b>
      </p>
      <div>
        <label class="radio">
            <input v-model="tour_variant" type="radio" @change="setTour"  name="variant" value="700" checked>
            <span>Эконом</span>
        </label>
        <div class="green-calert-container green-calert-container_norm-marg"
          v-show="tour_variant === '700'">
          Стоимость бюджетного варианта проживания в городе – примерно 700 руб. за ночь в четырехместном номере (Baikal Ski Hostel).
          <p><b>Примерно 700 руб. за ночь</b></p>
        </div>
        <label class="radio">
            <input v-model="tour_variant" type="radio"  @change="setTour" name="variant" value="4800">
            <span>Стандарт</span>
        </label>
        <div class="green-calert-container green-calert-container_norm-marg "
          v-show="tour_variant === '4800'">
          Отель «Гранд Байкал» предлагает стандартный одноместный номер. Цена – 4800 руб. за ночь. Завтрак включен.
          <p><b>Примерно 4800 руб. за ночь</b></p>
        </div>
      </div>
      <h2>
        {{howDay}}
      </h2>
      <br>
      <br>
      <div id="slider" ref="slider"></div>
      <br>
      <br>
      <br>
      <input type="hidden" v-model.number="minRange" v-on:change="updateSlider" />
      <input type="hidden" class="js_upd" v-model.number="calcMoney" v-on:change="slider_data" />
      <br>
      <br>
      <br>
      <br>
      <button @click="final_hide_all" type="button" class="btn-goto js_btn_go_ent">Далее </button>
    </section>
</template>

<script>
export default {
  name: 'restActive',
  props: {
    slider_ent: Number,
  },
  data() {
    return {
      vis: true,
      restActivTitle: 'Активный отдых',
      restActivDescriptions: 'В нескольких точках региона можно арендовать оборудование, чтобы попробовать себя в зимних видах спорта. Мы предлагаем сосредоточиться на горнолыжных комплексах Байкальска. Аренда снаряжения – от 700 руб., цена на подъемник – от 400 руб. Расстояние от Иркутска до Байкальска – 150 км, около трех часов в пути на электричке (от 282 руб.) или на автобусе (264 руб.).', // eslint-disable-line
      middlePrice: '3 000',
      tour_variant: 'y',
      howDay: 'На сколько дней вы планируете остановиться в Байкальске?',
      clickEntertainment: false,
      tourAcivPrice: 0,
      calcMoney: 0,
      minRange: null,
      maxRange: null,
      slider: {
        min: 1,
        max: 7,
        start: 1,
        step: 1,
      },
    };
  },
  created() {
  },
  mounted() {
    this.$loadScript('https://cdnjs.cloudflare.com/ajax/libs/noUiSlider/14.6.3/nouislider.min.js')
      .then(() => {
      // eslint-disable-next-line
      noUiSlider.create(this.$refs.slider, {
          start: [1],
          step: this.slider.step,
          range: {
            min: this.slider.min,
            max: this.slider.max,
          },
          pips: {
            mode: 'steps',
            density: 10,
          },
        });
        this.$refs.slider.noUiSlider.on('update', (values, handle) => {
          // eslint-disable-next-line
          this[handle ? 'maxRange' : 'minRange'] = parseInt(values[handle]);
          // console.log(this.minRange); // update
          const calcAllMoney2 = this.minRange * this.tourAcivPrice;
          this.calcMoney = calcAllMoney2;
          // console.log(this.calcMoney);
          // Create a new 'change' event
          const evento = document.createEvent('Event');
          evento.initEvent('change', false, true);
          document.querySelector('.js_upd').dispatchEvent(evento);
        });
      })
      .catch((e) => {
        console.log('no UI slider');
        // eslint-disable-next-line
        console.log(  e.message + "\n" + e.stack);
      });
  },
  methods: {
    updateSlider: function updateSlider() {
      this.$refs.slider.noUiSlider.set([this.minRange, this.maxRange]);
      // console.log(this.minRange); // num
    },
    setTour(event) {
      const text = event.target.value;
      const pointNum = parseFloat(text);
      this.tourAcivPrice = pointNum;
      const calcAllMoney = this.minRange * this.tourAcivPrice;
      this.calcMoney = calcAllMoney;
      const evento = document.createEvent('Event');
      evento.initEvent('change', false, true);
      document.querySelector('.js_upd').dispatchEvent(evento);
      document.querySelector('.js_btn_go_ent').classList.add('on');
    },
    slider_data() {
      this.$emit('input', this.calcMoney);
    },
    final_hide_all() {
      document.querySelector('.component-hide').classList.add('hide');
      document.querySelector('.bottom-green').classList.add('hide');
      document.querySelector('.final-section').classList.add('show');
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .sdfggdd {
    margin: 0;
  }
</style>
