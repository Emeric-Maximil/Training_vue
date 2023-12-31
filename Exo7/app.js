//! Création d'une instance Vue c'est notre application
Vue.createApp({
//! Dans une fonction data on va retourner un objet qui contiendra les variables de l'application
//! Toutes les data seront contenues dans this
data() {
    return {
    uneString: "",
    deuxiemeString: "",
    };
},
//! Dans cet Object methods, on va écrire nos fonctions
methods: {
    // afficherinput1(e){
    //     this.input1 = e.target.value;
    // },
    capterInput(event){
        console.log(event);
        this.uneString = event.target.value;
    }, 
    validate(event){
        this.deuxiemeString = event.target.value;
    },
    alerte(){
        alert("Alerte Generale");
    }
},
//! L'application est montée sur la balise HTML qui possède l'id app
}).mount('#app');