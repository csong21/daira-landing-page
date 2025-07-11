import React, { useState } from 'react'
import { ArrowRight, CheckCircle, Shield, Clock, Database, BarChart3, Users, ChevronRight, Sparkles } from 'lucide-react'


// Header/Navigation
function Header() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative">
      {/* Proper elliptical background */}
      <div className="absolute top-0 left-0 w-full h-24 overflow-hidden">
        <div 
          className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-gray-200"
          style={{
            width: '120vw',
            height: '120px',
            borderRadius: '50%'
          }}
        ></div>
      </div>
      
      <header className="relative bg-transparent border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <div className="flex items-center space-x-2">
                {/* Icon - Data bars */}
                <div className="flex items-end space-x-1">
                  <div className="w-2 h-4 bg-gradient-to-t from-blue-600 to-blue-400 rounded-sm"></div>
                  <div className="w-2 h-6 bg-gradient-to-t from-teal-600 to-teal-400 rounded-sm"></div>
                  <div className="w-2 h-3 bg-gradient-to-t from-blue-500 to-blue-300 rounded-sm"></div>
                </div>
                <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent tracking-wide">
                  Daira
                </div>
              </div>
            </div>
            <button 
              onClick={scrollToContact}
              className="text-white px-6 py-2 rounded-lg font-medium transition-all hover:opacity-90" 
              style={{backgroundColor: '#01abaa'}}
            >
              Get Started
            </button>
          </div>
        </div>
      </header>
    </div>
  )
}

// Hero Section - Preql Style
function Hero() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Powered by AI Badge */}
          <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            Powered by AI
          </div>
          
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            A Unified Data Platform—
            <br />Built for Dairy Consultants
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            We centralize, reconcile, and standardize data from scattered sources — so you can focus on delivering insights, not cleaning spreadsheets.
          </p>
          
          <button 
            onClick={scrollToContact}
            style={{backgroundColor: '#01abaa'}}
            className="hover:opacity-90 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all inline-flex items-center gap-2"
          >
            Get Started
            <ArrowRight className="w-5 h-5" />
          </button>
          
          {/* Platform Integrations Bar with sliding animation */}
          <div className="mt-12 bg-white rounded-lg border border-gray-200 p-6 max-w-4xl mx-auto">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
              <div className="flex items-center gap-3">
                <span className="text-lg font-semibold text-gray-900">20+ native app integrations</span>
                <ArrowRight className="w-5 h-5 text-gray-400" />
              </div>
              
              <div className="flex-1 ml-8 overflow-hidden">
                <div 
                  className="flex items-center gap-6"
                  style={{
                    animation: 'scroll 25s linear infinite',
                    width: 'max-content'
                  }}
                >
                  {/* All companies repeated 3 times for smooth loop */}
                  {['DairyComp', 'EZfeed', 'FeedWatch', 'One by milc group', 'DFA', 'Hilmar', 'Milk Moovement', 'Land O\'Lakes'].map((company, index) => (
                    <div key={`set1-${index}`} className="bg-white border border-gray-200 rounded-lg px-4 py-3 flex items-center justify-center flex-shrink-0 shadow-sm min-w-[120px]">
                      <span className="text-gray-700 text-sm font-semibold">{company}</span>
                    </div>
                  ))}
                  {['DairyComp', 'EZfeed', 'FeedWatch', 'One by milc group', 'DFA', 'Hilmar', 'Milk Moovement', 'Land O\'Lakes'].map((company, index) => (
                    <div key={`set2-${index}`} className="bg-white border border-gray-200 rounded-lg px-4 py-3 flex items-center justify-center flex-shrink-0 shadow-sm min-w-[120px]">
                      <span className="text-gray-700 text-sm font-semibold">{company}</span>
                    </div>
                  ))}
                  {['DairyComp', 'EZfeed', 'FeedWatch', 'One by milc group', 'DFA', 'Hilmar', 'Milk Moovement', 'Land O\'Lakes'].map((company, index) => (
                    <div key={`set3-${index}`} className="bg-white border border-gray-200 rounded-lg px-4 py-3 flex items-center justify-center flex-shrink-0 shadow-sm min-w-[120px]">
                      <span className="text-gray-700 text-sm font-semibold">{company}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* CSS Animation */}
          <style jsx>{`
            @keyframes scroll {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(calc(-100% / 3));
              }
            }
          `}</style>
        </div>
      </div>
    </section>
  )
}

