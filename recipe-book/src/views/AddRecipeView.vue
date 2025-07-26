<template>
  <h1 class="text-2xl font-bold mb-4">Add form</h1>
  <form @submit.prevent="addRecipe">
    <div>
      <input type="text" v-model="name" placeholder="Recipe name" required/>
    </div>
    <div>
      <textarea  v-model="description" placeholder="Recipe description" required/>
    </div>
    <button type="submit">
      Add
    </button>
  </form>
</template>

<script lang="ts" setup>
import { useRecipeStore } from '@/stores/recipe';
import { ref } from 'vue';
import {useRouter} from 'vue-router';

const router = useRouter()
const name = ref('')
const description = ref('')

const store = useRecipeStore()

const addRecipe =()=>{

  const recipe = store.addRecipe({   //add recipe to store
    name: name.value,
    description: description.value
  })

  router.push({ //add recipe to routing list
    name:'recipe',
    params:{
      id: recipe.id
    }
  })
}

</script>
