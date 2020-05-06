let DirectiveIf = {
    template: `<div>
                    <hr>
                    <h1 v-text="title"></h1>
                    <p v-if="mostrar" v-html="message"></p>
                    <h1>Uso de v-if | v-else</h1>
                    <p v-if="user.permission">El usuario tiene permiso para ver esto</p>
                    <p v-else>El usuario No Tiene permiso</p>
                    <h2>Uso de v-if | v-else-if | v-else</h2>
                    <p v-if="user.permission && user.vip">El usuario tiene permiso y es VIP</p>
                    <p v-else-if="user.permission">El usuario Tiene permiso</p>
                    <p v-else-if="user.vip">El usuario es VIP</p>
                    <p v-else>El usuario No Tiene permisos ni es VIP</p>
               </div>`,
    data() {
        return {
            title: 'Directiva v-if',
            message: '<b>Hola desde directiva v-if</b>',

            mostrar: true,
            user: {
                permission: true,
                vip: true
            }
        }
    }
}