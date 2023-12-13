<template>
    <div class="container my-1">
        <ul class="list-group">
            <h2 class="list-group-item">{{leNom}}</h2> 
            <h2 class="list-group-item">{{premiumData?"Ami Premium":"Ami Nul"}}</h2> 
            <button @click="afficherDetails" class="btn btn-primary">Voir Détails</button>           
            <button @click="afficherPremium" class="btn btn-danger">Prémium
            </button>           
            <ul v-if="detailsVisibles" class="list-group">
                <li class="list-group-item">{{lePhone}}</li>
                <li class="list-group-item">{{leMail}}</li>
            </ul>
        </ul>
    </div> 
</template>

<script>
export default {
    props:{
        leNom:{
            type:String,
            required:true
            // required:false,
            // default:'NomParDefaut'
        },
        lePhone:{
            type:String,
            required:true
        },
        leMail:{
            type:String,
            required:true
        },
        premium:{
            type:Boolean,
            required:false,
            default:false,
            //validator: function(value){return value==='1' || value==='0'}
        }
    },
    data(){
        return{
            detailsVisibles:false,
            unPote:{
                id:'jojo',
                name:"jojoLeBarjo",
                phone:'123 12346 24',
                email:'jojo@barjo.com',
                
            },
            premiumData: this.premium
        }
    },
    methods:{
        afficherDetails(){
            this.detailsVisibles = !this.detailsVisibles;
        },
        afficherPremium(){
            this.premiumData = !this.premiumData;
        }
    },
}
</script>