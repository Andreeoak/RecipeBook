<script setup lang="ts">
  import { useRecipeStore } from '@/stores/recipe';
  import { RouterLink } from 'vue-router';
  const recipeStore = useRecipeStore();
</script>

<template>
  <main>
    <nav>
      <ul>
        <li>
          <RouterLink :to="{name:'recipe', params: {id:1}}">"Recipe1"</RouterLink>
        </li>
        <li>
          <RouterLink :to="{name:'recipe', params: {id:2}}">"Recipe2"</RouterLink>
        </li>
      </ul>
    </nav>
  </main>
</template>
