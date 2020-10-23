<template>
  <div class="sidebar">
      <div class="heading">
        <div>Events</div>
        <PrimeButton label="New" icon="pi pi-calendar" class="p-button-sm" />
      </div>
      <Menu :model="items" />
  </div>
</template>

<script>
// @ is an alias to /src
import Menu from 'primevue/menu';

export default {
  name: 'AppSidebar',
  components: {
    Menu,
  },
  data() {
		return {
			items: [
				{
                    label: 'Event 1',
                    icon: 'pi pi-calendar',
                    to: '/event/1'
                },
                {
                    label: 'Event 2',
                    icon: 'pi pi-calendar',
                    to: '/event/2'
                },
                {
                    label: 'Event 3',
                    icon: 'pi pi-calendar',
                    to: '/event/3'
                },
                {
                    label: 'Event 4',
                    icon: 'pi pi-calendar',
                    to: '/event/4'
                },
                {
                    label: 'Event 5',
                    icon: 'pi pi-calendar',
                    to: '/event/5'
                }
			]
		}
	}
}
</script>

<style lang="stylus" scoped>
.sidebar {
    position fixed
    left 0
    top 70px
    height calc(100% - 70px)
    background-color var(--surface-a)
    overflow auto
    width 250px
    border-right 1px solid var(--surface-d)
    padding 1rem
}

.heading {
    display flex
    justify-content space-between
    align-items center
    margin-bottom 4px
}

.p-button-sm {
    padding 3px 12px
    font-size 12px
    line-height 20px
}

/deep/ .p-menu {
    width auto
}
</style>