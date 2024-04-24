<template>
  <button @click="handler">Click me!</button>
  <ul>
    <li v-for="{ id, name } in newFruits" :key="id">
      {{ name }}-{{ id + 1 }}
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      fruits: ['Apple', 'Banana', 'Cherry']
    }
  },
  computed: {
    newFruits() {
      // map 함수: callback 함수를 실행한 결과를 가지고 새로운 배열을 만들 때 사용한다.
      // 즉, 특정 배열 안에 있는 모든 데이터에 function을 실행하고 function에서 나온 값을 저장해서 새로운 배열을 만든다.
      return this.fruits.map((fruit, index) => {
        return {
          id: index,
          name: fruit
        }
      })
    }
  }, 
  methods: {
    handler() {
      this.fruits.push('Orange')
    }
  }
}
</script>

<style scoped>
  ul {
    list-style: none;
  }
</style>