<script setup lang="ts">
import {debounceRef} from "../utils/debounce/ts/debounceRef.ts";
// import {debounceRef} from "../utils/debounce/js/debounceRef.js";

const text = debounceRef('', 1)
</script>

<template>
  <div class="container">
    <p>debounce2</p>
    <input v-model="text">
    <p>{{ text }}</p>
  </div>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

.container {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 10px 0;
  border-bottom: solid 1px #828282;
}
</style>