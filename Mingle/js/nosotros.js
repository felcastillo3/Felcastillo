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

/*Pego el menu al top cuando se haga scroll hacia abajo*/
const navEl = document.querySelector('.navbar')
window.addEventListener('scroll', () => {
  if (window.scrollY >= 56) {
    navEl.classList.add('fixed-top');
  } else {
    navEl.classList.remove('fixed-top');
  }
});
