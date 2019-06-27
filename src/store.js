import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        name:"",
    },
    mutations: {
        name: (state,params)=> state.name = params
    },
    actions: {},
    plugins: [createPersistedState({
        storage: window.sessionStorage,
        reducer(val) {
            return {
                name: val.name 
            }
        }
    })]
});
