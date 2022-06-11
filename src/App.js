import { AppBar, Toolbar, Typography } from '@mui/material';

const App = () => {
    return (
        <AppBar>
            <Toolbar>
                <Typography variant="h5" gutterBottom component="div">
                    School Explorer
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

export default App;
