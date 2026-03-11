  import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Code2, Database, Server, Globe, Container } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { useLanguage } from '@/context/LanguageContext.jsx';
import fotoPerfil from "@/components/image/Eu.jpeg";

const AboutPage = () => {
  const { t } = useLanguage();

  const skills = [
    { name: 'React', icon: Code2, color: 'text-cyan-400' },
    { name: 'Node.js', icon: Server, color: 'text-green-500' },
    { name: 'JavaScript', icon: Code2, color: 'text-yellow-400' },
    { name: 'REST APIs', icon: Globe, color: 'text-purple-400' },
    { name: 'MySQL', icon: Database, color: 'text-green-600' },
    { name: 'Docker', icon: Container, color: 'text-blue-400' },
    { name: 'C', icon: Code2, color: 'text-blue-600' },
    { name: 'Java', icon: Code2, color: 'text-orange-500' },
  ];

  const education = [
    {
      degree: t('about.edu1.degree'),
      institution: t('about.edu1.institution'),
      period: t('about.edu1.period'),
      description: t('about.edu1.description'),
    },
  ];

  return (
    <>
      <Helmet>
        <title>{t('about.metaTitle')}</title>
        <meta name="description" content={t('about.metaDesc')} />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />

        <main className="pt-24 pb-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {/* Page Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
                {t('about.title')}
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                {t('about.subtitle')}
              </p>
            </motion.div>

            {/* Profile Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
              {/* Photo with hover animation */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex justify-center lg:justify-end pb-6"
              >
                <motion.div
                  className="relative group"
                  whileHover="hover"
                  initial="rest"
                  animate="rest"
                >
                  {/* Rotating gradient behind */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-2xl"
                    variants={{
                      rest: { rotate: 6, scale: 1, opacity: 0.8 },
                      hover: { rotate: 10, scale: 1.04, opacity: 1 },
                    }}
                    transition={{ duration: 0.35, ease: 'easeOut' }}
                  />

                  {/* Second accent layer */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-tr from-secondary/40 to-primary/40 rounded-2xl"
                    variants={{
                      rest: { rotate: -3, scale: 1, opacity: 0 },
                      hover: { rotate: -5, scale: 1.02, opacity: 1 },
                    }}
                    transition={{ duration: 0.35, ease: 'easeOut' }}
                  />

                  {/* Photo */}
                  <motion.img
                    src={fotoPerfil}
                    alt="Lucas Gonçalves Dolabela - Professional portrait"
                    className="relative rounded-2xl w-full max-w-md h-auto object-cover shadow-2xl"
                    variants={{
                      rest: { scale: 1, filter: 'brightness(1)' },
                      hover: { scale: 1.03, filter: 'brightness(1.08)' },
                    }}
                    transition={{ duration: 0.35, ease: 'easeOut' }}
                  />

                  {/* Overlay shimmer on hover */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl bg-gradient-to-t from-primary/20 via-transparent to-transparent pointer-events-none"
                    variants={{
                      rest: { opacity: 0 },
                      hover: { opacity: 1 },
                    }}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Badge */}
                  <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap z-20">
                    <div className="flex items-center gap-2 bg-card border border-border shadow-lg rounded-full px-4 py-2">
                      <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                      <span className="text-sm font-medium text-foreground">Intern @ TSA Engenharia</span>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Bio */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col justify-center space-y-6"
              >
                <div className="bg-card border border-border rounded-2xl p-8 space-y-4">
                  <h2 className="text-3xl font-bold text-foreground mb-4">
                    {t('about.hello')}
                  </h2>
                  <p className="text-lg text-foreground leading-relaxed">
                    {t('about.p1')}
                  </p>
                  <p className="text-lg text-foreground leading-relaxed">
                    {t('about.p2')}
                  </p>
                  <p className="text-lg text-foreground leading-relaxed">
                    {t('about.p3')}
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Skills Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mb-20"
            >
              <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
                {t('about.skillsTitle')}
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                {skills.map((skill, index) => {
                  const Icon = skill.icon;
                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: 0.5 + index * 0.05 }}
                      whileHover={{ y: -4, scale: 1.05 }}
                      className="bg-card border border-border rounded-xl p-6 hover:border-primary hover:shadow-lg hover:shadow-primary/20 transition-colors group"
                    >
                      <div className="flex flex-col items-center space-y-3">
                        <div className={`${skill.color} group-hover:scale-110 transition-transform`}>
                          <Icon className="w-8 h-8" />
                        </div>
                        <span className="text-foreground font-medium text-center">
                          {skill.name}
                        </span>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* Dual Timeline Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mb-20"
            >
              <h2 className="text-3xl font-bold text-foreground mb-10 text-center">
                {t('about.timelineTitle')}
              </h2>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

                {/* Professional Timeline */}
                <div>
                  <h3 className="text-lg font-semibold text-primary mb-6 flex items-center gap-2">
                    <span className="w-7 h-7 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center text-sm">💼</span>
                    {t('about.timelineProfessional')}
                  </h3>
                  <div className="relative">
                    <div className="absolute left-5 top-2 bottom-2 w-0.5 bg-gradient-to-b from-primary to-primary/10" />
                    <div className="space-y-5">
                      {[
                        { role: 'Estagiário de Engenharia de Software', place: 'TSA Engenharia', period: '2025 - Presente', current: true },
                      ].map((item, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: i * 0.07 }}
                          className="flex items-start gap-4"
                        >
                          <div className="relative z-10 flex-shrink-0 mt-1">
                            <div className={`w-10 h-10 rounded-full border-2 flex items-center justify-center ${
                              item.current ? 'bg-primary border-primary shadow-md shadow-primary/40' : 'bg-card border-border'
                            }`}>
                              {item.current
                                ? <span className="w-2.5 h-2.5 rounded-full bg-white animate-pulse" />
                                : <span className="w-2.5 h-2.5 rounded-full bg-muted-foreground/40" />}
                            </div>
                          </div>
                          <div className={`flex-1 rounded-xl border p-4 transition-colors ${
                            item.current ? 'bg-primary/10 border-primary/40' : 'bg-card border-border hover:border-primary/40'
                          }`}>
                            <p className="font-semibold text-foreground text-sm">{item.role}</p>
                            <p className={`text-sm font-medium mt-0.5 ${item.current ? 'text-primary' : 'text-muted-foreground'}`}>{item.place}</p>
                            <p className="text-xs text-muted-foreground mt-1">{item.period}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Education Timeline */}
                <div>
                  <h3 className="text-lg font-semibold text-secondary mb-6 flex items-center gap-2">
                    <span className="w-7 h-7 rounded-lg bg-secondary/10 border border-secondary/30 flex items-center justify-center text-sm">🎓</span>
                    {t('about.timelineEducation')}
                  </h3>
                  <div className="relative">
                    <div className="absolute left-5 top-2 bottom-2 w-0.5 bg-gradient-to-b from-secondary to-secondary/10" />
                    <div className="space-y-5">
                      {[
                        { role: 'Bacharelado em Engenharia de Software', place: 'PUC Minas', period: '2024 - 2027', current: true, color: 'secondary' },
                        { role: 'Ensino Médio Técnico', place: 'SESI', period: '2020 - 2023', current: false },
                        { role: 'Técnico em Eletrotécnica', place: 'Senai', period: '2020 - 2022', current: false },
                        { role: 'Inglês — Certificação B2 Michigan', place: 'Fisk', period: '2015 - 2022', current: false },
                        { role: 'Ensino Fundamental', place: 'Colégio Santa Maria Minas', period: '2010 - 2019', current: false },
                      ].map((item, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: i * 0.07 }}
                          className="flex items-start gap-4"
                        >
                          <div className="relative z-10 flex-shrink-0 mt-1">
                            <div className={`w-10 h-10 rounded-full border-2 flex items-center justify-center ${
                              item.current ? 'bg-secondary border-secondary shadow-md shadow-secondary/40' : 'bg-card border-border'
                            }`}>
                              {item.current
                                ? <span className="w-2.5 h-2.5 rounded-full bg-white animate-pulse" />
                                : <span className="w-2.5 h-2.5 rounded-full bg-muted-foreground/40" />}
                            </div>
                          </div>
                          <div className={`flex-1 rounded-xl border p-4 transition-colors ${
                            item.current ? 'bg-secondary/10 border-secondary/40' : 'bg-card border-border hover:border-secondary/40'
                          }`}>
                            <p className="font-semibold text-foreground text-sm">{item.role}</p>
                            <p className={`text-sm font-medium mt-0.5 ${item.current ? 'text-secondary' : 'text-muted-foreground'}`}>{item.place}</p>
                            <p className="text-xs text-muted-foreground mt-1">{item.period}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>

          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default AboutPage;
