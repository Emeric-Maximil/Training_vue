Vue.createApp({
    data() {
        return {
        detailsVisibles: false,
        lesAmis: [{
            id:"patrick",
            name:"TheStar",
            phone:"555-911",
            email:"Patrick@gmail.com",
        },{
            id:"pomme",
            name:"Patate",
            phone:"6-420-9",
            email:"puray2Pate@laposte.net",
        }],
        };
    },
   
    methods: {
        toggleDetails(){
            this.detailsVisibles = !this.detailsVisibles;
        },
    },
    }).mount('#app');