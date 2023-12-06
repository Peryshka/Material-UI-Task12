import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import styles from './App.module.scss';
import AddCompanyBlock from "./components/add-company-block";
import ImportExport from './components/import-export-block';
import SearchBlock from "./components/search-block";
import CardBlock from "./components/card-block";
import dropboxIcon from './assets/icons/dropbox.png';
import mediumIcon from "./assets/icons/medium.png";
import slackIcon from "./assets/icons/slack.png";
import lyftIcon from './assets/img/lyft.jpeg';
import githubIcon from "./assets/icons/github.png";
import socialIcon from "./assets/icons/social.png";

function App() {
  return (
    <div>
      <Container maxWidth="lg" className={styles.container}>
        <Box className={styles.box}>
          <AddCompanyBlock/>
          <ImportExport/>
          <SearchBlock
            img={dropboxIcon}
          />
          <div className={styles.cardsWrap}>
            <CardBlock
              alt="icon"
              height="50"
              mainTitle="Dropbox"
              description="Dropbox is a file hosting service that offers cloud storage, file synchronization,
              a personal cloud"
              titleUpdate="Updated 2h ago"
              titleDownload="594 Downloads"
              image={dropboxIcon}
            />
            <CardBlock
              alt="icon"
              height="50"
              mainTitle="Medium Corporation"
              description="Medium is an online publishing platform developer by Evan
              Williams, and launched in August 2012."
              titleUpdate="Updated 2h ago"
              titleDownload="625 Downloads"
              image={mediumIcon}
            />
            <CardBlock
              alt="icon"
              height="50"
              mainTitle="Slack"
              description="Slack is a cloud-based set of team collaboration
              tools and services, founded by Steward Butterfield."
              titleUpdate="Updated 2h ago"
              titleDownload="857 Downloads"
              image={slackIcon}
            />
            <CardBlock
              alt="icon"
              height="50"
              mainTitle="Lyft"
              description="Lyft is an on-demand transportation company
               based in San Francisco, California.
               "
              titleUpdate="Updated 2h ago"
              titleDownload="406 Downloads"
              image={lyftIcon}
            />
            <CardBlock
              alt="icon"
              height="50"
              mainTitle="Github"
              description="GitHub is a web-based hosting service for version control of code using Git."
              titleUpdate="Updated 2h ago"
              titleDownload="835 Downloads"
              image={githubIcon}
            />
            <CardBlock
              alt="icon"
              height="50"
              mainTitle="Squarespace"
              description="Squarespace provides software as a service for website building and hosting.
              Headquartered in NYC."
              titleUpdate="Updated 2h ago"
              titleDownload="835 Downloads"
              image={socialIcon}
            />
          </div>
        </Box>
      </Container>
    </div>
  );
}

export default App;



