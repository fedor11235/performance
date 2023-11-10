import { createApp, h } from 'vue'
import { App, plugin } from '@inertiajs/inertia-vue3'
// import { InertiaProgress } from '@inertiajs/progress'

// InertiaProgress.init()

const el = document.getElementById('app')

console.log('!!!')

createApp({
  render: () => h(App, {
    initialPage: JSON.parse(el.dataset.page),
    resolveComponent: name => import(`./Pages/${name}.vue`).then(module => module.default),
  })
}).use(plugin).mount(el)
