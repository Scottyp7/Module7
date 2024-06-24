'use client'


import { useState, useEffect } from "react";
// Renders a digital time that updates every second
function Clock() {
    const [date, setDate] = useState(new Date());
   
    useEffect(() => { // first arg is usually an arrow function
        let timerInterval = setInterval(() => tick(), 1000);
        console.log('Clock component mounted');

        return () => {
            console.log('clock unmounted')
            clearInterval(timerInterval)
        }
            
        
    }, []); // second arg is an array of dependencies
   
    const tick = () => {
        setDate(new Date());
        console.log('tick'); // track the effect frequency
    };
    return (
        <div className="Clock">
            <h1>Welcome to the Bitcoin Dashboard</h1>
            <select>5</select>
            <h4>World Clock: {date.toLocaleTimeString()}</h4>
            
        </div>
    );
}

export default Clock