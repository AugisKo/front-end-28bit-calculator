class Calculator {
  constrctor(selector) {
    this.selector = selector;

    this.DOM = null;
    this.buttonsData = [
      { title: 'AC', color: 'white' },
      { title: '<', color: 'white' },
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
  render() {
    const HTML = `<div class="calculator">
        <div class="screen">
            <div class="answer">0</div>
            <div class="equation">2+2+2</div>
        </div>
        <div class="keyboard">
            <div class="button">AC</div>
            <div class="button">&lt;</div>
            <div class="button">%</div>
            <div class="button">/</div>
            <div class="button">7</div>
            <div class="button">8</div>
            <div class="button">9</div>
            <div class="button">x</div>
            <div class="button">4</div>
            <div class="button">5</div>
            <div class="button">6</div>
            <div class="button">-</div>
            <div class="button">1</div>
            <div class="button">2</div>
            <div class="button">3</div>
            <div class="button">+</div>
            <div class="button">0</div>
            <div class="button">.</div>
            <div class="button_ilg">=</div>
        </div>
    </div>`;
    this.DOM.insertAdjacentHTML('beforeend', HTML);
  }
}

export { Calculator };
