<template>
    <div class="container my-1">
        <img :src=leUrl alt="patate" style="width: 50%; height: 50%;">
        <h2 class="list-group-item">{{leNom}}</h2>
        <h2 class="list-group-item">{{leAge}} ans</h2>
        <h2 class="list-group-item">{{leMail}}</h2>
    </div> 
</template>

<script>
export default {
    props:{
        leNom:{
            type:String,
            required:true
        },
        leAge:{
            type:String,
            required:true
        },
        leMail:{
            type:String,
            required:true
        },
        leId:{
            type:String,
            required:true
        },
        leUrl :{
            type : String,
            required: false,
        }
    },
}
</script>