<template>
  <span>{{ numBer.a }}</span>
  <button @click="numBer.a++">加</button>
  <hr />
<slot></slot>
  <hr />
  <h2>名字：{{ name }}</h2>
  <h2>年龄：{{ age }}</h2>
  <h2>薪水：{{ job.salary }}</h2>
  <button @click="name += '!'">修改姓名</button>
  <button @click="age++">修改年纪</button>
  <button @click="job.salary++">修改薪水</button>
</template>

<script>
import { reactive,shallowReadonly, ref,toRefs } from "vue";
// import usePoint from "@/hocks/usePoint";
export default {
  name: "AA",
  emits: ["hello"],
  setup() {
    let numBer = ref({
      a:2
    });
    let sum =ref(0)
    let person = reactive({
      name: "刘阳",
      age: 23,
      job: {
        salary:12
      },
    });
    return {
      ...toRefs(person),
      numBer,
      sum
    };
  },
};
</script>

<style>
</style>