<template>
  <!-- <div class="container"> -->
    <h1 class="text-center">un user</h1>

    <div style="background-color: green;">
      <active-user  style="background-color: rgb(148, 148, 235);"
      :key=user.id  
      :leId=user.id
      :leNom=user.name 
      :leAge=user.age 
      :leMail=user.mail 
      :leUrl=user.url
      ></active-user>
      <user-data @event-MAJ="miseAJ" style="background-color: darkorange;"></user-data>
    </div>

</template>

<script>
export default{
  data(){
    return {
      user :{
        id : 'ui',
        name : "Emeric",
        age : "22",
        mail : "maximil@mail",
        url : "https://media.licdn.com/dms/image/D4E03AQG5fDB4Gqo9Tg/profile-displayphoto-shrink_800_800/0/1700142727505?e=2147483647&v=beta&t=yRHv6Pacc8n-qa4Ia-gEzvT36isJyMrMykd0w1OYP6A"
      }
    }
  },
  methods:{
    miseAJ(newname, newage, newmail, newurl){
      console.log("mise a jour ?");
      this.user.name = newname;
      this.user.age = newage;
      this.user.mail = newmail;
      this.user.url = newurl;
    },
  }
}
</script>