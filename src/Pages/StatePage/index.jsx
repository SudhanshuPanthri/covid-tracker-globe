import { useState, useEffect } from "react";
import { IoSearchCircle } from "react-icons/io5";
import { PiSpinnerBold } from "react-icons/pi";

const StatePage = () => {
    const [data, setData] = useState();
    // const url = "https://data.covid19india.org/v4/min/data.min.json";
    // const options = {
    //     method: 'GET',
    //     // mode: 'no-cors'
    // }

    // const url = 'https://covid-19-statistics.p.rapidapi.com/regions';
    // const options = {
    //     method: 'GET',
    //     headers: {
    //         'X-RapidAPI-Key': '26a8d052edmsha2713367865c9a8p16d580jsn07ba66450d83',
    //         'X-RapidAPI-Host': 'covid-19-statistics.p.rapidapi.com'
    //     }
    // };

    const url = 'https://covid-193.p.rapidapi.com/statistics';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '26a8d052edmsha2713367865c9a8p16d580jsn07ba66450d83',
            'X-RapidAPI-Host': 'covid-193.p.rapidapi.com'
        }
    };
    const fetchData = async () => {
        try {
            const urlResponse = await fetch(url, options);
            const result = await urlResponse.json();
            setData(result.response);
            console.log(data);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        fetchData();
    });

    if (data === undefined) {
        return (
            <div className="flex items-center justify-center h-[80vh]">
                <PiSpinnerBold className="animate-spin w-[40px] h-[40px] fill-current text-white" />
            </div>
        )
    }

    return (
        <div className="text-xl py-4 px-6 flex flex-col gap-4">
            <div className="flex gap-6 items-center justify-center my-6">
                <input type="text" name="" id="" className="py-2 px-4 border-none outline-none text-[16px]" placeholder="Search By Country Name" />
                <div className="cursor-pointer">
                    <IoSearchCircle className="w-[40px] h-[40px] hover:scale-125 ease-in-out duration-200" />
                </div>
            </div>
            {data.map((item, index) => (
                <div key={index} className="bg-gray-900 py-6 px-4 flex justify-between items-center rounded-lg">
                    <div className="w-[15%]">
                        <h1>Continent</h1>
                        <h1>{item.continent}</h1>
                    </div>
                    <div className="w-[20%]">
                        <h1>Country</h1>
                        <h1>{item.country}</h1>
                    </div>
                    <div>
                        <h1>Active Cases</h1>
                        <h1>{item.cases.active}</h1>
                    </div>
                    <div>
                        <h1>Recovered</h1>
                        <h1>{item.cases.recovered}</h1>
                    </div>
                    <div>
                        <h1>Total</h1>
                        <h1>{item.cases.total}</h1>
                    </div>
                    <div>
                        <h1>Deaths</h1>
                        {item.deaths.total == null ? <h1>0</h1> : <h1>{item.deaths.total}</h1>}
                    </div>
                </div>
            ))}
        </div>
    )
}


export default StatePage;