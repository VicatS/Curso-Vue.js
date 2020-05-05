Vue.component('hello-world', {
    template: `<header>
                    <h1>{{ title}}</h1>
                    <h3>{{ message }}</h3>
               </header>`,
    data () {
        return {
            title: 'Hello World',
            message: 'Bienvenido al curso de Vuejs'
        }
    }
})