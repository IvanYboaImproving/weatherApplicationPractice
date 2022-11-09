import WelcomeScreen from "../components/welcomeScreen/WelcomeScreen";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { Link as RouterLink } from "react-router-dom";
import { IconContext } from "react-icons";
import { WiDaySunny } from "react-icons/wi";

const WelcomePage = () => {
  return (
    <div>
        <WelcomeScreen>
          <Grid container 
          direction={"column"} 
          justifyContent={"center"} 
          className={"full"}>
            <div className="highlight">
              <Grid item container xs={12}
              justifyContent={"center"}
              alignItems={"center"}>
                <Grid item>
                  <IconContext.Provider value={{ size:"6em" }}>
                    <WiDaySunny />
                  </IconContext.Provider>
                </Grid>
                <Grid item
                      container
                      direction={"column"}
                      justifyContent={"center"}
                      alignItems={"center"}>
                      <Typography variant={"h4"} color={"inherit"}>
                        Weather Application
                      </Typography>
                      <Link color={"inherit"} 
                            aria-label={"menu"} 
                            component={RouterLink} 
                            to={"/main"}>
                              Enter Main Page
                      </Link>
                </Grid>
              </Grid>
            </div>
          </Grid>
        </WelcomeScreen>
    </div>
  )
};


export default WelcomePage;