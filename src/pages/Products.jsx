import React from 'react'
import Card from '../components/Card' // ตรวจสอบให้แน่ใจว่า Path ไปยัง Card component ถูกต้อง

// สมมติว่านี่คือข้อมูลสินค้าของเรา (ในโปรเจกต์จริง อาจจะดึงมาจากไฟล์อื่นหรือ API)
const productsData = [
  {
    id: 1,
    title: 'อาหารสุนัขพรีเมียม',
    description: 'สูตรพิเศษสำหรับสุนัขทุกสายพันธุ์ อุดมด้วยสารอาหารครบถ้วน',
    imageUrl: 'https://images.pexels.com/photos/7210748/pexels-photo-7210748.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 2,
    title: 'ของเล่นขัดฟัน',
    description: 'ช่วยทำความสะอาดฟันและลดคราบหินปูน สนุกและปลอดภัย',
    imageUrl: 'https://images.pexels.com/photos/10668463/pexels-photo-10668463.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 3,
    title: 'สายจูงไนลอนทนทาน',
    description: 'ผลิตจากไนลอนคุณภาพสูง แข็งแรงทนทาน เหมาะกับการเดินเล่น',
    imageUrl: 'https://images.pexels.com/photos/7732296/pexels-photo-7732296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 4,
    title: 'ที่นอนนุ่มพิเศษสำหรับสุนัข',
    description: 'มอบการพักผ่อนที่สบายที่สุดสำหรับเพื่อนสี่ขาของคุณ ซักทำความสะอาดได้',
    imageUrl: 'https://images.pexels.com/photos/8956463/pexels-photo-8956463.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  }
];


const Products = () => {
  return (
    <div className="container mx-auto my-8 p-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        สินค้าของเราสำหรับเพื่อนสี่ขา
      </h2>

      {/* Grid Layout สำหรับแสดงผลสินค้า */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {productsData.map((product) => (
          <Card 
            key={product.id}
            title={product.title}
            description={product.description}
            imageUrl={product.imageUrl}
          />
        ))}
      </div>
    </div>
  )
}

export default Products