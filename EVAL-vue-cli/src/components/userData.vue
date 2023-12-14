<template>
    <div class="container my-1">
        <form @submit.prevent="submitData" >

        <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Name</label>
            <input v-model="enteredName" class="form-control form-control-sm" type="text" placeholder="votre nom" aria-label=".form-control-sm example">
        </div>

        <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Age</label>
            <input v-model="enteredAge" class="form-control form-control-sm" type="tel" placeholder="Votre Age" aria-label=".form-control-sm example">
        </div>  

        <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Email</label>
            <input v-model="enteredMail" class="form-control form-control-sm" type="email" placeholder="Votre EMAIL" aria-label=".form-control-sm example">
        </div>     

        <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Url d'une photo</label>
            <input v-model="enteredUrl" class="form-control form-control-sm" type="text" placeholder="Votre Url" aria-label=".form-control-sm example">
        </div>    
        <button>MAJ des Data</button>
        </form>
    </div> 
</template>

<script>
    export default{
        emits:[
         'event-MAJ'
        ],
    data(){
        return{
            enteredName:'',
            enteredAge:'',
            enteredMail:'',
            enteredUrl:""
            
        }
    },
    methods:{
        submitData(){
            console.log("ça submit ou pas ?");
            this.$emit('event-MAJ',this.enteredName,this.enteredAge, this.enteredMail,this.enteredUrl);
            
        }
    }
    }
</script>