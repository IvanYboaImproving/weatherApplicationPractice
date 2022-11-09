import { useRef, useEffect, useState } from "react";
import PropTypes from "prop-types";
import Clouds from "vanta/dist/vanta.clouds.min";
import * as THREE from "three";

const WelcomeScreen = ({ children }) => {
  const myRefDiv = useRef(null); //Initial value
  const [vanta, setVanta] = useState(0); //vanta equals to 0

  //On the first render, this is null, because it was set above
  //console.log("My ref is: "+myRefDiv.current);

  //The useEffect is invoking after the second render
  //And the value changes to the <div> element
  useEffect(() => {
    //console.log("My ref is (useEffect): "+myRefDiv.current);
    //With the if clause we make sure that only hapen once
    if (!vanta) {
      //Cloud efect turn on
      setVanta(Clouds({
        THREE,
        //el its for the element, myRefDiv is the Div html
        el: myRefDiv.current
      }));
      //To stop the clouds efect when we are out of this screen
      return () => {
        //Destroy the resources taken by vanta
        if(vanta){
          vanta.destroy();
        }
      }
    }
  }, [vanta]);

  return (
    <div className={"full"} ref={myRefDiv}>
        {children}
    </div>
  )
};

WelcomeScreen.propTypes = {
  children: PropTypes.node,
};

export default WelcomeScreen;