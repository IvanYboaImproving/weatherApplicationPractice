import AppFrame from "./AppFrame";
import { BrowserRouter as Router } from "react-router-dom";
import Paper from "@mui/material/Paper";

export default {
    title: "AppFrame",
    component: AppFrame
};

export const AppFrameExample = () => {
    return(
        <Router>
            <AppFrame>
                <Paper elevation={3}>
                    unos pedillos
                </Paper>
            </AppFrame>
        </Router>
    )
};