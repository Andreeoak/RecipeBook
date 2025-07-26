<template>
  <main>
    <h1>Recipe Book</h1>
    <div>
      <input type="text" placeholder="Search for a recipe" v-model="searchRecipe"></input>
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

