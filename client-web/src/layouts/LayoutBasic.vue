<template>
  <div>
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
.content-container {
    padding-top: 70px;
}
</style>