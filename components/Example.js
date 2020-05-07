let DirectiveShow = {
    template: `<div>
                    <hr>
                    <h1 v-text="title"></h1>
              
               </div>`,
    data () {
        return {
            title: 'Directiva v-on',
            message: '<b>Hola desde directiva v-on</b>',
        }
    }
}