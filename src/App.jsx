import { useState } from 'react'
import data from '../data.json'

export default function App() {
  const [selectedTimeframe, setSelectedTimeframe] = useState('weekly')

  // function to change timeframe
  const handleTimeframeChange = (timeframe) =>{
  setSelectedTimeframe(timeframe)
  }

  return (
    <main className="grid place-items-center min-h-dvh bg-very-dark-blue py-10">
      <div className="w-full flex sm:flex-row px-8 sm:items-center justify-center flex-col text-white font-rubik">
        <div className="w-full justify-center flex gap-3 flex-col sm:flex-row flex-wrap sm:gap-8">

          {/* User Div with toggle buttons */}
          <div className="bg-dark-blue rounded-[.8rem] sm:w-full lg:w-[18%]">
            <div className="flex sm:flex-col gap-3 bg-blue px-6 py-4 sm:pr-16 sm:p-8 rounded-[.8rem] sm:pb-[4rem]">
              <img
                src="./src/assets/images/image-jeremy.png"
                alt="user avatar"
                className="border-[3px] rounded-full w-12 sm:w-20 sm:mb-6" />
                <div>
                  <span className="font-light text-sm ">Report for</span>
                  <p className="sm:text-[2rem] font-light sm:w-28 sm:leading-10">Jeremy Robson</p>
                </div>
            </div>

            <div className="flex justify-between py-4 px-6 sm:flex-col sm:items-start sm:gap-4 sm:py-8">
              <button
                onClick={() => handleTimeframeChange('daily')} 
                className="text-sm sm:text-base text-desaturated-blue focus:text-white hover:text-gray-300">Daily</button>
              <button
                onClick={() => handleTimeframeChange('weekly')} 
                className="text-sm sm:text-base text-desaturated-blue focus:text-white hover:text-gray-300">Weekly</button>
              <button
                onClick={() => handleTimeframeChange('monthly')} 
                className="text-sm sm:text-base text-desaturated-blue focus:text-white hover:text-gray-300">Monthly</button>
            </div>
          </div>


          {/* timecard container */}
          <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:m-0 sm:w-full lg:w-fit'>
            {data.map((item, index) => (
              <div key={index} className='relative mt-8'>

              {/* background div */}
              <div 
                className={`absolute bg-no-repeat w-full h-[3rem] rounded-[.6rem] top-[-2rem] left-0'
                ${item.title === 'Work' ? 'bg-work bg-work-bg' : 
                  item.title === 'Play' ? ' bg-play bg-play-bg' : 
                  item.title === 'Study' ? 'bg-study bg-study-bg' : 
                  item.title === 'Exercise' ? 'bg-exercise bg-exercise-bg' : 
                  item.title === 'Social' ? 'bg-social bg-social-bg' : 
                  item.title === 'Self Care' ? 'bg-self-care bg-care-bg' : 'bg-gray-200'
                  }  
                `} 
                style={{
                      backgroundSize: '30%',
                      backgroundPosition: '90% 50%',
                 }}
              ></div>

                {/* card-div */}
                <div 
                  className='bg-dark-blue p-6 rounded-[.6rem] relative mt-1'
                  style={{
                    zIndex: '1'
                }}>                    
                   <div className='flex items-center sm:gap-[6rem] justify-between mb-4'>
                    <h1>{item.title}</h1>
                    <div className='flex gap-1'>
                      <div className='w-1 h-1 bg-white rounded-full'></div>
                      <div className='w-1 h-1 bg-white rounded-full'></div>
                      <div className='w-1 h-1 bg-white rounded-full'></div>
                    </div>
                   </div>

                   <div className='flex justify-between sm:flex-col sm:gap-0 sm:items-start items-center gap-4'>
                    <p className='sm:text-6xl text-3xl font-light sm:mb-4'>{item.timeframes[selectedTimeframe].current}hrs</p>
                    <p className='text-sm'>Last Week - {item.timeframes[selectedTimeframe].previous}hrs</p>
                   </div>
                </div>
              </div>
            ))}            
          </div>

        </div>
      </div>
    </main>
  )
}