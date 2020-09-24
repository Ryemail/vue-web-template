import './styles/index.less';

import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import 'amfe-flexible';

import { Button, Field, Tab, Tabs } from 'vant';

Vue.use(Button)
    .use(Field)
    .use(Tabs)
    .use(Tab);

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app');
