import { Shield, Sparkles, Heart, Award, ChevronDown, CheckCircle, Lock, TrendingUp, Users, Star, ChevronLeft, ChevronRight, Package, FlaskConical, FileCheck, Pill, Truck } from 'lucide-react';
import { useState } from 'react';

function App() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [currentBenefit, setCurrentBenefit] = useState(0);
  const [currentVideo, setCurrentVideo] = useState(0);

  const scrollToOffer = () => {
    document.getElementById('offer')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#1A1612] text-white overflow-x-hidden">
      {/* Hero Section */}
      <header className="relative overflow-hidden bg-gradient-to-b from-[#2D2520] to-[#1A1612]">
        <div className="absolute inset-0">
          <img
            src="/image.png"
            alt="Background"
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#2D2520]/80 to-[#1A1612]/90"></div>
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#C9A96E] rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#5D4E37] rounded-full filter blur-3xl"></div>
        </div>

        <div className="relative container mx-auto px-4 py-12 md:py-24">
          <div className="text-center mb-8 md:mb-12">
            <div className="inline-block mb-6 md:mb-8">
              <div className="flex items-center justify-center bg-[#5D4E37] px-6 py-3 md:px-8 md:py-4 rounded-full shadow-lg">
                <img
                  src="/logo-folli-br.webp"
                  alt="FolliVida - Cabelos e Unhas"
                  className="h-8 md:h-12 w-auto"
                />
              </div>
              <p className="text-[#C9A96E] text-xs md:text-sm mt-2 tracking-widest font-medium">CABELOS E UNHAS</p>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 leading-tight px-2">
              Prepare-se para <span className="text-[#C9A96E]">Cabelos e Unhas</span><br className="hidden sm:block" /> Mais Fortes e Bonitos
            </h1>

            <p className="text-base sm:text-lg md:text-2xl text-gray-300 mb-8 md:mb-12 max-w-3xl mx-auto px-4">
              A fórmula nutricional que auxilia de dentro para fora na saúde dos cabelos e unhas
            </p>

            <div className="flex flex-wrap justify-center gap-3 md:gap-6 mb-8 md:mb-12 px-4">
              <div className="flex items-center gap-2 bg-[#2D2520]/80 px-3 py-2 md:px-6 md:py-3 rounded-lg backdrop-blur-sm">
                <TrendingUp className="w-4 h-4 md:w-5 md:h-5 text-[#C9A96E]" />
                <span className="text-xs md:text-sm text-gray-200">Fortalecimento</span>
              </div>
              <div className="flex items-center gap-2 bg-[#2D2520]/80 px-3 py-2 md:px-6 md:py-3 rounded-lg backdrop-blur-sm">
                <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-[#C9A96E]" />
                <span className="text-xs md:text-sm text-gray-200">Crescimento Saudável</span>
              </div>
              <div className="flex items-center gap-2 bg-[#2D2520]/80 px-3 py-2 md:px-6 md:py-3 rounded-lg backdrop-blur-sm">
                <Star className="w-4 h-4 md:w-5 md:h-5 text-[#C9A96E]" />
                <span className="text-xs md:text-sm text-gray-200">Brilho Natural</span>
              </div>
            </div>

            <div className="mb-8 md:mb-12 px-4">
              <img
                src="/produto-para-formula_(1)-r5p0sz-q.webp"
                alt="FolliVida - Cabelos e Unhas"
                className="w-full max-w-xs md:max-w-md mx-auto drop-shadow-2xl"
              />
            </div>

            <div className="px-4">
              <button
                onClick={scrollToOffer}
                className="w-full sm:w-auto bg-[#B8845F] hover:bg-[#A67652] text-white px-8 py-4 md:px-12 md:py-5 rounded-full text-base md:text-xl font-bold hover:scale-105 active:scale-95 transition-all shadow-xl"
              >
                Quero fortalecer meus cabelos agora
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 md:w-8 md:h-8 text-[#C9A96E]" />
        </div>
      </header>

      {/* VSL Section */}
      <section className="py-12 md:py-20 bg-[#e5d5c5]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-6 px-2 text-gray-900">
              Assista ao vídeo e descubra como nutrir cabelos e unhas <span className="text-[#8B6F47]">de dentro para fora</span>
            </h2>

            <div className="relative aspect-video bg-[#d4c4b4] rounded-xl md:rounded-2xl overflow-hidden shadow-2xl mb-6 md:mb-8">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-[#5D4E37] rounded-full flex items-center justify-center mb-4 mx-auto">
                    <div className="w-0 h-0 border-t-6 md:border-t-8 border-t-transparent border-l-10 md:border-l-12 border-l-[#C9A96E] border-b-6 md:border-b-8 border-b-transparent ml-1"></div>
                  </div>
                  <p className="text-gray-600 text-sm md:text-base">Vídeo de Vendas</p>
                </div>
              </div>
            </div>

            <button
              onClick={scrollToOffer}
              className="w-full sm:w-auto bg-[#5D4E37] hover:bg-[#4D3E27] text-white px-8 py-3 md:px-10 md:py-4 rounded-full text-base md:text-lg font-bold hover:scale-105 active:scale-95 transition-all"
            >
              Quero experimentar agora
            </button>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-12 md:py-20 bg-[#e5d5c5]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-center mb-8 md:mb-12 px-2 text-gray-900">
              Você sente que seus <span className="text-[#8B6F47]">cabelos e unhas</span> estão cada vez mais fracos?
            </h2>

            <div className="grid grid-cols-2 gap-6 md:gap-8">
              {[
                {
                  title: 'Queda excessiva de cabelo',
                  description: 'Você nota cada vez mais fios caindo no travesseiro, no chuveiro ou na escova?'
                },
                {
                  title: 'Unhas que quebram facilmente',
                  description: 'Suas unhas estão frágeis, descamando ou quebrando com facilidade?'
                },
                {
                  title: 'Falta de brilho e vitalidade',
                  description: 'Seus cabelos perderam aquele brilho natural e parecem sem vida?'
                },
                {
                  title: 'Sensação de envelhecimento precoce',
                  description: 'Você sente que sua aparência não reflete como você se sente por dentro?'
                }
              ].map((pain, index) => (
                <div key={index} className="p-6 md:p-8 rounded-lg bg-[#d4c4b4] border border-[#c4b4a4] transition-colors duration-300">
                  <h3 className="text-base md:text-lg font-semibold text-[#5D4E37] mb-3">{pain.title}</h3>
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed">{pain.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 md:mt-12 text-center px-2">
              <p className="text-lg md:text-2xl text-gray-800 leading-relaxed">
                Sabemos como isso pode afetar sua <span className="text-[#5D4E37] font-semibold">autoestima</span> e <span className="text-[#5D4E37] font-semibold">confiança</span>.<br className="hidden sm:block" />
                Mas há uma solução que pode auxiliar você.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-12 md:py-20 bg-[#e5d5c5] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#8B6F47] rounded-full filter blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="order-2 md:order-1">
                <video
                  src="/video.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full max-w-sm mx-auto md:max-w-full drop-shadow-2xl rounded-xl"
                />
              </div>

              <div className="order-1 md:order-2">
                <div className="inline-block bg-[#5D4E37] text-white px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-bold mb-4 md:mb-6">
                  A SOLUÇÃO
                </div>

                <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
                  Conheça o <span className="text-[#8B6F47]">FolliVida</span>
                </h2>

                <p className="text-base md:text-xl text-gray-700 mb-4 md:mb-6 leading-relaxed">
                  FolliVida é um suplemento alimentar desenvolvido para contribuir com a nutrição essencial que cabelos e unhas precisam.
                </p>

                <div className="bg-[#d4c4b4] rounded-xl p-4 md:p-6 mb-6 md:mb-8 border border-[#c4b4a4]">
                  <p className="text-lg md:text-2xl font-bold text-[#5D4E37] mb-2">Atua de dentro para fora</p>
                  <p className="text-sm md:text-base text-gray-700">Fornecendo nutrientes importantes para fortalecer e embelezar seus cabelos e unhas naturalmente.</p>
                </div>

                <div className="space-y-2 md:space-y-3 mb-6 md:mb-8">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-[#5D4E37] flex-shrink-0" />
                    <span className="text-sm md:text-base text-gray-800">60 cápsulas de 500mg</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-[#5D4E37] flex-shrink-0" />
                    <span className="text-sm md:text-base text-gray-800">Fórmula completa e balanceada</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-[#5D4E37] flex-shrink-0" />
                    <span className="text-sm md:text-base text-gray-800">Fácil de usar no dia a dia</span>
                  </div>
                </div>

                <button
                  onClick={scrollToOffer}
                  className="w-full sm:w-auto bg-[#5D4E37] hover:bg-[#4D3E27] text-white px-8 py-3 md:px-10 md:py-4 rounded-full text-base md:text-lg font-bold hover:scale-105 active:scale-95 transition-all shadow-xl"
                >
                  Quero o FolliVida agora
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 md:py-20 bg-[#e5d5c5]">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-center mb-3 md:mb-4 px-2 text-gray-900">
              Benefícios do <span className="text-[#8B6F47]">FolliVida</span>
            </h2>
            <p className="text-base md:text-xl text-gray-700 text-center mb-8 md:mb-12 px-2">
              Uma fórmula desenvolvida para nutrir e fortalecer
            </p>

            <div className="relative">
              {(() => {
                const benefits = [
                  {
                    icon: <TrendingUp className="w-12 h-12 md:w-16 md:h-16" />,
                    title: 'Fortalecimento dos fios',
                    description: 'Auxilia no fortalecimento dos fios capilares, deixando-os mais resistentes.'
                  },
                  {
                    icon: <Shield className="w-12 h-12 md:w-16 md:h-16" />,
                    title: 'Unhas mais resistentes',
                    description: 'Contribui para unhas mais fortes e menos propensas a quebrar.'
                  },
                  {
                    icon: <Sparkles className="w-12 h-12 md:w-16 md:h-16" />,
                    title: 'Crescimento saudável',
                    description: 'Favorece o crescimento saudável de cabelos e unhas.'
                  },
                  {
                    icon: <Star className="w-12 h-12 md:w-16 md:h-16" />,
                    title: 'Aparência mais bonita',
                    description: 'Ajuda na aparência mais bonita e uniforme dos cabelos e unhas.'
                  },
                  {
                    icon: <Heart className="w-12 h-12 md:w-16 md:h-16" />,
                    title: 'Suporte nutricional',
                    description: 'Fornece suporte nutricional diário para saúde capilar e das unhas.'
                  },
                  {
                    icon: <Award className="w-12 h-12 md:w-16 md:h-16" />,
                    title: 'Fórmula premium',
                    description: 'Combinação de ingredientes selecionados para máxima eficiência.'
                  }
                ];

                const nextBenefit = () => {
                  setCurrentBenefit((prev) => (prev + 1) % benefits.length);
                };

                const prevBenefit = () => {
                  setCurrentBenefit((prev) => (prev - 1 + benefits.length) % benefits.length);
                };

                return (
                  <>
                    <div className="overflow-hidden">
                      <div
                        className="flex transition-transform duration-500 ease-out"
                        style={{ transform: `translateX(-${currentBenefit * 100}%)` }}
                      >
                        {benefits.map((benefit, index) => (
                          <div key={index} className="w-full flex-shrink-0 px-2 md:px-4">
                            <div className="bg-[#d4c4b4] border border-[#c4b4a4] p-6 md:p-10 rounded-xl md:rounded-2xl max-w-2xl mx-auto text-center">
                              <div className="text-[#5D4E37] mb-4 md:mb-6 flex justify-center">
                                {benefit.icon}
                              </div>
                              <h3 className="text-xl md:text-3xl font-bold mb-3 md:mb-4 text-gray-900">{benefit.title}</h3>
                              <p className="text-base md:text-xl text-gray-700 leading-relaxed">{benefit.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <button
                      onClick={prevBenefit}
                      className="absolute left-0 top-1/2 -translate-y-1/2 bg-[#5D4E37]/20 hover:bg-[#5D4E37]/40 p-2 md:p-3 rounded-full transition-all -translate-x-2 md:translate-x-0"
                      aria-label="Benefício anterior"
                    >
                      <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-[#5D4E37]" />
                    </button>

                    <button
                      onClick={nextBenefit}
                      className="absolute right-0 top-1/2 -translate-y-1/2 bg-[#5D4E37]/20 hover:bg-[#5D4E37]/40 p-2 md:p-3 rounded-full transition-all translate-x-2 md:translate-x-0"
                      aria-label="Próximo benefício"
                    >
                      <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-[#5D4E37]" />
                    </button>

                    <div className="flex justify-center gap-2 mt-6 md:mt-8">
                      {benefits.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentBenefit(index)}
                          className={`w-2 h-2 rounded-full transition-all ${
                            index === currentBenefit ? 'bg-[#5D4E37] w-8' : 'bg-[#5D4E37]/30'
                          }`}
                          aria-label={`Ir para benefício ${index + 1}`}
                        />
                      ))}
                    </div>
                  </>
                );
              })()}
            </div>

            <div className="text-center mt-8 md:mt-12 px-4">
              <button
                onClick={scrollToOffer}
                className="w-full sm:w-auto bg-[#5D4E37] hover:bg-[#4D3E27] text-white px-8 py-3 md:px-10 md:py-4 rounded-full text-base md:text-lg font-bold hover:scale-105 active:scale-95 transition-all shadow-xl"
              >
                Quero todos esses benefícios
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Ingredients Section */}
      <section className="py-12 md:py-20 bg-[#e5d5c5]">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-center mb-3 md:mb-4 px-2 text-gray-900">
              Ingredientes <span className="text-[#8B6F47]">Poderosos</span>
            </h2>
            <p className="text-base md:text-xl text-gray-700 text-center mb-8 md:mb-12 px-2">
              Uma combinação cientificamente balanceada
            </p>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
              {[
                {
                  name: 'Biotina',
                  description: 'Vitamina essencial conhecida por seu papel na manutenção de cabelos e unhas saudáveis.',
                  highlight: 'Fortalecimento'
                },
                {
                  name: 'Zinco',
                  description: 'Mineral importante que contribui para a manutenção normal do cabelo e unhas.',
                  highlight: 'Estrutura'
                },
                {
                  name: 'Vitaminas do Complexo B',
                  description: 'Grupo de vitaminas que auxiliam no metabolismo energético e saúde dos fios.',
                  highlight: 'Vitalidade'
                },
                {
                  name: 'Minerais Essenciais',
                  description: 'Combinação de minerais que apoiam a nutrição capilar e das unhas.',
                  highlight: 'Nutrição'
                }
              ].map((ingredient, index) => (
                <div key={index} className="bg-[#d4c4b4] p-4 md:p-6 rounded-xl transition-all border border-[#c4b4a4]">
                  <div className="bg-[#5D4E37] w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mb-3 md:mb-4 mx-auto">
                    <span className="text-xl md:text-2xl font-bold text-[#C9A96E]">{ingredient.name[0]}</span>
                  </div>
                  <h3 className="text-base md:text-xl font-bold text-center mb-2 text-[#5D4E37]">{ingredient.name}</h3>
                  <div className="text-center mb-2 md:mb-3">
                    <span className="inline-block bg-[#5D4E37]/20 text-[#5D4E37] px-2 py-0.5 md:px-3 md:py-1 rounded-full text-xs md:text-sm font-semibold">
                      {ingredient.highlight}
                    </span>
                  </div>
                  <p className="text-gray-700 text-center text-xs md:text-sm">{ingredient.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-12 md:py-20 bg-[#e5d5c5]">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-center mb-3 md:mb-4 px-2 text-gray-900">
              O que dizem sobre o <span className="text-[#8B6F47]">FolliVida</span>
            </h2>
            <p className="text-base md:text-xl text-gray-700 text-center mb-8 md:mb-12 px-2">
              Histórias reais de quem já usa
            </p>

            <div className="relative">
              {(() => {
                const testimonials = [
                  {
                    name: 'Mariana S.',
                    age: '34 anos',
                    text: 'Depois de algumas semanas usando FolliVida, percebi meus cabelos com mais brilho e minhas unhas menos quebradiças. Estou muito satisfeita!',
                    rating: 5,
                    image: '/captura_de_tela_2026-01-18_022048.png'
                  },
                  {
                    name: 'Ana Paula R.',
                    age: '38 anos',
                    text: 'Minhas unhas estavam sempre quebrando. Desde que comecei a usar o FolliVida, notei uma diferença incrível. Agora estão mais fortes!',
                    rating: 5,
                    image: '/captura_de_tela_2026-01-18_022142.png'
                  },
                  {
                    name: 'Juliana F.',
                    age: '31 anos',
                    text: 'Estava desanimada com meus cabelos fracos. O FolliVida trouxe de volta minha autoestima. Muito obrigada!',
                    rating: 5,
                    image: '/captura_de_tela_2026-01-18_022129.png'
                  },
                  {
                    name: 'Beatriz M.',
                    age: '42 anos',
                    text: 'Sempre tive problemas com queda de cabelo. O FolliVida tem me ajudado muito no fortalecimento dos fios. Recomendo!',
                    rating: 5,
                    image: '/captura_de_tela_2026-01-18_022124.png'
                  },
                  {
                    name: 'Fernanda L.',
                    age: '39 anos',
                    text: 'Excelente suplemento! Notei melhora tanto nos cabelos quanto nas unhas. Vale muito a pena investir na saúde!',
                    rating: 5,
                    image: '/captura_de_tela_2026-01-18_022119.png'
                  }
                ];

                const nextTestimonial = () => {
                  setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
                };

                const prevTestimonial = () => {
                  setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
                };

                return (
                  <>
                    <div className="overflow-hidden">
                      <div
                        className="flex transition-transform duration-500 ease-out"
                        style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
                      >
                        {testimonials.map((testimonial, index) => (
                          <div key={index} className="w-full flex-shrink-0 px-2 md:px-4">
                            <div className="bg-[#d4c4b4] border border-[#c4b4a4] p-4 md:p-8 rounded-xl max-w-3xl mx-auto">
                              <div className="flex gap-1 mb-3 md:mb-4 justify-center">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                  <Star key={i} className="w-4 h-4 md:w-6 md:h-6 fill-[#C9A96E] text-[#C9A96E]" />
                                ))}
                              </div>
                              <p className="text-base md:text-xl text-gray-800 mb-4 md:mb-6 italic text-center leading-relaxed">"{testimonial.text}"</p>
                              <div className="flex items-center gap-3 justify-center">
                                <img
                                  src={testimonial.image}
                                  alt={testimonial.name}
                                  className="w-12 h-12 md:w-14 md:h-14 rounded-full object-cover flex-shrink-0 border-2 border-[#5D4E37]"
                                />
                                <div>
                                  <p className="text-base md:text-lg font-bold text-[#5D4E37]">{testimonial.name}</p>
                                  <p className="text-sm md:text-base text-gray-700">{testimonial.age}</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <button
                      onClick={prevTestimonial}
                      className="absolute left-0 top-1/2 -translate-y-1/2 bg-[#5D4E37]/20 hover:bg-[#5D4E37]/40 p-2 md:p-3 rounded-full transition-all -translate-x-2 md:translate-x-0"
                      aria-label="Depoimento anterior"
                    >
                      <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-[#5D4E37]" />
                    </button>

                    <button
                      onClick={nextTestimonial}
                      className="absolute right-0 top-1/2 -translate-y-1/2 bg-[#5D4E37]/20 hover:bg-[#5D4E37]/40 p-2 md:p-3 rounded-full transition-all translate-x-2 md:translate-x-0"
                      aria-label="Próximo depoimento"
                    >
                      <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-[#5D4E37]" />
                    </button>

                    <div className="flex justify-center gap-2 mt-6 md:mt-8">
                      {testimonials.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentTestimonial(index)}
                          className={`w-2 h-2 rounded-full transition-all ${
                            index === currentTestimonial ? 'bg-[#5D4E37] w-8' : 'bg-[#5D4E37]/30'
                          }`}
                          aria-label={`Ir para depoimento ${index + 1}`}
                        />
                      ))}
                    </div>
                  </>
                );
              })()}
            </div>

            {/* Video Testimonials Slider */}
            <div className="mt-8 md:mt-12">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-4 md:mb-6 px-2 text-gray-900">
                Depoimentos em <span className="text-[#8B6F47]">Vídeo</span>
              </h3>
              
              <div className="relative">
                {(() => {
                  const videos = [
                    { src: '/01.mp4', title: 'Depoimento 01' },
                    { src: '/02.mp4', title: 'Depoimento 02' },
                    { src: '/03.mp4', title: 'Depoimento 03' }
                  ];

                  const nextVideo = () => {
                    setCurrentVideo((prev) => (prev + 1) % videos.length);
                  };

                  const prevVideo = () => {
                    setCurrentVideo((prev) => (prev - 1 + videos.length) % videos.length);
                  };

                  return (
                    <>
                      <div className="overflow-hidden">
                        <div
                          className="flex transition-transform duration-500 ease-out"
                          style={{ transform: `translateX(-${currentVideo * 100}%)` }}
                        >
                          {videos.map((video, index) => (
                            <div key={index} className="w-full flex-shrink-0 px-2 md:px-4">
                              <div className="max-w-[280px] md:max-w-md mx-auto">
                                <div className="relative aspect-[9/16] bg-transparent overflow-hidden rounded-2xl">
                                  <video
                                    src={video.src}
                                    controls
                                    className="w-full h-full object-cover rounded-2xl"
                                    playsInline
                                    preload="metadata"
                                  >
                                    Seu navegador não suporta o elemento de vídeo.
                                  </video>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <button
                        onClick={prevVideo}
                        className="absolute left-0 top-1/2 -translate-y-1/2 bg-[#5D4E37]/20 hover:bg-[#5D4E37]/40 p-2 md:p-3 rounded-full transition-all -translate-x-2 md:translate-x-0"
                        aria-label="Vídeo anterior"
                      >
                        <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-[#5D4E37]" />
                      </button>

                      <button
                        onClick={nextVideo}
                        className="absolute right-0 top-1/2 -translate-y-1/2 bg-[#5D4E37]/20 hover:bg-[#5D4E37]/40 p-2 md:p-3 rounded-full transition-all translate-x-2 md:translate-x-0"
                        aria-label="Próximo vídeo"
                      >
                        <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-[#5D4E37]" />
                      </button>

                      <div className="flex justify-center gap-2 mt-4 md:mt-6">
                        {videos.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => setCurrentVideo(index)}
                            className={`w-2 h-2 rounded-full transition-all ${
                              index === currentVideo ? 'bg-[#5D4E37] w-8' : 'bg-[#5D4E37]/30'
                            }`}
                            aria-label={`Ir para vídeo ${index + 1}`}
                          />
                        ))}
                      </div>
                    </>
                  );
                })()}
              </div>
            </div>

            <div className="mt-8 md:mt-12 text-center px-4">
              <button
                onClick={scrollToOffer}
                className="w-full sm:w-auto bg-[#5D4E37] hover:bg-[#4D3E27] text-white px-8 py-3 md:px-10 md:py-4 rounded-full text-base md:text-lg font-bold hover:scale-105 active:scale-95 transition-all shadow-xl"
              >
                Quero fazer parte desse grupo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Before/After Section */}
      <section className="py-12 md:py-20 bg-[#e5d5c5]">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-center mb-3 md:mb-4 px-2 text-gray-900">
              Resultados <span className="text-[#8B6F47]">Transformadores</span>
            </h2>
            <p className="text-base md:text-xl text-gray-700 text-center mb-8 md:mb-12 px-2">
              Veja o que o cuidado diário pode fazer
            </p>

            <div className="relative mb-6 md:mb-8">
              <img
                src="/image copy copy.png"
                alt="Antes e Depois FolliVida"
                className="w-full rounded-xl shadow-2xl"
              />
            </div>

            <div className="grid grid-cols-2 gap-2 md:gap-8 mb-6 md:mb-8">
              <div className="bg-[#d4c4b4] p-3 md:p-8 rounded-xl border border-[#c4b4a4]">
                <div className="text-red-600 font-bold text-xs md:text-sm mb-1 md:mb-2">ANTES</div>
                <h3 className="text-base md:text-2xl font-bold mb-2 md:mb-4 text-gray-900">Sem o FolliVida</h3>
                <ul className="space-y-1.5 md:space-y-3">
                  <li className="flex items-start gap-1.5 md:gap-3">
                    <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-red-500 rounded-full mt-1 md:mt-2 flex-shrink-0"></div>
                    <span className="text-xs md:text-base text-gray-700 leading-tight">Cabelos fracos e sem brilho</span>
                  </li>
                  <li className="flex items-start gap-1.5 md:gap-3">
                    <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-red-500 rounded-full mt-1 md:mt-2 flex-shrink-0"></div>
                    <span className="text-xs md:text-base text-gray-700 leading-tight">Unhas quebradiças e descamando</span>
                  </li>
                  <li className="flex items-start gap-1.5 md:gap-3">
                    <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-red-500 rounded-full mt-1 md:mt-2 flex-shrink-0"></div>
                    <span className="text-xs md:text-base text-gray-700 leading-tight">Queda excessiva de cabelo</span>
                  </li>
                  <li className="flex items-start gap-1.5 md:gap-3">
                    <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-red-500 rounded-full mt-1 md:mt-2 flex-shrink-0"></div>
                    <span className="text-xs md:text-base text-gray-700 leading-tight">Baixa autoestima</span>
                  </li>
                </ul>
              </div>

              <div className="bg-[#c4b4a4] p-3 md:p-8 rounded-xl border border-[#b4a494]">
                <div className="text-[#5D4E37] font-bold text-xs md:text-sm mb-1 md:mb-2">DEPOIS</div>
                <h3 className="text-base md:text-2xl font-bold mb-2 md:mb-4 text-gray-900">Com o FolliVida</h3>
                <ul className="space-y-1.5 md:space-y-3">
                  <li className="flex items-start gap-1.5 md:gap-3">
                    <CheckCircle className="w-4 h-4 md:w-6 md:h-6 text-[#5D4E37] flex-shrink-0" />
                    <span className="text-xs md:text-base text-gray-800 leading-tight">Cabelos mais fortes e brilhantes</span>
                  </li>
                  <li className="flex items-start gap-1.5 md:gap-3">
                    <CheckCircle className="w-4 h-4 md:w-6 md:h-6 text-[#5D4E37] flex-shrink-0" />
                    <span className="text-xs md:text-base text-gray-800 leading-tight">Unhas resistentes e bonitas</span>
                  </li>
                  <li className="flex items-start gap-1.5 md:gap-3">
                    <CheckCircle className="w-4 h-4 md:w-6 md:h-6 text-[#5D4E37] flex-shrink-0" />
                    <span className="text-xs md:text-base text-gray-800 leading-tight">Redução visível da queda</span>
                  </li>
                  <li className="flex items-start gap-1.5 md:gap-3">
                    <CheckCircle className="w-4 h-4 md:w-6 md:h-6 text-[#5D4E37] flex-shrink-0" />
                    <span className="text-xs md:text-base text-gray-800 leading-tight">Confiança renovada</span>
                  </li>
                </ul>
              </div>
            </div>

            <p className="text-center text-gray-600 text-xs md:text-sm px-2">
              * Resultados podem variar de pessoa para pessoa. Imagens ilustrativas.
            </p>
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="py-12 md:py-20 bg-[#e5d5c5]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-[#d4c4b4] border-2 border-[#c4b4a4] p-6 md:p-12 rounded-xl md:rounded-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#8B6F47] opacity-5 rounded-full -mr-16 -mt-16"></div>
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-[#5D4E37] opacity-5 rounded-full -ml-20 -mb-20"></div>

              <div className="relative text-center">
                <div className="inline-block mb-4 md:mb-6">
                  <img
                    src="/selo-de-garantia-de-30-dias-png-transparente-sem-fundo.png"
                    alt="Selo de Garantia 30 Dias"
                    className="w-32 h-32 md:w-40 md:h-40"
                  />
                </div>

                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4 text-gray-900">
                  Garantia de <span className="text-[#5D4E37]">30 Dias</span>
                </h2>

                <p className="text-base md:text-xl text-gray-800 mb-4 md:mb-6 leading-relaxed">
                  Experimente o FolliVida por 30 dias. Se você não ficar satisfeito com os resultados, devolvemos seu dinheiro.
                </p>

                <p className="text-[#5D4E37] font-bold text-base md:text-lg mb-6 md:mb-8">
                  Risco zero para você. Total confiança para nós.
                </p>

                <div className="flex flex-wrap justify-center gap-3 md:gap-6">
                  <div className="flex items-center gap-2 bg-white/50 border border-[#b4a494] px-3 py-2 md:px-4 md:py-2 rounded-lg">
                    <Lock className="w-4 h-4 md:w-5 md:h-5 text-[#5D4E37]" />
                    <span className="text-xs md:text-sm text-gray-800">Compra 100% Segura</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/50 border border-[#b4a494] px-3 py-2 md:px-4 md:py-2 rounded-lg">
                    <Shield className="w-4 h-4 md:w-5 md:h-5 text-[#5D4E37]" />
                    <span className="text-xs md:text-sm text-gray-800">Garantia Total</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/50 border border-[#b4a494] px-3 py-2 md:px-4 md:py-2 rounded-lg">
                    <Award className="w-4 h-4 md:w-5 md:h-5 text-[#5D4E37]" />
                    <span className="text-xs md:text-sm text-gray-800">Produto Premium</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ANVISA Section */}
      <section className="py-12 md:py-20 bg-[#5D4E37] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#C9A96E] rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-[#8B6F47] rounded-full filter blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              {/* Left Side - Content */}
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-white">
                  Qualidade, Segurança e Confiança em Cada Frasco
                </h2>

                <div className="space-y-4 md:space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 bg-white/10 rounded-full flex items-center justify-center border border-white/20">
                      <FlaskConical className="w-6 h-6 md:w-7 md:h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg md:text-xl font-semibold text-white mb-1">Produzido em laboratórios certificados</h3>
                      <p className="text-gray-200 text-sm md:text-base">Fabricação seguindo os mais altos padrões de qualidade e segurança.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 bg-white/10 rounded-full flex items-center justify-center border border-white/20">
                      <FileCheck className="w-6 h-6 md:w-7 md:h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg md:text-xl font-semibold text-white mb-1">Produto notificado pela Anvisa</h3>
                      <p className="text-gray-200 text-sm md:text-base">Regularizado e em conformidade com a Agência Nacional de Vigilância Sanitária.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 bg-white/10 rounded-full flex items-center justify-center border border-white/20">
                      <Pill className="w-6 h-6 md:w-7 md:h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg md:text-xl font-semibold text-white mb-1">Ingredientes premium com laudos de pureza</h3>
                      <p className="text-gray-200 text-sm md:text-base">Matérias-primas selecionadas e testadas para garantir máxima eficácia.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 bg-white/10 rounded-full flex items-center justify-center border border-white/20">
                      <Truck className="w-6 h-6 md:w-7 md:h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg md:text-xl font-semibold text-white mb-1">Envio rápido, discreto e seguro</h3>
                      <p className="text-gray-200 text-sm md:text-base">Entrega eficiente com total privacidade e segurança em todo o Brasil.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side - ANVISA Logo */}
              <div className="flex justify-center md:justify-end">
                <div className="relative bg-white/5 backdrop-blur-sm border-2 border-white/20 rounded-2xl p-8 md:p-12 max-w-md w-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl"></div>
                  <div className="relative">
                    <div className="bg-white rounded-xl p-6 md:p-8 shadow-2xl border-2 border-green-500/30">
                      <div className="flex flex-col items-center">
                        <div className="mb-4">
                          <img
                            src="/anvisa-logo.png"
                            alt="Logo ANVISA - Agência Nacional de Vigilância Sanitária"
                            className="w-32 h-32 md:w-40 md:h-40 object-contain mx-auto"
                          />
                        </div>
                        <div className="text-center">
                          <p className="text-xs md:text-sm text-gray-600 mt-2">Agência Nacional de Vigilância Sanitária</p>
                        </div>
                      </div>
                    </div>
                    <p className="text-center text-white/80 text-xs md:text-sm mt-4 font-medium">
                      Produto regularizado e aprovado
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Offer Section */}
      <section id="offer" className="py-8 md:py-12 bg-[#e5d5c5] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#8B6F47] rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-[#5D4E37] rounded-full filter blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-2 md:mb-3 px-2 text-gray-900">
              Escolha seu <span className="text-[#8B6F47]">Kit FolliVida</span>
            </h2>
            <p className="text-sm md:text-base text-gray-700 text-center mb-6 md:mb-8 px-2">
              Quanto mais você investe na sua saúde, mais você economiza
            </p>

            <div className="space-y-4 md:space-y-5 mb-6 md:mb-8">
              {/* Card MAIS VENDIDO - Primeiro */}
              <div className="flex justify-center">
                <div className="w-full max-w-md">
                  <div className="relative bg-[#3d3228] p-4 md:p-6 rounded-xl shadow-2xl transition-all hover:scale-[1.02] border-2 border-yellow-500">
                    <div className="absolute -top-2 md:-top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-yellow-500 to-yellow-600 text-[#1A1612] px-3 py-1 md:px-4 md:py-1.5 rounded-full text-xs font-bold shadow-lg whitespace-nowrap">
                      ⭐ MAIS VENDIDO
                    </div>

                    <div className="text-center mb-3 md:mb-4 mt-2 md:mt-0">
                      <h3 className="text-base md:text-lg font-bold mb-1 text-white">COMPRE 4 LEVE 6</h3>
                      <p className="text-gray-300 text-xs uppercase tracking-wide">Tratamento para 6 meses</p>
                    </div>

                    <div className="flex justify-center mb-4 md:mb-5">
                      <img
                        src="/6_bottles_folli-b0fgj30k.png"
                        alt="FolliVida 6 frascos"
                        className="w-full max-w-[140px] md:max-w-[180px] h-auto object-contain"
                      />
                    </div>

                    <div className="text-center mb-3 md:mb-4 space-y-1.5">
                      <p className="text-gray-400 text-xs md:text-sm">De R$542,00 por</p>

                      <div className="bg-[#5a4a3a] rounded-lg p-2.5 md:p-3 border border-[#6a5a4a]">
                        <p className="text-xl md:text-2xl font-bold text-[#f4d4a4] mb-1">12x de R$47,01</p>
                        <p className="text-xs md:text-sm text-gray-300">Ou R$ 457,00 à vista</p>
                      </div>

                      <div className="inline-flex items-center gap-1.5 bg-green-600/30 text-green-400 px-2.5 py-1 rounded-full text-xs font-semibold border border-green-600/40">
                        <span className="text-green-400">⚡</span>
                        Economia de R$145,00
                      </div>
                    </div>

                    <a
                      href="https://app.keedpay.com.br/checkout/woW8ha7LASm"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full text-center bg-[#d4a574] hover:bg-[#c49564] text-[#1A1612] px-4 py-2.5 md:px-5 md:py-3 rounded-lg font-bold text-sm hover:scale-[1.02] active:scale-95 transition-all shadow-lg uppercase tracking-wide"
                    >
                      COMPRAR AGORA!
                    </a>

                    <div className="mt-3 flex items-center justify-center gap-1.5 text-gray-300">
                      <Package className="w-3.5 h-3.5 text-[#d4a574]" />
                      <span className="text-xs">Frete grátis para todo o Brasil</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Grid com 2 cards - Segundo */}
              <div className="grid grid-cols-2 gap-3 md:gap-5">
                {[
                  {
                    bottles: 3,
                    title: 'COMPRE 2 LEVE 3',
                    subtitle: 'Tratamento para 3 meses',
                    installmentPrice: '12x de R$34,65',
                    cashPrice: 'R$ 337,00',
                    oldPrice: 'De R$406,00 por',
                    savings: 'Economia de R$109,00',
                    highlighted: false,
                    image: '/3_bottles-dbc8irkc.png',
                    checkoutUrl: 'https://app.keedpay.com.br/checkout/UvdeDvbkX3X'
                  },
                  {
                    bottles: 12,
                    title: 'COMPRE 6 LEVE 12',
                    subtitle: 'Tratamento para 1 ano',
                    installmentPrice: '12x de R$71,70',
                    cashPrice: 'R$ 697,00',
                    oldPrice: 'De R$952,00 por',
                    savings: 'Economia de R$255,00',
                    highlighted: false,
                    image: '/12_bottles_folli-dobcf_re.png',
                    checkoutUrl: 'https://app.keedpay.com.br/checkout/xywp8HdYauD'
                  }
                ].map((plan, index) => (
                  <div
                    key={index}
                    className="relative bg-[#3d3228] p-3 md:p-5 rounded-xl transition-all hover:scale-[1.02] border border-[#5a4a3a]"
                  >
                    <div className="text-center mb-3 md:mb-4">
                    <h3 className="text-sm md:text-base font-bold mb-0.5 md:mb-1 text-white">{plan.title}</h3>
                    <p className="text-gray-300 text-[10px] md:text-xs uppercase tracking-wide">{plan.subtitle}</p>
                  </div>

                  <div className="flex justify-center mb-3 md:mb-4">
                    <img
                      src={plan.image}
                      alt={`FolliVida ${plan.bottles} frascos`}
                      className="w-full max-w-[100px] md:max-w-[140px] h-auto object-contain"
                    />
                  </div>

                  <div className="text-center mb-3 md:mb-4 space-y-1">
                    {plan.oldPrice && (
                      <p className="text-gray-400 text-[10px] md:text-xs">{plan.oldPrice}</p>
                    )}

                    <div className="bg-[#5a4a3a] rounded-lg p-2 md:p-2.5 border border-[#6a5a4a]">
                      <p className="text-base md:text-xl font-bold text-[#f4d4a4] mb-0.5 md:mb-1">{plan.installmentPrice}</p>
                      <p className="text-[10px] md:text-xs text-gray-300">Ou {plan.cashPrice} à vista</p>
                    </div>

                    {plan.savings && (
                      <div className="inline-flex items-center gap-1 bg-green-600/30 text-green-400 px-2 py-0.5 md:py-1 rounded-full text-[10px] md:text-xs font-semibold border border-green-600/40">
                        <span className="text-green-400">⚡</span>
                        {plan.savings}
                      </div>
                    )}
                  </div>

                    <a
                      href={plan.checkoutUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full text-center bg-[#d4a574] hover:bg-[#c49564] text-[#1A1612] px-3 py-2 md:px-4 md:py-2.5 rounded-lg font-bold text-[11px] md:text-sm hover:scale-[1.02] active:scale-95 transition-all shadow-lg uppercase tracking-wide"
                    >
                      COMPRAR AGORA!
                    </a>

                    <div className="mt-2 md:mt-3 flex items-center justify-center gap-1 text-gray-300">
                      <Package className="w-3 h-3 md:w-3.5 md:h-3.5 text-[#d4a574]" />
                      <span className="text-[10px] md:text-xs">Frete grátis</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Card COMPRE 1 POTE - Por último */}
              <div className="flex justify-center">
                <div className="w-full max-w-sm">
                  <div className="relative bg-[#3d3228] p-4 md:p-6 rounded-xl shadow-2xl transition-all hover:scale-[1.02] border border-[#5a4a3a]">
                    <div className="text-center mb-2 md:mb-3">
                      <div className="inline-block bg-[#5D4E37] text-white px-3 py-1 md:px-4 md:py-1.5 rounded-lg text-xs md:text-sm font-bold mb-2">
                        COMPRE 1 POTE
                      </div>
                      <div className="bg-[#8B6F47] text-white px-4 py-1.5 md:px-5 md:py-2 rounded-lg text-xs md:text-sm font-semibold inline-block">
                        TRATAMENTO PARA 1 MÊS
                      </div>
                    </div>

                    <div className="flex justify-center mb-4 md:mb-5">
                      <img
                        src="/produto-para-formula_(1)-r5p0sz-q.webp"
                        alt="FolliVida 1 frasco"
                        className="w-full max-w-[120px] md:max-w-[150px] h-auto object-contain"
                      />
                    </div>

                    <div className="text-center mb-3 md:mb-4 space-y-1.5">
                      <p className="text-gray-400 text-xs md:text-sm">De R$269,00 por</p>

                      <div className="bg-[#5a4a3a] rounded-lg p-2.5 md:p-3 border border-[#6a5a4a]">
                        <p className="text-xl md:text-2xl font-bold text-[#f4d4a4] mb-1">12x de R$24,39</p>
                        <p className="text-xs md:text-sm text-gray-300">Ou R$ 237,00 à vista</p>
                      </div>

                      <div className="inline-flex items-center gap-1.5 bg-green-600/30 text-green-400 px-2.5 py-1 rounded-full text-xs font-semibold border border-green-600/40">
                        <span className="text-green-400">⚡</span>
                        Economia de R$90,00
                      </div>
                    </div>

                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full text-center bg-[#d4a574] hover:bg-[#c49564] text-[#1A1612] px-4 py-2.5 md:px-5 md:py-3 rounded-lg font-bold text-sm hover:scale-[1.02] active:scale-95 transition-all shadow-lg uppercase tracking-wide"
                    >
                      COMPRAR AGORA!
                    </a>

                    <div className="mt-3 flex items-center justify-center gap-1.5 text-gray-300">
                      <Package className="w-3.5 h-3.5 text-[#d4a574]" />
                      <span className="text-xs">Frete grátis para todo o Brasil</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center px-4">
              <div className="flex flex-wrap justify-center gap-2 md:gap-4">
                <div className="flex items-center gap-1.5">
                  <Lock className="w-4 h-4 text-[#5D4E37]" />
                  <span className="text-xs text-gray-700">Pagamento Seguro</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Shield className="w-4 h-4 text-[#5D4E37]" />
                  <span className="text-xs text-gray-700">Dados Protegidos</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-[#5D4E37]" />
                  <span className="text-xs text-gray-700">Garantia Total</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scarcity Section */}
      <section className="py-8 md:py-12 bg-[#d4c4b4] border-y-2 border-[#c4b4a4]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6">
              <Users className="w-10 h-10 md:w-12 md:h-12 text-[#5D4E37]" />
              <div>
                <p className="text-xl md:text-2xl font-bold text-[#5D4E37] mb-1">Estoque Limitado!</p>
                <p className="text-sm md:text-base text-gray-700">Alta procura - Garanta o seu agora antes que acabe</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 md:py-20 bg-[#e5d5c5]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-center mb-3 md:mb-4 px-2 text-gray-900">
              Perguntas <span className="text-[#8B6F47]">Frequentes</span>
            </h2>
            <p className="text-base md:text-xl text-gray-700 text-center mb-8 md:mb-12 px-2">
              Tire suas dúvidas sobre o FolliVida
            </p>

            <div className="space-y-4 md:space-y-6">
              {[
                {
                  question: 'Como devo usar o FolliVida?',
                  answer: 'Recomendamos tomar 2 cápsulas por dia, preferencialmente junto com as refeições. Consulte um profissional de saúde para orientações personalizadas.'
                },
                {
                  question: 'Em quanto tempo posso notar resultados?',
                  answer: 'Os resultados podem variar de pessoa para pessoa. Geralmente, os primeiros sinais podem ser percebidos após algumas semanas de uso contínuo, mas recomendamos um tratamento de pelo menos 3 meses para resultados mais expressivos.'
                },
                {
                  question: 'O produto é aprovado?',
                  answer: 'Sim, o FolliVida é um suplemento alimentar produzido seguindo todas as normas e regulamentações vigentes da ANVISA.'
                },
                {
                  question: 'Posso usar continuamente?',
                  answer: 'Sim, o FolliVida é um suplemento alimentar e pode ser usado continuamente como parte de uma rotina de cuidados. Porém, sempre consulte um profissional de saúde para orientações específicas.'
                },
                {
                  question: 'Quem pode consumir?',
                  answer: 'O FolliVida é indicado para adultos que desejam fortalecer cabelos e unhas. Gestantes, lactantes e pessoas com condições de saúde específicas devem consultar um médico antes do uso.'
                },
                {
                  question: 'Tem alguma contraindicação?',
                  answer: 'Pessoas alérgicas a algum dos componentes da fórmula não devem consumir. Em caso de dúvidas, consulte um profissional de saúde.'
                },
                {
                  question: 'Como funciona a garantia?',
                  answer: 'Oferecemos garantia de 30 dias. Se você não ficar satisfeito com o produto, devolvemos seu dinheiro sem complicações.'
                },
                {
                  question: 'Quanto tempo demora para receber?',
                  answer: 'O prazo de entrega varia conforme sua região, geralmente entre 5 a 15 dias úteis após a confirmação do pagamento.'
                }
              ].map((faq, index) => (
                <div key={index} className="bg-[#d4c4b4] border border-[#c4b4a4] p-4 md:p-6 rounded-xl transition-all">
                  <h3 className="text-base md:text-xl font-bold mb-2 md:mb-3 text-[#5D4E37]">{faq.question}</h3>
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-12 md:py-20 bg-[#e5d5c5] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#8B6F47] rounded-full filter blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 md:mb-6 px-2 text-gray-900">
              A hora de cuidar dos seus <span className="text-[#8B6F47]">cabelos e unhas</span> é agora
            </h2>

            <p className="text-base md:text-xl text-gray-700 mb-8 md:mb-12 leading-relaxed px-2">
              Não deixe para depois. Invista na sua saúde e autoestima hoje mesmo. Com garantia de 30 dias, você não tem nada a perder.
            </p>

            <div className="px-4 mb-6 md:mb-8">
              <button
                onClick={scrollToOffer}
                className="w-full sm:w-auto bg-[#5D4E37] hover:bg-[#4D3E27] text-white px-10 py-4 md:px-16 md:py-6 rounded-full text-lg md:text-2xl font-bold hover:scale-105 active:scale-95 transition-all shadow-2xl"
              >
                Quero experimentar o FolliVida
              </button>
            </div>

            <div className="flex flex-wrap justify-center gap-3 md:gap-6 mb-8 md:mb-12 px-4">
              <div className="flex items-center gap-2 bg-[#d4c4b4] px-3 py-2 md:px-4 md:py-2 rounded-lg border border-[#c4b4a4]">
                <Shield className="w-4 h-4 md:w-5 md:h-5 text-[#5D4E37]" />
                <span className="text-xs md:text-sm text-gray-800">Garantia de 30 dias</span>
              </div>
              <div className="flex items-center gap-2 bg-[#d4c4b4] px-3 py-2 md:px-4 md:py-2 rounded-lg border border-[#c4b4a4]">
                <Lock className="w-4 h-4 md:w-5 md:h-5 text-[#5D4E37]" />
                <span className="text-xs md:text-sm text-gray-800">Compra 100% segura</span>
              </div>
              <div className="flex items-center gap-2 bg-[#d4c4b4] px-3 py-2 md:px-4 md:py-2 rounded-lg border border-[#c4b4a4]">
                <Award className="w-4 h-4 md:w-5 md:h-5 text-[#5D4E37]" />
                <span className="text-xs md:text-sm text-gray-800">Produto premium</span>
              </div>
            </div>

            <div className="grid sm:grid-cols-3 gap-6 md:gap-8 px-4">
              <div className="text-center">
                <div className="bg-[#5D4E37] w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                  <span className="text-2xl md:text-3xl font-bold text-[#C9A96E]">1</span>
                </div>
                <h3 className="text-base md:text-lg font-bold mb-1 md:mb-2 text-gray-900">Escolha seu kit</h3>
                <p className="text-xs md:text-sm text-gray-700">Selecione a melhor opção para você</p>
              </div>
              <div className="text-center">
                <div className="bg-[#5D4E37] w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                  <span className="text-2xl md:text-3xl font-bold text-[#C9A96E]">2</span>
                </div>
                <h3 className="text-base md:text-lg font-bold mb-1 md:mb-2 text-gray-900">Receba em casa</h3>
                <p className="text-xs md:text-sm text-gray-700">Entrega rápida e segura</p>
              </div>
              <div className="text-center">
                <div className="bg-[#5D4E37] w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                  <span className="text-2xl md:text-3xl font-bold text-[#C9A96E]">3</span>
                </div>
                <h3 className="text-base md:text-lg font-bold mb-1 md:mb-2 text-gray-900">Veja resultados</h3>
                <p className="text-xs md:text-sm text-gray-700">Cabelos e unhas mais fortes</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#e5d5c5] border-t-2 border-[#c4b4a4] py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mb-6 md:mb-8">
              <div>
                <div className="flex items-center gap-2 mb-3 md:mb-4">
                  <Sparkles className="w-5 h-5 md:w-6 md:h-6 text-[#5D4E37]" />
                  <span className="text-lg md:text-xl font-bold text-gray-900">FolliVida</span>
                </div>
                <p className="text-gray-700 text-xs md:text-sm">
                  Cuidando da saúde dos seus cabelos e unhas de dentro para fora.
                </p>
              </div>

              <div>
                <h3 className="font-bold mb-3 md:mb-4 text-[#5D4E37] text-sm md:text-base">Informações</h3>
                <ul className="space-y-1.5 md:space-y-2 text-xs md:text-sm text-gray-700">
                  <li><a href="#" className="hover:text-[#5D4E37] transition-colors">Política de Privacidade</a></li>
                  <li><a href="#" className="hover:text-[#5D4E37] transition-colors">Termos de Uso</a></li>
                  <li><a href="#" className="hover:text-[#5D4E37] transition-colors">Política de Troca e Devolução</a></li>
                  <li><a href="#" className="hover:text-[#5D4E37] transition-colors">Rastreamento de Pedido</a></li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold mb-3 md:mb-4 text-[#5D4E37] text-sm md:text-base">Contato</h3>
                <ul className="space-y-1.5 md:space-y-2 text-xs md:text-sm text-gray-700">
                  <li>Email: contato@follivida.com.br</li>
                  <li>WhatsApp: (11) 9999-9999</li>
                  <li>Horário: Seg-Sex 9h às 18h</li>
                </ul>
              </div>
            </div>

            <div className="border-t-2 border-[#c4b4a4] pt-6 md:pt-8">
              <div className="bg-[#d4c4b4] border border-[#c4b4a4] rounded-lg p-4 md:p-6 mb-6 md:mb-8">
                <p className="text-center text-xs md:text-sm text-gray-700 leading-relaxed">
                  <strong className="text-[#5D4E37]">AVISO IMPORTANTE:</strong> Este produto não é um medicamento. Não deve ser usado para diagnóstico, prevenção ou tratamento de doenças. Consulte sempre um profissional de saúde qualificado antes de iniciar o uso de suplementos. Os resultados podem variar de pessoa para pessoa. Mantenha fora do alcance de crianças. Gestantes, lactantes e crianças devem consultar um médico antes do consumo.
                </p>
              </div>

              <p className="text-center text-gray-600 text-xs md:text-sm">
                © 2024 FolliVida - Todos os direitos reservados. CNPJ: 00.000.000/0000-00
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;