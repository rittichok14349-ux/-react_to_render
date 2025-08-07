import React from 'react'

const About = () => {
  return (
    <div className="container mx-auto my-8 p-6">
      <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col md:flex-row items-center gap-8">
        {/* Image Section */}
        <img 
          src="https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
          alt="สุนัขสองตัวกำลังเล่นกันบนพื้นหญ้า" 
          className="w-full md:w-1/2 h-auto object-cover rounded-lg shadow" 
        />
        
        {/* Text Section */}
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            เรื่องราวของเราและผองเพื่อนสี่ขา
          </h2>
          <p className="text-gray-600 leading-relaxed">
            พวกเราคือกลุ่มคนผู้หลงใหลในความน่ารักและความซื่อสัตย์ของสุนัข ภารกิจของเราคือการสร้างชุมชนสำหรับคนรักสุนัขเพื่อแบ่งปันความรู้, ประสบการณ์ และส่งมอบความรักให้กับเพื่อนที่ดีที่สุดของมนุษย์ เราเชื่อว่าสุนัขทุกตัวสมควรได้รับความรักและบ้านที่อบอุ่น เราจึงมุ่งมั่นที่จะเป็นส่วนหนึ่งในการสร้างสรรค์โลกที่ดีขึ้นสำหรับพวกเขา
          </p>
        </div>
      </div>
    </div>
  )
}

export default About