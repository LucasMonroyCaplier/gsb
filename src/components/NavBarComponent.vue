<template>
  <v-toolbar border density="comfortable">
    <v-col class="d-flex justify-space-around">
        <v-btn to="/accueil">
            Accueil
        </v-btn>
    </v-col>
    <v-col class="d-flex justify-space-around">
        <v-btn to="/rapports">
            Rapports
        </v-btn>
    </v-col>
    <v-col class="d-flex justify-space-around">
        <v-btn to="/medecins">
            Medecins
        </v-btn>
    </v-col>
  </v-toolbar>
</template>

<script>
export default {
    name: 'NavBarComponent'
}
</script>

<style>

</style>