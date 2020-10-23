<template>
  <div>
    <router-view/>
  </div>
</template>

<style lang="stylus">
html, body {
  height: 100%
  margin: 0
  overflow-x: hidden
  overflow-y: auto
  background-color: var(--surface-a)
  font-family: var(--font-family)
  font-weight: 400
  color: var(--text-color)
  -webkit-font-smoothing: antialiased
}
</style>