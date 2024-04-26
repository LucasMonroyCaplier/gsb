<template>
  <div>
    <v-text-field class="nom" label="nom" v-model="props.nom"></v-text-field >
    <v-text-field class="prenom" label="prenom" v-model="props.prenom"></v-text-field >
    <v-text-field class="adresse" label="adresse" v-model="props.adresse"></v-text-field >
    <v-text-field class="telephone" label="telephone" v-model="props.tel"></v-text-field >
    <v-text-field class="specialite" label="specialite" v-model="props.specialite"></v-text-field >
    <v-btn @click="modifier()">Modifier</v-btn>
  </div>
</template>

<script>
export default {
    name: 'FicheMedecinComponent',
    data() {
      return {
        props: {
          id : this.$store.state.medecin.id,
          nom : this.$store.state.medecin.nom,
          prenom : this.$store.state.medecin.prenom,
          adresse : this.$store.state.medecin.adresse + "" + this.$store.state.medecin.departement,
          tel : this.$store.state.medecin.tel,
          specialite : this.$store.state.medecin.specialitecomplementaire
        }
        
      }
    },
    methods: {
      modifier(){
        this.$store.state.dataService.majMedecin(this.props)
        .then(
          (data) => {
            this.$store.state.medecin = data;
            alert("Médecin modifié");
          }
        )
        .catch(
          (error) => {
            console.log(error);
          }
        )
      }
    }
}
</script>

<style>

</style>