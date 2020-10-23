import { createApp, reactive } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import PrimeInputText from 'primevue/inputtext';
import PrimeButton from 'primevue/button';

import 'primevue/resources/themes/arya-orange/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';

const app = createApp(App)

app.use(store)
app.use(router)

app.component('PrimeInputText', PrimeInputText)
app.component('PrimeButton', PrimeButton)

app.mount('#app')