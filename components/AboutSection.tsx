import { HiCode, HiLightningBolt, HiHeart, HiAcademicCap } from 'react-icons/hi';
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiNodedotjs, SiGit } from 'react-icons/si';

const AboutSection = () => {
  const skills = [
    { name: 'React', icon: SiReact, level: 95 },
    { name: 'Next.js', icon: SiNextdotjs, level: 90 },
    { name: 'TypeScript', icon: SiTypescript, level: 85 },
    { name: 'Tailwind CSS', icon: SiTailwindcss, level: 95 },
    { name: 'Node.js', icon: SiNodedotjs, level: 80 },
    { name: 'Git', icon: SiGit, level: 90 },
  ];

  const values = [
    {
      icon: <HiCode className="w-6 h-6" />,
      title: 'Clean Code',
      description: 'Sauberer, wartbarer Code ist die Basis für langfristig erfolgreiche Projekte.'
    },
    {
      icon: <HiLightningBolt className="w-6 h-6" />,
      title: 'Performance',
      description: 'Schnelle Ladezeiten und optimale User Experience haben oberste Priorität.'
    },
    {
      icon: <HiHeart className="w-6 h-6" />,
      title: 'Leidenschaft',
      description: 'Web Development ist nicht nur unser Beruf, sondern unsere Leidenschaft.'
    },
    {
      icon: <HiAcademicCap className="w-6 h-6" />,
      title: 'Lebenslanges Lernen',
      description: 'Die Tech-Welt entwickelt sich ständig weiter - und wir mit ihr.'
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-white via-gray-50 to-blue-50">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Erfahren Sie mehr{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                über uns {/* DIESE ZEILE MUSS GEÄNDERT WERDEN */}
              </span>
            </h2>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            {/* Text Content */}
            <div>
              <h3 className="text-3xl font-bold text-gray-800 mb-6">
                Willkommen bei Klein Digital Solutions!
              </h3>
              <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                <p>
                  Als Ihr engagierter Partner für Web Development 
                  bringen wir Ihre digitalen Ideen zum Leben. 
                  Mit einem starken Fokus auf moderne Technologien 
                  und Best Practices entwickeln wir Web-Anwendungen, 
                  die nicht nur gut aussehen, sondern auch 
                  performant und benutzerfreundlich sind.
                </p>
                <p>
                  Unsere Reise in die Webentwicklung begann aus purer Neugier 
                  und wurde schnell zu unserer größten Leidenschaft. 
                  Heute spezialisieren wir uns auf React, Next.js und TypeScript, 
                  um robuste und skalierbare Lösungen zu schaffen.
                </p>
                <p>
                  Was uns antreibt? 
                  Die Möglichkeit, durch Code echte Probleme zu lösen 
                  und digitale Erlebnisse zu schaffen, die Menschen begeistern. 
                  Jedes Projekt ist eine neue Herausforderung, 
                  bei der wir unser Wissen einsetzen und gleichzeitig Neues lernen können.
                </p>
              </div>
            </div>

            {/* Skills Visualization */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h4 className="text-2xl font-bold text-gray-800 mb-6">Tech Stack</h4>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <skill.icon className="w-6 h-6 text-gray-700" />
                        <span className="font-medium text-gray-700">{skill.name}</span>
                      </div>
                      <span className="text-sm text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Values Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center text-white mb-4">
                  {value.icon}
                </div>
                <h5 className="text-xl font-bold text-gray-800 mb-2">{value.title}</h5>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <p className="text-xl text-gray-600 mb-6">
              Bereit für Ihr nächstes Projekt?
            </p>
            <a href="/kontakt">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-2xl transform hover:-translate-y-0.5 transition-all duration-300">
                Lassen Sie uns zusammenarbeiten
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;