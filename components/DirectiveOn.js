let DirectiveOn = {
    template: `<div>
                    <hr>
                    <h1 v-text="title"></h1>
                    <p v-html="message"></p>
<!--                    <button @click="showAlert">Dame click</button>-->
                    <p v-text="movie"></p>
                    
                    <button @click.stop="buyTicket">Buy Ticket</button>
                    <input type="text" @keydown="showAlert"/>
                     available <span v-text="tickets"></span>
               </div>`,
    data () {
        return {
            title: 'Directive v-on',
            message: '<b>Hello from directive v-on</b>',
            welcome_text: 'Message from data example',
            movie: 'Dora the explorer',
            tickets: 5
        }
    },
    methods: {
        showAlert () {
            alert(this.welcome_text)
        },
        buyTicket() {
            if (this.tickets > 0) {
                this.tickets --
                return alert(`Ticket for ${this.movie} bought`)
            }

            return alert(`No more tickets`)
        }
    }
}