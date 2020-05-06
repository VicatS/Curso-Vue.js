let DirectiveShow = {
    template: `<div>
                    <hr>
                    <h1 v-text="title"></h1>
                    <p v-show="mostrar" v-html="message"></p>
                    <p v-show="user.permission">El usuario tiene permiso para ver esto</p>
                    <p v-show="!user.permission">El usuario No Tiene permiso</p>
               </div>`,
    data () {
        return {
            title: 'Directiva v-show',
            message: '<b>Hola desde directiva v-show</b>',

            mostrar: true,
            user: {
                permission:false
            }
        }
    }
}