const { createApp } = Vue ;

createApp({
  data() {
    return{
      diskArray: [],
    }
  },
  created() {
    axios.get("http://localhost:8888/boolean/php-dischi-json/server.php").then((resp) => {
      this.diskArray = resp.data.results;
    })
  }
}).mount('#app')