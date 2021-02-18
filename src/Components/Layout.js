import React from 'react';
import FormList from './FormList';
import FormGrid from './FormGrid';
import FormDetails from './FormDetails';
import AddComp from './AddComp';
import EditComp from './EditComp';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import ViewComp from './ViewComp';
import { Divider } from '@material-ui/core';

import Grid from '@material-ui/core/Grid';
import GridOnIcon from '@material-ui/icons/GridOn';
import ReorderIcon from '@material-ui/icons/Reorder';
import VisibilityIcon from '@material-ui/icons/Visibility';

class Layout extends React.Component{
    constructor(props){
        super(props);
        this._modeHide = this._modeHide.bind(this);
        this.formModel = this.formModel.bind(this);
        this._setInput = this._setInput.bind(this);
        this._addDetails = this._addDetails.bind(this);
        this.getDetails = this.getDetails.bind(this);
        this.editData = this.editData.bind(this);
        this._updateData = this._updateData.bind(this);
        this._list = this._list.bind(this);
        this._grid = this._grid.bind(this);
        this.state={
            flag: 0,
            name:"",
            email:"",
            address:"",
            contactsList: [
                {name:"abcd", email:"abcd@umbrellainfocare.com",address:"xyz"}

            ],

            show:false,
            edit_show:false,
            currentView:{name:"abcd", email:"abcd@umbrellainfocare.com", address:"xyz"}
        }


    }


    _updateData(){
        let pos = this.state.pos;
        let newList = this.state.contactsList;
        newList[pos] = {name:this.state.name,
                        email:this.state.email,
                        phno:this.state.phno,
                        company:this.state.company,
                        address:this.state.address
                    };
        this.setState((prevState)=>({
            ...prevState,
            contactsList:newList,
            edit_show:false,
            pos:""
        }))
    }

    editData(i){
        console.log(i);
        let newList = this.state.contactsList[i];
        this.setState((prevState)=>({
            ...prevState,
            name:newList.name,
            email:newList.email,
           
            address:newList.address,
            edit_show:true,
            pos:i
        }))
    }

    getDetails(data){
        console.log(data);
        this.setState((prevState)=>({
            ...prevState, 
            currentView:data
            
        }))
    }

    _addDetails(){
        let data={
                  name:this.state.name,
                  email:this.state.email,
                  phno:this.state.phno,
                  address:this.state.address,
                  company:this.state.company
                };
    if(this.state.name===""||this.state.email===""){
        alert("please enter details");
    }
    else{
        this.setState((prevState)=>({
            ...prevState,
            name:"",
            email:"",
            phno:"",
            company:"",
            address:"",
            contactsList:[...prevState.contactsList,data],
            show:false
        }))
     }

        
    }

    _modeHide(){
        console.log("model");
        this.setState({
            show:false,
            edit_show:false
        });
        
    }

    formModel(){
        
        this.setState((prevState)=>({
            ...prevState,
            name:"",
            email:"",
            
            address:"",
            show:true,
            edit_show:false
        }))
    }

    _setInput(e){
        let name=e.target.name;
        
        switch(true){
            case name==="name":
                                    this.setState({
                                        name:e.target.value
                                    });
                                    
                                break;
            case name==="email":
                                    this.setState({
                                        email:e.target.value
                                    });
                                    break;
            
                                
            
                                
            case name==="address":
                                    this.setState({
                                        address:e.target.value
                                    });
                                    break;
                                
            default:
                            break;
        }
    }
    _list() {
        this.setState({
          flag: 0
        });
      }
    
      _grid() {
        this.setState({
          flag: 1
        });
      }

    render(){
        return(
            <div className="container">

                <EditComp 
                            show={this.state.edit_show}
                            name={this.state.name}
                             email={this.state.email}
                             address={this.state.address}
                            modelClose={this._modeHide}
                            updateData={this._updateData}
                            handleChange={(e)=>this._setInput(e)} 
                />
                <AddComp show={this.state.show}
                             name={this.state.name}
                             email={this.state.email}
                             address={this.state.address}
                             handleChange={(e)=>this._setInput(e)}
                             modelClose={this._modeHide}
                             addData = {this._addDetails}
                />

               
               
                <Grid container  spacing={2}>
                    <Grid item xs={7} />
                
                    <Grid item xs={1}>
                        <AddCircleOutlineIcon onClick={this.formModel}
                                style={{backgroundColor:"white", boxShadow:"0px 1px 2px 2px lightgrey", height:"30px", width:"30px"}}/>
                    </Grid>
                    <Grid item xs={1}>
                    {this.state.flag === 1?(
                        <ReorderIcon 
                            style={{backgroundColor:"white", boxShadow:"0px 1px 2px 2px lightgrey", height:"30px", width:"30px", }} 
                            onClick={()=>this._list()}
                            />
                    ):""}
                            {this.state.flag === 0?(
                        <GridOnIcon 
                            style={{backgroundColor:"white", boxShadow:"0px 1px 2px 2px lightgrey", height:"30px", width:"30px", }} 
                            onClick={() => this._grid()}
                            />
                            ):""}
                        
                    </Grid>
                    <Grid item xs={1} />
                    <Grid item xs={1}>
                        <ViewComp  />
                    </Grid>
                </Grid>
                <br /><br /><Divider /><br /><br />

                {this.state.flag === 0?(
                <Grid container  spacing={1}>
                    <Grid item md={1} />
                    <Grid item md={10}>
                        <FormList list={this.state.contactsList} 
                                    getData={(data)=>this.getDetails(data)}
                                    editData={(data,i)=>this.editData(data,i)}
                        />  
                    </Grid>
                    <Grid item md={1} />
                </Grid>
                ):(
                <Grid container  spacing={1}>
                    <Grid item md={1} />
                    <Grid item md={3}>
                        <FormGrid list={this.state.contactsList} 
                                    getData={(data)=>this.getDetails(data)}
                                    editData={(data,i)=>this.editData(data,i)}
                        />  
                    </Grid>
                    <Grid item md={1} />
                </Grid>
                )}
                 
                
            </div>
        )
    }
}

export default Layout;