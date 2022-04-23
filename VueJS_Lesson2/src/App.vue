<template>
<div class="parent">
  <ContentList v-bind:items="items" v-bind:bags="bags"></ContentList>
</div>
</template>

<script>
import ContentList from './assets/components/ContentList.vue';
export default {
  name: 'App',
  data() {
    return {
      bags: [
        { id: 0, title: 'ALL'},
        { id: 1, title: 'COFFEE & DESSERTS'},
        { id: 2, title: 'FAMILY-FRIENDLY DINING'},
        { id: 3, title: 'FOOD & BEVERAGES'},
        { id: 4, title: 'QUICK BITES'},
        { id: 5, title: 'RESTAURANTS'},
        { id: 6, title: 'WINE & COCKTAILS'},
      ],
      items: [
        { index: 1, title: 'ALL', text: 'ALMA – Coming Soon', img: 'https://thegrovela.com/wp-content/uploads/2021/04/GAF_Alma-Cocina-de-Mexico_Coming-Soon_900x600.jpg'},
        { index: 2, title: 'ALL', title: 'QUICK BITES', title: 'FAMILY-FRIENDLY DINING', text: 'AMC Theatres', img: 'https://thegrovela.com/wp-content/uploads/2021/07/2021_GAF_AMC_PromoImage_Hero_HP-Tile_900x600.png'},
        { index: 3, title: 'ALL', title: 'FAMILY-FRIENDLY DINING', text: 'Bar Verde at Nordstrom', img: 'https://thegrovela.com/wp-content/uploads/2017/05/BarVerde_900x600.jpg'},
        { index: 4, title: 'ALL', text: 'Blue Ribbon Sushi Bar & Grill', img: 'https://thegrovela.com/wp-content/uploads/2017/05/BlueRibbon_900x600.jpg'},
        { index: 5, title: 'ALL', title: 'FAMILY-FRIENDLY DINING', text: 'Chill Since ‘93 – Now Open', img: 'https://thegrovela.com/wp-content/uploads/2021/12/GAF_ChillSince93_NowOpen_900x600.jpg'},
        { index: 6, title: 'ALL', text: 'edo bites', img: 'https://thegrovela.com/wp-content/uploads/2019/09/GAF_Edo_NowOpen_900x600.jpg'},
        { index: 7, title: 'ALL', title: 'COFFEE & DESSERTS', text: 'Groundwork Coffee', img: 'https://thegrovela.com/wp-content/uploads/2017/05/Grove_Dining_Dining-Detail_Groundwork-Coffee_Thumb-900x600.png'},
        { index: 8, title: 'ALL', title: 'COFFEE & DESSERTS', text: 'Häagen-Dazs', img: 'https://thegrovela.com/wp-content/uploads/2017/05/Grove_Dining_Dining_Detail_Haagen-Dazs_900x600.png'},
        { index: 9, title: 'ALL', title: 'FAMILY-FRIENDLY DINING', text: 'La Piazza', img: 'https://thegrovela.com/wp-content/uploads/2017/05/GAF_LaPiazza_900x600.jpg'},
        { index: 10, title: 'ALL', title: 'COFFEE & DESSERTS', title: 'FAMILY-FRIENDLY DINING', text: 'Maggiano’s Little Italy', img: 'https://thegrovela.com/wp-content/uploads/2017/05/Maggianos_900x600.jpg'},
        { index: 11, title: 'ALL', title: 'COFFEE & DESSERTS', text: 'Nordstrom eBar', img: 'https://thegrovela.com/wp-content/uploads/2017/05/Grove_Dining_Dining-Detail_Nordstrom-Ebar-900x600.png'},
        { index: 12, title: 'ALL', title: 'QUICK BITES', text: 'Pressed', img: 'https://thegrovela.com/wp-content/uploads/2017/05/2021_AAB_PressedJuicery_TenantPage_HP-Tile_900x600-1.png'},
        { index: 13, title: 'ALL', title: 'COFFEE & DESSERTS', text: 'See’s Candies', img: 'https://thegrovela.com/wp-content/uploads/2017/10/2017-HW-DA-The-Grove-LA-Shop-AY-900x600-FINAL.jpg'},
        { index: 14, title: 'ALL', title: 'COFFEE & DESSERTS', text: 'Sprinkles Cupcakes', img: 'https://thegrovela.com/wp-content/uploads/2017/05/Sprinkles_900x600.jpg'},
        { index: 15, title: 'ALL', title: 'QUICK BITES', title: 'COFFEE & DESSERTS', text: 'Starbucks at Barnes & Noble', img: 'https://thegrovela.com/wp-content/uploads/2017/06/Grove_Dining_Dining-Detail_Barnes-Noble-Cafe_1-copy_crop-P_900x600px.png'},
        { index: 16, title: 'ALL', title: 'COFFEE & DESSERTS', title: 'FAMILY-FRIENDLY DINING', text: 'The Cheesecake Factory', img: 'https://thegrovela.com/wp-content/uploads/2017/05/Grove_Dining_Dining-Detail_The-Cheesecake-Factory-900x600.png'},
        { index: 17, title: 'ALL', title: 'QUICK BITES', text: 'The Fountain Bar', img: 'https://thegrovela.com/wp-content/uploads/2017/09/FountainBar_900x600.jpg'},
        { index: 18, title: 'ALL', title: 'QUICK BITES', title: 'FAMILY-FRIENDLY DINING',text: 'Umami Burger', img: 'https://thegrovela.com/wp-content/uploads/2017/05/GAF_Umami-Burger-Dining-Page_900x600.jpg'},
        { index: 19, title: 'ALL', title: 'QUICK BITES', title: 'COFFEE & DESSERTS', text: 'Wetzel’s Pretzels', img: 'https://thegrovela.com/wp-content/uploads/2017/05/Grove_Dining_Dining-Detail_Wetzels-Pretzels.jpg'}
      ]
    }
  },
  components: {
    ContentList
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300&display=swap');
.parent {
  font-family: 'Source Sans Pro', sans-serif;
}
* {
  padding: 0;
  border: 0;
  box-sizing: border-box;
}
</style>