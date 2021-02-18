import React from 'react';




const EditComp = (props) => {
    //let falg = props.show ? "modal display-block" : "modal display-none";
  
    return (

      <div className={props.show?"modal display-block":"modal display-none"}>
        <section className="modal-main">
          <div className="container model_box text-center">

            <input type="text" 
                   name="name"
                   value={props.name}
                   placeholder="name"
                   onChange={(e)=>props.handleChange(e)}
                   />
            <br/>
            <input type="email" 
                   name="email"
                   value={props.email}
                   placeholder="email"
                   onChange={(e)=>props.handleChange(e)}
                   />
            <br/>
            
            <input type="text" 
                   name="address"
                   value={props.address}
                   placeholder="address"
                   onChange={(e)=>props.handleChange(e)}
                   />
            
            <button type="button" onClick={props.updateData}>Update</button>
            <button type="button" onClick={props.modelClose}>close</button>
          </div><br/>
          
        </section>
      </div>
    );
  };

  export default EditComp;
  