// Data Sources Showcase Section
function DataSourcesShowcase() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background with dashboard elements */}
      <div className="absolute inset-0 bg-gray-50">
        {/* Simulated dashboard cards scattered in background */}
        <div className="absolute top-10 left-10 w-64 h-40 bg-white rounded-lg shadow-xl opacity-60 transform rotate-3 border">
          <div className="p-4">
            <div className="h-4 bg-gray-400 rounded mb-2"></div>
            <div className="h-8 bg-blue-400 rounded mb-2"></div>
            <div className="h-2 bg-gray-300 rounded w-3/4"></div>
          </div>
        </div>
        
        <div className="absolute top-32 right-16 w-56 h-36 bg-white rounded-lg shadow-xl opacity-55 transform -rotate-2 border">
          <div className="p-4">
            <div className="h-3 bg-gray-400 rounded mb-3"></div>
            <div className="grid grid-cols-3 gap-2">
              <div className="h-6 bg-green-400 rounded"></div>
              <div className="h-6 bg-yellow-400 rounded"></div>
              <div className="h-6 bg-red-400 rounded"></div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-20 left-32 w-48 h-32 bg-white rounded-lg shadow-xl opacity-65 transform rotate-1 border">
          <div className="p-3">
            <div className="h-3 bg-gray-400 rounded mb-2"></div>
            <div className="h-16 bg-gradient-to-r from-purple-400 to-blue-400 rounded"></div>
          </div>
        </div>
        
        <div className="absolute bottom-32 right-24 w-52 h-28 bg-white rounded-lg shadow-xl opacity-60 transform -rotate-1 border">
          <div className="p-3">
            <div className="flex justify-between mb-2">
              <div className="h-2 bg-gray-400 rounded w-16"></div>
              <div className="h-2 bg-gray-400 rounded w-12"></div>
            </div>
            <div className="space-y-1">
              <div className="h-2 bg-orange-400 rounded w-full"></div>
              <div className="h-2 bg-green-400 rounded w-4/5"></div>
              <div className="h-2 bg-blue-400 rounded w-3/5"></div>
            </div>
          </div>
        </div>
        
        <div className="absolute top-20 right-32 w-44 h-44 bg-white rounded-lg shadow-xl opacity-50 transform rotate-6 border">
          <div className="p-3">
            <div className="h-3 bg-gray-400 rounded mb-3"></div>
            <div className="w-32 h-32 mx-auto bg-gradient-to-br from-teal-300 to-cyan-400 rounded-full flex items-center justify-center">
              <div className="w-16 h-16 bg-white rounded-full"></div>
            </div>
          </div>
        </div>
        
        <div className="absolute top-48 left-1/4 w-60 h-24 bg-white rounded-lg shadow-xl opacity-55 transform -rotate-3 border">
          <div className="p-3 space-y-2">
            <div className="flex space-x-2">
              <div className="h-4 w-4 bg-red-400 rounded-full"></div>
              <div className="h-4 w-4 bg-yellow-400 rounded-full"></div>
              <div className="h-4 w-4 bg-green-400 rounded-full"></div>
            </div>
            <div className="space-y-1">
              <div className="h-2 bg-gray-300 rounded"></div>
              <div className="h-2 bg-gray-300 rounded w-3/4"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/70 via-white/50 to-white/70"></div>
      
      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-5xl sm:text-6xl font-bold leading-tight">
          <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-teal-500 bg-clip-text text-transparent">
            Fragmented data sources,
          </span>
          <br />
          <span className="bg-gradient-to-r from-teal-500 via-green-500 to-emerald-500 bg-clip-text text-transparent">
            one unified view.
          </span>
        </h2>
      </div>
    </section>
  )
}

