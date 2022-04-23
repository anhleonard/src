<template>
  <div class="header">
      <div class="header__form">
          <div class="header__btn">
              <h4>ALL</h4>
              <font-awesome-icon  class="header__btn-icon" icon="fa-solid fa-angle-down" v-on:click="myFunction()"/>
          </div>
          <div class="header__list">
              <div class="header__item" v-for="bag in bags" v-bind:key="bag.id">
                  {{bag.title}}
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import {EventBus} from './event-bus.js';
export default {
    name: 'HeaderList',
    props: ["bags"],
    data() {
        return {
            active: false
        }
    },
    methods: {
        myFunction() {
            this.active = !this.active;
            if(this.active === true) {
                var value = document.querySelector('.header__list');
                value.style.display = 'block';
            }
            else {
                var value = document.querySelector('.header__list');
                value.style.display = 'none';
            }
        }
    }
}
</script>

<style>
.header {
    display: flex;
    justify-content: center;
}
.header__btn {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid #000;
    padding: 15px;
    width: 280px;
    height: 30px;
}
.header__list {
    border: 1px solid #000;
    display: none;
}
.header__item {
    margin: 15px;
}
.header__item:hover {
    text-decoration: underline;
    cursor: pointer;
}
.header__btn-icon:hover {
    cursor: pointer;
}

</style>