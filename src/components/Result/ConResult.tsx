import BarPlot from './BarPlot';
import DoughnutChart from './Doughnut';
import { sdgColorList } from '@/utils/sdgColors';

const ConResult = () => {
    const indicatorData = {
        labels: ['Goal 1', 'Goal 2', 'Goal 3','Goal 4','Goal 5','Goal 6','Goal 7','Goal 8','Goal 9','Goal 10','Goal 11','Goal 12','Goal 13','Goal 14','Goal 15','Goal 16','Goal 17'],
        values: [1611, 1762,2591,946,500,1471,1734,390,484,312,567,337,774,1217,1659,532,772],
        colors:sdgColorList
      };

    const dataDim = {
        labels: ['มิติด้านสังคม', 'มิติด้านเศรษฐกิจ', 'มิติด้านสิ่งแวดล้อม','มิติด้านสันติภาพและสถาบัน','มิติด้านหุ้นส่วนการพัฒนา'],
        values: [7410, 4598, 4684, 532, 772],
        colors:["rgba(117, 89, 235, 1)","rgba(89, 235, 173, 1)","rgba(235, 111, 90, 1)","rgba(235, 218, 89, 1)","rgba(70, 180, 235, 1)"],
      };

    const dataByYear = {
            labels: ['2019', '2020', '2021','2022','2023'],
            datasets:[
                {
                    label: "จำนวนตัวชี้วัด",
                    values: [1815*11, 2360*11, 2856*11, 3400*11, 4128*11],
                    colors:["rgba(18, 107, 203, 0.92)"],
                },
            {
                label: "เป้าหมายของปี",
                values: [2200*11, 2600*11,  3000*11, 3600*11, 4000*11],
                colors:["rgba(68, 86, 106, 0.59)"],
            },
        ]
        };

    return(
        <div className="bg-gray-50 relative" style={{ height: "100%", width: "100%" }}>
            {/* Top container */}
            <div className="h-fit w-full bg-white">
                <div className="w-full h-fit grid md:grid-cols-[40%_1fr]">
                    <div className="w-full h-full bg-white flex flex-col items-center justify-start gap-y-10">
                        <p className='bg-gray-300 p-3 w-full text-center font-bold text-lg'>
                            ข้อมูลตัวชี้วัด SDGs ประจำปี 2023
                        </p>
                        <div className='px-10'>
                            <DoughnutChart data={indicatorData} width={500} height={250}/>
                        </div>
                        <p className='bg-gray-300 p-3 w-full text-center font-bold text-lg'>
                            ข้อมูลด้านมิติ SDGs ประจำปี 2023
                        </p>
                        <div className='px-10'>
                            <DoughnutChart data={dataDim} width={500} height={200}/>
                            {/* <PolarAreaChart data={dataDim}/> */}
                        </div>
                    </div>
                    
                    <div className="w-full h-full bg-gray-200 relative">
                        <p className='bg-gray-400 p-3 w-full text-center font-bold text-lg'>
                            ตารางจำนวนตัวชี้วัด SDGs เทียบกับเป้าหมายประจำปี 2019 - 2023
                        </p>
                        <div className="mt-3 mb-2 ml-4 overflow-clip p-10">
                            <BarPlot data={dataByYear} width={200} height={550}/>
                        </div>
                        <div className="absolute bottom-0 right-0 bg-navy text-white block text-sm rounded-full px-4 py-1 hover:scale-[1.03] hover:bg-blue-700 transition duration-100 m-2 cursor-pointer">
                            ดาวน์โหลดชุดข้อมูล
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConResult;