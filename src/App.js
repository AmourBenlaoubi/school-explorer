import { AppBar, Toolbar, Typography } from '@mui/material';
import ListItems from './components/ListItems';

const App = () => {
    return (
        <div>
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
