const { createApp } = Vue ;

createApp({
  data() {
    return{
      diskArray: [],
      like: 'like'
      
    }
  },
  created() {
    this.getAllDisc()
  },
  methods: {
    getAllDisc() {
      axios.get("http://localhost:8888/boolean/php-dischi-json/server.php").then((resp) => {
      this.diskArray = resp.data.results;
    })
    },
    toogleLike(curIndex){
      const data = {
        like: this.like,
        index: curIndex,
      }
      console.log(data);

      axios.post("http://localhost:8888/boolean/php-dischi-json/server.php", data, {
        headers: {
          "Content-type": "multipart/form-data",
        },
      }).then((resp) => {
        this.diskArray = resp.data.results;
        console.log(resp.data.results)
      })
    },
  }
}).mount('#app')