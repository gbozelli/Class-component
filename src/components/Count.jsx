import React, { Component } from 'react';

class Count extends Component {

    render() {
      const { todos } = this.props;

    // Calculate the number of todos
    const todoCount = todos.length;

    return (
      <div>
        <h3>Number of Todos: {todoCount}</h3>
      </div>
    );
  }
}
  export default Count;