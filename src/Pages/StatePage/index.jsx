import { useState, useEffect } from "react";
import { IoSearchCircle } from "react-icons/io5";
import { PiSpinnerBold } from "react-icons/pi";

const StatePage = () => {
    const [data, setData] = useState();
    const [country, setCountry] = useState('');
    const [filteredData, setFilteredData] = useState();

    const url = 'https://covid-193.p.rapidapi.com/statistics';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': import.meta.env.VITE_API_KEY,
            'X-RapidAPI-Host': import.meta.env.VITE_API_HOST
        }
    };
    const fetchData = async () => {
        try {
            const urlResponse = await fetch(url, options);
            const result = await urlResponse.json();
            setData(result.response);
        } catch (error) {
            console.error(error);
        }
    }

    const filterCountryData = () => {
        const filter = data.filter((item) => {
            return item.country.toLowerCase() === country.toLowerCase();
        })
        setCountry('');
        setFilteredData(filter);
    }

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        setData(filteredData);
    }, [filteredData])


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
                <input type="text" name="country" id="country" className="py-2 px-4 border-none outline-none text-[16px]" placeholder="Search By Country Name" onChange={(e) => setCountry(e.target.value)} />
                <div className="cursor-pointer">
                    <IoSearchCircle className="w-[40px] h-[40px] hover:scale-125 ease-in-out duration-200" onClick={filterCountryData} />
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