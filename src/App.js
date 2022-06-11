import { AppBar, Toolbar, Typography } from '@mui/material';
import ListItems from './components/ListItems';
import styles from './app.module.scss';

const App = () => {
    return (
        <div className={styles.mainContainer}>
            <AppBar>
                <Toolbar>
                    <Typography variant="h5" gutterBottom component="div">
                        School Explorer
                    </Typography>
                </Toolbar>
            </AppBar>
            <ListItems />
        </div>
    );
};

export default App;
