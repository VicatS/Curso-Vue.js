Vue.component('vue-directives', {
    template: `<div>
                    <h1 v-text="title"></h1>
                    <p v-text="text"></p>
                    <a :href="link.href" :title="link.title" v-text="link.text"></a>
<!--                    <directive-html></directive-html>-->
                    <DirectiveHtml/>
                    <DirectiveShow/>
                    <DirectiveIf/>
                    <DirectiveFor/>
                    <DirectiveOn/>
               </div>`,
    data () {
        return {
            title: 'Directivas de Vue.js',
            text: 'Text de prueba v-text',
            link: {
                text: 'VueJs Home',
                href: 'https://vuejs.org',
                title: 'Documentación Vue Js'
            }
        }
    },
    components: {
        // 'directive-html': DirectiveHtml,
        DirectiveHtml,
        DirectiveShow,
        DirectiveIf,
        DirectiveFor,
        DirectiveOn,
    }
})