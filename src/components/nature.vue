<template>
    <section  class="component-hide entertainment">
      <h2> {{entertainmentTitle}}</h2>
      <p class="lh1_8">Отдых на природе возможен почти в любом поселении у Байкала. Наиболее интересные места с потрясающими видами – остров Ольхон и поселок Большое Голоустное. <br><br> Ольхон - самый крупный остров акватории Байкала. Здесь представлено все многообразие природных байкальских ландшафтов – степные просторы соседствуют с лиственными лесами, реликтовым ельником и выстроившимися вдоль побережья мраморными скалами. <br><br> Большое Голоустное знаменито не только своими «пузырьками» в Байкальском льду, есть тут и реликтовая роща, и пещеры и даже Сухое озеро. А легкая транспортная доступность от Иркутска делает это место одним из самых популярных туристических направлений. </p>
      <h2>Куда вы хотите отправиться? </h2>
      <div class="half-container half-container_mb80 half-container_button-texts" id="cont1" >
          <div class="half-container__half-co" >
              <label class="first-step-b" v-on:click.stop="classTogg" >
                  <div class="choose-image-container" >
                      <input type="radio" name="transport"
                      v-model="tourplace"
                      @change.stop="chose_nature_tour(1800)" value="olhon">
                      <img class="max100 " src="@/assets/img/general/olhon.jpg" alt="">
                      <div class="cheked-alert">
                          <div class="cheked-alert__round">
                              <img class="cheked-alert__svg"
                              src="@/assets/img/general/checked.svg" alt="">
                          </div>
                      </div>
                  </div>
                  <div class="stroke-name">Остров Ольхон</div>
                  <br>
                  <button class="salat-btn" type="button">
                    <span>Выбрать</span>
                    <span>Выбрано</span>
                  </button>
              </label>
          </div>
          <div class="half-container__half-co" >
              <label class="first-step-b" v-on:click.stop="classTogg" >
                  <div class="choose-image-container">
                      <input type="radio" name="transport" v-model="tourplace"
                      @change.stop="chose_nature_tour(972)"  value="goloust">
                      <img class="max100" src="@/assets/img/general/otd2.jpg" alt="">
                      <div class="cheked-alert">
                          <div class="cheked-alert__round">
                              <img class="cheked-alert__svg"
                              src="@/assets/img/general/checked.svg" alt="">
                          </div>
                      </div>
                  </div>
                  <div class="stroke-name">Большое Голоустное</div>
                  <br>
                  <button class="salat-btn" type="button">
                    <span>Выбрать</span>
                    <span>Выбрано</span>
                  </button>
              </label>
          </div>
      </div>
      <article v-show="tourplace === 'olhon'">
        <div class="green-calert-container green-calert-container_norm-marg">
          Чтобы добраться до острова от Иркутска, необходимо сначала доехать до Сахюрты (примерно 900 руб.). Время в пути – 4 часа, далее по ледовой переправе.
          <h2 class="red-middle">Средняя стоимость - {{middlePrice_olhon}} &#8381;</h2>
        </div>
        <p class="lh1_8"><b>Есть несколько вариантов жилья на острове Ольхон (поселок Хужир). </b>
        </p>
        <div>
          <label class="radio">
              <input v-model="tour_variant" type="radio" @change="setTour"  name="variant" value="1000" checked>
              <span>Эконом</span>
          </label>
          <div class="green-calert-container green-calert-container_norm-marg"
            v-show="tour_variant === '1000'">
            Цена за кровать в общем номере за ночь – около 1000 руб. («Гостевой дом Жуковых»).
            <p><b>Около 1000 руб. за ночь</b></p>
          </div>
          <label class="radio">
              <input v-model="tour_variant" type="radio"  @change="setTour" name="variant" value="3200">
              <span>Стандарт</span>
          </label>
          <div class="green-calert-container green-calert-container_norm-marg "
            v-show="tour_variant === '3200'">
            Sunrise Guesthouse предлагает двухместный номер с одной кроватью за <b>3200 руб.</b> в сутки.
          </div>
        </div>
      </article>
      <article v-show="tourplace === 'goloust'">
        <div class="green-calert-container green-calert-container_norm-marg">
          До Большого Голоустного и бухты Песчаной можно доехать от автовокзала Иркутска на автобусе. Цена проезда – от 300 руб., время в пути – 2 ч 25 мин.
          <h2 class="red-middle">Средняя стоимость - {{middlePrice_goloust}} &#8381;</h2>
        </div>
        <p class="lh1_8"><b>В поселке Большое Голоустное можно выбрать несколько вариантов проживания </b>
        </p>
        <div>
          <label class="radio">
              <input v-model="tour_variant" type="radio" @change="setTour"  name="variant" value="1500" checked>
              <span>Эконом</span>
          </label>
          <div class="green-calert-container green-calert-container_norm-marg"
            v-show="tour_variant === '1500'">
            Бюджетный вариант жилья – кемпинг «Русское подворье» (<b>1500 руб</b>. за ночь в коттедже на двух взрослых).
          </div>
          <label class="radio">
              <input v-model="tour_variant" type="radio"  @change="setTour" name="variant" value="4050">
              <span>Стандарт</span>
          </label>
          <div class="green-calert-container green-calert-container_norm-marg "
            v-show="tour_variant === '4050'">
            На сайте Booking.com предлагается дом для отпуска со спальней, гостиной и двумя кроватями (Baikal Holiday Apartments). Цена аренды за ночь – <b>4050 руб</b>.
          </div>
        </div>
      </article>
      <h2>
        {{howDay}}
        <span v-if="tourplace === 'olhon'">{{howDay_olhon}}</span>
        <span v-if="tourplace === 'goloust'">{{howDay_goloust}}</span>
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
  name: 'nature',
  props: {
    msg: String,
    slider_ent: Number,
  },
  data() {
    return {
      vis: true,
      entertainmentTitle: 'Отдых на природе',
      middlePrice_olhon: 1800,
      middlePrice_goloust: 600,
      tourplace: 'x',
      tour_variant: 'y',
      tour_nature_price: 0,
      howDay: 'На сколько дней вы планируете остановиться',
      howDay_olhon: 'на острове Ольхон?',
      howDay_goloust: 'в поселке Большое Голоустное?',
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
          console.log(this.minRange); // update
          const calcAllMoney2 = this.minRange * this.tourAcivPrice;
          this.calcMoney = calcAllMoney2;
          console.log(this.calcMoney);
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
      console.log(this.minRange); // num
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
    classTogg(events) {
      // console.log(events.currentTarget.parentElement);
      const parentTaget = events.target.closest('.half-container').id;
      document.querySelector(` #${parentTaget} `).classList.add('activator');
      // console.log(parentTaget);
      [...document.querySelectorAll(` #${parentTaget} .half-container__half-co.active_half`)]
        .map((elem) => elem.classList.remove('active_half'));
      events.currentTarget.parentElement.classList.add('active_half');
    },
    chose_nature_tour(event) {
      this.tour_nature_price = event;
      this.$emit('chose_nature_tour', this.tour_nature_price);
      // console.log(this.tour_nature_price);
      this.vis = false;
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
