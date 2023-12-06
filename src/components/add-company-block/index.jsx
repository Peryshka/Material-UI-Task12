import React from 'react';
import styles from './styles.module.scss';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

const AddCompanyBlock = () => {
  return (
    <div className={styles.addWrap}>
      <Typography variant="h3" component="h3" className={styles.title}>
        Companies
      </Typography>
      <Button variant="contained" startIcon={<AddIcon/>} className={styles.btn}>
        Add
      </Button>
    </div>
  )
}

export default AddCompanyBlock;




