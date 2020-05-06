let DirectiveFor = {
    template: `<div>
                    <hr>
                    <h1 v-text="title"></h1>
                    <p v-html="message"></p>
                    <h3>Lista de un Array</h3>
                    <ul>
                        <li v-for="(color, index) in list" :key="index" v-text="color"></li>
                    </ul>
                    <h3>Lista de un Objeto</h3>
                    <ul>
                        <li v-for="(item, key, index) in object_list" :key="index">
                            {{ key }}: {{ item }}
                        </li>
                    </ul>
                    <h3>Lista de un Array con un objeto</h3>
                    <ul>
                        <li v-for="(item, index) in other_list" :key="index">
                            Name: {{ item.name }}<br>
                            Last Name: {{ item.last_name }}<br>
                            Nick: {{ item.nick }}
                        </li>
                    </ul>
               </div>`,
    data() {
        return {
            title: 'Directiva v-for',
            message: '<b>Hola desde directiva v-for</b>',
            list: [
                'Red',
                'Yellow',
                'Purple',
                'Blue',
                'Pink'
            ],
            object_list: {
                name: 'Victor',
                last_name: 'Castro',
                nick: 'ViCaS',
            },

            other_list: [
                {
                    name: 'Elthon',
                    last_name: 'Jhon',
                    nick: 'ElJho',
                },
                {
                    name: 'Michael',
                    last_name: 'Jackson',
                    nick: 'MiJa',
                },
                {
                    name: 'Marcelo',
                    last_name: 'Paco',
                    nick: 'MaPa',
                },
            ]
        }
    }
}