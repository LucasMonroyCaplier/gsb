<template>
 
  <NavBarComponent/>
  <v-toolbar>
    <v-col class="d-flex justify-space-around">
      <v-btn @click="AfficheList()">Modifier un rapport</v-btn>
    </v-col>
    <v-col class="d-flex justify-space-around">
      <v-btn @click="AfficheFiche()">Ajouter un rapport</v-btn>
    </v-col>
  </v-toolbar>

  <v-text-field @change="getRapports(); this.isListVisible = false; this.isModifFormVisible = false" label="Date du rapport"
  v-model="dateRapport" type="date">
</v-text-field>

<v-card class="mx-auto">
  <v-list v-show="isListVisible">
    <v-list-item v-for="item in items" :key="item.id" :value="item.nom" @click="getRapport(item)">
      {{ item.nomMedecin + " " + item.prenomMedecin }}
    </v-list-item>
  </v-list>
</v-card>
<div v-show="isModifFormVisible" :key="maj">
  <v-text-field @keyup="getLesRapportsADate" label="motif" v-model="motif"></v-text-field>
  <v-text-field @keyup="getLesRapportsADate" label="bilan" v-model="bilan"></v-text-field>
  <v-btn size="large" color="green" @click="majRapport">Modifier</v-btn>
</div>

  <div v-show="ListeRapport" :key="maj"></div>
</template>

<script>
import NavBarComponent from '@/components/NavBarComponent.vue';

export default {
name: "RapportsView",
components: { NavBarComponent },
data() {
  return {
    PrenomM: '',
    idVisiteur: this.$store.state.utilisateur.id,
    idRapport: '',
    nomM: '',
    motif: '',
    bilan: '',
    dateRapport: '',
    items: [],
    isModifFormVisible: false,
    isListVisible: false
  }
},
methods: {
  AfficheList(){
    this.listeVisible = true;
    this.rapportVisible = false;
  },
  AfficheFiche(){
    this.listeVisible = false;
    this.rapportVisible = true;
  },
  //Méthode qui permet d'appeler l'API pour récupérer la liste des médecins
  //Visités à la date choisie
  async getRapports() {
    console.log(this.idVisiteur+" "+this.dateRapport)
    this.$store.state.dataService.getLesRapportsADate(this.idVisiteur, this.dateRapport)
      .then(
        (data) => {
          console.log(data);
          this.items = data;
          this.isListVisible = true;
        })
      .catch(
        (error) => {
          console.log(error);
        }
      );
  },
  //Méthode qui permet de selectionner le rapport du médecin visité
  //dans la liste
  getRapport(item) {
    console.log(item);
    this.isModifFormVisible = true;
    this.isListVisible = false;
    this.motif = item.motif;
    this.bilan = item.bilan;
    this.idRapport=item.idRapport;

  },
  majRapport() {
    let RapportModifier = {
      idRapport: this.idRapport,
      motif: this.motif,
      bilan: this.bilan
    };

    this.$store.state.dataService.majRapport(RapportModifier)
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      })
  }
}
}
</script>