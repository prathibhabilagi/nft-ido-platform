const Renting = () => {

    return (
        <div>
            <div className="bg-gray-900 h-screen">
                <div className="pt-12 px-4 sm:px-6 lg:px-8 lg:pt-10">
                    <div className="text-center">
                        <p className="mt-2 text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
                            NFT Renting
                        </p>
                    </div>
                    <div className="mt-8 grid grid-cols-1 gap-y-12 gap-x-8 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-10">
                        <div  className="group relative rounded-sm border-1 border-red-200/100">
                            <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                                <img className="w-full h-full object-center object-cover lg:w-full lg:h-full" src="/images/NFTDO.jpeg" />
                            </div>
                            <div className="mt-4 flex-col">                                
                                <p className="mt-3 text-md text-gray-500">Description</p>
                                <button className="block w-80 bg-gray-400 rounded-md py-3 text-sm font-semibold text-white text-center mt-5 mx-auto my-auto">Rent</button>
                            </div>
                        </div>
                        <div  className="group relative">
                            <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                                <img className="w-full h-full object-center object-cover lg:w-full lg:h-full" src="/images/NFTDO.jpeg" />
                            </div>
                            <div className="mt-4 flex-col">                                
                                <p className="mt-3 text-md text-gray-500">Description</p>
                                <button className="block w-80 bg-gray-400 rounded-md py-3 text-sm font-semibold text-white text-center mt-5 mx-auto my-auto">Rent</button>
                            </div>
                        </div>
                        <div  className="group relative">
                            <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                                <img className="w-full h-full object-center object-cover lg:w-full lg:h-full" src="/images/NFTDO.jpeg" />
                            </div>
                            <div className="mt-4 flex-col">                                
                                <p className="mt-3 text-md text-gray-500">Description</p>
                                <button className="block w-80 bg-gray-400 rounded-md py-3 text-sm font-semibold text-white text-center mt-5 mx-auto my-auto">Rent</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Renting