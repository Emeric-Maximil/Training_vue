//! Création d'une instance Vue c'est notre application
Vue.createApp({
//! Dans une fonction data on va retourner un objet qui contiendra les variables de l'application
//! Toutes les data seront contenues dans this
data() {
    return {
    
    myName:"Maximil Emeric",
    myAge: 22,
    favoriteNum: Math.random(),
    imgLink: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Gb1508_illustration.jpg/350px-Gb1508_illustration.jpg",
    
};
},
//! Dans cet Object methods, on va écrire nos fonctions
methods: {
    augmenterAge() {
        
        return this.myAge + 10;
    },
},
//! L'application est montée sur la balise HTML qui possède l'id app
}).mount('#app');