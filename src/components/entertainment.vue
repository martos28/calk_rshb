<template>
    <section  class="component-hide entertainment">
      <h2>{{entertainmentTitle}}</h2>
      <p class="lh1_8">{{entertainmenDescriptions}} </p>
      <h2 class="red-middle">Средняя стоимость - {{middlePrice}} &#8381;</h2>
      <img class="max100" src="@/assets/img/general/entertainment_pickture.jpg" alt="">
      <p class="lh1_8"><b>На Booking.com предлагается множество вариантов жилья в поселке
          Листвянка по разной цене.</b>
      </p>
      <div>
        <label class="radio">
            <input v-model="tour_variant" type="radio" @change="setTour"  name="variant" value="700" checked>
            <span>Эконом</span>
        </label>
        <div class="green-calert-container green-calert-container_norm-marg"
          v-show="tour_variant === '700'">
          Бюджетный вариант – хостел «Белка» (700 руб. за кровать в общей комнате) и Baykal
          Ersi Hotel (1200 руб. за стандартный номер с двумя кроватями).
          <p><b>Примерно 700 руб. за ночь</b></p>
        </div>
        <label class="radio">
            <input v-model="tour_variant" type="radio"  @change="setTour" name="variant" value="3500">
            <span>Стандарт</span>
        </label>
        <div class="green-calert-container green-calert-container_norm-marg "
          v-show="tour_variant === '3500'">
          Цена самого популярного варианта для проживания в Листвянке – <b>3510</b> рублей за
          двухместный номер с двумя отдельными кроватями (усадьба Еремеевых). Завтрак включен.
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
  name: 'entertainment',
  props: {
    msg: String,
    slider_ent: Number,
  },
  data() {
    return {
      vis: true,
      entertainmentTitle: 'Развлечения',
      entertainmenDescriptions: 'Для посещения знаменитого музея деревянного зодчества «Тальцы», тематических мастер-классов и шоу нерп в нерпинарии мы рекомендуем остановиться в поселке Листвянка (от Иркутска примерно 65 км автобусом). Стоимость поездки до поселка и обратно – примерно 300 рублей. Цена входного билета в музей для пенсионеров – 100 руб., стоимость одного мастер-класса – от 150 до 1200 руб. Посещение шоу в нерпинарии обойдется в 600 руб.', // eslint-disable-line
      middlePrice: '2 000',
      tour_variant: 'y',
      howDay: 'На сколько дней вы планируете остановиться в Листвянке?',
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
    this.$loadScript('https://cdnjs.cloudflare.com/ajax/libs/noUiSlider/14.6.3/nouislider.min.js', 'https://polyfill.io/v3/polyfill.min.js')
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
          const Nthis = this;
          Nthis.calcMoney = calcAllMoney2;
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
        console.log(  'Ошибка ' + e.name + ":" + e.message + "\n" + e.stack);
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
      // const evento = new Event('change');
      // document.querySelector('.js_upd').dispatchEvent(evento);
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
