import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';

const FormList = (props)=>{
    return(
        <div>
            <div className="abc">
                <Grid container  spacing={2} className="listHead">
                    <Grid item xs={1} >
                        Profile
                    </Grid>
                    <Grid item xs={3} style={{textAlign:"left"}}>
                        Name
                    </Grid>
                    <Grid item xs={3} style={{textAlign:"left"}}>
                        Email
                    </Grid>
                    <Grid item xs={3} style={{textAlign:"left"}}>
                        Address
                    </Grid>
                    <Grid item xs={1} >
                        Edit
                    </Grid>
                </Grid>
                <br /><br />
                
                {
                    props.list.map((obj,i)=>{
                        return (
                            <div key={i} onMouseOver={()=>props.getData(obj)} className="listbody">
                                <Grid container  spacing={2} >
                                    <Grid item xs={1} >
                                        <Typography variant="body2" component="p" className="namePic">{obj.name.match(/\b(\w)/g).join('')}</Typography>
                                    </Grid>
                                    <Grid item xs={3} style={{textAlign:"left"}}>
                                        {obj.name}
                                    </Grid>
                                    <Grid item xs={3} style={{textAlign:"left"}}>
                                        {obj.email}
                                    </Grid>
                                    <Grid item xs={3} style={{textAlign:"left"}}>
                                        {obj.address}
                                    </Grid>
                                    <Grid item xs={1} >
                                        <Typography variant="body2" component="p" 
                                            onClick={()=>props.editData(i)}>
                                                <EditIcon style={{backgroundColor:"white", boxShadow:"0px 1px 2px 2px lightgrey"}} />
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </div>
                            
                        );                    
                    })
                }
            </div>
        </div>
    )
};

export default FormList;