import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import VisibilityIcon from '@material-ui/icons/Visibility';

const useStyles = makeStyles({
  list: {
    width: 450
  },
  fullList: {
    width: "auto"
  }
});

export default function ViewComp() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false
  });

  const toggleDrawer = (anchor, open) => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = anchor => (
    <div>
         <Typography variant="h5" style={{margin:"12px"}}>View Component</Typography> 
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom"
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      style={{margin:"10px", boxShadow:"0px 1px 2px 2px lightgrey", borderRadius:"6px" }}
    >
    
      <Card>
        <CardContent>
            <Typography  color="textSecondary" gutterBottom>
            Word of the Day
            </Typography>
            
            <Typography color="textSecondary">
            adjective
            </Typography>
            <Typography variant="body2" component="p">
            well meaning and kindly.
            <br />
            {'"a benevolent smile"'}
            </Typography>
        </CardContent>
        <CardActions>
            <Button size="small" variant="contained" color="primary">Learn More</Button>
        </CardActions>
      </Card>
      </div>
      <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom"
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      style={{margin:"10px", boxShadow:"0px 1px 2px 2px lightgrey", borderRadius:"6px" }}
    >
      <Card>
        <CardContent>
            <Typography  color="textSecondary" gutterBottom>
            Word of the Day
            </Typography>
            
            <Typography color="textSecondary">
            adjective
            </Typography>
            <Typography variant="body2" component="p">
            well meaning and kindly.
            <br />
            {'"a benevolent smile"'}
            </Typography>
        </CardContent>
        <CardActions>
            <Button size="small" variant="contained" color="primary">Learn More</Button>
        </CardActions>
      </Card>
    </div>
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom"
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      style={{margin:"10px", boxShadow:"0px 1px 2px 2px lightgrey", borderRadius:"6px" }}
    >
      <Card>
        <CardContent>
            <Typography  color="textSecondary" gutterBottom>
            Word of the Day
            </Typography>
            
            <Typography color="textSecondary">
            adjective
            </Typography>
            <Typography variant="body2" component="p">
            well meaning and kindly.
            <br />
            {'"a benevolent smile"'}
            </Typography>
        </CardContent>
        <CardActions>
            <Button size="small" variant="contained" color="primary">Learn More</Button>
        </CardActions>
      </Card>
    </div>
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom"
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      style={{margin:"10px", boxShadow:"0px 1px 2px 2px lightgrey", borderRadius:"6px" }}
    >
      <Card>
        <CardContent>
            <Typography  color="textSecondary" gutterBottom>
            Word of the Day
            </Typography>
            
            <Typography color="textSecondary">
            adjective
            </Typography>
            <Typography variant="body2" component="p">
            well meaning and kindly.
            <br />
            {'"a benevolent smile"'}
            </Typography>
        </CardContent>
        <CardActions>
            <Button size="small" variant="contained" color="primary">Learn More</Button>
        </CardActions>
      </Card>
    </div>
    </div>
  );

  return (
      
    <div>
      {["right"].map(anchor => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
              <VisibilityIcon style={{backgroundColor:"white", boxShadow:"0px 1px 2px 2px lightgrey", height:"30px", width:"30px"}}/>
            </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
