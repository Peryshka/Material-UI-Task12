import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import styles from './stylesCard.module.scss';
import Tooltip from "@mui/material/Tooltip";
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import {IoDownloadSharp} from "react-icons/io5";

const CardBlock = (props) => {
  const {
    image,
    alt,
    height,
    mainTitle,
    description,
    titleUpdate,
    titleDownload,
  } = props;
  return (
    <div className={styles.cardWrap}>
      <Card sx={{maxWidth: 345}} className={styles.mainCardWrap}>
        <CardMedia
          component="img"
          alt={alt}
          height={height}
          image={image}
          className={styles.card}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" mainTitle={mainTitle}>
            {mainTitle}
          </Typography>
          <Typography variant="body2" color="text.secondary" description={description} className={styles.desc}>
            {description}
          </Typography>
        </CardContent>
        <CardActions className={styles.cardActions}>
          <div className={styles.cardActions}>
            <Tooltip title={titleUpdate} arrow>
              <WatchLaterIcon className={styles.watchIcon}/>
              <Button>{titleUpdate}</Button>
            </Tooltip>
            <Tooltip title={titleDownload} arrow>
              <IoDownloadSharp/>
              <Button>{titleDownload}</Button>
            </Tooltip>
          </div>
        </CardActions>
      </Card>
    </div>
  )
}

export default CardBlock;

