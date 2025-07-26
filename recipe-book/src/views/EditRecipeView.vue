<template>
  <div>
    <h1 class="text-2xl font-bold mb-4" >Edit {{ originalName }} recipe</h1>
  </div>

  <div>
    <form @submit.prevent="updateRecipe" class="space-y-4">
    <div>
      <input type="text" v-model="name" placeholder=recipe?.name class="p-2 bg-white border-rounded  w-full" required/>
    </div>
    <div>
      <textarea  v-model="description" placeholder=recipe?.description class="p-2 bg-white border-rounded  w-full" required/>
    </div>
    <button type="submit" class="px-4 py-2 bg-orange-500 text-white hover:bg-orange-800">
      Save
    </button>
  </form>
  </div>
</template>

<script lang="ts" setup>

import { useRecipeStore } from '@/stores/recipe';
import { onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute()
const router = useRouter()

const originalName = ref('')
const name = ref('')
const description = ref('')
const recipeStore = useRecipeStore()

const fetchRecipe = () =>{
  const id = route.params.id as string
  const recipe = recipeStore.getRecipeById(id)

  if(recipe){
    originalName.value = recipe.name
    name.value = recipe.name
    description.value =recipe.description
  } else{
    router.push({ name:'not-found'})
  }
}

const updateRecipe =()=>{

  recipeStore.editRecipe({   //add recipe to store
    id: route.params.id as string,
    name: name.value,
    description: description.value
  })

  router.push({ //add recipe to routing list
    name:'recipe',
    params:{
      id: route.params.id as string
    }
  })
}

onMounted(fetchRecipe)
</script>
