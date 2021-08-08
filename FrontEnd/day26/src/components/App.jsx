import SignInForm from "./SignInForm";
import { useSelector, Provider } from 'react-redux';
import store from "../store";
import { Typography, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

export default function App() {
    return (
        <>
            <Provider store={store}>
                <SignInForm />
                <TmpComp />
            </Provider>
        </>
    )
}

function TmpComp() {
    const useStyles = makeStyles((theme) => ({
        paper: {
            marginTop: theme.spacing(8),
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        }
    }));
    const classes = useStyles();

    const userData = useSelector((state) => state.userData)
    console.log(userData);
    return (
        <div className={classes.paper}>
            <Typography component="h1" variant="h5" fontWeight="fontWeightBold">

                <Box fontWeight="fontWeightBold">
                    Data
                </Box>
            </Typography>
            <Typography component="h3">
                <Box>
                    Name : {userData.name}
                </Box>
                <Box>
                    Email : {userData.email}
                </Box>
            </Typography>
        </div>
    )
}