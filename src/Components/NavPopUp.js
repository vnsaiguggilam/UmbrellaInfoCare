import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import Divider from '@material-ui/core/Divider';
import PersonIcon from '@material-ui/icons/Person';
import AddIcon from '@material-ui/icons/Add';
import Typography from '@material-ui/core/Typography';
import { blue } from '@material-ui/core/colors';
import AppsIcon from '@material-ui/icons/Apps';
import Grid from '@material-ui/core/Grid';
import Chrome from '../images/chrome.png';
import Duo from '../images/duo.png';
import Business from '../images/business.png';
import classRoom from '../images/classroom.png';
import Docs from '../images/docs.png';
import Maps from '../images/maps.png';


const emails = ['abc', 'xyz'];
const useStyles = makeStyles({
  avatar: {
    backgroundColor: blue[100],
    color: blue[600],
  },
  popupBox:{
    bottom: "18em",
    left: "42em",
    width: "25em",
  }
});

function NavPopUp(props) {
  const classes = useStyles();
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  return (
    <div >
    <Dialog className="abc" onClose={handleClose} aria-labelledby="simple-dialog-title" open={open} style={{ bottom:"28em", left:"80em"}}>
      <DialogTitle id="simple-dialog-title">your details</DialogTitle>
      <Divider />
        <Grid container style={{margin: "1px", height: "141px", textAlign: "center"}}>
           
        <Grid container  spacing={2} >
            <Grid item md={4}>
                <img src={Chrome} alt="" height="50px" width="50px" />
            </Grid>
            <Grid item md={4}>
                <img src={Duo} alt="" height="50px" width="50px" />
            </Grid>
            <Grid item md={4}>
                <img src={Business} alt="" height="50px" width="50px" />
            </Grid>
        </Grid>
        <Grid container  spacing={2} >
            <Grid item xs={4}>
                <img src={classRoom} alt="" height="50px" width="50px" /> 
            </Grid>
            <Grid item xs={4}>
                <img src={Docs} alt="" height="50px" width="50px" />
            </Grid>
            <Grid item xs={4}>
                <img src={Maps} alt="" height="50px" width="50px" />
            </Grid>
        </Grid>
        </Grid>
    </Dialog>
    </div>
  );
}

NavPopUp.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

export default function NavPopUpDemo() {
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(emails[1]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };

  return (
    <div>
      
      <Button variant="outlined"  onClick={handleClickOpen} style={{color:"white"}}>
        {/* Open simple dialog */}
        <AppsIcon />
      </Button>
      <NavPopUp selectedValue={selectedValue} open={open} onClose={handleClose} style={{bottom: "197px",left: "40em"}}/>
    </div>
  );
}
