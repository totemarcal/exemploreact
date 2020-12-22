import React from 'react';

class CounterComponent2 extends React.Component {
  constructor(props) {
    super(props)
    this.state = { count: 0 };
    this.incrementCount = this.incrementCount.bind(this);
  }
  incrementCount() {
    this.setState({ count: this.state.count + 1 });
  }
  
  componentDidMount() { 
    document.title = `Você clicou ${this.state.count} vezes`;
   }
  componentDidUpdate() { 
    document.title = `Você clicou ${this.state.count} vezes`; 
  }

  render() {
    return (
      <div>
        <p>Você clicou {this.state.count} vezes</p>
        <button onClick={this.incrementCount}>Clique aqui</button>
      </div>
    );
  }
}

export default CounterComponent2;