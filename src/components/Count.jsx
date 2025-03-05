import React, { Component } from 'react';

class Count extends Component {
    constructor(props) {
      super(props);
  
      this.number = 0;
  
      this.increase = this.increase.bind(this);
      this.decrease = this.decrease.bind(this);
    };
  
   increase(){

   };

   decrease(){

   };

    render() {
      return (
        <div>{number}</div>
      )
    }
  }

  export default Count;