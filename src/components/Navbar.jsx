const Navbar = () => {
    return (
        <div className="py-4 px-6 flex justify-between items-center">
            <div className="p-4 bg-blue-800 rounded-xl">
                <h1 className="text-lg text-white">Covid Tracker</h1>
            </div>
            <h1>Updates Every 15 minutes</h1>
            <div className="p-4 bg-blue-800 rounded-xl flex gap-4 cursor-pointer hover:bg-blue-700 ease-in-out duration-200">
                <img src="/github-octocat-svgrepo-com.svg" alt="Github Icon" className="w-[30px] h-[30px]" />
                <h1 className="text-lg text-white"><a href="https://github.com/SudhanshuPanthri/covid-tracker-india" target="_blank" rel="noreferrer">Github</a></h1>
            </div>
        </div>
    )
}

export default Navbar