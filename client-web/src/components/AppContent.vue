<template>
  <div class="content">
      <router-view />
  </div>
</template>

<style lang="stylus" scoped>
.content {
    height: 100%;
    background-color: var(--surface-b);
    color: var(--text-color);
    padding: 2rem;
}
</style>