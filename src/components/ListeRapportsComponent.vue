<template>
<table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Motif</th>
          <th>Bilan</th>
          <th>ID Visiteur</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in items" :key="item.id">
          <td>{{ item.date }}</td>
          <td>{{ item.motif }}</td>
          <td>{{ item.bilan }}</td>
          <td>{{ item.idVisiteur }}</td>
        </tr>
      </tbody>
    </table>
</template>

<script>
export default {
    name: 'ListeRapportComponent',
    data() {
      return {
        items:[],
        nomMedecin: this.$store.state.medecin
      }
    },
    mounted() {
            this.$store.state.dataService.getRapports(this.nomMedecin.id)
            .then(
                (data)=>{
                    this.items = data;
                    console.log(data);
                }
            )
            .catch(
                (error)=>{
                    console.log(error);
                }
            )
      }
}
</script>

<style>

</style>