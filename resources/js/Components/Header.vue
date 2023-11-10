<template>
  <div class="flex justify-between px-8 py-4">
    <div class="font-bold">Тредиум</div>
    <div class="flex gap-x-8">
      <Link href="/" >На главную</Link>
      <Link href="/catalog">Каталог статей</Link>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Link } from '@inertiajs/inertia-vue3'
</script>
