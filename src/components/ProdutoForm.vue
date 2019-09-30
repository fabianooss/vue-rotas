<template>
  <div> 
      <h1>Form produto</h1>
      {{ $route.params.id }}

      <button @click="voltar()">Voltar</button>
  </div>
</template>

<script>
export default {
    mounted() {
        console.log(this.$route.params.id)
    },
    methods: {
        voltar() {
            this.$router.go(-1)
        }
    }
}
</script>

<style>

</style>