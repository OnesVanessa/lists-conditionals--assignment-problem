import React from 'react';

const validationComponent = (props) => {

    let text ="Text too short";
    
    if (props.textLength > 5) 
      text = < div>"Text long enough"</div>       

    return(
       <div className="ValidationComponent">
          {text}    
       </div>
    )

};

export default validationComponent;