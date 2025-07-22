<template>
  <div>
    <div>
      Recipe {{ $route.params.id }}
    </div>
    <nav>
      <ul>
        <li>
          <RouterLink :to="{ name: 'recipe', params: { id: 1 } }">Recipe 1</RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'recipe', params: { id: 3 } }">Recipe 3</RouterLink>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { onMounted, watch } from 'vue';
import { RouterLink, useRoute } from 'vue-router';

const route = useRoute();

console.log(route.params.id);

onMounted(() => {
  console.log('Fetching data inside mounted DOM');
});

watch(() => route.params.id, () => {
  console.log('Fetching inside the watch');
});
</script>
