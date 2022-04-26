<template>
  <div class="container">
    <ListProduct
      v-bind:products="products"
      v-bind:options="options"
    ></ListProduct>
  </div>
</template>

<script>
import ListProduct from "./assets/components/ListProduct.vue";
export default {
  name: "App",
  data() {
    return {
      options: [
        { title: "All" },
        { title: "Vitra" },
        { title: "Hay" },
        { title: "Tradition" },
        { title: "Carl Hansen and Son" },
      ],
      products: [
        {
          name: "Eames Fiberglass Chair DSX",
          typeMain: "All",
          type: "Vitra",
          price: "$650",
          img: "https://hausimg.imgix.net/s/files/1/0053/2792/products/1957061_Eames_Fiberglass_Side_Chair_DSX_master_1024x1024.jpg",
        },
        {
          name: "Betty Chair",
          typeMain: "All",
          type: "Tradition",
          price: "$420",
          img: "https://hausimg.imgix.net/s/files/1/0053/2792/products/Betty_TK1_Black_1024x1024.jpg",
        },
        {
          name: "PK1 Wicker Chair",
          typeMain: "All",
          type: "Carl Hansen and Son",
          price: "$500",
          img: "https://danongonline.com.vn/wp-content/uploads/2018/02/anh-girl-xinh-9-1.jpg",
        },
        {
          name: "Harbour Chair Upholstered with Steel Base",
          typeMain: "All",
          type: "Menu",
          price: "$619.00",
          img: "https://hausimg.imgix.net/s/files/1/0053/2792/products/30009O_HarbourChair_Light-Grey_Natural-Oak-Base_Pack_Front_1024x1024.jpg",
        },
        {
          name: "J41 Chair",
          typeMain: "All",
          type: "Hay",
          price: "$229.00",
          img: "https://1.bp.blogspot.com/--vVyGynittE/XlZYtqoZjwI/AAAAAAAAV48/Zt8yo1Jx7Ms02OAJ3ckzonNpkp_2VER_wCLcBGAsYHQ/s1600/Gai-Xinh-Facebook-DiemBaoGi%2B%25281%2529.jpg",
        },
        {
          name: "Soft Edge 12 Chair",
          typeMain: "All",
          type: "Hay",
          price: "$295.00",
          img: "https://wesave.vn/anh-nen-girl-xinh-full-hd/imager_4339.jpg",
        },
      ],
    };
  },
  components: {
    ListProduct,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300&display=swap");
* {
  padding: 0;
  border: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Source Sans Pro", sans-serif;
}
</style>