class Calculator {
  constrctor(selector) {
    this.selector = selector;

    this.DOM = null;
    this.buttonsData = [
      { title: 'AC', color: 'white' },
      { title: '<=|', color: 'white' },
      { title: '%', color: 'white' },
      { title: '/', color: 'white' },
      { title: '7', color: 'white' },
      { title: '8', color: 'white' },
      { title: '9', color: 'white' },
      { title: 'x', color: 'white' },
      { title: '4', color: 'white' },
      { title: '5', color: 'white' },
      { title: '6', color: 'white' },
      { title: '-', color: 'white' },
      { title: '1', color: 'white' },
      { title: '2', color: 'white' },
      { title: '3', color: 'white' },
      { title: '+', color: 'white' },
      { title: '0', color: 'white' },
      { title: '.', color: 'white' },
      { title: '=', color: 'orange' },
    ];
    this.init();
  }
}

export { Calculator };
