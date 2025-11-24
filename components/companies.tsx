export default function Companies() {
  const companies = [
    {
      name: 'Amazon',
      logo: '/amazon-logo.jpg',
    },
    {
      name: 'Microsoft',
      logo: '/Microsoft-Logo.png',
    },
    {
      name: 'Google',
      logo: '/google-logo.png',
    },
    {
      name: 'Mastercard',
      logo: '/MasterCard_Logo.png',
    },
    {
      name: 'VISA',
      logo: '/VISA-logo.png',
    },
    {
      name: 'Deutsche Bank',
      logo: '/deutsche-bank-logo.jpg',
    },
    {
      name: 'Walmart',
      logo: '/walmart-logo.png',
    },
    {
      name: 'EY',
      logo: '/EY-logo.png',
    },
    {
      name: 'Accenture',
      logo: '/accenture-logo.png',
    },
    {
      name: 'Cisco',
      logo: '/cisco-logo.png',
    },
    {
      name: 'IBM',
      logo: '/ibm-logo.jpg',
    },
    {
      name: 'TCS',
      logo: '/tcs-logo.jpg',
    },
  ]

  return (
    <section className="py-20 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Top Companies Our Alumni Work At
          </h2>
          <p className="text-xl text-foreground/60">
            Our graduates are employed by leading global companies
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {companies.map((company) => (
            <div
              key={company.name}
              className="bg-white border border-border rounded-lg p-6 text-center hover:shadow-xl transition-all cursor-pointer hover:border-primary/50 group flex flex-col items-center justify-center min-h-32"
            >
              <div className="h-20 flex items-center justify-center mb-2">
                <img
                  src={company.logo || "/placeholder.svg"}
                  alt={company.name}
                  className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform"
                />
              </div>
              <span className="font-semibold text-foreground/70 text-xs group-hover:text-primary transition-colors">
                {company.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
