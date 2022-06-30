<template>
  <!-- Camelcase 표기법이 아닌 경우 ''따옴표를 사용하여 표시 -->
  <h1 :class="{ active: isActive, 'text-danger': hasError }" @click='activate'>Hello!{{ isActive }}</h1>
  
  <!-- 인라인으로 표시 안 하고 객체를 직접 바인딩 할 수 있음 -->
  <h2 :class="classObject" :style="{color, fontSize}" @click="changeStyle">Bye!</h2>
  
  <!-- 배열을 이용하여 여러 데이터를 클래스로 바인딩 할 수 있음 -->
  <h3 :class="[activeClass, errorClass]">Nice!</h3>
</template>

<script>

export default {
  data() {
    return {
      isActive: false,
      hasError: true,
      classObject: {
        active: true, 
        'text-danger': false
      },
      activeClass: 'active',
      errorClass: 'text-danger',
      color: 'orange',
      fontSize: '30px'
    }
  },
  methods: {
    activate() {
      this.isActive = true
    },
    changeStyle() {
      this.color = 'red'
    }
  }
}
</script>

<style scoped>
</style>