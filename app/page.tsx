import './globals.css'; // Tailwind CSS 文件路径

export default function Page() {
  return (
    <main>
      {/* 第一个板块，左右分区布局 */}
      <section
        id="home"
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
          <p className="text-lg text-gray-600">Student of Food and Nutritional Science</p>
          <a
            href="/your-university-url"
            className="text-blue-500 font-semibold mt-2"
          >
            Macau University of Science and Technology
          </a>
          {/* 社交图标 */}
          <div className="flex gap-4" style={{ marginTop: '20px' }}>
            {/* Instagram 图标 */}
            <a
              href="https://www.instagram.com/yourprofile"
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
              href="https://github.com/yourusername"
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

            {/* Twitter 图标 */}
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="relative group"
            >
              <img
                src="/icons/twitter-light.svg"
                alt="Twitter"
                className="w-12 h-12 group-hover:hidden"
              />
              <img
                src="/icons/twitter-dark.svg"
                alt="Twitter"
                className="w-12 h-12 hidden group-hover:block"
              />
            </a>
          </div>

        </div>

        {/* 右侧：自我介绍 */}
        <div className="flex-1 text-left">
          <h2 className="text-5xl font-bold text-gray-800 mb-6">About Me</h2>
          <p className="text-2xl text-gray-700 first-font leading-relaxed mb-4">
            "Do what you want, and fight for what you want."
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Hi, I’m a student of Computer Science. I enjoy learning about new technologies and
            building impactful projects. Feel free to get to know me on this page!
          </p>
          {/* 兴趣和教育 */}
          <div className="mt-6">
            <h3 className="text-xl font-bold text-gray-800 mb-2">Interests</h3>
            <ul className="list-disc pl-5 text-gray-700">
              <li>Web Development</li>
              <li>Open Source Contributions</li>
              <li>Reading & Writing</li>
            </ul>
            <h3 className="text-xl font-bold text-gray-800 mt-6 mb-2">Education</h3>
            <p className="text-gray-700">
              🎓 BSc in Food and Nutritional Science, 2021 <br />
              <a href="/your-university-url" className="text-blue-500">
                Your University Name
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* 第二个板块 */}
      <section
        id="about"
        className="min-h-screen bg-white flex flex-col items-center justify-center text-center"
      >
        <h1 className="text-4xl font-bold text-gray-800 mb-4">About Me</h1>
        <p className="text-xl text-gray-600 max-w-2xl">
          I am a passionate developer focused on creating functional and visually appealing web
          experiences.
        </p>
      </section>

      {/* 第三个板块 */}
      <section
        id="services"
        className="min-h-screen bg-white flex flex-col items-center justify-center text-center"
      >
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Services</h1>
        <p className="text-xl text-gray-600 max-w-2xl">
          Offering full-stack web development services with a focus on modern frameworks and
          performance optimization.
        </p>
      </section>

      {/* 第四个板块 */}
      <section
        id="contact"
        className="min-h-screen bg-white flex flex-col items-center justify-center text-center"
      >
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Contact</h1>
        <p className="text-xl text-gray-600 max-w-2xl">
          Feel free to reach out to discuss your project or just to say hi!
        </p>
      </section>
    </main>
  );
}
