import React from 'react';
import styles from './styles.module.scss';
import AppBar from '@mui/material/AppBar';
import {styled} from '@mui/material/styles';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';


// SearchAppBar
const Search = styled('div')(({theme}) => ({}));

const SearchIconWrapper = styled('div')(({theme}) => ({}));

const StyledInputBase = styled(InputBase)(({theme}) => ({}));


const SearchBlock = () => {
  return (
    <div className={styles.searchWrap}>
      <Box sx={{flexGrow: 1}} className={styles.boxSearch}>
        <AppBar position="static" className={styles.appbar}>
          <Toolbar>
            <Search className={styles.searchWrap2}>
              <SearchIconWrapper className={styles.searchIconWrapper}>
                <SearchIcon className={styles.searchIcon}/>
              </SearchIconWrapper>
              <StyledInputBase
                className={styles.styledInputBase}
                placeholder="Search Company"
                inputProps={{'aria-label': 'search'}}
              />
            </Search>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  )
}

export default SearchBlock;


