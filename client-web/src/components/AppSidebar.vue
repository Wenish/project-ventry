<template>
  <div class="sidebar">
      The AppSidebar
  </div>
</template>

<style lang="stylus" scoped>
.sidebar
    position: fixed;
    left: 0;
    top: 70px;
    height: calc(100% - 70px);
    background-color: var(--surface-a);
    overflow: auto;
    width: 250px;
    border-right: 1px solid var(--surface-d);
    padding: 1rem;
    -webkit-transition: -webkit-transform .4s cubic-bezier(.05,.74,.2,.99);
    transition: -webkit-transform .4s cubic-bezier(.05,.74,.2,.99);
    transition: transform .4s cubic-bezier(.05,.74,.2,.99);
    transition: transform .4s cubic-bezier(.05,.74,.2,.99),-webkit-transform .4s cubic-bezier(.05,.74,.2,.99);
</style>