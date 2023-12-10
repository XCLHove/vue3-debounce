<script setup lang="ts">
import {ref} from "vue";
import {debounce} from "../utils/debounce/ts/debounce.ts";
// import {debounce} from "../utils/debounce/js/debounce.js";

const text = ref('')

//写法1
function inputUpdate(event: Event) {
  text.value = (<HTMLInputElement>event.target).value
}

const handleInput = debounce(inputUpdate, 1)

//写法2
// const handleInput = debounce(function (event: Event) {
//   text.value = (<HTMLInputElement>event.target).value
// }, 1)
</script>

<template>
  <div class="container">
    <p>debounce1</p>
    <input :value="text" @input="handleInput">
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