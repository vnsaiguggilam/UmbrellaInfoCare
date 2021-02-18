import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Divider, Typography } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';

const FormList = (props)=>{
    return(
        <div>
            <div className="GridComp">
                
                
                {
                    props.list.map((obj,i)=>{
                        return (
                            <div key={i} onMouseOver={()=>props.getData(obj)} className="row">
                                <div className="col-md-4">
                                <Grid container spacing={32} style={{margin: "1px", height: "230px", width:"350px", textAlign: "center", background: "antiquewhite"}}>
                                    <Grid container  spacing={2} style={{margin:"12px"}}>
                                        <Grid item md={4} />
                                        <Grid item md={2} >
                                            <Typography variant="body2" component="p" className="picGrid">{obj.name.match(/\b(\w)/g).join('')}</Typography>
                                        </Grid>
                                        <Grid item md={4} />
                                        <Grid item md={1}>
                                            <Typography variant="body2" component="p" 
                                                onClick={()=>props.editData(i)}>
                                                    <EditIcon style={{backgroundColor:"white", boxShadow:"0px 1px 2px 2px lightgrey"}} />
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                    <br />
                                    <br />
           
                                    <Grid container  spacing={2} >
                                        <Grid item md={3}>
                                            Name
                                        </Grid>
                                        <Grid item md={9}>
                                            {obj.name}
                                        </Grid>
                                    </Grid>
                                    <Grid container  spacing={2} >
                                        <Grid item md={3}>
                                            Email
                                        </Grid>
                                        <Grid item md={9}>
                                            {obj.email}
                                        </Grid>
                                    </Grid>
                                    <Grid container  spacing={2} >
                                        <Grid item md={3}>
                                            Address
                                        </Grid>
                                        <Grid item md={9}>
                                            {obj.address}
                                        </Grid>
                                    </Grid>
                                
                                </Grid>
                                </div>
                            </div>
                            
                        );                    
                    })
                }
            </div>
        </div>
    )
};

export default FormList;