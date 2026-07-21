import React, { useState, useEffect, useRef } from 'react';
import useScreenSize from '../hooks/useScreenSize';

import appenLogo from '../images/logos/appen-logistics.png';
import nexitLogo from '../images/logos/nexit-construction.png';
import pamelaLogo from '../images/logos/pamela-learning.png';

const logos = [
  {
    title: 'Appen Logistics',
    image: appenLogo,
    category: 'Logistics',
    brief: 'A logistics startup needed a bold, memorable identity that communicated speed and reliability.',
    challenge: 'The client wanted a logo that felt modern yet grounded — something drivers, warehouse staff, and corporate partners could all connect with.',
    approach: 'I explored custom letterforms with rounded, dynamic shapes to evoke motion. The bold red on green creates high contrast and instant recognition, while the "LOGISTICS" subtitle in a clean sans-serif grounds the playful typography.',
    result: 'The final mark gives Appen a distinctive street presence on vehicles and packaging, while remaining legible at small sizes for digital use.',
  },
  {
    title: 'Nexit Construction',
    image: nexitLogo,
    category: 'Construction',
    brief: 'A construction firm needed a professional wordmark that communicated craftsmanship and structural strength.',
    challenge: 'Balancing industrial toughness with design elegance. The client wanted tools represented without looking generic or clip-art-like.',
    approach: 'I integrated a crossed hammer-and-nail directly into the letterforms, replacing the "X" with the tool motif. An architectural roofline sits above, tying the mark to the building industry. I delivered three variations for different use contexts.',
    result: 'Nexit now has a versatile identity system — a primary logo for signage, a compact version for hard hats, and a refined variant for business cards and proposals.',
  },
  {
    title: 'Pamela Learning Centre',
    image: pamelaLogo,
    category: 'Education',
    brief: 'An education centre wanted a warm, inviting logo that symbolized access to knowledge.',
    challenge: 'The brand needed to appeal to both parents and young learners — trustworthy yet approachable, not corporate or cold.',
    approach: 'I combined a key silhouette with an open book nested inside the bow, creating a visual metaphor: "knowledge is the key." The gradient blue background adds depth and calm, while the handwritten-style typography keeps it friendly.',
    result: 'The logo works beautifully on storefront signage, student notebooks, and digital platforms, giving Pamela a cohesive and memorable brand presence.',
  },
];

const processSteps = [
  {
    number: '01',
    title: 'Discovery',
    description: 'I start every project with deep listening. Understanding the client\'s industry, audience, competitors, and aspirations is non-negotiable before a single pixel is placed.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"></circle>
        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Concept & Sketch',
    description: 'I explore multiple directions — typography-driven, symbol-driven, and hybrid approaches — so the client sees the full landscape of possibilities before we narrow down.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 19l7-7 3 3-7 7-3-3z"></path>
        <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path>
        <path d="M2 2l7.586 7.586"></path>
        <circle cx="11" cy="11" r="2"></circle>
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Refine & Iterate',
    description: 'Feedback is a conversation, not a checklist. I collaborate closely with clients through iterations — adjusting color, weight, spacing, and symbolism until every detail resonates.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 4 23 10 17 10"></polyline>
        <polyline points="1 20 1 14 7 14"></polyline>
        <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>
      </svg>
    ),
  },
  {
    number: '04',
    title: 'Deliver',
    description: 'The final logo is delivered in multiple formats and variations, ready for print, digital, merchandise, and signage — a complete brand asset the client can grow with.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
        <polyline points="22 4 12 14.01 9 11.01"></polyline>
      </svg>
    ),
  },
];

const stats = [
  { value: '3+', label: 'Brands Designed' },
  { value: '100%', label: 'Client Satisfaction' },
  { value: '5+', label: 'Logo Variations' },
  { value: 'Canva', label: 'Primary Tool' },
];

