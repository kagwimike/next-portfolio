import {
  SiReact,
  SiNextdotjs,
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiNodedotjs,
  SiDjango,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiGit,
  SiGithub,
  SiPython,
  
} from "react-icons/si";

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-24 bg-gradient-to-b from-black via-gray-900 to-black text-white border-t border-white/10"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Title */}
        <h2 className="text-4xl font-bold text-center mb-12">
          My <span className="text-blue-500">Tech Stack</span>
        </h2>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-10">

          {/* Frontend */}
          <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500 transition">
            <h3 className="text-2xl font-semibold mb-6">Frontend</h3>
            <div className="grid grid-cols-4 gap-6 text-gray-300">
              <Skill icon={<SiReact />} name="React" />
              <Skill icon={<SiNextdotjs />} name="Next.js" />
              <Skill icon={<SiJavascript />} name="JavaScript" />
              <Skill icon={<SiTypescript />} name="TypeScript" />
              <Skill icon={<SiHtml5 />} name="HTML5" />
              <Skill icon={<SiCss3 />} name="CSS3" />
              <Skill icon={<SiTailwindcss />} name="Tailwind" />
            </div>
          </div>

          {/* Backend */}
          <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500 transition">
            <h3 className="text-2xl font-semibold mb-6">Backend</h3>
            <div className="grid grid-cols-4 gap-6 text-gray-300">
              <Skill icon={<SiNodedotjs />} name="Node.js" />
              <Skill icon={<SiExpress />} name="Express.js" />
              <Skill icon={<SiDjango />} name="Django" />
              <Skill icon={<SiPython />} name="Python" />
              
            </div>
          </div>

          {/* Database */}
          <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500 transition">
            <h3 className="text-2xl font-semibold mb-6">Database</h3>
            <div className="grid grid-cols-4 gap-6 text-gray-300">
              <Skill icon={<SiMongodb />} name="MongoDB" />
              <Skill icon={<SiMysql />} name="MySQL" />
            </div>
          </div>

          {/* Tools & DevOps */}
          <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500 transition">
            <h3 className="text-2xl font-semibold mb-6">Tools & DevOps</h3>
            <div className="grid grid-cols-4 gap-6 text-gray-300">
              <Skill icon={<SiGit />} name="Git" />
              <Skill icon={<SiGithub />} name="GitHub" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

function Skill({ icon, name }: { icon: React.ReactNode; name: string }) {
  return (
    <div className="flex flex-col items-center gap-2 hover:text-blue-500 transition">
      <div className="text-3xl">{icon}</div>
      <span className="text-sm">{name}</span>
    </div>
  );
}
