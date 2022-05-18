<template>
    <table class="table">
        <thead>
        <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Owner</th>
            <th scope="col">Created At</th>
            <th scope="col">Action</th>
        </tr>
        </thead>
        <tbody v-if="accounts.length > 0">
        <tr  v-for="account in accounts">

            <th scope="row">{{account.id}}</th>
            <td>{{account.name}}</td>
            <td>{{account.owner}}</td>
            <td>{{account.created_at}}</td>
            <td><a style="cursor: pointer" @click="onView(account.id)">View</a></td>
        </tr>
        </tbody>
        <h1 v-else> No Account</h1>
    </table></template>

<script setup>
    import {onMounted, ref} from 'vue'
    import router from "../../router";
     let accounts = ref([]);
    onMounted( async () => {
        getAccounts()
    })
   const onView = (id)=>{
        router.push('/accounts/' +id)
    }
    const getAccounts = async () =>{
      let response =  await axios.get('/api/accounts')

        accounts.value =response.data.accounts
    }
</script>
