<template>
  <div id="app">
      <ul>
        <li>
          <router-link to="/cliente">Clientes</router-link>
        </li>
        <li>
          <router-link to="/produto">Produtos</router-link>
        </li>
        <li>
          <router-link to="/notaFiscal">Notas fiscais</router-link>
        </li>
        <li>
          <router-link to="/estoque">Estoque</router-link>
        </li>
      </ul>

      <div>
          <router-view></router-view>
      </div>


  </div>
</template>

<script>

export default {

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
