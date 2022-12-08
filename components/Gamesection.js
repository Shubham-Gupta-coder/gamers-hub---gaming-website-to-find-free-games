import React from 'react'
import Link from 'next/link'

const Gamesection = () => {
  return (
    <>
    
              <div className="text-4xl font-bold w-[80vw] border-l-4 border-l-cyan-500 px-5">
                Shooter Games
              </div>
          <div className="flex">
              
                  <div className="border border-slate-500 flex flex-col items-center justify-between rounded-2xl w-[300px] h-[400px]">
                    <h2 className="w-full text-center text-white text-2xl rounded-b-none rounded-xl bg-gradient-to-r py-5 from-cyan-500 to-blue-500 font-bold">
                      Learn Hacking
                    </h2>
                    <img
                      className="w-5/6 rounded-xl"
                      src="https://images.pexels.com/photos/6330644/pexels-photo-6330644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      alt="templates"
                    />
                    <Link href="/components">
                      <button className="text-center text-white rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 font-bold p-4 px-8 mb-4">
                        Learn Now
                      </button>
                    </Link>
                  </div>
            
            </div>
      </>
  )
}




export default Gamesection