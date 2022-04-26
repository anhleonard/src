<template>
  <div class="content">
    <div class="wrapper">
      <div class="header">
        <div class="header__name">CHAIRS</div>
        <div class="header__box">
          <div class="header__box-filter">
            <button>
              <h3
                v-bind:class="{ header__boxFilterBtn: isActive }"
                v-on:click="myFunction()"
              >
                Filter by
              </h3>
            </button>
          </div>
          <div class="header__box-select">
            <p>selectedCategory:all</p>
            <div
              v-bind:class="{ header__boxBtn: isTrue }"
              v-on:click="resetAll()"
            >
              <font-awesome-icon
                icon="fa-solid fa-x"
                class="icon"
                v-on:click="myClick()"
              />
            </div>
          </div>
        </div>
        <div class="header__box-list">
          <div
            class="header__box-item"
            v-for="option in options"
            v-bind:key="option.title"
            v-on:click="getTitle(option)"
          >
            <h3>{{ option.title }}</h3>
          </div>
        </div>
      </div>
      <div class="mainBox">
        <div class="mainBox__list">
          <div
            class="mainBox__list-item"
            v-for="item in filterArray"
            v-bind:key="item.name"
          >
            <div class="mainBox__list-img">
              <img :src="item.img" alt="" class="mainBox__list-imgLink" />
            </div>
            <div class="mainBox__list-info">
              <div class="mainBox__list-des">
                <h3 class="mainBox__list-name">{{ item.name }}</h3>
                <p class="mainBox__list-type">{{ item.type }}</p>
                <p class="mainBox__list-price">{{ item.price }}</p>
              </div>
              <div class="mainBox__list-btn">
                <button>Add to cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ListProduct",
  props: {
    products: Array,
    options: Array,
  },
  data() {
    return {
      isTrue: false,
      isActive: false,
      filterArray: [],
    };
  },
  methods: {
    myFunction() {
      this.isActive = !this.isActive;
      if (this.isActive === true) {
        document.querySelector(".header__box-list").style.display = "block";
      } else {
        document.querySelector(".header__box-list").style.display = "none";
      }
    },
    myClick() {
      this.isTrue = !this.isTrue;
    },
    getTitle(option) {
      console.log(option.title);
      this.filterArray = this.products.filter(checkTitle);
      function checkTitle(product) {
        if (
          option.title === product.type ||
          option.title === product.typeMain
        ) {
          return option;
        }
      }
      console.log(this.filterArray);
    },
    resetAll() {
      this.filterArray = this.products;
    },
  },
  // created() {
  //     this.filterArray = this.products;
  // },
};
</script>

<style>
.content {
  width: 1440px;
  margin: 30px;
}
.wrapper {
  width: 80%;
  margin: 0 auto;
}
.header {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  margin-left: 10px;
  padding-right: 41px;
}
.header__name {
  font-size: 30px;
  font-weight: 1000;
}
.header__box-list {
  position: absolute;
  top: 33px;
  right: 140px;
  border: 2px solid rgba(153, 153, 153, 0.5);
  margin-top: 4px;
  background: #fff;
  border-radius: 5px;
  font-size: 0.9rem;
  animation: listMove 0.1s ease-in-out;
  display: none;
}
@keyframes listMove {
  from {
    top: 50%;
  }
  to {
    top: 1;
  }
}
.header__box-item h3 {
  padding: 5px 10px;
}
.header__box-item:hover {
  text-decoration: underline;
  cursor: pointer;
}
.header__box {
  display: flex;
  justify-content: center;
  align-items: center;
}
.header__box-select {
  display: flex;
  justify-content: center;
  align-items: center;
}
.header__box-select {
  background-color: #efefef;
  padding: 5px 10px;
}
.header__box-select p {
  margin-right: 10px;
}
.header__boxBtn {
  border: 1px solid #999;
  padding: 0.4px 5px;
  border-radius: 70%;
  font-size: 10px;
}
.header__box-select .icon {
  cursor: pointer;
  font-size: 0.7rem;
  padding-top: 2px;
}

.header__boxFilterBtn {
  border: 2px solid rgba(186, 186, 243, 0.5);
  border-radius: 5px;
  color: #5755d9;
}
.header__box-filter button {
  margin-right: 10px;
  background-color: #fff;
  cursor: pointer;
}
.header__box-filter button:hover {
  color: #5755d9;
}
.header__box-filter button h3 {
  padding: 5px 10px;
}

/* main-box */
.mainBox {
  width: 100%;
}
.mainBox__list {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}
.mainBox__list-item {
  width: 31%;
  margin: 10px;
  border: 1px solid rgb(199, 199, 199);
}
.mainBox__list-info {
  width: 100%;
}
.mainBox__list-img img {
  width: 100%;
}
/* mainBox__list-info */
.mainBox__list-info {
  display: flex;
  justify-content: space-between;
  padding: 15px;
}
.mainBox__list-price {
  color: #5755d9;
}
.mainBox__list-btn button {
  padding: 8px;
  background: rgba(87, 85, 217, 0.9);
  color: #fff;
  font-weight: 600;
  border-radius: 4px;
  cursor: pointer;
}
.mainBox__list-btn button:hover {
  background: #5755d9;
}
</style>