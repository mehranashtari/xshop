import { createApp } from 'vue';
import ToastPlugin from 'vue-toast-notification';
import {useToast} from 'vue-toast-notification';
import store from "../client-vuex/client-store.js";
import chartjs from 'chart.js/auto';


const app = createApp({});
const $toast = useToast({
    duration: 10000,
});

import MetaFilter from '../client-vue/MetaFilter.vue';
app.component('meta-filter', MetaFilter);

import QuantitiesAddToCard from "../client-vue/QuantitiesAddToCard.vue";
app.component('quantities-add-to-card', QuantitiesAddToCard);

import videoPlayer from "../client-vue/videoPlayer.vue";
app.component('mp4player', videoPlayer);

import mp3player from "../client-vue/mp3player.vue";
app.component('mp3player', mp3player);

app.use(ToastPlugin);
app.use(store);
app.mount('#app');

window.app = app;
window.$toast = $toast;
window.store = store;
