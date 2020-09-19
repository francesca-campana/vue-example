var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!',
    title: 'Ciao sono un titolo popolato da vue',
    textVisible: false,
    inputValue: ''
  },
  methods: {
    togglePar() {
      //alert('hai cliccato sul badge');
      this.textVisible = !this.textVisible;

      // if (this.textVisible === true) {
      //   this.textVisible = false;
      // }else {
      //   this.textVisible = true;
      // }
    }
  }
})
