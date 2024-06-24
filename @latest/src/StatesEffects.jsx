import { useState, useEffect } from "react";

export default function StateChanger() {


    const [windowWidth, setwindowWidth] = useState(window.innerWidth)

    const handleResize = () => {
        setwindowWidth(window.innerWidth)
    }

    useEffect(() => { /* when the window is resized it calls the handle resize function from line 8*/
        window.addEventListener('resize', handleResize)

        return () => { /*If you add a return to a useEffect Hook it will un mounts the useeffect from the application*/
            window.removeEventListener('resize',handleResize)}
    },[] ) /* the empty array means the function is only called when it is mounted. */
    
    return(

            <h2>The Current Window Size is: {windowWidth}</h2>
            
    
)  }

