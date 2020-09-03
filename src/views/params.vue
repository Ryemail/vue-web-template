<template>
    <section class="params flex-1">
        <!-- {{ name }}--{{ sex }} -->

        <pre v-html="syntaxHighlight({ ...query, child: [1, 23], class: { name: '666666666666' } })">
            <!-- {{ query }} -->
           <!-- {{ JSON.stringify((query), null, 4) }} -->
        </pre>
        <div>
            PARAMS
        </div>
    </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
    props: ['query'],
})
export default class Params extends Vue {
    query!: {
        name: string;
        sex: string;
        age: string;
    };

    private created() {
        console.log(this.query);
    }
    syntaxHighlight(json: object) {
        let obj = JSON.stringify(json, undefined, 2);
        obj = obj
            .replace(/&/g, '&')
            .replace(/</g, '<')
            .replace(/>/g, '>');
        return obj.replace(
            /("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g,
            function(match) {
                let cls = 'number';
                if (/^"/.test(match)) {
                    if (/:$/.test(match)) {
                        cls = 'key';
                    } else {
                        cls = 'string';
                    }
                } else if (/true|false/.test(match)) {
                    cls = 'boolean';
                } else if (/null/.test(match)) {
                    cls = 'null';
                }
                return '<span class="' + cls + '">' + match + '</span>';
            }
        );
    }
}
</script>

<style lang="less"></style>
