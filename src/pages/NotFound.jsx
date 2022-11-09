import Grid from "@mui/material/Grid";
import Typography from '@mui/material/Typography';
import Link from "@mui/material/Link";
import { Link as RouterLink } from "react-router-dom";
import { IconContext } from "react-icons";
import { WiRain } from "react-icons/wi";

const NotFound = () => {
  return (
    <div>
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
                    <WiRain />
                  </IconContext.Provider>
                </Grid>
                <Grid item
                      container
                      direction={"column"}
                      justifyContent={"center"}
                      alignItems={"center"}>
                  <Typography variant={"h5"} color={"inherit"}>
                    ERROR 404 | PAGE NOT FOUND
                  </Typography>
                  <Link color={"inherit"} 
                        aria-label={"menu"} 
                        component={RouterLink} 
                        to={"/main"}>
                          Go to main page
                  </Link>
                </Grid>
              </Grid>
            </div>
          </Grid>
    </div>
  )
};

export default NotFound;