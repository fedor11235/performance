<template>
  <div class="bg-grey px-8 py-9 flex items-left flex-col" >
    <div class="text-6xl mb-4">Каталог</div>
    <div class="text-lg">Смотрим карточки</div>
  </div>
  <div class="py-9 px-8 grid justify-items-start grid-cols-3 gap-4">
    <Card v-for="card of catalog" v-key="card.id" :title="card.title" :text="card.text" variation="small"/>
  </div>
  <h1>Main</h1>
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
