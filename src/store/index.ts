import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        userInfo: null,
        footer: true,
    },
    mutations: {
        changeFooter(state, value) {
            state.footer = value;
        },
    },
    actions: {},
    modules: {},
    plugins: [
        createPersistedState({
            storage: window.sessionStorage,
            reducer(val) {
                return {
                    userInfo: val.userInfo,
                };
            },
        }),
    ],
});
