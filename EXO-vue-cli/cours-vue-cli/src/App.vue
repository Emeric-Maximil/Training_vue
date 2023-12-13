<template>
  <!-- <div class="container"> -->
    <h1 class="text-center">Les Amis</h1>
    <ul class="list-group">
      
      <un-ami v-for="unAmi in lesAmis" 
      :key=unAmi.id  
      :leNom=unAmi.name 
      :lePhone=unAmi.phone 
      :leMail=unAmi.email 
      :premium=unAmi.premium></un-ami>
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
        },
        {
            id: 'janine',
            name: 'Janine DeLavega',
            phone: '09876 543 221',
            email: 'janine@delavega.com',
        },
        {
            id: 'janine',
            name: 'Camille Elle',
            phone: '09876 543 221',
            email: 'janine@delavega.com',
        },
        {
            id: 'janine',
            name: 'BOnsoir',
            phone: '09876 543 221',
            email: 'janine@delavega.com',
        },
    ],
    }
  },
}
</script>