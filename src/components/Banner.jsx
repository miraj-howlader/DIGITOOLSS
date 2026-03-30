import React from 'react'

const Banner = () => {
  return (
    <div className="w-full bg-linear-to-r from-[#4F39F6] to-purple-700 py-10">
      
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 text-center text-white gap-8">
          
          {/* Item 1 */}
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              50k+
            </h1>
            <p className="mt-2 text-sm sm:text-base">Active Users</p>
          </div>

          {/* Item 2 */}
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              200+
            </h1>
            <p className="mt-2 text-sm sm:text-base">Premium Tools</p>
          </div>

          {/* Item 3 */}
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              4.9
            </h1>
            <p className="mt-2 text-sm sm:text-base">Rating</p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Banner