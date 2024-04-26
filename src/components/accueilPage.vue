<template>
  <NavBarComponent></NavBarComponent>
  Bienvenue {{ this.$store.state.utilisateur.nom +" "+ this.$store.state.utilisateur.prenom}}
</template>

<script>
import NavBarComponent from './NavBarComponent.vue';

export default {
    components: { NavBarComponent }
}
</script>

<style>

</style>