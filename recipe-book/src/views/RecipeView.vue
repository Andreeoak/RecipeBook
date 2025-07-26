<template>
  <div>
    <h1 class="text-2xl font-bold mb-4">
      {{ recipe?.name }}
    </h1>
    <p class="text-xl mb-4">{{ recipe?.description }}</p>

  </div>
  <div class="flex items-center gap-6">
    <div>
      <li >
        <RouterLink :to="{name:'edit-recipe', params:{id: recipe?.id}}" class="hover:underline">Edit Recipe</RouterLink>
      </li>
    </div>
    <button class="px-4 py-2 bg-orange-500 text-white hover:bg-orange-800" v-if="recipe" @click ="recipeStore.toggleFavorite(recipe.id)">
      {{ isFavorite ? 'Remove from favorites' : 'Add to favorites'  }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { useRecipeStore } from '@/stores/recipe';
import { computed } from 'vue';
import { RouterLink, useRoute } from 'vue-router';

const route = useRoute();
const recipeStore = useRecipeStore()

const recipe = computed (() => recipeStore.getRecipeById(route.params.id as string))

const isFavorite = computed(
  ()=>recipe.value ? recipeStore.isFavorite(recipe.value.id) : false
)


</script>
