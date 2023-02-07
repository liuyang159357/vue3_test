<template>
  <AA v-if="isShowAA">
 <template>
  <h3>你好</h3>
 </template>
    
 
  </AA>
  <hr>
  <button @click="isShowAA = !isShowAA">切换隐藏</button>
</template>

<script>
import AA from "./components/A.vue";
import { ref } from "vue";
export default {
  name: "App",
  components: { AA },
  data() {
    return {};
  },
  setup() {
    let isShowAA = ref(true);
    return { isShowAA };
  },
  
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
