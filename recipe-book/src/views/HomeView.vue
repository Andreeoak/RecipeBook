<template>
  <main>
    <h1>Recipe Book</h1>
    <div>
      <input type="text" placeholder="Search for a recipe" v-model="searchRecipe"></input>
    </div>

    <nav v-if="filteredRecipes.length>0">
      <ul>
        <li v-for="recipe in filteredRecipes" :key="recipe.id">
          <RouterLink :to="{name:'recipe', params: {id:recipe.id}}">{{ recipe.name }}</RouterLink>
        </li>
      </ul>
    </nav>
    <div v-else>
      No recipes found
    </div>
  </main>
</template>

<script setup lang="ts">
  import { useRecipeStore } from '@/stores/recipe';
  import { ref, computed } from 'vue';
  import { RouterLink } from 'vue-router';

  const recipeStore = useRecipeStore();
  const searchRecipe = ref('')

  const filteredRecipes = computed(
    ()=> recipeStore.recipes.filter(
      recipe=>recipe.name.toLocaleLowerCase().includes(
        searchRecipe.value.toLocaleLowerCase()
      )
    )
  )
</script>

