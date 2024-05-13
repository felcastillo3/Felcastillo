const { createApp } = Vue
createApp({
  data() {
    return {
      url: "./js/nosotros.json", 
      datos: [],
      error: false,
    }
  },
  methods: {
    fetchData(url) {
      fetch(url)
        .then(response => response.json())
        .then(
          data => {
            console.log(data)
            this.datos = data.docs
          }
        )
        .catch(error => {
          console.log("Error:" + error)
          this.error = true
        });
    }
  },   
created() {  // created() se ejecuta cada vez que se crea el objeto VUE
  this.fetchData(this.url)
}
}).mount('#app')
