"use client";
import './globals.css'; // Tailwind CSS 文件路径
import React from 'react';
import { TypeAnimation } from 'react-type-animation';

export default function Page() {
  return (
    <main>
      {/* 第一个板块，左右分区布局 */}
      <section
        id="me"
        className="h-screen bg-gradient-to-b from-purple-300 via-blue-200 to-white flex items-center justify-center px-48"
      >
        {/* 左侧：图片和基本信息 */}
        <div className="flex-1 flex flex-col items-center text-center">
          <img
            src="/qian1.jpg" // 替换为你的图片路径
            alt="Your Name"
            className="w-72 h-72 rounded-full object-cover mb-6"
          />
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Qian Shiru</h1>
          <p className="text-lg text-gray-600" style={{ fontFamily: 'content2-font' }}>Student of Food and Nutritional Science</p>
          <a
            href="https://www.must.edu.mo/"
            target="_blank"
            className="text-blue-500 font-semibold mt-2" style={{ fontFamily: 'content2-font' }}
          >
            Macau University of Science and Technology
          </a>
          
          {/* 社交图标 */}
          <div className="flex gap-4" style={{ marginTop: '20px' }}>
            {/* Instagram 图标 */}
            <a
              href="https://www.instagram.com/shiru_0205/profilecard/?igsh=MTYxN2JxNTRhM3ZhdA=="
              target="_blank"
              rel="noopener noreferrer"
              className="relative group"
            >
              <img
                src="/icons/instagram-light.svg"
                alt="Instagram"
                className="w-12 h-12 group-hover:hidden" // 默认显示明亮版
              />
              <img
                src="/icons/instagram-dark.svg"
                alt="Instagram"
                className="w-12 h-12 hidden group-hover:block" // 悬停显示暗黑版
              />
            </a>

            {/* Facebook 图标 */}
            <a
              href="https://www.facebook.com/profile.php?id=100069912602473&mibextid=LQQJ4d"
              target="_blank"
              rel="noopener noreferrer"
              className="relative group"
            >
              <img
                src="/icons/facebook-light.svg"
                alt="Facebook"
                className="w-12 h-12 group-hover:hidden"
              />
              <img
                src="/icons/facebook-dark.svg"
                alt="Facebook"
                className="w-12 h-12 hidden group-hover:block"
              />
            </a>

            {/* Tiktok 图标 */}
            <a
              href="https://www.tiktok.com/@shiru0205?_t=8rZQ2aFHhSq&_r=1"
              target="_blank"
              rel="noopener noreferrer"
              className="relative group"
            >
              <img
                src="/icons/tiktok-light.svg"
                alt="Tiktok"
                className="w-12 h-12 group-hover:hidden"
              />
              <img
                src="/icons/tiktok-dark.svg"
                alt="Tiktok"
                className="w-12 h-12 hidden group-hover:block"
              />
            </a>
          </div>

        </div>

        {/* 右侧：自我介绍 */}
        <div className="flex-1 text-left">

          <h2 className="text-5xl text-gray-800 mb-6 fontFamily= nav-font">About Me</h2>
            
          {/* 使用 TypeAnimation 库实现打字效果 */}
          <p className="text-2xl text-gray-700 first-font leading-relaxed mb-4">
            <TypeAnimation
              sequence={[
                'Do what you want, and fight for what you want.', // 英文部分
                2000, // 停顿时间
                '做你想做的事，为你想要的而奋斗。', // 中文部分
                2000, // 停顿时间
                () => console.log('Sequence completed!'), // 完成后的回调
              ]}
              speed={70} // 打字速度
              style={{ fontSize: '2rem', fontWeight: 'bold' }} // 样式
              repeat={Infinity} // 循环播放
            />
          </p>

          <p className="text-lg text-gray-700 leading-relaxed fontFamily= content-font" >
            Welcome to my channel, I am Qian Shiru, you can also call me Sean, a 21st year undergraduate student from Macau University of Science and Technology 
            majoring in Food and Nutritional Sciences. 
            My future research direction is in the field of food science and public health. 
            If you want to know more about me, please click your mouse!
          </p>
          {/* 兴趣和教育 */}
          <div className="mt-6">
            <h3 className="text-xl font-bold text-gray-800 mb-2">Interests</h3>
            <ul className="list-disc pl-5 text-gray-700" style={{ fontFamily: 'content2-font' }}>
              <li>Reading and Writing</li>
              <li>Travel</li>
              <li>Photography</li>
            </ul>
            <h3 className="text-xl font-bold text-gray-800 mt-6 mb-2">Education</h3>
            <p className="text-gray-700">
              🎓 BSc in Food and Nutritional Science, 2021 <br />
              <a className="text-gray-500">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Macau University of Science and Technology
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* 第二个板块 */}
      <section id="experience" className="bg-white flex flex-col items-center text-center py-16">
  <h1 className="text-5xl font-bold text-gray-800 mb-12 mt-8 fontFamily= nav-font">Experience</h1>
  <div className="relative w-full max-w-5xl">
    {/* 时间线主轴 */}
    <div className="absolute w-1 bg-gray-300 left-1/2 transform -translate-x-1/2 h-full"></div>

    {/* 第一个节点 */}
    <div className="mb-12 flex items-center justify-start relative">
      {/* 时间 */}
      <div className="absolute left-[calc(50%-11rem)] text-gray-500 text-sm">
        2024 Jul - 2024 Aug
      </div>
      {/* 图标 */}
      <div className="absolute left-1/2 transform -translate-x-1/2">
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-purple-500 text-white">
           💼
        </div>
      </div>
      {/* 方框内容 */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-md w-1/2 max-w-md ml-auto mt-8">
        <h3 className="text-xl font-bold mb-2 text-left">Second Internship</h3>
        <p className="text-gray-700 mt-2 text-left" style={{ fontFamily: 'content2-font' }}>
        Internship at Food Distribution Supervision Section, Market Supervision Administration, Shuangyi District, Xi'an City, Shaanxi Province.
        </p>
        <a href="/documents/internship1.pdf" 
           target="_blank"
           className="text-blue-500 hover:underline text-left block mt-4">🔗Click here to view the proof</a>
      </div>
    </div>

    {/* 第二个节点 */}
    <div className="mb-12 flex items-center justify-end relative text-left">
      {/* 时间 */}
      <div className="absolute right-[calc(50%-11rem)] text-gray-500 text-sm">
        2024 Mar - 2024 Apr
      </div>
      {/* 图标 */}
      <div className="absolute left-1/2 transform -translate-x-1/2">
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-green-500 text-white">
        📝
        </div>
      </div>
      {/* 方框内容 */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-md w-1/2 max-w-md mr-auto mt-8">
        <h3 className="text-xl font-bold mb-2">Publication in International Conference</h3>
        <p className="text-gray-700 mt-2 " style={{ fontFamily: 'content2-font' }}>
        Published “Effects of Sugary Drinks (Sugar Substitutes) on the Human Body” in 2024 3rd International Conference 
        on Biochemical Engineering and Environmentally Friendly Material” 
        in 2024 3rd International Conference on Biochemical Engineering and Environmentally Friendly Material, 
        which was accepted by WEB OF SCIENCE. 2.
        </p>
        <a href="/documents/article.pdf" 
           target="_blank"
           className="text-blue-500 hover:underline text-left block mt-4">🔗Click here to view the article</a>
        
      </div>
    </div>

    {/* 第三个节点 */}
    <div className="mb-12 flex items-center justify-start relative text-left">
      {/* 时间 */}
      <div className="absolute left-[calc(50%-11rem)] text-gray-500 text-sm">
        2023 Jul - 2023 Aug
      </div>
      {/* 图标 */}
      <div className="absolute left-1/2 transform -translate-x-1/2">
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-500 text-white">
        💼
        </div>
      </div>
      {/* 方框内容 */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-md w-1/2 max-w-md ml-auto mt-8">
        <h3 className="text-xl font-bold mb-2">First Internship</h3>
        <p className="text-gray-700 mt-2 text-left " style={{ fontFamily: 'content2-font' }}>
        Internship at Shanshan District Health and Wellness Bureau, Xi'an City, Shaanxi Province.
        </p>
        <a href="/documents/internship2.pdf" 
           target="_blank"
           className="text-blue-500 hover:underline text-left block mt-4">🔗Click here to view the proof</a>

      </div>
    </div>
    {/* 第4个节点 */}
    <div className="mb-12 flex items-center justify-start relative text-left">
      {/* 时间 */}
      <div className="absolute right-[calc(50%-11rem)] text-gray-500 text-sm">
        2021 Sep - 2025 Jun
      </div>
      {/* 图标 */}
      <div className="absolute left-1/2 transform -translate-x-1/2">
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-yellow-500 text-white">
        🎓
        </div>
      </div>
      {/* 方框内容 */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-md w-1/2 max-w-md mr-auto mt-8">
        <h3 className="text-xl font-bold mb-2">BSc in Food and Nutritional Science</h3>
        <p className="text-gray-700 mt-2" style={{ fontFamily: 'content2-font' }}>
          Graduated from Macau University of Science and Technology, focusing on Food and Nutritional Science.
        </p>
      </div>
    </div>
  </div>
      
</section>


<section id="publications" className="h-auto bg-gray-100 flex items-center justify-center px-8 py-24">
  {/* 标题与提示水平排列 */}
  <div className="flex gap-8 w-full max-w-5xl">
    {/* 标题 */}
    <div className="flex flex-col gap-4 flex-1 justify-center">
      <h1 className="text-5xl font-bold text-gray-800 fontFamily= nav-font">Recent</h1>
      <h1 className="text-5xl font-bold text-gray-800 fontFamily= nav-font">Publications</h1>
    </div>
    {/* 提示信息 */}
    <div className="flex flex-col gap-2 w-full">
      <div className="bg-blue-100 border border-blue-300 text-blue-800 rounded-lg p-4 flex-1">
        <span className="text-xl mr-2">ℹ️</span>
        <span>
          View this article on <a href="https://drpress.org/ojs/index.php/HSET/article/view/21133" target="_blank" className="text-blue-600 underline">DR Press</a>.
        </span>
      </div>
      <div className="bg-white shadow-md rounded-lg p-6 max-w-4xl w-full flex items-center gap-6">
        {/* 图标 */}
        <div className="text-3xl flex-shrink-0">📄</div>

        {/* 论文标题及信息 */}
        <div className="flex-1">
          <p className="text-sm text-gray-600 mb-1">
            <span className="font-semibold">Qian Shiru</span> (2024)
          </p>
          <h3 className="text-lg text-gray-800 font-bold">Effects of Sugary Drinks (Sugar Substitutes) on the Human Body</h3>
        </div>

        {/* 操作按钮 */}
        <div className="flex gap-4">
          <a href="/documents/article.pdf" target="_blank" className="bg-gray-100 px-4 py-2 rounded-lg border border-gray-300 text-gray-700 text-sm hover:bg-gray-200">
            PDF
          </a>
        </div>
      </div>
    </div>
  </div>
</section>






<section id="project" className="h-auto bg-white flex items-center justify-center px-8 py-24">
  
  
  {/* 项目 1 */}
  <div className="flex gap-8 w-full max-w-5xl">
  <div className="shadow-lg rounded-lg p-6 w-full max-w-4xl mb-8">
    {/* 项目标题 */}
    <h3 className="text-3xl font-semibold text-gray-800 mb-4" style={{ fontFamily: 'content2-font' }}>"Fei He Xing Fei Fan Zhuo Rui Milk Powder"</h3>
    
    {/* 项目描述 */}
    <p className="text-lg text-gray-600 mb-4" style={{ fontFamily: 'content2-font' }}>
    Analyze the characteristics of the product, the reasons why it sells well, the audience and the marketing strategy, etc.
    </p>

    {/* 图片展示 */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
      <div className="flex justify-center">
        <img src="/image1.png" alt="Project Image 1" className="w-full h-auto rounded-lg" />
      </div>
      <div className="flex justify-center">
        <img src="/image2.png" alt="Project Image 2" className="w-full h-auto rounded-lg" />
      </div>
    </div>

    {/* 项目链接 */}
    <div className="flex justify-center">
      <a href="/documents/slides.pptx" target="_blank" className="text-blue-500 hover:underline text-xl">
        View Project Slides
      </a>
    </div>
  </div>
  <div className="flex flex-col justify-center gap-4 flex-1">
  <h2 className="text-5xl font-bold text-gray-800 fontFamily= nav-font">Group</h2>
  <h2 className="text-5xl font-bold text-gray-800 fontFamily= nav-font">Project</h2>
  </div>
  </div>
</section>

<footer className="bg-gray-900 text-white py-4">
  <div className="max-w-screen-xl mx-auto text-center">
    <p className="text-sm">
      &copy; {new Date().getFullYear()} Sean-qian-portfolio. All rights reserved.
    </p>
  </div>
</footer>

    </main>
  );
}
