const app = Vue.createApp({
    data() {
        return {
            number: 0

        }
    },
    methods: {
        addFive(num) {
            this.number = this.number + num
        },
        addOne(num) {
            this.number = this.number + num
        }
    },
    watch: {
        number() {
            const that = this;
            setTimeout(() => {
                that.number = 0;
            }, 5000)
        }
    },
    computed: {
        numberresult() {
            if (this.number < 30) {
                return 'Not there yet!'
            } else if (this.number === 30) {
                return this.number
            } else {
                return 'Too much!'
            }
        }
    }
})

app.mount('#assignment')