import React, { Component } from 'react';

class Controlled extends Component {

    state = {
        name:'',
        lastName:''
    }

    handleChange = (e) => {
      this.setState({
        [e.target.name]:e.target.value
      });
    }

    render(){
        return(
          <div>
            <label>Name</label>
            <div>
              <input
                type="text"
                name="name"
                value={this.state.name}
                onChange={this.handleChange}
              />
            </div>
            <label>Last Name</label>
            <div>
              <input
                type="text"
                name="lastName"
                value={this.state.lastName}
                onChange={this.handleChange}
              />
            </div>
          </div>
        )
    }
}

export default Controlled;
