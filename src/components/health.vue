<template>
    <section  class="component-hide entertainment">
      <h2>{{healthtTitle}}</h2>
      <p class="lh1_8">{{healthDescriptions}} </p>
      <h2 class="red-middle">Средняя стоимость - {{middlePrice}} &#8381;</h2>
      <img class="max100" src="@/assets/img/general/healt1.jpg" alt="">
      <p class="lh1_8"><b>В Слюдянке, можно остановиться в гостиницах. Какой вариант жилья предпочитаете? </b>
      </p>
      <div>
        <label class="radio">
            <input v-model="tour_variant" type="radio" @change="setTour"  name="variant" value="500" checked>
            <span>Эконом</span>
        </label>
        <div class="green-calert-container green-calert-container_norm-marg"
          v-show="tour_variant === '500'"> Стоимость самого бюджетного варианта на Booking.com – <b>500 руб.</b> с человека за ночь (Hostel sludinaya 6a) и в «Тихой Гавани» (1400 руб. за двухместный номер с двумя кроватями).
        </div>
        <label class="radio">
            <input v-model="tour_variant" type="radio"  @change="setTour" name="variant" value="2850">
            <span>Стандарт</span>
        </label>
        <div class="green-calert-container green-calert-container_norm-marg "
          v-show="tour_variant === '2850'">
          Цена стандартного трехместного номера за ночь (комплекс Delight) – <b>2850 руб.</b>
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
      <h2>{{health_excursion_title}}</h2>
      <p class="lh1_8">{{health_excursion_Descriptions}} </p>
      <img class="max100" src="@/assets/img/general/healt2.jpg" alt="">
      <br>
      <br>
      <label class="radio">
        <input class="no_double" type="radio" @change="excursion_tour_add"  name="excursion_variant" value="4700" checked>
        <span>да</span>
      </label>
      <label class="radio">
        <input class="no_double" type="radio" checked  @change="excursion_tour_add" name="excursion_variant" value="0">
        <span>нет</span>
      </label>
      <br>
      <br>
      <button @click="final_hide_all" type="button" class="btn-goto js_btn_go_ent">Далее </button>
    </section>
</template>

<script>
export default {
  name: 'health',
  props: {
    msg: String,
    slider_ent: Number,
  },
  data() {
    return {
      vis: true,
      healthtTitle: 'Оздоровление',
      healthDescriptions: 'Центр притяжения многих туристов в этот регион – термальные источники. Один из самых известных бальнеологических курортов Сибири находится в поселке Аршан. Чтобы попасть туда, необходимо сначала доехать до Слюдянки. От Иркутска – около трех часов на электричке, цена – 213 руб. Или автобусом: время в пути – 3 ч 15 мин, цена – около 200 руб.', // eslint-disable-line
      middlePrice: '1500',
      tour_variant: 'y',
      howDay: 'На сколько дней планируете остановиться в Слюдянке?',
      health_excursion_title: 'Хотели бы приобрести экскурсию по Кругобайкальской железной дороге?',
      health_excursion_Descriptions: 'Отсюда же, из Слюдянки, можно отправиться на экскурсию по знаменитой Кругобайкальской железной дороге (КБЖД). Цена проезда начинается от 4700 руб. В стоимость входит экскурсионное обслуживание, водная переправа, проезд на автобусе и по самой железной дороге.',
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
      if (event.target.classList === 'no_double') {
        const calcAllMoney = text;
        this.calcMoney = calcAllMoney;
      } else {
        const calcAllMoney = this.minRange * this.tourAcivPrice;
        this.calcMoney = calcAllMoney;
      }
      const evento = document.createEvent('Event');
      evento.initEvent('change', false, true);
      document.querySelector('.js_upd').dispatchEvent(evento);
      document.querySelector('.js_btn_go_ent').classList.add('on');
    },
    excursion_tour_add(event) {
      const num = parseInt(event.target.value, 10);
      this.$emit('excursion_tour_add', num);
      // console.log(event);
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
