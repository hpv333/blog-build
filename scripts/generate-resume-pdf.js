const puppeteer = require('puppeteer');
const QRCode = require('qrcode');
const path = require('path');

const PORTFOLIO_URL = 'https://hpv333.github.io/blog-build/';
const OUTPUT_PATH = path.join(__dirname, '..', 'public', 'HariPriya_Resume.pdf');

async function generateQRCodeSVG(url) {
  const qrLib = require('qrcode');
  const modules = qrLib.create(url, { errorCorrectionLevel: 'M' });

  const size = modules.modules.size;
  const data = modules.modules.data;
  const cellSize = 3;
  const totalSize = size * cellSize;
  const accent = '#c26a23';

  let svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${totalSize + 8} ${totalSize + 8}" width="90" height="90">`;
  svg += `<rect width="${totalSize + 8}" height="${totalSize + 8}" fill="white" rx="4"/>`;

  // Draw QR modules
  for (let row = 0; row < size; row++) {
    for (let col = 0; col < size; col++) {
      if (data[row * size + col]) {
        const x = col * cellSize + 4;
        const y = row * cellSize + 4;
        const isFinderRegion =
          (row < 7 && col < 7) ||
          (row < 7 && col >= size - 7) ||
          (row >= size - 7 && col < 7);

        if (isFinderRegion) {
          // Petal-style corners for finder patterns
          svg += `<circle cx="${x + cellSize/2}" cy="${y + cellSize/2}" r="${cellSize/2}" fill="${accent}"/>`;
        } else {
          // Regular rounded squares for data modules
          svg += `<rect x="${x}" y="${y}" width="${cellSize}" height="${cellSize}" rx="0.6" fill="#2d2d2d"/>`;
        }
      }
    }
  }

  // Decorative 4-petal flowers at the 3 finder pattern centers
  const finderCenters = [
    { cx: 3 * cellSize + 4 + cellSize/2, cy: 3 * cellSize + 4 + cellSize/2 },
    { cx: (size - 4) * cellSize + 4 + cellSize/2, cy: 3 * cellSize + 4 + cellSize/2 },
    { cx: 3 * cellSize + 4 + cellSize/2, cy: (size - 4) * cellSize + 4 + cellSize/2 },
  ];
  finderCenters.forEach(({ cx, cy }) => {
    const pr = cellSize * 1.2;
    // 4 petals
    svg += `<ellipse cx="${cx}" cy="${cy - pr}" rx="${pr * 0.45}" ry="${pr * 0.7}" fill="${accent}" opacity="0.85"/>`;
    svg += `<ellipse cx="${cx}" cy="${cy + pr}" rx="${pr * 0.45}" ry="${pr * 0.7}" fill="${accent}" opacity="0.85"/>`;
    svg += `<ellipse cx="${cx - pr}" cy="${cy}" rx="${pr * 0.7}" ry="${pr * 0.45}" fill="${accent}" opacity="0.85"/>`;
    svg += `<ellipse cx="${cx + pr}" cy="${cy}" rx="${pr * 0.7}" ry="${pr * 0.45}" fill="${accent}" opacity="0.85"/>`;
    // Center dot
    svg += `<circle cx="${cx}" cy="${cy}" r="${cellSize * 0.8}" fill="white"/>`;
    svg += `<circle cx="${cx}" cy="${cy}" r="${cellSize * 0.5}" fill="${accent}"/>`;
  });

  svg += `</svg>`;
  return svg;
}

