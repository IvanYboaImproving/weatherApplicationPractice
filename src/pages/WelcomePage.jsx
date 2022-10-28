/* eslint-disable no-lone-blocks */
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';
{/* Link component, has to be inside of the Router 
component and outside the Switch, or inside the Route*/}

const WelcomePage = () => {
  return (
    <div>
        <Typography variant={"h2"}>Welcome</Typography>
        <div><Link to={"/main"}>Go to main page</Link></div>
        <div><Link to={"/city"}>Go to city</Link></div>
        <div><Link to={"/"}>Go to landing page</Link></div>
        <div><Link to={"/other"}>Go to not found</Link></div>
    </div>
  )
};


export default WelcomePage;