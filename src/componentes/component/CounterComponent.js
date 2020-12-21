import React from 'react';

class CounterComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.incrementCount = this.incrementCount.bind(this);
  }

  incrementCount() {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <div>
        <p>Você clicou {this.state.count} vezes.</p>
        <button onClick={this.incrementCount}>Clique aqui</button>
      </div>
    );
  }
}

export default CounterComponent;
