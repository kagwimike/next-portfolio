export default function About() {
  return (
    <section
      id="about"
      className="py-24 bg-black text-white border-t border-white/10"
    >
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Side - Text */}
        <div>
          <h2 className="text-4xl font-bold mb-6">
            About <span className="text-blue-500">Me</span>
          </h2>

          <p className="text-gray-400 leading-relaxed mb-4">
            I am Mike Kagwi a Software Engineer with experience in designing and building
            scalable, secure, and user-focused web applications. I specialize
            in full-stack development, backend systems, and API design.
          </p>

          <p className="text-gray-400 leading-relaxed mb-4">
            I work with modern technologies like React, Javascript, Html, Css, Express.js, Node.js,
            Python, Django, MySQL, and MongoDB to create reliable digital solutions.
            I enjoy solving complex problems and transforming ideas into
            real-world applications.
          </p>

          <p className="text-gray-400 leading-relaxed">
            My goal is to build systems that are not only functional but also
            performant, maintainable, and scalable.
          </p>
        </div>

        {/* Right Side - Info Cards */}
        <div className="grid grid-cols-2 gap-6">
          <div className="p-6 rounded-xl bg-white/5 border border-white/10">
            <h3 className="text-3xl font-bold text-blue-500">2+</h3>
            <p className="text-gray-400 mt-2">Years Experience</p>
          </div>

          <div className="p-6 rounded-xl bg-white/5 border border-white/10">
            <h3 className="text-3xl font-bold text-blue-500">10+</h3>
            <p className="text-gray-400 mt-2">Projects Built</p>
          </div>

          <div className="p-6 rounded-xl bg-white/5 border border-white/10">
            <h3 className="text-3xl font-bold text-blue-500">Full-Stack</h3>
            <p className="text-gray-400 mt-2">Specialization</p>
          </div>

          <div className="p-6 rounded-xl bg-white/5 border border-white/10">
            <h3 className="text-3xl font-bold text-blue-500">APIs</h3>
            <p className="text-gray-400 mt-2">Backend Expertise</p>
          </div>
        </div>

      </div>
    </section>
  );
}
