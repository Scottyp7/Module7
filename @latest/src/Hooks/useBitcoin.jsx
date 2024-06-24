import { useReducer } from "react";
import { useState } from "react";
import { useEffect } from "react";
// hooks are usually named exports rather than default

export function useBitcoin(currencies) {
    
    // state variable for holding fetched json data
    //const [data, setData] = useState(null);
    const [data, setData] = useState([])


        useEffect(() => {
        {
            let ignore = false;
            const Promises = currencies.map(async currency => {
                const data = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}`)
                return data.json()
            })
            Promise.all(Promises)
                .then(json => {
                    if (!ignore) {
                        setData(json);
                    }
                });

            // cleanup function, in case url changes before complete
            return () => {
                ignore = true;
            };
        }
    }, [currencies]); // re-run effect if url changes

    // return the data fetched from the given url
    return data;
}