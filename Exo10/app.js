Vue.createApp({
    data() {
        return {
        selectCard1: false,
        selectCard2: false,
        
        };
    },
   
    methods: {
        selectionCard(uneCard) {
        if(uneCard == 1){
            this.selectCard1 = !this.selectCard1;
            this.selectCard2 = false;
        }else if(uneCard == 2){
            this.selectCard2 = !this.selectCard2;
            this.selectCard1 = false;
        }
        },
    },
    }).mount('#app');