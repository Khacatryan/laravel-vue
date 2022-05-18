<template>
    <div class=" row">
        <div class="col-md-6"> <h2>{{account.name}}</h2></div>
        <div class="col-md-6" style="text-align: end"><router-link :to="'/'">Home</router-link></div>
    </div>


    <div class="row account">
        <div class="col-md-4 border-right"><b>Id</b></div>
        <div class="col-md-8 account">{{account.id}}</div>
        <div class="col-md-4 border-right"><b>Name</b></div>
        <div class="col-md-8 account">{{account.name}}</div>
        <div class="col-md-4 border-right"><b>Owner</b></div>
        <div class="col-md-8 account">{{account.owner}}</div>
        <div class="col-md-4 border-right"><b>Created At</b></div>
        <div class="col-md-8 account">{{account.created_at}}</div>
        <div class="col-md-4 border-right"><b>Updated At</b></div>
        <div class="col-md-8 account">{{account.updated_at}}</div>
    </div>
</template>

<script setup>
import {onMounted, ref} from 'vue'

const props = defineProps({
    id: {
        type: String,
        default: '',
    }
})
let account = ref([]);
onMounted(async () => {
    getSingleAccount()
})

const getSingleAccount = async () => {
    let response = await axios.get(`/api/accounts/${props.id}`)
       account.value = response.data.account
}
</script>
