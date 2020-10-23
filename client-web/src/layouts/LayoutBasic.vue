<template>
  <div class="layout">
    <AppTopbar />
    <div class="content-container">
      <AppContent />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import AppTopbar from '@/components/AppTopbar.vue'
import AppContent from '@/components/AppContent.vue'

export default {
  name: 'LayoutBasic',
  components: {
    AppTopbar,
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
    height 100%
}
</style>