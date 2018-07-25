import React, { Component } from 'react';
import FormFields from './form_fields';

class User extends Component {

    state = {
        formData:{
            name:{
              element:'input',
              value:'',
              label:true,
              labelText:'Name',
              config:{
                name:'name',
                type:'text',
                placeholder:'Enter your name'
              }
            },
            lastname: {
              element:'input',
              value:'',
              label:true,
              labelText:'Last Name',
              config:{
                name:'lastname',
                type:'text',
                placeholder:'Enter your lastname'
              }
            },
            message: {
              element:'textarea',
              value:'',
              label:true,
              labelText:'Last Name',
              config:{
                name:'age',
                row:4,
                cols:36
              }
            },
            age: {
              element:'select',
              value:'',
              label:true,
              labelText:'Last Name',
              config:{
                name:'message',
                options:[
                  {val:'1',text:'10-20'},
                  {val:'2',text:'20-30'},
                  {val:'3',text:'30+'},
                ]
              }
            }
          }
    }

    updateState = (obj) => {
      this.setState({
        formData:obj
      });
    }


    submitForm = (e) => {
      e.preventDefault();
      let dataToSubmit = {};
      for(let key in this.state.formData){
          dataToSubmit[key]=this.state.formData[key].value
      }
      console.log(dataToSubmit)
    }


    render(){
        return(
            <div>
              <form onSubmit={this.submitForm}>
                <FormFields
                  formData={this.state.formData}
                  changeHandler={this.updateState}
                />
              <button type="submit">Go</button>
              </form>
            </div>
        );
    }
}

export default User;
