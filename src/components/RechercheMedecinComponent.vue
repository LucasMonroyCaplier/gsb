<template>
  <v-container>
    <!--
        Ici à chaque pression du clavier, l'action getLesMedecins va se déclencher pour mettre à jour la liste en fonction de la saisie
    -->
    <v-text-field @keyup="getLesMedecins" label="Nom de medecin" v-model="nomMedecin">
    </v-text-field>
    <!--
        Ensuite nous créons la  v-card qui va afficher la lsite des médecins trouvés. Elle sera affichée que pendant une recherche (attribut isListVisible)
        Chaque item sera généré par la boucle v-for, et pour chaque item un événement onCLick permettera de sélectionner les informations du médecin choisi
    -->
        <v-card class="mx-auto">
            <v-list v-show="isListVisible">
                <v-list-item v-for="item in items" :key="item.id" :value="item.nom" @click="getInfos(item)">
                    {{ item.nom + " " + item.prenom }}
                </v-list-item>
            </v-list>
        </v-card>
  </v-container>
</template>

<script>
export default {
    name: 'RechercheMedecinComponent',
    data() {
        return{
            idMedecin: '', // ID du médecin sélectionné
            nomMedecin: '', // Nom du médecin sélectionné
            items:[], // Liste qui va contenir les médecins trouvés
            isListVisible: false, // Attribut pour la visibilité de la liste
        }
    },
    methods:{
        /*
            Méthode qui va faire appel au DataService, afin de récupérer la liste des médecins
        */
       getLesMedecins(){
            this.$store.state.dataService.getMedecins(this.nomMedecin)
            .then(
                (data)=>{
                    this.items = data;
                    console.log(data);
                    this.isListVisible = true;
                }
            )
            .catch(
                (error)=>{
                    console.log(error);
                    this.isListVisible = false
                }
            )
       },
       /*
            Fonction qui permet de récupérer les informations du médecin selectionné, en valorisant les variables concernées
       */
       getInfos(item){
        console.log(item);
        this.isListVisible = false;
        this.$store.state.medecin = item;
        this.nomMedecin = item.nom +" " +item.prenom + " 0.; " + item.id;
        this.selectMedecin = item;
        this.$parent.isNavMedVisible = true;
        this.$parent.maj++;
       }

    }

}
</script>

<style>

</style>