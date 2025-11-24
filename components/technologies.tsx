export default function Technologies() {
  const technologies = [
    {
      name: 'Apache Spark',
      image: 'apache-spark-logo.png',
    },
    {
      name: 'Hadoop',
      image: '/hadoop-logo.svg',
    },
    {
      name: 'Kafka',
      image: '/kafka-logo.png',
    },
    {
      name: 'Airflow',
      image: '/airflow-logo.png',
    },
    {
      name: 'Databricks',
      image: '/databricks-logo.png',
    },
    {
      name: 'AWS',
      image: '/aws-logo.png',
    },
    {
      name: 'Azure',
      image: '/azure-logo.png',
    },
    {
      name: 'GCP',
      image: '/gcp-logo.png',
    },
    {
      name: 'Python',
      image: '/python-logo.png',
    },
    {
      name: 'Scala',
      image: '/scala-logo.png',
    },
    {
      name: 'SQL',
      image: '/sql-logo.png',
    },
    {
      name: 'Docker',
      image: '/docker-logo.png',
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Tools & Services We Cover
          </h2>
          <p className="text-xl text-foreground/60">
            Learn industry-standard technologies used in top companies
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {technologies.map((tech) => (
            <div
              key={tech.name}
              className="bg-blue-50 hover:bg-primary/10 border border-primary/20 rounded-lg p-6 text-center hover:shadow-lg transition-all cursor-pointer flex flex-col items-center gap-3 group"
            >
              <div className="h-16 flex items-center justify-center">
                <img
                  src={tech.image || "/placeholder.svg"}
                  alt={tech.name}
                  className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform"
                />
              </div>
              <span className="font-semibold text-primary text-sm">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
