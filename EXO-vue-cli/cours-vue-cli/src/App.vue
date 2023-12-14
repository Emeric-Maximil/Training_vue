<template>
  <!-- <div class="container"> -->
    <h1 class="text-center">Les Amis</h1>
    <new-ami @add-ami="ajouterAmi"></new-ami>
    <ul class="list-group">
      
      <un-ami v-for="unAmi in lesAmis" 
      :key=unAmi.id  
      :leId=unAmi.id
      :leNom=unAmi.name 
      :lePhone=unAmi.phone 
      :leMail=unAmi.email 
      :premium=unAmi.premium
      @mon-event-premium="afficherStatusPremium"
      @mon-event-suppr="effacerAmi"
      ></un-ami>
      <!--
      <un-ami premium=false leNom="Jerome" lePhone="0635587894" leMail="martin.matin@"></un-ami>   
      <un-ami leNom="Qui?" lePhone="0635587894" leMail="martin.matin@"></un-ami>   
        -->
    </ul>
  <!-- </div> -->
</template>

<script>
export default{
  data(){
    return {
      lesAmis: [
        {
            id: 'lasticot',
            name: 'COCO L ASTICOT',
            phone: '01234 5678 991',
            email: 'coco@lasticot.com',
            premium: true,
        },
        {
            id: 'janine',
            name: 'Janine DeLavega',
            phone: '09876 543 221',
            email: 'janine@delavega.com',
            premium: false,
        }, 
    ],
    }
  },
  methods:{                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
    afficherStatusPremium(leIdDansUnAmi){
      console.log("message");
      const unAmiIdentified = this.lesAmis.find(unAmi => unAmi.id === leIdDansUnAmi);
      console.log(unAmiIdentified);
      unAmiIdentified.premium = !unAmiIdentified.premium;
    },
    ajouterAmi(name, phone, mail){
      
      let newAmiContact  = {
        id:new Date().toISOString(),
        name:name,
        phone:phone,
        email:mail,
        premium:false,
      }
      this.lesAmis.push(newAmiContact);
    },
    effacerAmi(leIdDeAmi){
      console.log('supprimer ami ? ');
      console.log(leIdDeAmi);
      this.lesAmis =  this.lesAmis.filter((unePersonne)=> unePersonne.id !== leIdDeAmi);
    }
  }
}
</script>