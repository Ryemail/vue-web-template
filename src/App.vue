<template>
    <div id="app">
        <router-view />
        <footer v-if="$store.state.footer">d</footer>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from './components/HelloWorld.vue';

@Component({
    components: {
        HelloWorld,
    },
})
export default class App extends Vue {}
</script>

<style>
#app {
    display: flex;
    flex-direction: column;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
}
</style>
