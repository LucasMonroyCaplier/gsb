<template>
  <v-sheet class="bg-deep-purple pa-12" rounded>
    <v-card class="mx-auto px-6 py-8" max-width="344">
      <v-form
        v-model="form"
      >
        <v-text-field
          v-model="email"
          :readonly="loading"
          :rules="[required]"
          class="mb-2"
          clearable
          label="Email"
        ></v-text-field>

        <v-text-field
          v-model="password"
          :readonly="loading"
          :rules="[required]"
          clearable
          label="Password"
          placeholder="Enter your password"
        ></v-text-field>

        <br>

        <v-btn
          @click = "getLogin"
          :disabled="!form"
          :loading="loading"
          block
          color="success"
          size="large"
          type="submit"
          variant="elevated"
        >
          Sign In
        </v-btn>
        <v-alert v-show= "refuse" color="error" icon="$error" text="Error Login"></v-alert>
        <v-alert v-show= "accept" color="success" icon="$success" text="Success Login"></v-alert>
      </v-form>
    </v-card>
  </v-sheet>
</template>
<script>
  import DataService from '@/service/DataService';
  var dataService = new DataService(); //Instanciation de l'object de type DataService

  export default {
    name: 'pageDeConnection',
    data: () => ({
      form: false,
      email: null,
      password: null,
      loading: false,
      refuse: false,
      accept: false,
    }),

    methods: {
      required (v) {
        return !!v || 'Field is required'
      },
      //Méthode qui va faire appel au DataService
      getLogin(){
        //Appel au dataservice pour interroger l'API
        dataService.getVisiteur(this.email,this.password) 
        //Si succès, on stocke les données de l'utilisateur
        //dans le store, puis on redirige vers la page d'accueil
        .then(
          (data)=>{
            //Enregistrement dans le store, dans la variable utilisateur
            this.$store.state.utilisateur = data;
            //Log retour dans la console
            console.log(data);
            this.$router.push({path: '/accueil'})
            this.accept = true;
          }
        )
        //Sinon, on affiche la banière d'erreur
        .catch(
          (error)=>{
            //Log erreur dans la console
            console.log(error);
            this.refuse = true;
          }
        )
      }
    },
  }
</script>