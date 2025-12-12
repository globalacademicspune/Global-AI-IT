'use client'

export default function Technologies() {

  const technologies = [
    { name: 'AWS',              image: '/aws-logo.png' },
    { name: 'Azure',            image: '/azure-logo.png' },
    { name: 'GCP',              image: '/gcp-logo.png' },
    { name: 'Apache Spark',     image: '/apache-spark-logo.png' },
    { name: 'Hadoop',           image: '/hadoop-logo.svg' },
    { name: 'Kafka',            image: '/kafka-logo.png' },
    { name: 'Airflow',          image: '/airflow-logo.png' },
    { name: 'Databricks',       image: '/databricks-logo.png' },
    { name: 'Python',           image: '/python-logo.png' },
    { name: 'Scala',            image: '/scala-logo.png' },
    { name: 'SQL',              image: '/sql-logo.png' },
    { name: 'Docker',           image: '/docker-logo.png' },
    { name: 'Kubernetes',       image: '/kubernetes-logo.png'},
    { name: 'HBase',            image: '/hbase-logo.svg'},
    { name: 'Amazon Redshift',  image: '/redshift-logo.png'},
    { name: 'Terraform',        image: '/terraform-logo.png'},
    { name: 'TensorFlow',       image: '/tensorflow-logo.png'},


  ];

  const loopList = [...technologies, ...technologies];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Tools & Services We Cover
          </h2>
          <p className="text-xl text-foreground/60">
            Learn industry-standard technologies used in top companies
          </p>
        </div>

        {/* Infinite Loop Marquee */}
        <div className="overflow-hidden relative">
          <div className="animate-technologies-marquee flex gap-6">

            {loopList.map((tech, index) => (
              <div
                key={index}
                className="
                  bg-blue-50 hover:bg-primary/10
                  border border-primary/20 rounded-lg 
                  px-6 py-6 min-w-[190px]
                  text-center hover:shadow-lg transition-all cursor-pointer 
                  flex flex-col items-center gap-3 group
                "
              >
                <div className="h-16 flex items-center justify-center">
                  <img
                    src={tech.image}
                    alt={tech.name}
                    className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform"
                  />
                </div>
                <span className="font-semibold text-primary text-sm">
                  {tech.name}
                </span>
              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
}
