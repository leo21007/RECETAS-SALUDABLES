new Vue({
  el: '#app',
  data: {
      recipes: [],  // Almacena las recetas obtenidas
  },
  methods: {
      fetchRecipes() {
          // URL de la API de Spoonacular
          const apiUrl = 'https://api.spoonacular.com/recipes/complexSearch?apiKey=bfbc2014142b4c20804f6fbb809b03cb&number=30&diet=healthy';
          
          // Realiza la petición con Axios
          axios.get(apiUrl)
              .then(response => {
                  // Almacena las recetas en el array 'recipes'
                  this.recipes = response.data.results;
              })
              .catch(error => {
                  console.error('Error al obtener las recetas:', error);
              });
      }
  }
});