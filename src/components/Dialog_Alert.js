import React, { useEffect } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const Dialog_Alert = ({ open, onClose }) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{"AI tool Gallary"}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Follow me on my journey exploring AI tools, that are quite handy.<br></br>
          Click on the image to try them out yourself 
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Boo
        </Button>
        <Button onClick={onClose} color="primary" autoFocus>
          Excited!
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default Dialog_Alert;