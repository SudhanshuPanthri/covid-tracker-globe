import { useState, useEffect } from "react";

const StatePage = () => {

    const [data, setData] = useState();
    const url = "https://data.covid19india.org/v4/min/data.min.json";
    const options = {
        method: 'GET'
    }

    const fetchData = async () => {
        try {
            const response = await fetch(url, options);
            const result = await response.json();
            setData(result);
            console.log(data);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <div className="text-xl font-bold bg-red-400">index</div>
    )
}


export default StatePage;