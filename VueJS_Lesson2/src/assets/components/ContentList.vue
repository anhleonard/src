<template>
  <main>
    <div class="header">
      <div class="header__form">
        <div class="header__btn">
          <h4>ALL</h4>
          <font-awesome-icon
            class="header__btn-icon"
            icon="fa-solid fa-angle-down"
            v-on:click="myFunction()"
          />
        </div>
        <div class="header__list">
          <div
            class="header__item"
            v-for="bag in bags"
            v-bind:key="bag.id"
            v-on:click="getValue(bag)"
          >
            {{ bag.title }}
          </div>
        </div>
      </div>
      <div class="main__wrapper">
        <div class="main__list-item">
          <div
            class="main__item"
            v-for="item in filterItems"
            v-bind:key="item.index"
          >
            <div class="main__item-img">
              <img class="main__item-img-link" :src="item.img" alt="" />
            </div>
            <div class="main__item-name">
              {{ item.text }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "ContentList",
  props: {
    bags: Array,
    items: Array,
  },
  data() {
    return {
      active: false,
      filterItems: []
    };
  },
  
  methods: {
    getValue(bag) {
      this.items.map((item) => {
        this.filterItems = this.items.filter(checkItem);
        function checkItem(item) {
          if (bag.title === item.title) return item;
        }
      });
    },
    myFunction() {
      this.active = !this.active;
      if (this.active === true) {
        let value = document.querySelector(".header__list");
        value.style.display = "block";
      } else {
        let value = document.querySelector(".header__list");
        value.style.display = "none";
      }
    },
  },
  created() {
    this.filterItems = this.items;
  },
};
</script>

<style>
/* header */
.header {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.header__form {
  position: relative;
  width: 280px;
}
.header__btn {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #000;
  padding: 15px;
  width: 100%;
  height: 30px;
}
.header__list {
  width: inherit;
  background: #fff;
  z-index: 1000;
  border: 1px solid #000;
  position: absolute;
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
/* main */
.main__list-item {
  margin: 40px auto;
  width: 1300px;
  display: flex;
  flex-wrap: wrap;
}
.main__item {
  padding: 20px;
  width: 25%;
  /* display: none; */
}
.main__item-img {
  overflow: hidden;
  width: 100%;
  margin-bottom: 20px;
}
.main__item:hover .main__item-img-link {
  transform: scale(1.05);
  cursor: pointer;
  transition: all 0.3s ease-in-out;
}
.main__item:hover .main__item-name {
  color: green;
}
.main__item-img-link {
  width: 100%;
}
.main__item-name {
  font-weight: 1000;
}
.main__item-name:hover {
  color: green;
  cursor: pointer;
}
</style>