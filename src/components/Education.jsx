import React from 'react'

function Education() {
  return (
    <section id="education" className="py-10">
    <div className="container mx-auto px-6 ">
      <h2 className="text-2xl font-bold text-slate-800 mb-6">Education</h2>
      
      <div className="space-y-8">
        {/* University of Dar es Salaam */}
        <div className="flex flex-col md:flex-row md:items-center justify-between">
          <div>
            <div className="text-lg font-semibold text-slate-800">University of Dar es Salaam</div>
            <p className="text-gray-600">Bachelor's Degree in Business Information Technology</p>
          </div>
          <div className="text-gray-500 mt-1 md:mt-0 text-[13px]">2023 - 2026</div>
        </div>
        
        {/* Sokoine University of agriculture */}
        <div className="flex flex-col md:flex-row md:items-center justify-between">
          <div>
            <div className="text-lg font-semibold text-slate-800">Mbeya University of Science and Technology</div>
            <p className="text-gray-600">Diploma In Computer Science</p>
          </div>
          <div className="text-gray-500 mt-1 md:mt-0 text-[13px]">2023 - 2026</div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Education
