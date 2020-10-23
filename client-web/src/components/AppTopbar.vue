<template>
  <div class="topbar">
      The AppTopbar
  </div>
</template>

<style lang="stylus" scoped>
.topbar {
    background-color: var(--surface-a);
    padding: 0;
    height: 70px;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 997;
    -webkit-box-shadow: 0 0 4px rgba(0,0,0,.25);
    box-shadow: 0 0 4px rgba(0,0,0,.25);
    border-bottom: 1px solid var(--surface-d);
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    padding: 0 35px;
}
</style>