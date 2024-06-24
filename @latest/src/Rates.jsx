import { useState, useEffect } from "react";
import { useData } from "./Hooks/useData";
import { useNavigate, Outlet } from 'react-router-dom'

const currencies = ['USD', 'AUD', 'NZD', 'GBP', 'EUR', 'SGD'];

function Rates() {

    const [currency, setCurrency] = useState(currencies[0]);
    const [rate, setRate ] = useState("")
   //fetch makes a network request to the following URL
    const [activity, setActivity] = useState()
    
    const navigate = useNavigate();


    const data = useData(`https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}`)    
/*    const apiFetch = fetch(`https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}`)
        .then((response) => response.json())    //response from the api and you turn it into a json
        .then((data) => {  //json structure 
                setRate(data.bitcoin[currency.toLowerCase()]) 
       })  */

 {/*        useEffect(() => {
            const refresh = setInterval(apiFetch, 5000);
            console.log("data refreshed")
                return () => clearInterval(refresh);
            }, []);*/}

    const options = currencies.map(curr => <option value={curr} key={curr}>{curr}</option>);
    console.log(data)
    return (
        <div className="BitcoinRates componentBox">
            <h3>Bitcoin Exchange Rate</h3>
            <label>Choose currency:
                <select value={currency} onChange={e => setCurrency(e.target.value)}>
                    {options}
                </select>
            </label>
            <h3>Rate:
                {data && data.bitcoin[currency.toLowerCase()]}
            </h3>                
            <button onClick={() => navigate(-1)}>
                Back</button>


</div> 
) } 

export default Rates