async function generatePDF() {
  console.log('Generating QR code...');
  const qrSVG = await generateQRCodeSVG(PORTFOLIO_URL);

  const html = `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<style>
  @import url('https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700&family=Source+Sans+Pro:wght@400;600;700&display=swap');

  * { margin: 0; padding: 0; box-sizing: border-box; }

  body {
    font-family: 'Source Sans Pro', 'Segoe UI', Arial, sans-serif;
    color: #1a1a1a;
    font-size: 9.5pt;
    line-height: 1.45;
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }

  .page {
    width: 210mm;
    min-height: 297mm;
    padding: 14mm 16mm 12mm 16mm;
    position: relative;
  }

  /* Top accent bar */
  .accent-bar {
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 4px;
    background: linear-gradient(90deg, #c26a23 0%, #e8944a 50%, #c26a23 100%);
  }

  /* QR Code - top right */
  .qr-container {
    position: absolute;
    top: 16mm;
    right: 16mm;
    text-align: center;
  }
  .qr-container .qr-label {
    font-size: 6pt;
    color: #888;
    margin-top: 2px;
    letter-spacing: 0.5px;
  }

  /* Header */
  .header { margin-bottom: 6px; padding-right: 100px; }
  .name {
    font-family: 'Merriweather', Georgia, serif;
    font-size: 22pt;
    font-weight: 700;
    color: #1a1a1a;
    letter-spacing: 0.5px;
    margin-bottom: 2px;
  }
  .tagline {
    font-size: 10.5pt;
    font-weight: 600;
    color: #c26a23;
    margin-bottom: 6px;
  }
  .contact-row {
    font-size: 8.5pt;
    color: #444;
    line-height: 1.6;
  }
  .contact-row a {
    color: #c26a23;
    text-decoration: none;
  }
  .contact-row .sep { color: #ccc; margin: 0 5px; }

  /* Section */
  .section { margin-top: 10px; }
  .section-title {
    font-family: 'Merriweather', Georgia, serif;
    font-size: 11pt;
    font-weight: 700;
    color: #1a1a1a;
    text-transform: uppercase;
    letter-spacing: 1.2px;
    border-bottom: 2px solid #c26a23;
    padding-bottom: 3px;
    margin-bottom: 7px;
  }

  /* Summary */
  .summary {
    font-size: 9.5pt;
    color: #333;
    line-height: 1.55;
  }
  .summary strong { color: #1a1a1a; }

  /* Skills grid */
  .skills-grid {
    display: grid;
    grid-template-columns: 140px 1fr;
    row-gap: 3px;
    column-gap: 8px;
    font-size: 9pt;
  }
  .skills-grid .label {
    font-weight: 700;
    color: #1a1a1a;
  }
  .skills-grid .value { color: #333; }

  /* Experience entry */
  .entry { margin-bottom: 9px; }
  .entry-header {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin-bottom: 1px;
  }
  .entry-title {
    font-family: 'Merriweather', Georgia, serif;
    font-size: 10.5pt;
    font-weight: 700;
    color: #1a1a1a;
  }
  .entry-date {
    font-size: 8.5pt;
    color: #666;
    white-space: nowrap;
    flex-shrink: 0;
    margin-left: 10px;
  }
  .entry-subtitle {
    font-size: 9pt;
    color: #c26a23;
    font-weight: 600;
    margin-bottom: 3px;
  }
  .entry ul {
    padding-left: 16px;
    margin: 0;
  }
  .entry li {
    font-size: 9pt;
    color: #333;
    margin-bottom: 2px;
    line-height: 1.45;
  }
  .entry li::marker { color: #c26a23; }

  /* Project entry */
  .project { margin-bottom: 8px; }
  .project-title {
    font-family: 'Merriweather', Georgia, serif;
    font-size: 10pt;
    font-weight: 700;
    color: #1a1a1a;
    display: inline;
  }
  .project-tech {
    font-size: 8.5pt;
    color: #888;
    margin-left: 4px;
  }
  .project-link {
    font-size: 7.5pt;
    color: #c26a23;
    text-decoration: none;
    display: block;
    margin-bottom: 2px;
  }

  /* Education row */
  .edu-entry {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin-bottom: 3px;
  }
  .edu-left { flex: 1; }
  .edu-school {
    font-weight: 700;
    font-size: 9.5pt;
  }
  .edu-degree {
    font-size: 9pt;
    color: #444;
  }
  .edu-right {
    text-align: right;
    flex-shrink: 0;
    margin-left: 10px;
  }
  .edu-date { font-size: 8.5pt; color: #666; }
  .edu-gpa {
    font-size: 8.5pt;
    font-weight: 700;
    color: #c26a23;
  }

  /* Certs */
  .cert-list {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2px 20px;
    font-size: 9pt;
    color: #333;
  }
  .cert-item::before {
    content: "\\2022 ";
    color: #c26a23;
    font-weight: 700;
  }

  /* Additional */
  .additional { font-size: 9pt; color: #333; }
  .additional strong { color: #1a1a1a; }
</style>
</head>
<body>
<div class="page">
  <div class="accent-bar"></div>

  <!-- QR Code -->
  <div class="qr-container">
    ${qrSVG}
    <div class="qr-label">PORTFOLIO</div>
  </div>

  <!-- Header -->
  <div class="header">
    <div class="name">HARI PRIYA VEDALA</div>
    <div class="tagline">Full Stack Developer | AI-Assisted Development | MS Computer Science</div>
    <div class="contact-row">
      +91 9000249987<span class="sep">|</span>
      <a href="mailto:haripriyavedala5@gmail.com">haripriyavedala5@gmail.com</a><span class="sep">|</span>
      India<br>
      <a href="https://www.linkedin.com/in/haripriyav3/">linkedin.com/in/haripriyav3</a><span class="sep">|</span>
      <a href="https://github.com/hpv333">github.com/hpv333</a><span class="sep">|</span>
      <a href="https://github.com/codeflux-ai">github.com/codeflux-ai</a><span class="sep">|</span>
      <a href="https://hpv333.github.io/blog-build/">Portfolio</a>
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
      <span class="label">Practices</span><span class="value">REST APIs, Agile/Scrum, OOP, RBAC, CI/CD, Responsive Design, Documentation</span>
    </div>
  </div>

  <!-- Experience -->
  <div class="section">
    <div class="section-title">Professional Experience</div>

    <div class="entry">
      <div class="entry-header">
        <span class="entry-title">Freelance Full Stack Developer</span>
        <span class="entry-date">December 2025 — Present</span>
      </div>
      <div class="entry-subtitle">Independent &middot; India</div>
      <ul>
        <li>Delivering responsive web applications and portfolio sites for freelance clients across multiple industries using React.js, Tailwind CSS, and Vercel</li>
        <li>Employing AI-assisted vibe coding methodology (Claude Code, Cursor, Lovable) for rapid prototyping and production-ready builds</li>
        <li>Building and deploying live PWA applications including a diet companion app and a hydration reminder app, both actively maintained on Vercel</li>
        <li>Developed an AI Security Auditor web app leveraging Google Gemini API and Supabase with zero-cost architecture</li>
      </ul>
    </div>

    <div class="entry">
      <div class="entry-header">
        <span class="entry-title">Graduate Assistant IT — Web Developer</span>
        <span class="entry-date">September 2023 — May 2025</span>
      </div>
      <div class="entry-subtitle">CVAD, University of North Texas &middot; Denton, TX, USA</div>
      <ul>
        <li>Built a Digital Signage System using MERN stack that reduced manual playlist management time by 70% across the UNT Art Building</li>
        <li>Designed and developed a Unified Scheduler platform for equipment reservations with RBAC and MongoDB Atlas</li>
        <li>Deployed and maintained Raspberry Pi hardware infrastructure for screen management across multiple locations</li>
        <li>Integrated comprehensive API testing workflows using Postman, ensuring robust backend reliability</li>
      </ul>
    </div>

    <div class="entry">
      <div class="entry-header">
        <span class="entry-title">Software Development Intern</span>
        <span class="entry-date">March 2023 — May 2023</span>
      </div>
      <div class="entry-subtitle">Style Pro Pvt Ltd &middot; India</div>
      <ul>
        <li>Contributed to production web applications using modern JavaScript frameworks and REST API integrations</li>
        <li>Implemented frontend components and backend services in full-stack development projects</li>
      </ul>
    </div>

    <div class="entry">
      <div class="entry-header">
        <span class="entry-title">Full Stack Intern</span>
        <span class="entry-date">January 2022 — June 2022</span>
      </div>
      <div class="entry-subtitle">Sindala Trading Pvt Ltd &middot; India</div>
      <ul>
        <li>Developed and maintained web applications with React.js frontends and Django/Python backends</li>
        <li>Built responsive user interfaces and integrated RESTful APIs for business-critical internal tools</li>
      </ul>
    </div>
  </div>

  <!-- Projects -->
  <div class="section">
    <div class="section-title">Key Projects</div>

    <div class="project">
      <span class="project-title">Universal Digital Signage — Multi-Module Enterprise Solution</span>
      <span class="project-tech">MERN Stack, Raspberry Pi, Docker, IoT</span>
      <a class="project-link" href="https://github.com/divisionbyinfinity/universal_digital_signage">github.com/divisionbyinfinity/universal_digital_signage</a>
      <ul>
        <li>Architected a comprehensive digital signage platform with modular services — content management, playlist scheduling, screen deployment, and device monitoring</li>
        <li>Reduced manual playlist management time by 70% through an efficient MERN-based admin dashboard</li>
        <li>Deployed Raspberry Pi hardware nodes for screen management with robust Node.js backend and API layer</li>
        <li><strong>Statuscheck Module</strong> (<a href="https://github.com/divisionbyinfinity/statuscheck" style="color:#c26a23;text-decoration:none;font-size:7.5pt;">github.com/divisionbyinfinity/statuscheck</a>): Companion device monitoring dashboard for real-time health checks (ping, SSH, HTTP) with email alerts, Docker deployment, and JSON-based configuration</li>
      </ul>
    </div>

    <div class="project">
      <span class="project-title">Walmart Time Series Sales Prediction</span>
      <span class="project-tech">PySpark, ML, Big Data</span>
      <a class="project-link" href="https://github.com/hpv333/WalmartTimeSeries_Sales_Prediction">github.com/hpv333/WalmartTimeSeries_Sales_Prediction</a>
      <ul>
        <li>Built a forecasting model using PySpark and RandomForestRegressor to predict weekly sales across 45 Walmart stores</li>
        <li>Processed large-scale retail datasets with feature engineering and comprehensive data quality checks</li>
      </ul>
    </div>

    <div class="project">
      <span class="project-title">VRK Diet Companion</span>
      <span class="project-tech">React.js, PWA, Vercel</span>
      <a class="project-link" href="https://vrk-diet-companion.vercel.app/">vrk-diet-companion.vercel.app</a>
      <ul>
        <li>Built a personalised diet companion PWA for tracking meals, weight, and hydration — live and actively maintained</li>
      </ul>
    </div>

    <div class="project">
      <span class="project-title">Business Analytics Hackathon — 3rd Prize</span>
      <span class="project-tech">Python, ML, Data Analytics</span>
      <a class="project-link" href="https://github.com/hpv333/ITDS_Hackthon_Data_Analysis">github.com/hpv333/ITDS_Hackthon_Data_Analysis</a>
      <ul>
        <li>Developed analytics solution for Peterbilt Motors to identify warranty cost root causes, securing 3rd Prize at UNT ITDS Hackathon</li>
      </ul>
    </div>
  </div>

  <!-- Education -->
  <div class="section">
    <div class="section-title">Education</div>

    <div class="edu-entry">
      <div class="edu-left">
        <div class="edu-school">University of North Texas<span style="font-weight:400;color:#666;"> &middot; Denton, TX, USA</span></div>
        <div class="edu-degree">Master of Science — Computer Science</div>
      </div>
      <div class="edu-right">
        <div class="edu-date">Aug 2023 — May 2025</div>
        <div class="edu-gpa">GPA: 4.0 / 4.0</div>
      </div>
    </div>

    <div class="edu-entry">
      <div class="edu-left">
        <div class="edu-school">St. Martin's Engineering College<span style="font-weight:400;color:#666;"> &middot; Hyderabad, India</span></div>
        <div class="edu-degree">Bachelor of Technology — Information Technology</div>
      </div>
      <div class="edu-right">
        <div class="edu-date">Aug 2019 — Jul 2023</div>
        <div class="edu-gpa">87.8%</div>
      </div>
    </div>

    <div class="edu-entry">
      <div class="edu-left">
        <div class="edu-school">Army Public School (APS)</div>
        <div class="edu-degree">Intermediate — MPC & Computer Science</div>
      </div>
      <div class="edu-right">
        <div class="edu-date">Apr 2017 — Mar 2019</div>
        <div class="edu-gpa">88.4%</div>
      </div>
    </div>
  </div>

  <!-- Certifications -->
  <div class="section">
    <div class="section-title">Certifications</div>
    <div class="cert-list">
      <span class="cert-item">Docker Foundations Professional — Docker, Inc (2025)</span>
      <span class="cert-item">Goldman Sachs Operations Simulation — Forage (2025)</span>
      <span class="cert-item">Introduction to Front-End Development — Meta (2025)</span>
      <span class="cert-item">Demystifying AI — University of North Texas (2025)</span>
    </div>
  </div>

  <!-- Additional -->
  <div class="section" style="margin-top:8px;">
    <div class="section-title">Additional</div>
    <div class="additional">
      <strong>Languages:</strong> English (Proficient), Hindi, Telugu &nbsp;&nbsp;|&nbsp;&nbsp;
      <strong>Interests:</strong> AI-assisted software development, open-source contributions, building wellness tech products
    </div>
  </div>

</div>
</body>
</html>`;

  console.log('Launching browser...');
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();

  await page.setContent(html, { waitUntil: 'networkidle0' });

  console.log('Generating PDF...');
  await page.pdf({
    path: OUTPUT_PATH,
    format: 'A4',
    printBackground: true,
    margin: { top: '0', bottom: '0', left: '0', right: '0' },
  });

  await browser.close();
  console.log(`PDF saved to: ${OUTPUT_PATH}`);
}

generatePDF().catch(console.error);
