//! Création d'une instance Vue c'est notre application
Vue.createApp({
    //! Dans une fonction data on va retourner un objet qui contiendra les variables de l'application
    //! Toutes les data seront contenues dans this
    data() {
        return {
        myNum: 22,
        userName: 'Chaussure',
        };
    },
    //! Dans cet Object methods, on va écrire nos fonctions
    methods: {
        augmenterNum() {
            
             this.myNum += 1;
        },
        diminuerNum() {
            
             this.myNum -= 1;
        },
        afficherName(){
            console.log("je me lance");
            if(this.userName == ""){
                return 'test';
            }else{
                return "deuxieme test";
            }
            
        }
    },
    //! L'application est montée sur la balise HTML qui possède l'id app
    }).mount('#app');