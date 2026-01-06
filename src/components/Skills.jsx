export default function Skills() {
  const skillCategories = [
    {
      category: 'Backend & APIs',
      skills: ['Java', 'Spring', 'Python', 'REST', 'GraphQL', 'Microservices', 'Event-driven Architecture']
    },
    {
      category: 'Frontend',
      skills: ['React', 'JavaScript', 'TypeScript']
    },
    {
      category: 'Data',
      skills: ['SQL', 'PostgreSQL', 'Apache Hive', 'Apache Ignite']
    },
    {
      category: 'Cloud & DevOps',
      skills: ['Kubernetes', 'Docker', 'Helm']
    },
    {
      category: 'CI/CD & Tools',
      skills: ['Jenkins', 'GitHub Actions', 'Git', 'Maven', 'SonarQube']
    },
    {
      category: 'Languages',
      skills: ['Native English', 'Basic French']
    }
  ]

  return (
    <section id="skills" className="py-5 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title">Skills & Expertise</h2>

        <div className="grid md:grid-cols-2 gap-12">
          {skillCategories.map((cat, idx) => (
            <div key={idx} className="space-y-4">
              <h3 className="text-xl font-bold text-white border-b-2 border-darkblue_light pb-2">
                {cat.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, sidx) => (
                  <span
                    key={sidx}
                    className="skill-badge"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
