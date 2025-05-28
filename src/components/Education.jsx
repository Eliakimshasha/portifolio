import React from 'react'

function Education() {
  return (
    <section id="education" className="py-10">
      
    <div className="container mx-auto px-6 relative">
       <div className="absolute -top-7 right-3 w-20 h-20 grid grid-cols-5 gap-1 opacity-20">
            {[...Array(25)].map((_, i) => (
              <div
                key={`dot-tl-${i}`}
                className="w-[2px] h-[2px] md:w-[3px] md:h-[3px] rounded-full bg-[#145C3A]"
              ></div>
            ))}
          </div>
      <h2 className="text-2xl font-bold text-slate-800 mb-6">Education</h2>
      
      <div className="space-y-8">
        {/* University of Dar es Salaam */}
        {/* <div className="flex flex-col md:flex-row md:items-center justify-between">
          <div>
            <div className="text-lg font-semibold text-slate-800">University of Dar es Salaam</div>
            <p className="text-gray-600">Bachelor's Degree in Business Information Technology</p>
          </div>
          <div className="text-gray-500 mt-1 md:mt-0 text-[13px]">2023 - 2026</div>
        </div> */}
        
        {/* Sokoine University of agriculture */}
        <div className="flex flex-col md:flex-row md:items-center justify-between">
          <div>
            <div className="text-lg font-semibold text-slate-800">Mbeya University of Science and Technology</div>
            <p className="text-gray-600">Diploma In Computer Science</p>
          </div>
          <div className="text-gray-500 mt-1 md:mt-0 text-[13px]">2023 - current</div>
        </div>

         <div className="flex flex-col md:flex-row md:items-center justify-between">
          <div>
            <div className="text-lg font-semibold text-slate-800">Balili secondary school</div>
            {/* <p className="text-gray-600">Bachelor's Degree in Business Information Technology</p> */}
          </div>
          <div className="text-gray-500 mt-1 md:mt-0 text-[13px]">2019 - 2022</div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Education
