<template>
  <v-container>
    <NavBarComponent />
    <v-toolbar v-show="isNavMedVisible">
      <v-col class="d-flex justify-space-around">
        <v-btn @click="AfficheList()">
          Consulter les Rapports
        </v-btn>
      </v-col>
      <v-col class="d-flex justify-space-around">
        <v-btn @click="AfficheFiche()">
          Gérer le Medecin
        </v-btn>
      </v-col>
    </v-toolbar>
    <RechercheMedecinComponent />
    <v-col v-show="listeVisible">
      <ListeRapportComponent :key="maj" />
    </v-col>
    <v-col v-show="rapportVisible">
      <FicheMedecinComponent :key="maj" />
    </v-col>
  </v-container>

</template>

<script>

// Components
import NavBarComponent from '../components/NavBarComponent.vue';
import RechercheMedecinComponent from '@/components/RechercheMedecinComponent.vue';
import ListeRapportComponent from '@/components/ListeRapportsComponent.vue';
import FicheMedecinComponent from '@/components/FicheMedecinComponent.vue';

export default {
  name: 'MedecinView',
  data() {
    return {
      isNavMedVisible: false,
      listeVisible: false,
      rapportVisible: false,
      maj: 0
    }
  },
  methods: {
    AfficheList() {
      this.listeVisible = true;
      this.rapportVisible = false;
    },
    AfficheFiche() {
      this.rapportVisible = true;
      this.listeVisible = false;
    },
  },

  components: {
    NavBarComponent,
    RechercheMedecinComponent,
    ListeRapportComponent,
    FicheMedecinComponent
  },
};
</script>