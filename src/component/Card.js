import React from 'react'
import { SetIconAligment } from '../utils/SetIconAligment'
import styles from '../styles/Card.module.scss'

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import CardModal from './CardModal';

export default function Card( {heros} ) {
    const {
        id,
        name,
        img,
        alignment,
        race,
        eyeColor,
        gender,
        hairColor,
        weight,
        height,
        firstAppearance,
        fullName,
        publisher,
        combat,
        durability,
        intelligence,
        power,
        speed,
        strength,
      } = heros

      const [open, setOpen] = React.useState(false);
      const [fullWidth, setFullWidth] = React.useState(true);
      const [maxWidth, setMaxWidth] = React.useState('sm');

      const handleClickOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };

    return (
        <React.Fragment>
            <div onClick={handleClickOpen}  className={styles.container}>    
                <img src={img} alt="Hero"/>
                <div className={styles.content}>
                    <div></div>
                    <div>
                        <h1>{name}</h1>
                        <h2>Race: {race}</h2> 
                        <div>
                            <img src={SetIconAligment(alignment)} alt="IconAlignment" />
                            <h1>{id}</h1>
                        </div>
                    </div>
                </div>
            </div>
            <Dialog
                fullWidth={fullWidth}
                maxWidth={maxWidth}
                open={open}
                onClose={handleClose}
            >
                <CardModal heros={heros} />

                <DialogActions>
                <Button onClick={handleClose}>Close</Button>
                </DialogActions>
            </Dialog>
    </React.Fragment>
        
        
    )
}


