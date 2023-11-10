<template>
  <div class="py-9 px-8">
    <Card v-for="card of catalog" v-key="card.id" :title="card.title" :text="card.text" variation="big"/>
  </div>
</template>

<script lang="ts" setup>
import type { cardTupe } from '../type/card'
import LayoutDefault from '../Layouts/Default.vue'
import Card from '../Components/Card.vue'

defineOptions({
  layout: LayoutDefault,
});

defineProps<{
  catalog: cardTupe[]
}>();
</script>