import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Keyboard extends Vue {
    private mounted() {
        window.addEventListener('resize', this.resizeChange);
    }

    private destroyed() {
        window.removeEventListener('resize', this.resizeChange);
    }

    private resizeChange() {
        const activeElement = document.activeElement as Element;
        if (['INPUT', 'TEXTAREA'].includes(activeElement.tagName)) {
            activeElement.scrollIntoView(true);
        }
    }
}
