<template>
  <div>
    <h1>Create a new event</h1>
    <h5>Event name</h5>
    <InputText id="eventname" type="text" />
    ViewNewEvent
    <PrimeButton label="Dashboard" @click="$router.push('/dashboard')" />
  </div>
</template>

<script>
import InputText from 'primevue/inputtext';

export default {
  name: 'ViewNewEvent',
  components: {
      InputText
  }
}
</script>