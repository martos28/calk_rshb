<template>
    <section v-if="vis" class="step_1_2">
      <h2>{{stepOneTwoTitleTop}}</h2>
      <div class="half-container half-container_mb80 half-container_button-texts" id="cont1" >
          <div class="half-container__half-co" >
              <label class="first-step-b" v-on:click.stop="classTogg" >
                  <div class="choose-image-container" >
                      <input type="radio" name="transport"
                      v-model="transport"
                      @change.stop="inp_meth(35500);" value="fly">
                      <img class="max100 " src="@/assets/img/general/row1.jpg" alt="">
                      <div class="cheked-alert">
                          <div class="cheked-alert__round">
                              <img class="cheked-alert__svg"
                              src="@/assets/img/general/checked.svg" alt="">
                          </div>
                      </div>
                  </div>
                  <div class="stroke-name">Самолетом</div>
                  <p class="line-price">Средняя стоимость – 35 500 &#8381;</p>
                  <button class="salat-btn" type="button">
                    <span>Выбрать</span>
                    <span>Выбрано</span>
                  </button>
              </label>
          </div>
          <div class="half-container__half-co" >
              <label class="first-step-b" v-on:click.stop="classTogg" >
                  <div class="choose-image-container">
                      <input type="radio" name="transport" v-model="transport"
                      @change.stop="inp_meth(18200)"  value="iron_road">
                      <img class="max100" src="@/assets/img/general/row2.jpg" alt="">
                      <div class="cheked-alert">
                          <div class="cheked-alert__round">
                              <img class="cheked-alert__svg"
                              src="@/assets/img/general/checked.svg" alt="">
                          </div>
                      </div>
                  </div>
                  <div class="stroke-name">Поездом</div>
                  <p class="line-price">Средняя стоимость – 18 200 &#8381;</p>
                  <button class="salat-btn" type="button">
                    <span>Выбрать</span>
                    <span>Выбрано</span>
                  </button>
              </label>
          </div>
      </div>
      <div class="green-calert-container">
        <div v-if="transport === 'fly'">
          {{hint1}}
        </div>
        <div v-else-if="transport === 'iron_road'">
          {{hint2}}
        </div>
      </div>
      <h2>
        {{stepOneTwoTitleTwo}}
      </h2>
      <br>
      <div class="half-container rel step2  disabled_step2" id="cont2">
          <div class="half-error">Сначала необходимо выбрать транспорт</div>
          <div class="half-container__half-co" v-for="item in tour" :key="item.type" >
              <div class="first-step-b" v-on:click="chose_tour"
                :itemid="`${item.type}`" :tourprice="`${item.price}`">
                  <div class="white-green-pop"></div>
                  <div class="choose-image-container">
                      <img class="max100" :src="require(`@/assets/img/general/${item.image}`)"
                      alt="">
                  </div>
                  <div class="stroke-name mb15">{{item.title}}</div>
                  <button class="salat-btn" type="button">Рассчитать</button>
              </div>
          </div>
      </div>
    </section>
</template>

<script>

export default {
  // summa
  // https://clck.ru/TdzWC
  name: 'StepOneTwo',
  props: {
    msg: String,
    header: String,
    myinp: Number,
    clickEntertainment: String,
    togglemyinp: Object,
  },
  data() {
    return {
      summ: ['1'],
      tour: [
        {
          type: 'ent', image: 'otd1.jpg', title: 'Развлечения ', price: 2000,
        },
        {
          type: 'activ_rest', image: 'otd2.jpg', title: 'Активный отдых', price: 3000,
        },
        {
          type: 'nature', image: 'otd3.jpg', title: 'Отдых на природе ', price: 0,
        },
        {
          type: 'health', image: 'otd4.jpg', title: 'Оздоровление', price: 1500,
        },
      ],
      vis: true,
      stepOneTwoTitleTop: 'Итак, сначала нам нужно добраться до Иркутска. Каким видом транспорта вы планируете это сделать?',
      stepOneTwoTitleTwo: 'Выбираем, где остановиться. Для этого сначала определимся, какой вид отдыха вы предпочитаете?',
      transport: 'x',
      hint1: 'Стоимость полета из Москвы до Иркутска составляет от 11 000 до 60 000 рублей (туда-обратно) в зависимости от даты. Среднее время в пути (без пересадок) – 5 ч 50 мин.',
      hint2: 'Из столицы до Иркутска можно доехать примерно за 9100 рублей в одну сторону (стоимость поездки зависит от даты). Цена за плацкарт и купе почти не отличается. Ехать чуть более трех дней.',
    };
  },
  methods: {
    classTogg(events) {
      console.log(events.currentTarget.parentElement);
      const parentTaget = events.target.closest('.half-container').id;
      document.querySelector(` #${parentTaget} `).classList.add('activator');
      // console.log(parentTaget);
      [...document.querySelectorAll(` #${parentTaget} .half-container__half-co.active_half`)]
        .map((elem) => elem.classList.remove('active_half'));
      events.currentTarget.parentElement.classList.add('active_half');
      document.getElementById('cont2').classList.remove('disabled_step2');
    },
    inp_meth(event) {
      this.$emit('change', event);
    },
    chose_tour(event) {
      this.$emit('chose_tour', {
        id: event.target.parentElement.getAttribute('itemid'),
        price: event.target.parentElement.getAttribute('tourprice'),
      });
      this.vis = false;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

</style>
