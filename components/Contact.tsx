import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-b from-black via-gray-900 to-black text-white border-t border-white/10"
    >
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">

        {/* Left Side - Contact Info */}
        <div>
          <h2 className="text-4xl font-bold mb-6">
            Get in <span className="text-blue-500">Touch</span>
          </h2>

          <p className="text-gray-400 mb-8 leading-relaxed">
            I’m open to opportunities, collaborations, and freelance projects.
            Feel free to reach out if you want to build something amazing together.
          </p>

          <div className="space-y-4">

            {/* Email */}
            <a
              href="mailto:mikekagwi@gmail.com"
              className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-blue-500 transition"
            >
              <FaEnvelope className="text-blue-500 text-xl" />
              <span className="text-gray-300">mikekagwi@gmail.com</span>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/kagwimike"
              target="_blank"
              className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-blue-500 transition"
            >
              <FaGithub className="text-blue-500 text-xl" />
              <span className="text-gray-300">github.com/kagwimike</span>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/mike-kagwi-1829973aa/"
              target="_blank"
              className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-blue-500 transition"
            >
              <FaLinkedin className="text-blue-500 text-xl" />
              <span className="text-gray-300">linkedin.com/in/mike-kagwi</span>
            </a>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="p-8 rounded-2xl bg-white/5 border border-white/10">
          <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded-lg bg-black/50 border border-white/10 focus:border-blue-500 outline-none text-white"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 rounded-lg bg-black/50 border border-white/10 focus:border-blue-500 outline-none text-white"
            />

            <textarea
              rows={5}
              placeholder="Your Message"
              className="w-full p-3 rounded-lg bg-black/50 border border-white/10 focus:border-blue-500 outline-none text-white"
            />

            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-blue-600 hover:bg-blue-700 transition font-semibold"
            >
              Send Message
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}
