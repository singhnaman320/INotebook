import React from 'react'

function Alert(props) {

  // Capitalizing first word of alert
  const capitalize = (word) =>{

    if(word == "danger"){

      word = "error"
    }
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  }
  return (
    
    // when alert popup comes, it is shifting other part downwards (CLS- Cummulative Shift Layout). so we will correct that as 
    // well be using a div outside it and providing it some height

    <div style={{height: "7vh"}}>
      {/* We can not use it inside other div. To use it we have to tell that it is javscript by using {}. So let's do it  */}
      {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
      </div>}
    </div>
    
  )
}

export default Alert