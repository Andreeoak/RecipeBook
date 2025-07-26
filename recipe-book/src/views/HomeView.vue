<template>
  <main>
    <h1 class="text-2xl font-bold mb-4">Recipe Book</h1>
    <div>
      <input type="text" placeholder="Search for a recipe" v-model="searchRecipe"
      class="p-2 border bg-white rounded mb-4 w-full"/>
    </div>
    <RecipeList :recipes="filteredRecipes"/>
  </main>
</template>

<script setup lang="ts">
  import RecipeList from '@/components/RecipeList.vue';
  import { useRecipeStore } from '@/stores/recipe';
  import { computed, ref } from 'vue';


  const searchRecipe = ref('')
  const filteredRecipes = computed(
    ()=>recipeStore.filteredRecipes(searchRecipe.value)
  )
  const recipeStore = useRecipeStore();

</script>

