import { Link } from "react-router-dom";
import Typography from '@mui/material/Typography';

const NotFound = () => {
  return (
    <div>
      <Typography variant={"h2"}>Not Found</Typography>
        <div><Link to={"/main"}>Go to main page</Link></div>
    </div>
  )
};

export default NotFound;