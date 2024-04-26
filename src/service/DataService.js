export default class DataService {

    // fonction qui va permettre d'authentifier un visiteur
    async getVisiteur(unLogin, unPassword) {
      //Je passe ici les parametres de mon appel de l'API
      console.log(unLogin, unPassword)
      var params = new URLSearchParams({
        login: unLogin,
        mdp: unPassword
      })
      //Appel de l'API
      var response = await fetch('http://localhost/restGSB/connexion?' + params);
      //récupration de la réponse, et retour
      var items = await response.json();
      return items;
    }
  
    // Fonction qui va retourner une liste de médecins selon le nom passé en paramètre.
    async getLesMedecins(unMedecin) {
      console.log(unMedecin);
      var params = new URLSearchParams({
        nom: unMedecin,
      });
      var reponse = await fetch('http://localhost/restGSB/medecins?' + params);
      var items = await reponse.json();
      return items;
    }
  
    // Fonction qui va retourner la liste des rapports du médecin passé en parametre
    // (Id Medecin)
    // Lien appel API : http://localhost:8080/restGSB/rapports/
    async getLesRapports(idMedecin) {
      var response = await fetch('http://localhost/restGSB/rapports/' + idMedecin);
      var items = await response.json();
      return items;
    }
  
    // Fonction qui va maj le médecin, via la methode PUT
    // Lien appel API : http://localhost:8080/restGSB/majMedecin
    async majMedecin(props) {
      var requestOptions = {
        method: "PUT", // on définit la méthode d'envoi
        headers: {
          'Content-Type': 'application/json', // On définit le type des données transmises
        },
        body: JSON.stringify(props) // Dans le corps, on ajoute les propriétés sous format JSON
      };
      var items = await fetch('http://localhost/restGSB/majMedecin', requestOptions);
      return items;
    }
  
    async majRapport(props) {
      var requestOptions = {
        method: "PUT", // on définit la méthode d'envoi
        headers: {
          'Content-Type': 'application/json', // On définit le type des données transmises
        },
        body: JSON.stringify(props) // Dans le corps, on ajoute les propriétés sous format JSON
      };
      var item = await fetch('http://localhost/restGSB/majRapports', requestOptions);
      return item
    }
    async getRapports(unId) {
      var response = await fetch('http://localhost/restGSB/rapports/' + unId)
      var items = await response.json();
      return items;
    }
  
    async getLesRapportsADate(unId, uneDate) {
      var params = new URLSearchParams({
        idVisiteur: unId,
        date: uneDate
      });
      var response = await fetch('http://localhost/restGSB/rapports_a_date?' + params);
      var items = await response.json();
      return items;
    }
  }