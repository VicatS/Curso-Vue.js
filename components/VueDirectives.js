Vue.component('vue-directives', {
    template: `<div>
                    <p v-text="text"></p>
                    <a :href="link.href" :title="link.title" v-text="link.text"></a>
               </div>`,
    data () {
        return {
            text: 'Text de prueba v-text',
            link: {
                text: 'VueJs Home',
                href: 'https://vuejs.org',
                title: 'Documentación Vue Js'
            }
        }
    }
})