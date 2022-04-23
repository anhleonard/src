<template>
<div class="parent">
  <HeaderList v-bind:bags="bags"></HeaderList>
  <ContentList v-bind:items="items"></ContentList>
</div>
</template>

<script>
import HeaderList from './assets/components/HeaderList.vue';
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
        { index: 0, text: 'ALMA – Coming Soon', img: 'https://thegrovela.com/wp-content/uploads/2021/04/GAF_Alma-Cocina-de-Mexico_Coming-Soon_900x600.jpg'},
        { index: 1, text: 'AMC Theatres', img: 'https://thegrovela.com/wp-content/uploads/2021/07/2021_GAF_AMC_PromoImage_Hero_HP-Tile_900x600.png'},
        { index: 2, text: 'Bar Verde at Nordstrom', img: 'https://thegrovela.com/wp-content/uploads/2017/05/BarVerde_900x600.jpg'},
        { index: 3, text: 'Blue Ribbon Sushi Bar & Grill', img: 'https://thegrovela.com/wp-content/uploads/2017/05/BlueRibbon_900x600.jpg'},
        { index: 4, text: 'Chill Since ‘93 – Now Open', img: 'https://thegrovela.com/wp-content/uploads/2021/12/GAF_ChillSince93_NowOpen_900x600.jpg'},
        { index: 5, text: 'edo bites', img: 'https://thegrovela.com/wp-content/uploads/2019/09/GAF_Edo_NowOpen_900x600.jpg'},
        { index: 6, text: 'Groundwork Coffee', img: 'https://thegrovela.com/wp-content/uploads/2017/05/Grove_Dining_Dining-Detail_Groundwork-Coffee_Thumb-900x600.png'},
        { index: 7, text: 'Häagen-Dazs', img: 'https://thegrovela.com/wp-content/uploads/2017/05/Grove_Dining_Dining_Detail_Haagen-Dazs_900x600.png'},
        { index: 8, text: 'La Piazza', img: 'https://thegrovela.com/wp-content/uploads/2017/05/GAF_LaPiazza_900x600.jpg'},
        { index: 9, text: 'Maggiano’s Little Italy', img: 'https://thegrovela.com/wp-content/uploads/2017/05/Maggianos_900x600.jpg'},
        { index: 10, text: 'Nordstrom eBar', img: 'https://thegrovela.com/wp-content/uploads/2017/05/Grove_Dining_Dining-Detail_Nordstrom-Ebar-900x600.png'},
        { index: 11, text: 'Pressed', img: 'https://thegrovela.com/wp-content/uploads/2017/05/2021_AAB_PressedJuicery_TenantPage_HP-Tile_900x600-1.png'},
        { index: 12, text: 'See’s Candies', img: 'https://thegrovela.com/wp-content/uploads/2017/10/2017-HW-DA-The-Grove-LA-Shop-AY-900x600-FINAL.jpg'},
        { index: 13, text: 'Sprinkles Cupcakes', img: 'https://thegrovela.com/wp-content/uploads/2017/05/Sprinkles_900x600.jpg'},
        { index: 14, text: 'Starbucks at Barnes & Noble', img: 'https://thegrovela.com/wp-content/uploads/2017/06/Grove_Dining_Dining-Detail_Barnes-Noble-Cafe_1-copy_crop-P_900x600px.png'},
        { index: 15, text: 'The Cheesecake Factory', img: 'https://thegrovela.com/wp-content/uploads/2017/05/Grove_Dining_Dining-Detail_The-Cheesecake-Factory-900x600.png'},
        { index: 16, text: 'The Fountain Bar', img: 'https://thegrovela.com/wp-content/uploads/2017/09/FountainBar_900x600.jpg'},
        { index: 17, text: 'Umami Burger', img: 'https://thegrovela.com/wp-content/uploads/2017/05/GAF_Umami-Burger-Dining-Page_900x600.jpg'},
        { index: 18, text: 'Wetzel’s Pretzels', img: 'https://thegrovela.com/wp-content/uploads/2017/05/Grove_Dining_Dining-Detail_Wetzels-Pretzels.jpg'}
      ]
    }
  },
  components: {
    HeaderList,
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