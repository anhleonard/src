<template>
<main>
    <div class="main__wrapper">
        <div class="main__list-item">
            <div class="main__item" v-for="item in items" v-bind:key="item.index">
                <div class="main__item-img">
                    <img src=" {{item.img}} " alt="">
                </div>
                <div class="main__item-name">
                    {{item.text}}
                </div>
            </div>
        </div>
    </div>
</main>
</template>

<script>
import {EventBus} from './event-bus.js';
export default {
    name: 'ContentList',
    props: ["items"],
    data() {
        return {
            message: ''
        }
    },
    
}
</script>

<style>

</style>