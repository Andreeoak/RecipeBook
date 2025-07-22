<template>
  <div>Add form</div>
  <form @submit.prevent="addRecipe">
    <button type="submit">
      Add
    </button>
  </form>
</template>

<script lang="ts" setup>
import {useRouter} from 'vue-router';

const router = useRouter()

const addRecipe =()=>{
  router.push({
    name:'recipe',
    params:{
      id: 1 //change this later
    }
  })
}

</script>
