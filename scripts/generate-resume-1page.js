const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

const HTML_PATH = path.join(__dirname, '..', 'public', 'HariPriya_Resume_1page.html');
const PDF_PATH = path.join(__dirname, '..', 'public', 'HariPriya_Resume_1page.pdf');
const QR_PATH = path.join(__dirname, '..', 'public', 'qr-portfolio.png');

async function main() {
  const qrBase64 = fs.readFileSync(QR_PATH).toString('base64');
  const qrDataUrl = `data:image/png;base64,${qrBase64}`;

  // Link icon SVG inline — small, clean, distinct
  const linkIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="#c26a23" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:-1px;margin-right:2px;"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>`;

  const html = `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>Hari Priya Vedala — Resume</title>
<style>
  @import url('https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700&family=Source+Sans+Pro:wght@400;600;700&display=swap');

  * { margin: 0; padding: 0; box-sizing: border-box; }

  body {
    font-family: 'Source Sans Pro', 'Segoe UI', Arial, sans-serif;
    color: #1a1a1a;
    font-size: 8.5pt;
    line-height: 1.35;
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
    background: #f0f0f0;
  }

  .page {
    width: 210mm;
    height: 297mm;
    padding: 9mm 13mm 7mm 13mm;
    position: relative;
    background: white;
    margin: 0 auto;
    overflow: hidden;
    box-shadow: 0 2px 20px rgba(0,0,0,0.15);
  }

  @media print {
    body { background: white; }
    .page { box-shadow: none; margin: 0; }
  }

  .accent-bar {
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 3.5px;
    background: linear-gradient(90deg, #c26a23 0%, #e8944a 50%, #c26a23 100%);
  }

  .qr-container {
    position: absolute;
    top: 9.5mm;
    right: 13mm;
    text-align: center;
  }
  .qr-label {
    font-size: 5.5pt;
    color: #999;
    margin-top: 1px;
    letter-spacing: 0.8px;
    text-transform: uppercase;
  }

  /* Header */
  .header { margin-bottom: 5px; padding-right: 90px; }
  .name {
    font-family: 'Merriweather', Georgia, serif;
    font-size: 19pt;
    font-weight: 700;
    color: #1a1a1a;
    letter-spacing: 0.3px;
    margin-bottom: 1px;
  }
  .tagline {
    font-size: 9pt;
    font-weight: 600;
    color: #c26a23;
    margin-bottom: 3px;
  }
  .contact-row {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 2px 0;
    font-size: 7.8pt;
    color: #444;
    line-height: 1.4;
  }
  .contact-row .ci {
    display: inline-flex;
    align-items: center;
    white-space: nowrap;
  }
  .contact-row a {
    color: #c26a23;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
  }
  .sep { color: #ccc; margin: 0 4px; font-size: 7pt; }

  /* Section */
  .section { margin-top: 5px; }
  .section-title {
    font-family: 'Merriweather', Georgia, serif;
    font-size: 9.5pt;
    font-weight: 700;
    color: #1a1a1a;
    text-transform: uppercase;
    letter-spacing: 1px;
    border-bottom: 1.8px solid #c26a23;
    padding-bottom: 2px;
    margin-bottom: 4px;
  }

  /* Summary */
  .summary {
    font-size: 8.5pt;
    color: #333;
    line-height: 1.4;
  }
  .summary strong { color: #1a1a1a; }

  /* Skills */
  .skills-grid {
    display: grid;
    grid-template-columns: 115px 1fr;
    row-gap: 1px;
    column-gap: 6px;
    font-size: 8pt;
  }
  .skills-grid .label { font-weight: 700; color: #1a1a1a; }
  .skills-grid .value { color: #333; }

  /* Experience */
  .entry { margin-bottom: 4px; }
  .entry-header {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
  }
  .entry-title {
    font-family: 'Merriweather', Georgia, serif;
    font-size: 9pt;
    font-weight: 700;
    color: #1a1a1a;
  }
  .entry-date {
    font-size: 7.5pt;
    color: #666;
    white-space: nowrap;
    flex-shrink: 0;
    margin-left: 8px;
  }
  .entry-subtitle {
    font-size: 8pt;
    color: #1a1a1a;
    font-weight: 600;
    margin-bottom: 1px;
  }
  .hl { color: #c26a23; font-weight: 700; }
  .entry ul { padding-left: 14px; margin: 0; }
  .entry li {
    font-size: 8pt;
    color: #333;
    margin-bottom: 0.5px;
    line-height: 1.35;
  }
  .entry li::marker { color: #c26a23; }

  /* Projects */
  .project { margin-bottom: 4px; }
  .project-header { display: flex; align-items: baseline; flex-wrap: wrap; gap: 0 6px; }
  .project-title {
    font-family: 'Merriweather', Georgia, serif;
    font-size: 8.5pt;
    font-weight: 700;
    color: #1a1a1a;
  }
  .project-tech { font-size: 7.5pt; color: #888; }
  .project-link {
    font-size: 7pt;
    color: #c26a23;
    text-decoration: none;
  }
  .project ul { padding-left: 14px; margin: 0; }
  .project li {
    font-size: 8pt;
    color: #333;
    margin-bottom: 0.5px;
    line-height: 1.35;
  }
  .project li::marker { color: #c26a23; }

  /* Two-column projects */
  .projects-2col {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2px 16px;
  }

  /* Education */
  .edu-row {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin-bottom: 1.5px;
  }
  .edu-school { font-weight: 700; font-size: 8.5pt; }
  .edu-school .loc { font-weight: 400; color: #666; font-size: 8pt; }
  .edu-degree { font-size: 8pt; color: #444; }
  .edu-right { text-align: right; flex-shrink: 0; margin-left: 8px; }
  .edu-date { font-size: 7.5pt; color: #666; }
  .edu-gpa { font-size: 8pt; font-weight: 700; color: #c26a23; }

  /* Certs */
  .cert-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0 16px;
    font-size: 8pt;
    color: #333;
  }
  .cert-item::before { content: "\\2022 "; color: #c26a23; font-weight: 700; }

  /* Additional */
  .additional { font-size: 8pt; color: #333; }
  .additional strong { color: #1a1a1a; }
</style>
</head>
<body>
<div class="page">
  <div class="accent-bar"></div>

  <div class="qr-container">
    <img src="${qrDataUrl}" alt="Portfolio QR" width="82" height="82" style="border-radius:4px;" />
    <div class="qr-label">Portfolio</div>
  </div>

  <!-- Header -->
  <div class="header">
    <div class="name">HARI PRIYA VEDALA</div>
    <div class="tagline">Full Stack Developer | AI-Assisted Development | MS Computer Science</div>
    <div class="contact-row">
      <span class="ci">+91 9000249987</span><span class="sep">|</span>
      <span class="ci"><a href="mailto:haripriyavedala5@gmail.com">${linkIcon}haripriyavedala5@gmail.com</a></span><span class="sep">|</span>
      <span class="ci">India</span><span class="sep">|</span>
      <span class="ci"><a href="https://www.linkedin.com/in/haripriyav3/">${linkIcon}linkedin.com/in/haripriyav3</a></span><span class="sep">|</span>
      <span class="ci"><a href="https://github.com/hpv333">${linkIcon}github.com/hpv333</a></span><span class="sep">|</span>
      <span class="ci"><a href="https://github.com/codeflux-ai">${linkIcon}github.com/codeflux-ai</a></span>
    </div>
  </div>

  <!-- Summary -->
  <div class="section">
    <div class="section-title">Professional Summary</div>
    <div class="summary">
      <strong>3 production apps. 60 days. All AI-assisted</strong> — that's how I ship. Full Stack Developer with 2+ years of experience and an MS in Computer Science (4.0 GPA, UNT). I pair AI tools like Claude, Cursor, and Gemini with strong MERN stack fundamentals to build and deploy fast. From enterprise digital signage systems to live PWAs on Vercel, I bring full-stack depth, a bias for shipping, and genuine excitement for every new challenge.
    </div>
  </div>

  <!-- Skills -->
  <div class="section">
    <div class="section-title">Technical Skills</div>
    <div class="skills-grid">
      <span class="label">Languages</span><span class="value">JavaScript, Python, Java, SQL, NoSQL</span>
      <span class="label">Frameworks</span><span class="value">React.js, Node.js, Django, Express.js, Bootstrap, Tailwind CSS</span>
      <span class="label">Databases & Cloud</span><span class="value">MongoDB, PostgreSQL, MySQL, Supabase, Azure, Vercel, Cloudflare</span>
      <span class="label">AI & Dev Tools</span><span class="value">Claude, Claude Code, ChatGPT, Gemini API, Cursor, Lovable, Prompt Engineering</span>
      <span class="label">DevOps & Tools</span><span class="value">Git, GitHub, Docker, VS Code, Figma, Postman, Raspberry Pi</span>
      <span class="label">Practices</span><span class="value">REST APIs, Agile/Scrum, OOP, RBAC, CI/CD, Responsive Design</span>
    </div>
  </div>

  <!-- Projects (above Experience) -->
  <div class="section">
    <div class="section-title">Key Projects</div>

    <div class="project">
      <div class="project-header">
        <span class="project-title">Universal Digital Signage — Multi-Module Enterprise Solution</span>
        <span class="project-tech" style="color:#c26a23;font-weight:600;">In production since 2024</span>
        <span class="project-tech">MERN, Raspberry Pi, Docker, IoT</span>
      </div>
      <a class="project-link" href="https://github.com/divisionbyinfinity/universal_digital_signage">${linkIcon}github.com/divisionbyinfinity/universal_digital_signage</a>
      <ul>
        <li>Architected a modular digital signage platform — content management, playlist scheduling, screen deployment, and device monitoring</li>
        <li>Reduced playlist management time by 70% — <span class="hl">still actively running across the College of Visual Arts & Design building at UNT</span></li>
        <li>Deployed Raspberry Pi hardware nodes for screen management with robust Node.js backend and RESTful API layer</li>
        <li><strong>Statuscheck Module</strong> (${linkIcon}<a href="https://github.com/divisionbyinfinity/statuscheck" style="color:#c26a23;text-decoration:none;font-size:7pt;">github.com/divisionbyinfinity/statuscheck</a>): Real-time device health checks (ping, SSH, HTTP) with email alerts, Docker deployment, and JSON-based config for flexible network setups</li>
      </ul>
    </div>

    <div class="projects-2col">
      <div class="project">
        <div class="project-header">
          <span class="project-title">Walmart Sales Prediction</span>
          <span class="project-tech">PySpark, ML, Big Data</span>
        </div>
        <a class="project-link" href="https://github.com/hpv333/WalmartTimeSeries_Sales_Prediction">${linkIcon}github.com/hpv333/WalmartTimeSeries_Sales_Prediction</a>
        <ul>
          <li>Time series forecasting with PySpark and RandomForestRegressor across 45 Walmart stores</li>
          <li>Feature engineering on holiday flags, temperature, fuel prices, CPI, and unemployment data</li>
        </ul>
      </div>

      <div class="project">
        <div class="project-header">
          <span class="project-title">VRK Diet Companion</span>
          <span class="project-tech">React, PWA, Vercel</span>
        </div>
        <a class="project-link" href="https://vrk-diet-companion.vercel.app/">${linkIcon}vrk-diet-companion.vercel.app</a>
        <ul>
          <li>Live personalised diet tracking PWA <span class="hl">actively used by real users</span> — meals, weight, and hydration</li>
          <li>PWA currently being converted into a fully native mobile application</li>
        </ul>
      </div>
    </div>

    <div class="project">
      <div class="project-header">
        <span class="project-title">Business Analytics Hackathon — 3rd Prize</span>
        <span class="project-tech">Python, ML, Data Analytics</span>
      </div>
      <a class="project-link" href="https://github.com/hpv333/ITDS_Hackthon_Data_Analysis">${linkIcon}github.com/hpv333/ITDS_Hackthon_Data_Analysis</a>
      <ul>
        <li>Analytics solution for Peterbilt Motors to identify warranty cost root causes using Kruskal-Wallis H-Test + Random Forest</li>
        <li>Secured 3rd Prize at UNT ITDS Hackathon; presented findings to industry experts as part of a four-member team</li>
      </ul>
    </div>
  </div>

  <!-- Experience -->
  <div class="section">
    <div class="section-title">Professional Experience</div>

    <div class="entry">
      <div class="entry-header">
        <span class="entry-title">Freelance Full Stack Developer</span>
        <span class="entry-date">Dec 2025 — Present</span>
      </div>
      <div class="entry-subtitle">Independent &middot; India</div>
      <ul>
        <li>Delivering responsive web apps and portfolio sites for clients using React.js, Tailwind CSS, and Vercel</li>
        <li>Employing AI-assisted vibe coding (Claude Code, Cursor, Lovable) for rapid prototyping and production-ready builds</li>
        <li>Deployed <span class="hl">3 live PWAs with real active users</span> — diet companion, hydration tracker, and AI Security Auditor (Gemini API + Supabase)</li>
      </ul>
    </div>

    <div class="entry">
      <div class="entry-header">
        <span class="entry-title">Graduate Assistant IT — Web Developer</span>
        <span class="entry-date">Sep 2023 — May 2025</span>
      </div>
      <div class="entry-subtitle">CVAD, University of North Texas &middot; Denton, TX, USA</div>
      <ul>
        <li>Built a Digital Signage System (MERN stack) reducing manual playlist management by 70% — <span class="hl">in production since 2024</span></li>
        <li>Designed a Unified Scheduler platform for equipment reservations with RBAC and MongoDB Atlas</li>
        <li>Deployed Raspberry Pi hardware infrastructure for screen management; API testing via Postman</li>
      </ul>
    </div>

    <div class="entry">
      <div class="entry-header">
        <span class="entry-title">Software Development Intern</span>
        <span class="entry-date">Mar 2023 — May 2023</span>
      </div>
      <div class="entry-subtitle">Style Pro Pvt Ltd &middot; India</div>
      <ul>
        <li>Contributed to production web apps using JavaScript frameworks and REST API integrations</li>
      </ul>
    </div>

    <div class="entry">
      <div class="entry-header">
        <span class="entry-title">Full Stack Intern</span>
        <span class="entry-date">Jan 2022 — Jun 2022</span>
      </div>
      <div class="entry-subtitle">Sindala Trading Pvt Ltd &middot; India</div>
      <ul>
        <li>Developed web applications with React.js frontends and Django backends; built RESTful APIs for internal tools</li>
      </ul>
    </div>
  </div>

  <!-- Education -->
  <div class="section">
    <div class="section-title">Education</div>

    <div class="edu-row">
      <div>
        <span class="edu-school">University of North Texas <span class="loc">&middot; Denton, TX, USA</span></span>
        <span class="edu-degree"> — MS Computer Science</span>
      </div>
      <div class="edu-right">
        <span class="edu-date">Aug 2023 — May 2025</span>&nbsp;&nbsp;
        <span class="edu-gpa">GPA: 4.0</span>
      </div>
    </div>

    <div class="edu-row">
      <div>
        <span class="edu-school">St. Martin's Engineering College <span class="loc">&middot; Hyderabad</span></span>
        <span class="edu-degree"> — BTech Information Technology</span>
      </div>
      <div class="edu-right">
        <span class="edu-date">Aug 2019 — Jul 2023</span>&nbsp;&nbsp;
        <span class="edu-gpa">87.8%</span>
      </div>
    </div>

    <div class="edu-row">
      <div>
        <span class="edu-school">Army Public School (APS)</span>
        <span class="edu-degree"> — Intermediate, MPC & CS</span>
      </div>
      <div class="edu-right">
        <span class="edu-date">Apr 2017 — Mar 2019</span>&nbsp;&nbsp;
        <span class="edu-gpa">88.4%</span>
      </div>
    </div>

    <div class="edu-row">
      <div>
        <span class="edu-school">Delhi Public School</span>
        <span class="edu-degree"> — Class 1–10</span>
      </div>
      <div class="edu-right">
        <span class="edu-date">2007 — 2017</span>&nbsp;&nbsp;
        <span class="edu-gpa">10 CGPA</span>
      </div>
    </div>
  </div>

  <!-- Certifications -->
  <div class="section">
    <div class="section-title">Certifications</div>
    <div class="cert-grid">
      <span class="cert-item">Docker Foundations Professional — Docker, Inc (2025)</span>
      <span class="cert-item">Goldman Sachs Operations Simulation — Forage (2025)</span>
      <span class="cert-item">Introduction to Front-End Development — Meta (2025)</span>
      <span class="cert-item">Demystifying AI — University of North Texas (2025)</span>
    </div>
  </div>

  <!-- Additional -->
  <div class="section" style="margin-top: 5px;">
    <div class="section-title">Additional</div>
    <div class="additional">
      <strong>Languages:</strong> English (Proficient), Hindi, Telugu&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <strong>Interests:</strong> AI-assisted development, open-source contributions, wellness tech<br/>
      <strong>LinkedIn:</strong> 2 professional recommendations from industry colleagues
    </div>
  </div>

</div>
</body>
</html>`;

  // Save HTML for localhost preview
  fs.writeFileSync(HTML_PATH, html);
  console.log(`HTML saved to: ${HTML_PATH}`);

  // Generate PDF
  if (process.argv.includes('--pdf')) {
    console.log('Launching browser for PDF...');
    const browser = await puppeteer.launch({ headless: 'new' });
    const page = await browser.newPage();
    await page.setContent(html, { waitUntil: 'networkidle0' });
    await page.pdf({
      path: PDF_PATH,
      format: 'A4',
      printBackground: true,
      margin: { top: '0', bottom: '0', left: '0', right: '0' },
    });
    await browser.close();
    console.log(`PDF saved to: ${PDF_PATH}`);
  }
}

main().catch(console.error);
