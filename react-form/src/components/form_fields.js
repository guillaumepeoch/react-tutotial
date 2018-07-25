import React from 'react';

const FormFields = function(props){

  const renderFields = function(){
    let arrayInput = [];

    // Re arrange input formData
    for(let key in props.formData){
      arrayInput.push({
          id:key,
          config:props.formData[key]
      });
    }

    return arrayInput.map(function(formDataInput,i){
      return (
        <div key={i}>
          {renderTemplates(formDataInput)}
        </div>
      );
    });
  }


  const renderTemplates = function(data){
    let template;

    switch(data.config.element){
      case "input":
          template = (
            <div>
              <div>{ data.config.label ? data.config.labelText : null}</div>
              <input
                value={data.value}
                {...data.config.config}
                onChange={changeHandler}
              />
            </div>
          );
          break;
      case "textarea":
          template = (
            <div>
              <div>{ data.config.label ? data.config.labelText : null} </div>
                <textarea
                  value={data.config.value}
                  {...data.config.config}
                  onChange={changeHandler}
                >
                </textarea>
            </div>
          );
          break;
      case "select":
          template = (
            <div>
              <div>{ data.config.label ? data.config.labelText : null}</div>
              <select name={data.config.config.name} onChange={changeHandler}>
                {data.config.config.options.map(function(opt,i){
                  return (
                    <option key={i} value={opt.val}>{opt.text}</option>
                  )
                })}
              </select>
            </div>
          );
          break;
      default:
        template = null;
    }

    return template;
  }

  const changeHandler = function(e){
    console.log(e.target.value);
    let newState = props.formData;
    newState[e.target.name].value = e.target.value;
    props.changeHandler(newState);
  }

  return(
    <div>
      {renderFields()}
    </div>
  );
}

export default FormFields;
