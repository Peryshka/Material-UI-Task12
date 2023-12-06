import Tooltip from '@mui/material/Tooltip';
import React from 'react';
import styles from './styles.module.scss';
import Button from '@mui/material/Button';
import {FaFileImport} from "react-icons/fa";
import {FaFileExport} from "react-icons/fa";

const ImportExport = () => {
  return (
    <div className={styles.importExportWrap}>
      <Tooltip title="Import" arrow className={styles.tooltipImport}>
        <FaFileImport/>
        <Button className={styles.btnImport}>Import</Button>
      </Tooltip>
      <Tooltip title="Export" arrow className={styles.tooltipExport}>
        <FaFileExport/>
        <Button className={styles.btnExport}>Export</Button>
      </Tooltip>
    </div>
  )
};

export default ImportExport;


