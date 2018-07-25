import React, { Component } from 'react';

class Uncontrolled extends Component {

    state = {

    }


    handleSubmitButton = (e) => {
      e.preventDefault();
      const value = {
        name:this.name.value,
        lastName:this.lastName.value
      }
    }

    onshandler(e){
      e.preventDefault();
    }

    render(){
      return(
        <form onSubmit={this.onshandler}>
          <label>Name</label>
          <div>
            <input
              type="text"
              ref={ input => this.name = input }
            />
          </div>
          <label>Last Name</label>
          <div>
            <input
              type="text"
              ref={ input => this.lastName = input }
            />
          </div>
          <button onClick={this.handleSubmitButton}> Sign In</button>
        </form>
      )
    }
}

export default Uncontrolled;
