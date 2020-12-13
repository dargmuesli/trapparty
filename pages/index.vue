<template>
  <div class="container">
    <div>
      <img
        alt="TrapParty's logo."
        class="h-64 mx-auto my-16 w-64"
        src="~/assets/trapparty.png"
      />
      <h1 class="hidden title">trapparty</h1>
      <p class="subtitle">
        Diese Website wird in diesem Moment überarbeitet.
        <br />
        Hab bitte noch einen Moment Geduld und versuch es in ein paar Stunden
        noch einmal.
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
