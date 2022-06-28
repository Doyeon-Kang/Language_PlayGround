<template>
  <h1 @click='messageChange'>{{ msg }}</h1>
</template>

<script>

export default {
  data() {
    return {
      msg: 'Hello Vue!'
    }
  },
  methods: {
    messageChange() {
      if(this.msg == 'Hello Vue!')
        this.msg = 'Good!'
      else 
        this.msg = 'Hello Vue!'
    }
  },
  watch: {
    msg(newValue) {
      alert("data 값을 " +newValue +'으로 변경합니다.')
    }
  }
}
</script>

<style>
  ul {
    list-style: none;
  }
</style>