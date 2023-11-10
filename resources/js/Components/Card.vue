<template>
  <div :class="['rounded', 'overflow-hidden', 'shadow-lg', {'mb-8': variation === 'big'}]">
    <img v-if="img" class="w-full" :src="img" alt="Sunset in the mountains">
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2">{{ title }}</div>
      <p :class="['text-base', 'overflow-hidden', {'h-60': variation === 'small'}]">
        {{ text }}
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const props = defineProps<{
  variation: 'small' | 'big'
  title: string
  text: string
}>();

let img = ref(null)
if (props.variation == 'small') {
  import(('../../img/lighthouse-small.jpg' as any)).then((file) => img.value = file.default)
} else if (props.variation == 'big') {
  import(('../../img/lighthouse-big.jpg' as any)).then((file) => img.value = file.default)
}
</script>
