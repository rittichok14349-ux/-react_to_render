import React from 'react';
import Header from '../components/Header'; // ✅ ถูกต้อง

import Button from '../components/Button';
const Home = () => {
  return (
    <div>

<nav className="bg-blue-600 text-white fixed w-full z-50 shadow">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* LOGO / ชื่อ */}
        <div className="text-2xl font-bold tracking-wide">
          Rittichok
        </div>

        {/* เมนูด้านขวา */}
        <ul className="flex space-x-6 text-lg">
          {[
            { label: 'Home', id: 'home' },
            { label: 'About', id: 'about' },
            { label: 'Education', id: 'education' },
            { label: 'Work', id: 'work' },
            { label: 'Projects', id: 'projects' },
            { label: 'Skills', id: 'skills' },
            { label: 'Contact', id: 'contact' },
          ].map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className="hover:underline hover:text-gray-200 transition"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>

      {/* HOME Section */}
          <section id="home" className="h-screen flex items-center justify-center text-center bg-sky-100"
      style={{ backgroundImage: 'url(https://c4.wallpaperflare.com/wallpaper/108/140/869/digital-digital-art-artwork-fantasy-art-drawing-hd-wallpaper-preview.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className='container mx-auto p-4'>
            <h1 className="text-5xl font-bold text-white">สวัสดีครับ ผม Rittichok Somon</h1>
            <p className="mt-4 text-lg text-white">นักศึกษาประกาศนียบัตรวิชาชีพชั้นสูง </p>
            <Button nameButton="เพิ่มเติมเกี่ยวกับฉัน" />
            </div>
          </section>

      {/* ABOUT Section */}
    {/* About Me */}
    <section id="about" className="py-20 bg-white">
  <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center">
    
    {/* รูปโปรไฟล์ */}
    <div className="w-40 h-40 md:w-64 md:h-64 rounded-full overflow-hidden mx-auto md:mx-0 mb-8 md:mb-0">
      <img
        src="/images/S__9846787.jpg" // เปลี่ยนเป็น path รูปโปรไฟล์ของคุณ
        alt="Rittichok"
        className="w-full h-full object-cover"
      />
    </div>

    {/* ข้อความเกี่ยวกับฉัน */}
    <div className="md:ml-12 text-center md:text-left max-w-xl">
      <h2 className="text-3xl font-bold mb-4">เกี่ยวกับฉัน</h2>
      <p className="text-lg mb-2">
        <strong>ชื่อ:</strong> ฤทธิ์ธิโชค โสมล / Mr. Rittichok Somon
      </p>
      <p className="text-lg mb-2">
        <strong>อาชีพ:</strong> นักศักษา, Front-End 
      </p>
      <p className="text-gray-700 mb-6">
        ฉันเป็นนักพัฒนาเว็บไซต์ที่มีความหลงใหลในการสร้างเว็บไซต์ที่ใช้งานง่ายและดูทันสมัย มีประสบการณ์ใน HTML, CSS, JavaScript และ React
      </p>

      {/* ปุ่ม */}
      <a
        href="#projects"
        className="bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 px-8 rounded-full text-lg font-semibold shadow-lg hover:opacity-90 transition"
      >
        ดูโปรเจกต์ของฉัน
      </a>
    </div>
  </div>
</section>


    {/* Education */}
   <section id="education" className="bg-gray-100 py-20 text-center">
  <div className="container mx-auto px-4">
    
    {/* หัวข้อหลัก */}
    <h2 className="text-3xl font-bold mb-4">การศึกษา</h2>
    <p className="text-gray-700 mb-12 max-w-3xl mx-auto">
ฉับจบการศึกษาจากวัทยาลัยการอาชีพห้วยยอด จังหวัดตรัง ในสาขาเทคโนโลยีสารสนเทศ (IT) และกำลังศึกษาต่อในระดับประกาศนียบัตรวิชาชีพชั้นสูง 
    </p>

    {/* กล่องเนื้อหาแบบ grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      
      {/* กล่อง 1 */}
      <div className="bg-white p-6 rounded-lg shadow-md text-left">
        <h3 className="text-xl font-bold mb-2">ประวัติส่วนตัว</h3>
        <p className="text-gray-700">
          ฉันเกิดและเติบโตในเมืองกรุงเทพฯ และมีความสนใจในเทคโนโลยีตั้งแต่เด็กๆ ที่ชื่นชอบในการเรียนรู้และพัฒนาทักษะด้านต่างๆ โดยเฉพาะในการเขียนโปรแกรม
        </p>
      </div>

      {/* กล่อง 2 */}
      <div className="bg-white p-6 rounded-lg shadow-md text-left">
        <h3 className="text-xl font-bold mb-2">ความสามารถ</h3>
        <p className="text-gray-700">
          ฉันมีทักษะในการเขียนโปรแกรมด้วยภาษา HTML, CSS, JavaScript และ React รวมถึงการออกแบบ UI/UX และการทำงานร่วมกับเครื่องมือต่างๆ
        </p>
      </div>

      {/* กล่อง 3 */}
      <div className="bg-white p-6 rounded-lg shadow-md text-left">
        <h3 className="text-xl font-bold mb-2">เป้าหมายในอาชีพ</h3>
        <p className="text-gray-700">
          เป้าหมายของฉันคือการเป็นนักพัฒนาเว็บไซต์ที่สามารถสร้างโปรเจกต์ที่มีประสิทธิภาพ และให้ความสำคัญกับประสบการณ์ผู้ใช้ พร้อมทั้งการเรียนรู้เทคโนโลยีใหม่ๆ อย่างต่อเนื่อง
        </p>
      </div>

      {/* กล่อง 4 */}
      <div className="bg-white p-6 rounded-lg shadow-md text-left">
        <h3 className="text-xl font-bold mb-2">สิ่งที่ฉันชื่นชอบ</h3>
        <p className="text-gray-700">
          นอกจากการพัฒนาเว็บไซต์แล้ว ฉันยังสนใจในเรื่องของการเล่นเกม การเดินทางท่องเที่ยว และการศึกษาเทคโนโลยีใหม่ๆ
        </p>
      </div>

    </div>
  </div>
</section>


    {/* Work Experience */}
<section id="work" className="py-20 bg-white text-center">
  <div className="container mx-auto px-4">
    
    {/* หัวข้อหลัก */}
    <h2 className="text-3xl font-bold mb-4">ประสบการณ์การทำงาน</h2>
    <p className="mb-12 text-gray-700">
      ฉันเคยฝึกหัดที่ ดีบิต คอมเซ็นเตอร์
    </p>

    {/* กล่องเดียวตรงกลาง */}
    <div className="flex justify-center">
      <div className="bg-white p-6 rounded-lg shadow-md text-left max-w-xl w-full">
        <h3 className="text-xl font-bold mb-1">ตำแหน่ง: นักศึกษาฝึกงาน</h3>
        <p className="font-medium text-gray-800 mb-1">บริษัท ดีบิต คอมเซ็นเตอร์</p>
        <p className="text-sm text-gray-600 mb-4">ระยะเวลา: 20 ตุลาคม 2023 - กุมภาพันธ์ 2024</p>
        
        <h4 className="font-bold mb-2">หน้าที่และความรับผิดชอบ:</h4>
        <ul className="list-disc list-inside space-y-1 text-gray-700">
          <li>พัฒนาเว็บไซต์ให้มีความเร็วและความปลอดภัยสูง</li>
          <li>ออกแบบ UX/UI และทำงานร่วมกับทีมพัฒนาระบบ</li>
          <li>ดูแลและปรับปรุงเว็บไซต์ที่มีอยู่แล้ว</li>
          <li>จัดการฐานข้อมูลและอัปเดตเว็บไซต์ตามความต้องการของลูกค้า</li>
        </ul>
      </div>
    </div>

  </div>
</section>



    {/* Projects */}
   <section id="projects" className="py-20 text-center bg-white">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl font-bold mb-8">Projects</h2>

    <div className="max-w-xl mx-auto border p-6 rounded shadow">
      <h3 className="text-2xl font-semibold mb-2">Portfolio Website</h3>
      <p className="text-gray-700 mb-4">เว็บไซต์พอร์ตโฟลิโอ ใช้ React + Tailwind</p>
      
      <div className="space-x-4">
        <a
          href="https://github.com/yourusername/your-portfolio"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700 transition"
        >
          GitHub
        </a>

        <a
          href="https://webstd.huaiyot.ac.th/dbtportforlio/login.php"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700 transition"
        >
          Live Demo
        </a>
      </div>
    </div>
  </div>
</section>


    {/* Skills */}
    <section id="skills" className="py-12 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-4">Skills</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {['HTML','CSS','JavaScript','React','Tailwind','Git'].map(skill => (
          <span key={skill} className="bg-blue-100 text-blue-800 px-4 py-2 rounded">{skill}</span>
        ))}
      </div>
    </section>
    {/* Contact */}
    <section id="contact" className="py-20 bg-gray-100 text-center">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl font-bold mb-4">ติดต่อฉัน</h2>
    <p className="mb-12 text-gray-700">
      หากคุณมีคำถามหรือต้องการร่วมงาน ติดต่อฉันได้ผ่านช่องทางต่างๆ ดังนี้:
    </p>

    {/* Grid ไอคอนติดต่อ */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
      
      {/* Email */}
      <div className="flex flex-col items-center space-y-2">
        <span className="text-4xl text-purple-600">
          <i className="fas fa-envelope"></i>
        </span>
        <p className="text-gray-800">Rittichok14349@gmail.com</p>
      </div>

      {/* Phone */}
      <div className="flex flex-col items-center space-y-2">
        <span className="text-4xl text-purple-600">
          <i className="fas fa-phone"></i>
        </span>
        <p className="text-gray-800">+6698 151 0946</p>
      </div>

      {/* LinkedIn */}
      <div className="flex flex-col items-center space-y-2">
        <span className="text-4xl text-purple-600">
          <i className="fab fa-linkedin"></i>
        </span>
        <p className="text-gray-800">LinkedIn rittichok </p>
      </div>

      {/* GitHub */}
      <div className="flex flex-col items-center space-y-2">
        <span className="text-4xl text-purple-600">
          <i className="fab fa-github"></i>
        </span>
        <p className="text-gray-800">GitHub rittichok</p>
      </div>

      {/* แบบฟอร์ม */}
      <div className="flex flex-col items-center space-y-2">
        <span className="text-4xl text-purple-600">
          <i className="fas fa-comment-dots"></i>
        </span>
        <p className="text-gray-800">ติดต่อผ่านแบบฟอร์ม</p>
      </div>
    </div>
  </div>
</section>

  </div>
  );
};

export default Home;
