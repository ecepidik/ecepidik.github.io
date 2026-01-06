import { Briefcase, MapPin, Calendar } from 'lucide-react'

export default function Experience() {
  const experiences = [
    {
      role: 'Architect',
      company: 'RBC Capital Markets',
      location: 'Montreal',
      period: 'August 2025 – Present',
      highlights: [
        'Own the technical strategy and long-term architecture roadmap for a critical enterprise application, ensuring scalability, reliability, and performance.',
        'Lead architectural decisions on integration patterns, data modeling, event-driven workflows, API standards, cloud/container strategy, and resiliency patterns.',
        'Produce architecture diagrams and technical design documents to drive cross-team alignment and incremental delivery.',
        'Mentor and guide developers on best practices, code quality, and platform evolution to ensure maintainable solutions.'
      ]
    },
    {
      role: 'Senior Developer',
      company: 'RBC Capital Markets',
      location: 'Montreal',
      period: 'Jan. 2022 – Present',
      highlights: [
        'Deliver large-scale, event-driven services orchestrating real-time processes across 5 trading desks; partner with stakeholders to refine requirements and break down complex initiatives.',
        'Build scalable and resilient Java Spring services and modernize relational data models (PostgreSQL) to improve consistency for millions of daily positions and valuation measures.',
        'Reduce runtime for critical workflows by 65% through strategic caching, indexing, and optimized data flows, improving throughput and operational efficiency.',
        'Improve delivery quality through refactoring, code reviews, and automated testing; contribute to technical discussions and design decisions.',
        'Implement Kubernetes-based deployments and CI/CD pipelines (Jenkins, Helm, SonarQube) with integrated observability, and leverage LLM-based tools to speed up design and test iteration.'
      ]
    },
    {
      role: 'Technical Systems Analyst',
      company: 'RBC Capital Markets',
      location: 'Toronto',
      period: 'July 2020 – Dec. 2021',
      highlights: [
        'Delivered full-stack features for a high-performance risk platform using React + TypeScript on the frontend and Java on the backend.',
        'Designed and implemented REST and GraphQL APIs to provide efficient access and updates for critical data, improving usability and scalability.',
        'Integrated microservices for authentication, authorization, and message flows, enhancing security and modularity.'
      ]
    },
    {
      role: 'Associate Developer',
      company: 'Gorilla Group',
      location: 'Montreal',
      period: 'July 2019 – Feb. 2020',
      highlights: [
        'Developed customized commerce features on the SAP Hybris platform for B2B and B2C clients.',
        'Collaborated with clients and analysts to communicate progress, clarify requirements, and deliver maintainable solutions.'
      ]
    }
  ]

  return (
    <section id="experience" className="py-5 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title">Professional Experience</h2>

        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <div key={idx} className="experience-card">
              <div className="flex items-start justify-between mb-4 flex-wrap gap-4">
                <div>
                  <h3 className="text-2xl font-bold text-white">{exp.role}</h3>
                  <p className="text-lg text-darkblue_light font-semibold mt-1">{exp.company}</p>
                </div>
                <div className="flex flex-col gap-2 text-sm text-gray-400">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    {exp.location}
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {exp.period}
                  </div>
                </div>
              </div>

              <ul className="space-y-3 ml-0">
                {exp.highlights.map((highlight, hidx) => (
                  <li key={hidx} className="flex gap-3 text-gray-300">
                    <span className="text-darkblue font-bold min-w-fit">•</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Education */}
        <div className="mt-12 pt-12 border-t-2 border-gray-700">
          <h2 className="section-title">Education</h2>
          <div className="experience-card">
            <h4 className="text-xl font-bold text-darkblue">Bachelor of Software Engineering</h4>
            <p className="text-darkblue_light font-semibold mt-2">McGill University</p>
            <p className="text-gray-400 mt-1">Montreal, Canada</p>
          </div>
        </div>
      </div>
    </section>
  )
}
