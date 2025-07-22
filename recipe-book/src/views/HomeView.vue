<script setup lang="ts">
  import { RouterLink } from 'vue-router';
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