// Value Props Section - Modern Cards Layout
function ValueProps() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-8 leading-tight">
            <span className="text-gray-900">Stop chasing files and formats</span>
            <span className="text-gray-600">.</span>
            <br />
            <span className="text-gray-900">Start scaling your impact across every farm</span>
            <span className="text-gray-600">.</span>
          </h2>
          
          {/* Filter pills */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <span className="bg-gray-200 text-gray-700 px-6 py-2 rounded-full font-medium">Efficiency</span>
            <span className="bg-gray-200 text-gray-700 px-6 py-2 rounded-full font-medium">Standardization</span>
            <span className="bg-gray-200 text-gray-700 px-6 py-2 rounded-full font-medium">Scale</span>
            <span className="bg-gray-200 text-gray-700 px-6 py-2 rounded-full font-medium">Automation</span>
          </div>
        </div>

        {/* Value Prop Cards */}
        <div className="flex flex-col sm:flex-row gap-4 w-full">
          {/* Card 1 - Purple */}
          <div className="bg-gradient-to-br from-purple-600 to-purple-700 rounded-2xl p-4 text-white flex-1 min-h-[280px] flex flex-col">
            <h3 className="text-sm font-semibold mb-4 leading-tight flex-grow">
              Eliminate manual data cleaning — your dashboards update automatically, no copy-paste required.
            </h3>
            <div className="bg-white/10 rounded-lg p-3 backdrop-blur-sm mt-auto">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-xs opacity-90">Data sync active</span>
              </div>
              <div className="space-y-1">
                <div className="h-1.5 bg-white/20 rounded w-full"></div>
                <div className="h-1.5 bg-white/20 rounded w-4/5"></div>
                <div className="h-1.5 bg-white/20 rounded w-3/5"></div>
              </div>
            </div>
          </div>

          {/* Card 2 - Teal */}
          <div className="bg-gradient-to-br from-teal-500 to-green-500 rounded-2xl p-4 text-white flex-1 min-h-[280px] flex flex-col">
            <h3 className="text-sm font-semibold mb-4 leading-tight flex-grow">
              Standardize reporting templates once — reuse them across farms effortlessly.
            </h3>
            <div className="bg-white/10 rounded-lg p-3 backdrop-blur-sm mt-auto">
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs opacity-90">Templates</span>
                <div className="w-4 h-4 bg-white/20 rounded"></div>
              </div>
              <div className="grid grid-cols-3 gap-1">
                <div className="h-6 bg-white/20 rounded"></div>
                <div className="h-6 bg-white/20 rounded"></div>
                <div className="h-6 bg-white/20 rounded"></div>
              </div>
            </div>
          </div>

          {/* Card 3 - Blue */}
          <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-4 text-white flex-1 min-h-[280px] flex flex-col">
            <h3 className="text-sm font-semibold mb-4 leading-tight flex-grow">
              Bring all your data — spreadsheets, sensors, software — into one unified, cloud-based platform.
            </h3>
            <div className="bg-white/10 rounded-lg p-3 backdrop-blur-sm mt-auto">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs opacity-90">Sources</span>
                <span className="text-xs bg-green-400 text-green-900 px-1.5 py-0.5 rounded-full font-medium">12</span>
              </div>
              <div className="flex space-x-1">
                <div className="w-6 h-6 bg-white/20 rounded flex-shrink-0"></div>
                <div className="w-6 h-6 bg-white/20 rounded flex-shrink-0"></div>
                <div className="w-6 h-6 bg-white/30 rounded flex-shrink-0 flex items-center justify-center">
                  <span className="text-xs font-bold">+10</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 4 - Gray/Dark */}
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-4 text-white flex-1 min-h-[280px] flex flex-col">
            <h3 className="text-sm font-semibold mb-4 leading-tight flex-grow">
              Get a consistent view of every herd, every client, every week — without the mess.
            </h3>
            <div className="bg-white/10 rounded-lg p-3 backdrop-blur-sm mt-auto">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-xs opacity-90">Report ready</span>
              </div>
              <div className="space-y-1">
                <div className="flex justify-between text-xs opacity-75">
                  <span>Farm A</span>
                  <span>Farm B</span>
                  <span>Farm C</span>
                </div>
                <div className="h-6 bg-gradient-to-r from-green-400/20 via-blue-400/20 to-purple-400/20 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}



// Image Placeholder Section
function ImagePlaceholder() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-gray-900">Connect all your data sources to</span>
            <br />
            <span className="text-blue-600">one unified platform</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Daira automatically integrates with your existing systems to create a single source of truth
          </p>
        </div>

        {/* Image */}
        <div className="flex justify-center">
          <img 
            src="/integration-diagram.png" 
            alt="Integration diagram" 
            className="w-full max-w-4xl h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  )
}

// Statistics Section
function StatisticsSection() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="text-3xl font-bold text-blue-600 mb-2">99%</div>
            <p className="text-gray-600">Reduction in data prep time</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="text-3xl font-bold text-blue-600 mb-2">20+</div>
            <p className="text-gray-600">Native app integrations</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
            <p className="text-gray-600">Data quality assurance</p>
          </div>
        </div>
      </div>
    </section>
  )
}

