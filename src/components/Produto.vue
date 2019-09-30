<template>
  <div>
      <h1>Produtos</h1>

      <router-link to="/produto/form">Novo</router-link>

      <table>
          <tr>
            <td>Id 1 </td>
            <td>Dados....</td>
            <td>
              <router-link to="/produto/form/1">Editar</router-link>

              <button @click="editar(1)">Editar</button>
            </td>
          </tr>
          <tr>
            <td>Id 2 </td>
            <td>Dados....</td>
            <td>
              <router-link to="/produto/form/2">Editar</router-link>
            </td>
          </tr>



      </table>

      
  </div>
</template>

<script>
export default {
  methods: {
    editar(id) {
      this.$router.push("/produto/form/" + id)
    }
  }

}
</script>

<style>

</style>