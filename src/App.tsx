import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Music, Heart, Users, Star, Check, Phone, Mail, MapPin, Calendar, Clock, Sparkles } from 'lucide-react';

function App() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [showForm, setShowForm] = useState(false);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const benefits = [
    {
      icon: <Music className="w-8 h-8 text-red-500" />,
      title: "Le Rythme",
      description: "Maîtrise les 3 instruments essentiels, la règle des 4 mesures et adapte tes passes aux changements musicaux pour une danse parfaitement synchronisée."
    },
    {
      icon: <Heart className="w-8 h-8 text-red-500" />,
      title: "La Connexion",
      description: "Apprends à guider avec clarté grâce aux mouvements du corps, crée une connexion naturelle et élimine les gestes inutiles."
    },
    {
      icon: <Users className="w-8 h-8 text-red-500" />,
      title: "La Technique",
      description: "Maîtrise des enchaînements stylés, enchaîne avec fluidité et gère les musiques rapides sans paniquer."
    },
    {
      icon: <Sparkles className="w-8 h-8 text-red-500" />,
      title: "Le Style",
      description: "Développe ton propre style avec des jeux de bras et jambes, travaille l'isolation corporelle et maîtrise les shines."
    }
  ];

  const testimonials = [
    {
      name: "Marie-Claire",
      text: "Grâce à Ritmo Corazón, j'ai enfin réussi à danser en rythme ! Les cours sont progressifs et l'accompagnement personnalisé fait toute la différence.",
      rating: 5
    },
    {
      name: "Jean-Philippe",
      text: "6 mois après, ma danse est méconnaissable. Je guide avec confiance et ma partenaire le ressent immédiatement. Merci !",
      rating: 5
    },
    {
      name: "Sofia",
      text: "L'accompagnement WhatsApp et les soirées pratiques m'ont permis de progresser rapidement. Je recommande à 100% !",
      rating: 5
    }
  ];

  const packs = [
    {
      name: "Pack Essentiel",
      icon: "🪶",
      price: "90€/mois",
      description: "Pour pratiquer chaque mois, progresser régulièrement, et vivre la salsa pleinement.",
      features: [
        "6h de cours en groupe chaque mois",
        "Accès à la plateforme en ligne (cours + bonus)",
        "Exercices maison personnalisés"
      ],
      popular: false
    },
    {
      name: "Pack Immersion",
      icon: "🔥",
      price: "130€/mois",
      originalPrice: "200€",
      description: "Pour celles et ceux qui veulent aller plus loin, avec un accompagnement personnalisé.",
      features: [
        "6h de cours en groupe chaque mois",
        "Accès aux stages privés Ritmo Corazón",
        "1h de coaching particulier chaque mois",
        "Accès à la plateforme en ligne (cours + bonus)",
        "Accompagnement mensuel en soirée 100% salsa"
      ],
      popular: true,
      badge: "💎 Meilleur choix"
    },
    {
      name: "Pack Transformation",
      icon: "👑",
      price: "290€/mois",
      description: "Pour les danseurs motivés à fond, qui veulent un suivi complet et un vrai changement.",
      features: [
        "Tous les avantages du Pack Immersion",
        "4h de coaching particulier par mois (au lieu d'1h)",
        "Suivi personnalisé intensif",
        "Accompagnement prioritaire WhatsApp"
      ],
      popular: false
    }
  ];

  const faqs = [
    {
      question: "Où ont lieu les cours ?",
      answer: "Les cours se déroulent dans des salles spécifiques à Montpellier, Castelnau ou Frontignan. Je vous partagerai l'adresse exacte avant le début du programme."
    },
    {
      question: "Dois-je avoir un niveau minimum ?",
      answer: "Non, le programme s'adapte à tous les niveaux. Que vous soyez débutant ou que vous ayez déjà des bases, nous travaillerons ensemble sur vos points d'amélioration."
    },
    {
      question: "Comment fonctionne le paiement ?",
      answer: "Le paiement s'effectue mensuellement entre le 1er et le 5 de chaque mois, sur nos 6 mois de collaboration."
    },
    {
      question: "Que se passe-t-il si je rate un cours ?",
      answer: "Pas de problème ! Vous aurez accès à la plateforme en ligne avec tous les cours et exercices. De plus, le suivi WhatsApp personnalisé vous permet de rattraper facilement."
    },
    {
      question: "Les soirées salsa sont-elles incluses ?",
      answer: "Oui, dans le Pack Immersion et Transformation, je vous accompagne une fois par mois à une soirée 100% salsa à Montpellier pour pratiquer dans de vraies conditions."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <Music className="w-8 h-8 text-red-500 mr-3" />
              <h1 className="text-2xl font-bold text-gray-900">Ritmo Corazón</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#programme" className="text-gray-700 hover:text-red-500 transition-colors">Programme</a>
              <a href="#benefices" className="text-gray-700 hover:text-red-500 transition-colors">Bénéfices</a>
              <a href="#tarifs" className="text-gray-700 hover:text-red-500 transition-colors">Tarifs</a>
              <a href="#faq" className="text-gray-700 hover:text-red-500 transition-colors">FAQ</a>
            </nav>
            <button
              onClick={() => setShowForm(true)}
              className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-6 py-2 rounded-full hover:from-red-600 hover:to-orange-600 transition-all transform hover:scale-105 shadow-lg"
            >
              S'inscrire
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-red-500 via-red-600 to-orange-600 text-white">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-5xl lg:text-6xl font-bold leading-tight">
                  Ritmo Corazón
                </h2>
                <p className="text-xl lg:text-2xl text-red-100 leading-relaxed">
                  Le programme pour danser avec le cœur, en connexion avec la musique et avec tes partenaires
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => setShowForm(true)}
                  className="bg-white text-red-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-red-50 transition-all transform hover:scale-105 shadow-xl"
                >
                  Commencer mon transformation
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-red-600 transition-all">
                  Découvrir le programme
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-red-400 to-orange-400 rounded-3xl overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <img 
                  src="https://images.pexels.com/photos/5069258/pexels-photo-5069258.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Couple dansant la salsa" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
            Tu rêves de danser la salsa, mais...
          </h3>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="p-6 bg-red-50 rounded-xl">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Music className="w-8 h-8 text-red-500" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Tu n'arrives pas à suivre le rythme</h4>
              <p className="text-gray-600">La musique te dépasse et tu te sens perdu dès les premières notes</p>
            </div>
            <div className="p-6 bg-orange-50 rounded-xl">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-orange-500" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Le guidage est difficile</h4>
              <p className="text-gray-600">Ta partenaire ne comprend pas tes intentions et la danse devient confuse</p>
            </div>
            <div className="p-6 bg-red-50 rounded-xl">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-red-500" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Tu manques de confiance</h4>
              <p className="text-gray-600">En soirée, tu hésites à inviter et tu restes sur le côté</p>
            </div>
          </div>
          <p className="text-xl text-gray-600 italic">
            "J'ai essayé plusieurs cours, mais je n'arrive toujours pas à danser naturellement..."
          </p>
        </div>
      </section>

      {/* Solution Section */}
      <section id="programme" className="py-20 bg-gradient-to-br from-red-50 to-orange-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              La Solution : Ritmo Corazón
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Un programme de 6 mois pour transformer complètement ta danse. Musicalité, rythme, nouvelles passes, style, guidage clair, fluidité avec un suivi personnalisé.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-xl">1</div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Méthode Progressive</h4>
                  <p className="text-gray-600">Nous travaillons ensemble pendant 6 mois avec une progression structurée et personnalisée.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-xl">2</div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Suivi Personnalisé</h4>
                  <p className="text-gray-600">Accompagnement WhatsApp, exercices maison avec retours vidéo personnalisés.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-xl">3</div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Pratique Réelle</h4>
                  <p className="text-gray-600">Soirées salsa accompagnées pour pratiquer dans de vraies conditions.</p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-video bg-gradient-to-br from-red-400 to-orange-400 rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.pexels.com/photos/5069259/pexels-photo-5069259.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Cours de salsa en groupe" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-xl shadow-lg">
                <div className="flex items-center space-x-2">
                  <Calendar className="w-5 h-5 text-red-500" />
                  <span className="font-semibold text-gray-900">6 mois</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefices" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Les 4 Piliers de la Salsa Cubaine
            </h3>
            <p className="text-xl text-gray-600">
              Tout au long du programme, nous travaillerons sur ces fondamentaux essentiels
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="p-8 bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl hover:shadow-xl transition-all transform hover:scale-105">
                <div className="flex items-center mb-4">
                  {benefit.icon}
                  <h4 className="text-2xl font-bold text-gray-900 ml-4">{benefit.title}</h4>
                </div>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-red-50 to-orange-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Ce que disent mes élèves
            </h3>
            <p className="text-xl text-gray-600">
              Leurs transformations parlent d'elles-mêmes
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 italic mb-6">"{testimonial.text}"</p>
                <p className="font-semibold text-gray-900">- {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="tarifs" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Choisis ton Pack
            </h3>
            <p className="text-xl text-gray-600">
              3 formules adaptées à tes objectifs et ton rythme
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {packs.map((pack, index) => (
              <div key={index} className={`relative p-8 rounded-2xl transition-all transform hover:scale-105 ${
                pack.popular 
                  ? 'bg-gradient-to-br from-red-500 to-orange-500 text-white shadow-2xl' 
                  : 'bg-white border-2 border-gray-200 hover:border-red-300 shadow-lg'
              }`}>
                {pack.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-yellow-400 text-black px-4 py-2 rounded-full text-sm font-bold">
                      {pack.badge}
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <div className="text-4xl mb-2">{pack.icon}</div>
                  <h4 className={`text-2xl font-bold mb-2 ${pack.popular ? 'text-white' : 'text-gray-900'}`}>
                    {pack.name}
                  </h4>
                  <div className="mb-4">
                    <span className={`text-4xl font-bold ${pack.popular ? 'text-white' : 'text-red-500'}`}>
                      {pack.price}
                    </span>
                    {pack.originalPrice && (
                      <span className="text-lg text-red-200 line-through ml-2">
                        {pack.originalPrice}
                      </span>
                    )}
                  </div>
                  <p className={`text-sm ${pack.popular ? 'text-red-100' : 'text-gray-600'}`}>
                    {pack.description}
                  </p>
                </div>
                
                <div className="space-y-4 mb-8">
                  {pack.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start">
                      <Check className={`w-5 h-5 mt-1 mr-3 ${pack.popular ? 'text-white' : 'text-green-500'}`} />
                      <span className={`text-sm ${pack.popular ? 'text-white' : 'text-gray-600'}`}>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
                
                <button
                  onClick={() => setShowForm(true)}
                  className={`w-full py-4 rounded-full font-semibold text-lg transition-all transform hover:scale-105 ${
                    pack.popular
                      ? 'bg-white text-red-500 hover:bg-red-50'
                      : 'bg-gradient-to-r from-red-500 to-orange-500 text-white hover:from-red-600 hover:to-orange-600'
                  }`}
                >
                  Choisir ce pack
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-gradient-to-br from-red-50 to-orange-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Questions Fréquentes
            </h3>
            <p className="text-xl text-gray-600">
              Toutes les réponses à tes questions
            </p>
          </div>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-red-50 transition-colors"
                >
                  <span className="text-lg font-semibold text-gray-900">{faq.question}</span>
                  {openFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-red-500" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-red-500" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-8 pb-6">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-red-500 via-red-600 to-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl lg:text-4xl font-bold mb-6">
            Prêt à transformer ta danse ?
          </h3>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Rejoins Ritmo Corazón dès maintenant et découvre le plaisir de danser avec le cœur, en connexion avec la musique et tes partenaires.
          </p>
          <button
            onClick={() => setShowForm(true)}
            className="bg-white text-red-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-red-50 transition-all transform hover:scale-105 shadow-xl"
          >
            Commencer mon transformation
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-8">
            <div className="lg:col-span-2">
              <div className="flex items-center mb-4">
                <Music className="w-8 h-8 text-red-500 mr-3" />
                <h4 className="text-2xl font-bold">Ritmo Corazón</h4>
              </div>
              <p className="text-gray-400 mb-6">
                Le programme pour danser avec le cœur, en connexion avec la musique et avec tes partenaires.
              </p>
              <div className="flex space-x-6">
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-red-500 mr-2" />
                  <span className="text-gray-400">Montpellier, Castelnau, Frontignan</span>
                </div>
              </div>
            </div>
            
            <div>
              <h5 className="text-lg font-semibold mb-4">Liens Rapides</h5>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#programme" className="hover:text-white transition-colors">Programme</a></li>
                <li><a href="#benefices" className="hover:text-white transition-colors">Bénéfices</a></li>
                <li><a href="#tarifs" className="hover:text-white transition-colors">Tarifs</a></li>
                <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
              </ul>
            </div>
            
            <div>
              <h5 className="text-lg font-semibold mb-4">Contact</h5>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  <span>06 XX XX XX XX</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  <span>contact@ritmocorazon.fr</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Ritmo Corazón. Tous droits réservés.</p>
          </div>
        </div>
      </footer>

      {/* Registration Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900">Inscription</h3>
              <button
                onClick={() => setShowForm(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                ×
              </button>
            </div>
            
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Prénom *
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nom *
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Téléphone *
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Pack choisi *
                </label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent">
                  <option value="">Sélectionner un pack</option>
                  <option value="essentiel">Pack Essentiel - 90€/mois</option>
                  <option value="immersion">Pack Immersion - 130€/mois</option>
                  <option value="transformation">Pack Transformation - 290€/mois</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Niveau de danse
                </label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent">
                  <option value="">Sélectionner votre niveau</option>
                  <option value="debutant">Débutant complet</option>
                  <option value="initie">Quelques bases</option>
                  <option value="intermediaire">Intermédiaire</option>
                  <option value="avance">Avancé</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message (optionnel)
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  placeholder="Parlez-moi de vos objectifs, vos attentes..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-red-500 to-orange-500 text-white py-4 rounded-lg font-semibold text-lg hover:from-red-600 hover:to-orange-600 transition-all transform hover:scale-105"
              >
                Envoyer ma demande
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;