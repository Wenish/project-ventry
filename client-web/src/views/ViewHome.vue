<template>
  <div class="home">
    ViewHome
    <img alt="Vue logo" src="../assets/logo.png">
    <PrimeButton label="Login"  @click="$router.push('/login')" />
    <PrimeButton label="Dashboard"  @click="$router.push('/dashboard')" />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home'
}
</script>
