import { createApp, h } from 'vue'
import { App, plugin, createInertiaApp } from '@inertiajs/inertia-vue3'
// import 'tailwindcss/tailwind.css'
import LayoutDefault from './Layouts/Default.vue'

import { InertiaProgress } from '@inertiajs/progress'

InertiaProgress.init()

const el = document.getElementById('app')

// createApp({
//   render: () => h(App, {
//     initialPage: JSON.parse(el.dataset.page),
//     resolveComponent: name => import(`./Pages/${name}.vue`).then(module => module.default),
//   })
// }).use(plugin).mount(el)


createInertiaApp({
  resolve: async name => import(`./Pages/${name}.vue`).then(module => module.default),
  setup({ el, App, props, plugin }) {
    createApp({ render: () => h(App, props) })
      .use(plugin)
      .mixin({methods: {route: window.route}})
      .mount(el)
  },
})
