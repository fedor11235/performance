<template>
  <div>
    <Header />
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
import { Link } from '@inertiajs/inertia-vue3'
import Header from '../Components/Header.vue'

</script>
