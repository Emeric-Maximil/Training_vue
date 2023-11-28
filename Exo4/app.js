//! Création d'une instance Vue c'est notre application
Vue.createApp({
//! Dans une fonction data on va retourner un objet qui contiendra les variables de l'application
//! Toutes les data seront contenues dans this
data() {
    return {
    
    monInt:null,
    monNom: '',
    
};
},
//! Dans cet Object methods, on va écrire nos fonctions
methods: {
    afficherLivre() {
        this.monInt = Math.random();
        if(this.monInt > 0.5){
            this.monNom = "Le Livre de la Jungle";
        }else{
            this.monNom = "Booba fait la fête";
        }
    },
},
//! L'application est montée sur la balise HTML qui possède l'id app
}).mount('#app');