const LogoPortfolio = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [visibleSections, setVisibleSections] = useState({});
  const [selectedLogo, setSelectedLogo] = useState(null);
  const [expandedCase, setExpandedCase] = useState(null);
  const { screenSize, isMobile } = useScreenSize();
  const sectionRef = useRef(null);
  const observerRefs = useRef({});

  useEffect(() => {
    const currentRef = sectionRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.05 }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.disconnect();
      }
    };
  }, []);

  // Scroll-triggered animations for inner sections
  useEffect(() => {
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => ({ ...prev, [entry.target.dataset.section]: true }));
            sectionObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, root: sectionRef.current }
    );

    Object.values(observerRefs.current).forEach((ref) => {
      if (ref) sectionObserver.observe(ref);
    });

    return () => sectionObserver.disconnect();
  }, [isVisible]);

  const getHeadingSize = () => {
    if (screenSize === 'mobile') return '1.75rem';
    if (screenSize === 'small-tablet') return '2.25rem';
    if (screenSize === 'tablet') return '2.5rem';
    return '3rem';
  };

  const getSubheadingSize = () => {
    if (screenSize === 'mobile') return '1.35rem';
    if (screenSize === 'small-tablet') return '1.6rem';
    return '2rem';
  };

  const getGridColumns = () => {
    if (screenSize === 'mobile' || screenSize === 'small-tablet') return 1;
    if (screenSize === 'tablet') return 2;
    return 3;
  };

  return (
    <section
      ref={sectionRef}
      className="w-full py-10 sm:py-14 md:py-18 lg:py-22 text-left bg-gradient-to-br from-section-gradient-from to-section-gradient-to"
    >
      <div className="max-w-full sm:max-w-md md:max-w-2xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8 xl:px-10">

        {/* ═══════════════════════════════════════════════════
            SECTION 1: Hero Heading & Journey Intro
        ═══════════════════════════════════════════════════ */}
        <div className={`transform transition-all duration-700 mb-10 sm:mb-14 md:mb-16 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <h2
            className="font-bold text-font-color-dark font-['Georgia',_serif] relative inline-block"
            style={{ fontSize: getHeadingSize(), transition: 'font-size 0.3s ease' }}
          >
            Logo Portfolio
            <span className={`block h-1 bg-base-theme mt-3 transition-all duration-1000 ease-out ${isVisible ? 'w-16 sm:w-20 md:w-24' : 'w-0'}`}></span>
          </h2>

          <p
            className="text-accent-color max-w-lg md:max-w-xl lg:max-w-2xl mt-3 sm:mt-4 italic"
            style={{
              fontSize: screenSize === 'mobile' ? '1rem' : '1.125rem',
              transition: 'font-size 0.3s ease'
            }}
          >
            Where code meets canvas — brand identities crafted with intention
          </p>

          {/* Journey Narrative */}
          <div className="mt-6 sm:mt-8 max-w-3xl">
            <p className="text-text-secondary leading-relaxed text-sm sm:text-base mb-4" style={{ fontFamily: '"Merriweather", serif' }}>
              Design has always lived alongside code in my creative process. As a full-stack developer, I understand
              that a product's first impression begins long before someone clicks a button — it starts with the brand.
              That conviction led me to explore visual identity design during my upskilling phase, and what began as
              curiosity quickly became a genuine craft.
            </p>
            <p className="text-text-secondary leading-relaxed text-sm sm:text-base" style={{ fontFamily: '"Merriweather", serif' }}>
              I approach every logo project the way I approach software — by deeply understanding the problem first.
              Who is the audience? What emotions should the brand evoke? What will this mark look like on a truck, a
              storefront, a favicon? I listen, research, iterate, and refine until the design doesn't just look good — it
              <span className="text-primary-color font-semibold"> tells the right story</span>.
            </p>
          </div>
        </div>

        {/* ═══════════════════════════════════════════════════
            SECTION 2: Stats Bar
        ═══════════════════════════════════════════════════ */}
        <div
          ref={(el) => (observerRefs.current['stats'] = el)}
          data-section="stats"
          className={`mb-12 sm:mb-16 transform transition-all duration-700 ${visibleSections.stats ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
        >
          <div className={`grid ${isMobile ? 'grid-cols-2' : 'grid-cols-4'} gap-3 sm:gap-4`}>
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="bg-bg-surface rounded-xl p-4 sm:p-6 shadow-md text-left border-l-4 border-base-theme hover:shadow-lg transition-shadow duration-300"
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <p className="text-2xl sm:text-3xl font-bold text-primary-color font-['Georgia',_serif]">
                  {stat.value}
                </p>
                <p className="text-text-secondary text-xs sm:text-sm mt-1" style={{ fontFamily: '"Merriweather", serif' }}>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ═══════════════════════════════════════════════════
            SECTION 3: My Design Process
        ═══════════════════════════════════════════════════ */}
        <div
          ref={(el) => (observerRefs.current['process'] = el)}
          data-section="process"
          className={`mb-12 sm:mb-16 md:mb-20 transform transition-all duration-700 ${visibleSections.process ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
        >
          <h3
            className="font-bold text-font-color-dark font-['Georgia',_serif] relative inline-block mb-6 sm:mb-8"
            style={{ fontSize: getSubheadingSize(), transition: 'font-size 0.3s ease' }}
          >
            My Design Process
            <span className={`block h-0.5 bg-base-theme mt-2 transition-all duration-1000 ease-out ${visibleSections.process ? 'w-12 sm:w-16' : 'w-0'}`}></span>
          </h3>

          <div className={`grid ${isMobile ? 'grid-cols-1' : screenSize === 'tablet' || screenSize === 'small-tablet' ? 'grid-cols-2' : 'grid-cols-4'} gap-4 sm:gap-6`}>
            {processSteps.map((step, idx) => (
              <div
                key={idx}
                className={`relative bg-bg-surface rounded-xl p-4 sm:p-6 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-left ${visibleSections.process ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
                style={{ transitionDelay: `${idx * 150}ms`, transition: 'all 0.5s ease' }}
              >
                {/* Step Number */}
                <div className="flex items-center gap-3 mb-3">
                  <span className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-base-theme text-white font-bold text-sm sm:text-base shadow-md">
                    {step.number}
                  </span>
                  <div className="text-base-theme">
                    {step.icon}
                  </div>
                </div>

                <h4 className="font-bold text-primary-color text-base sm:text-lg font-['Georgia',_serif] mb-2">
                  {step.title}
                </h4>
                <p className="text-text-secondary text-xs sm:text-sm leading-relaxed" style={{ fontFamily: '"Merriweather", serif' }}>
                  {step.description}
                </p>

                {/* Connector line (hidden on mobile and last item) */}
                {!isMobile && idx < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-base-theme opacity-30"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* ═══════════════════════════════════════════════════
            SECTION 4: Philosophy Quote
        ═══════════════════════════════════════════════════ */}
        <div
          ref={(el) => (observerRefs.current['quote'] = el)}
          data-section="quote"
          className={`mb-12 sm:mb-16 md:mb-20 transform transition-all duration-700 ${visibleSections.quote ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
        >
          <div className="bg-bg-surface rounded-xl p-6 sm:p-8 md:p-10 shadow-md border-l-4 border-base-theme">
            <svg className="text-base-theme opacity-30 mb-2" xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="currentColor">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <blockquote
              className="text-font-color-dark text-base sm:text-lg md:text-xl leading-relaxed font-['Georgia',_serif] italic"
            >
              A great logo isn't just a pretty shape — it's a promise compressed into a single glance.
              My job is to make sure that promise is authentic, memorable, and unmistakably yours.
            </blockquote>
            <p className="text-accent-color mt-4 text-sm sm:text-base font-semibold">
              — Hari Priya Vedala
            </p>
          </div>
        </div>

        {/* ═══════════════════════════════════════════════════
            SECTION 5: Logo Case Studies
        ═══════════════════════════════════════════════════ */}
        <div
          ref={(el) => (observerRefs.current['gallery'] = el)}
          data-section="gallery"
          className={`mb-12 sm:mb-16 transform transition-all duration-700 ${visibleSections.gallery ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
        >
          <h3
            className="font-bold text-font-color-dark font-['Georgia',_serif] relative inline-block mb-2 sm:mb-3"
            style={{ fontSize: getSubheadingSize(), transition: 'font-size 0.3s ease' }}
          >
            The Work
            <span className={`block h-0.5 bg-base-theme mt-2 transition-all duration-1000 ease-out ${visibleSections.gallery ? 'w-12 sm:w-16' : 'w-0'}`}></span>
          </h3>
          <p className="text-text-secondary text-sm sm:text-base mb-8 sm:mb-10" style={{ fontFamily: '"Merriweather", serif' }}>
            Each project below tells a story — from the client's initial brief to the final delivered mark. Click any logo to view it full-size, or expand a case study to read the full design narrative.
          </p>

          <div className="space-y-8 sm:space-y-10 md:space-y-12">
            {logos.map((logo, idx) => (
              <div
                key={idx}
                className={`bg-bg-surface rounded-xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-xl ${visibleSections.gallery ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
                style={{ transitionDelay: `${idx * 200}ms` }}
              >
                <div className={`flex ${isMobile ? 'flex-col' : 'flex-row'}`}>
                  {/* Logo Image */}
                  <div
                    className={`${isMobile ? 'w-full' : 'w-2/5'} bg-white flex items-center justify-center p-6 sm:p-8 cursor-pointer`}
                    onClick={() => setSelectedLogo(idx)}
                  >
                    <img
                      src={logo.image}
                      alt={logo.title}
                      className="max-w-full max-h-64 sm:max-h-80 object-contain transition-transform duration-500 hover:scale-105"
                    />
                  </div>

                  {/* Case Study Content */}
                  <div className={`${isMobile ? 'w-full' : 'w-3/5'} p-4 sm:p-6 md:p-8 bg-base-theme-light`}>
                    <div className="flex items-start justify-between gap-2 mb-3">
                      <h4 className="text-lg sm:text-2xl font-bold text-primary-color font-['Georgia',_serif] text-left">
                        {logo.title}
                      </h4>
                      <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold text-chip-text bg-chip-bg whitespace-nowrap">
                        {logo.category}
                      </span>
                    </div>

                    {/* Brief */}
                    <div className="mb-3 sm:mb-4">
                      <h5 className="text-xs sm:text-sm font-bold text-font-color-dark uppercase tracking-wider mb-1">
                        The Brief
                      </h5>
                      <p className="text-text-secondary text-xs sm:text-sm leading-relaxed" style={{ fontFamily: '"Merriweather", serif' }}>
                        {logo.brief}
                      </p>
                    </div>

                    {/* Expandable Details */}
                    <button
                      onClick={() => setExpandedCase(expandedCase === idx ? null : idx)}
                      className="inline-flex items-center gap-1.5 text-base-theme font-semibold text-xs sm:text-sm hover:text-base-theme-dark transition-colors bg-transparent border-none cursor-pointer p-0 mb-3"
                    >
                      {expandedCase === idx ? 'Show less' : 'Read full case study'}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className={`transition-transform duration-300 ${expandedCase === idx ? 'rotate-180' : ''}`}
                      >
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </button>

                    <div
                      className={`overflow-hidden transition-all duration-500 ease-in-out ${expandedCase === idx ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                    >
                      {/* Challenge */}
                      <div className="mb-3 sm:mb-4">
                        <h5 className="text-xs sm:text-sm font-bold text-font-color-dark uppercase tracking-wider mb-1">
                          The Challenge
                        </h5>
                        <p className="text-text-secondary text-xs sm:text-sm leading-relaxed" style={{ fontFamily: '"Merriweather", serif' }}>
                          {logo.challenge}
                        </p>
                      </div>

                      {/* Approach */}
                      <div className="mb-3 sm:mb-4">
                        <h5 className="text-xs sm:text-sm font-bold text-font-color-dark uppercase tracking-wider mb-1">
                          My Approach
                        </h5>
                        <p className="text-text-secondary text-xs sm:text-sm leading-relaxed" style={{ fontFamily: '"Merriweather", serif' }}>
                          {logo.approach}
                        </p>
                      </div>

                      {/* Result */}
                      <div>
                        <h5 className="text-xs sm:text-sm font-bold text-font-color-dark uppercase tracking-wider mb-1">
                          The Result
                        </h5>
                        <p className="text-text-secondary text-xs sm:text-sm leading-relaxed" style={{ fontFamily: '"Merriweather", serif' }}>
                          {logo.result}
                        </p>
                      </div>
                    </div>

                    {/* Click hint */}
                    <p className="text-text-muted text-xs mt-3 italic flex items-center gap-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"></path>
                      </svg>
                      Click the logo image to view full-size
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ═══════════════════════════════════════════════════
            SECTION 6: What Clients Can Expect
        ═══════════════════════════════════════════════════ */}
        <div
          ref={(el) => (observerRefs.current['expect'] = el)}
          data-section="expect"
          className={`mb-12 sm:mb-16 transform transition-all duration-700 ${visibleSections.expect ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
        >
          <h3
            className="font-bold text-font-color-dark font-['Georgia',_serif] relative inline-block mb-6 sm:mb-8"
            style={{ fontSize: getSubheadingSize(), transition: 'font-size 0.3s ease' }}
          >
            Why Work With Me
            <span className={`block h-0.5 bg-base-theme mt-2 transition-all duration-1000 ease-out ${visibleSections.expect ? 'w-12 sm:w-16' : 'w-0'}`}></span>
          </h3>

          <div className={`grid ${isMobile ? 'grid-cols-1' : 'grid-cols-2'} gap-4 sm:gap-6`}>
            {[
              {
                title: 'Developer-Minded Design',
                desc: 'I don\'t just hand off a pretty picture. Because I build software, I think about how a logo will render in a navbar, as a favicon, on a splash screen, and in dark mode — from day one.',
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="16 18 22 12 16 6"></polyline>
                    <polyline points="8 6 2 12 8 18"></polyline>
                  </svg>
                ),
              },
              {
                title: 'Client-First Collaboration',
                desc: 'Your vision drives the process. I ask the right questions, present clear options, and iterate based on your feedback — no ego, no guesswork, just honest creative partnership.',
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                ),
              },
              {
                title: 'Versatile Deliverables',
                desc: 'Every logo is delivered with multiple variations — primary, compact, monochrome — so your brand is ready for every medium, from billboard to business card to browser tab.',
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                    <line x1="8" y1="21" x2="16" y2="21"></line>
                    <line x1="12" y1="17" x2="12" y2="21"></line>
                  </svg>
                ),
              },
              {
                title: 'Detail-Obsessed Craft',
                desc: 'Typography choices, color psychology, whitespace balance, scalability — I obsess over the details that separate a good logo from one that becomes a brand\'s most valuable asset.',
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="3"></circle>
                    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                  </svg>
                ),
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-bg-surface rounded-xl p-4 sm:p-6 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-left border-l-4 border-base-theme"
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="flex items-center justify-center w-10 h-10 rounded-full bg-base-theme-light text-base-theme">
                    {item.icon}
                  </span>
                  <h4 className="font-bold text-primary-color text-sm sm:text-base font-['Georgia',_serif]">
                    {item.title}
                  </h4>
                </div>
                <p className="text-text-secondary text-xs sm:text-sm leading-relaxed" style={{ fontFamily: '"Merriweather", serif' }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ═══════════════════════════════════════════════════
            SECTION 7: Closing CTA
        ═══════════════════════════════════════════════════ */}
        <div
          ref={(el) => (observerRefs.current['cta'] = el)}
          data-section="cta"
          className={`transform transition-all duration-700 ${visibleSections.cta ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
        >
          <div className="bg-base-theme rounded-xl p-6 sm:p-8 md:p-10 shadow-lg text-left">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white font-['Georgia',_serif] mb-3">
              Have a brand that needs a face?
            </h3>
            <p className="text-font-color-light text-sm sm:text-base leading-relaxed mb-4 max-w-2xl" style={{ fontFamily: '"Merriweather", serif' }}>
              Whether you're launching a startup, rebranding an existing business, or just exploring ideas —
              I'd love to collaborate. I bring the same attention to detail to logo design that I bring to writing clean code:
              every element has a purpose, every choice is intentional.
            </p>
            <p className="text-font-color-light text-xs sm:text-sm opacity-80 italic">
              Reach out via the contact details on my home page — let's build something beautiful together.
            </p>
          </div>
        </div>

      </div>

      {/* ═══════════════════════════════════════════════════
          Lightbox Modal
      ═══════════════════════════════════════════════════ */}
      {selectedLogo !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black bg-opacity-85 p-4"
          onClick={() => setSelectedLogo(null)}
        >
          <div className="relative max-w-3xl w-full" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setSelectedLogo(null)}
              className="absolute -top-10 right-0 text-white text-3xl font-bold hover:opacity-70 transition-opacity bg-transparent border-none cursor-pointer"
              aria-label="Close"
            >
              &times;
            </button>
            <img
              src={logos[selectedLogo].image}
              alt={logos[selectedLogo].title}
              className="w-full rounded-lg shadow-2xl"
            />
            <div className="text-center mt-4">
              <p className="text-white font-['Georgia',_serif] text-lg sm:text-xl font-bold">
                {logos[selectedLogo].title}
              </p>
              <p className="text-gray-300 text-sm mt-1">
                {logos[selectedLogo].category}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default LogoPortfolio;
