<template>
  <div>
    <h2>ViewEvent {{ $route.params.id }}</h2>
    <TabMenu :model="items" />
    <router-view />
    <PrimeButton label="Dashboard"  @click="$router.push('/dashboard')" />
  </div>
</template>

<script>
import TabMenu from 'primevue/tabmenu';

export default {
  name: 'ViewHome',
  components: {
      TabMenu
  },
  data() {
		return {
			items: [
                {label: 'Home', icon: 'pi pi-fw pi-home', to: `/event/${this.$route.params.id}/home`},
                {label: 'Settings', icon: 'pi pi-fw pi-cog', to: `/event/${this.$route.params.id}/settings`}
            ]
		}
	}
}
</script>