// Customer Logos
function CustomerLogos() {
  const customers = [
    "Green Valley Farms", "Prairie Dairy Co-op", "Mountain View Ranch", 
    "Sunshine Dairy", "Heritage Farms", "Midwest Dairy Group"
  ]

  return (
    <section className="bg-white py-16 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-gray-600 mb-8">Hundreds of dairy operations trust DairyMetrics</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {customers.map((customer, index) => (
              <div key={index} className="flex items-center justify-center">
                <div className="text-gray-400 font-medium text-sm">{customer}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// FAQ Section
function FAQ() {
  const [openFAQ, setOpenFAQ] = useState(null);

  const faqs = [
    {
      question: "How long does Daira take to implement?",
      answer: "Daira can be fully implemented in 12 weeks or less, regardless of your current data setup. Our team handles the technical integration while your dairy team focuses on defining the metrics that matter most."
    },
    {
      question: "How is Daira different from other data management tools?",
      answer: "Unlike other data platform, Daira is customer-centric and purpose-built for each dairy consultancy. We customize database, workflows, dashboards to meet your needs."
    },
    {
      question: "Do I need data engineering resources to use Daira?",
      answer: "No. Daira is designed specifically for dairy teams without technical expertise. Our no-code interface and automated data connections eliminate the need for IT or data engineering support."
    },
    {
      question: "What systems does Daira connect to?",
      answer: "Daira connects directly to your existing systems—herd management software, feed software, milk processors, accounting software, spreadsheets, and more —to create a unified data model where herd, performance and operational metrics work together seamlessly."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900">Have more questions?</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg border border-gray-200 overflow-hidden">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <h3 className="text-xl font-semibold text-gray-900 pr-4">{faq.question}</h3>
                <ChevronRight 
                  className={`w-6 h-6 text-gray-400 transform transition-transform ${
                    openFAQ === index ? 'rotate-90' : ''
                  }`}
                />
              </button>
              
              {openFAQ === index && (
                <div className="px-8 pb-6">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Contact/CTA Section
function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    farms: '',
    herds: '',
    challenge: '',
    demo: ''
  })

  const handleSubmit = async () => {
    if (!formData.name || !formData.email) {
      alert('Please fill in your name and email');
      return;
    }
    
    try {
      const response = await fetch('https://formspree.io/f/xgvypgne', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        alert('Thank you! We\'ll contact you within 24 hours.');
        setFormData({
          name: '', email: '', company: '', farms: '', herds: '', challenge: '', demo: ''
        });
      }
    } catch (error) {
      alert('Something went wrong. Please try again.');
    }
  }
  

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section id="contact" className="py-20" style={{backgroundColor: '#01abaa'}}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-white mb-4">
          Ready to Automate Your Dairy Reporting?
        </h2>
        <p className="text-xl mb-12" style={{color: '#b3e6e6'}}>
          Stay ahead of the data curve. Let Daira handle the grunt work.
        </p>
        
        <div className="bg-white rounded-2xl p-8 max-w-2xl mx-auto text-left">
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent"
                  style={{'--tw-ring-color': '#01abaa'}}
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent"
                  style={{'--tw-ring-color': '#01abaa'}}
                  placeholder="your@email.com"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Farm/Company</label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent"
                style={{'--tw-ring-color': '#01abaa'}}
                placeholder="Farm or company name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">How many farms do you currently work with?</label>
              <select
                name="farms"
                value={formData.farms}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent"
                style={{'--tw-ring-color': '#01abaa'}}
              >
                <option value="">Select number of farms</option>
                <option value="1-5">1–5</option>
                <option value="6-10">6–10</option>
                <option value="11-20">11–20</option>
                <option value="21-30">21–30</option>
                <option value="30+">30+</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">How many total herds or groups are you managing across those farms?</label>
              <input
                type="text"
                name="herds"
                value={formData.herds}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent"
                style={{'--tw-ring-color': '#01abaa'}}
                placeholder="e.g., 15 herds"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">What's your biggest data challenge right now?</label>
              <input
                type="text"
                name="challenge"
                value={formData.challenge}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent"
                style={{'--tw-ring-color': '#01abaa'}}
                placeholder="e.g., Consolidating data from multiple farms, Manual reporting takes too long..."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Would you like a free data audit or demo?</label>
              <select
                name="demo"
                value={formData.demo}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent"
                style={{'--tw-ring-color': '#01abaa'}}
              >
                <option value="">Select an option</option>
                <option value="yes">Yes</option>
                <option value="maybe">Maybe</option>
                <option value="no">No thanks</option>
              </select>
            </div>
            
            <button
              onClick={handleSubmit}
              className="w-full text-white font-semibold py-4 px-6 rounded-lg transition-all hover:opacity-90"
              style={{backgroundColor: '#01abaa'}}
            >
              Submit
            </button>
            
            <p className="text-center text-sm text-gray-500">
              We'll contact you within 24 hours to get you started
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

// Footer Section
function Footer() {
  return (
    <footer className="bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            {/* Same logo as header */}
            <div className="flex items-end space-x-1">
              <div className="w-2 h-4 bg-gradient-to-t from-blue-600 to-blue-400 rounded-sm"></div>
              <div className="w-2 h-6 bg-gradient-to-t from-teal-600 to-teal-400 rounded-sm"></div>
              <div className="w-2 h-3 bg-gradient-to-t from-blue-500 to-blue-300 rounded-sm"></div>
            </div>
            <div className="text-xl font-bold bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent tracking-wide">
              Daira
            </div>
          </div>
          <p className="text-gray-400 text-sm">
            © 2025 Daira. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

// Main Component
export default function DairyLandingPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <ImagePlaceholder />
      <StatisticsSection />
      <ValueProps />
      <DataSourcesShowcase />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  )
}