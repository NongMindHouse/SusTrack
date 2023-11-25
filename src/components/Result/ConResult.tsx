const ConResult = () => {

    return(
        <div className="bg-gray-50 relative" style={{ height: "100%", width: "100%" }}>
            {/* Top container */}
            <div className="h-[750px] w-full bg-white">
                <div className="w-full  h-[100%] grid grid-cols-[40%_1fr]">
                    <div className="w-full h-[100%] bg-white flex flex-col">
                        <p className="mt-3 ml-4 inline-block text-2xl text-blue-950"> รายงานผลทั้งหมด </p>
                        <div>ertyu</div>
                        <p className="mt-3 ml-4 inline-block text-2xl text-blue-950"> รายงานผลทั้งหมด </p>
                    </div>
                    <div className="w-full h-[100%] bg-gray-200">
                        <p className="mt-3 ml-4 inline-block text-2xl text-blue-950"> Text123456789 </p>
                    </div>
                </div>
            </div>
            {/* Down container */}
            <div className="h-screen w-full bg-gray-100">

            </div>
        </div>

    );
};

export default ConResult;