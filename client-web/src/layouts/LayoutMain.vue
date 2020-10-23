<template>
<div class="layout">
  <AppTopbar />
  <AppSidebar />
  <div class="content-container">
    <AppContent />
  </div>
</div>
</template>

<script>
// @ is an alias to /src
import AppTopbar from '@/components/AppTopbar.vue'
import AppSidebar from '@/components/AppSidebar.vue'
import AppContent from '@/components/AppContent.vue'

export default {
  name: 'LayoutMain',
  components: {
    AppTopbar,
    AppSidebar,
    AppContent
  }
}
</script>

<style lang="stylus" scoped>
.layout {
    height 100%
}

.content-container {
    padding-top: 70px;
    margin-left: 250px;
    height 100%
}
</style>