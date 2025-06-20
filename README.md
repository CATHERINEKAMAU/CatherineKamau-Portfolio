<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Catherine Kamau | Portfolio</title>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;600;800&display=swap" rel="stylesheet">
  <style>
    * {
      box-sizing: border-box;
      scroll-behavior: smooth;
    }
    body {
      margin: 0;
      font-family: 'Poppins', sans-serif;
      background: #f4f8fc;
      color: #333;
    }

    /* Hero Section */
    header {
      background: linear-gradient(to right, #4f46e5, #3b82f6);
      color: white;
      text-align: center;
      padding: 5rem 2rem 3rem;
      position: relative;
      overflow: hidden;
    }

    .profile-photo {
      width: 140px;
      height: 140px;
      border-radius: 50%;
      object-fit: cover;
      border: 4px solid white;
      margin-bottom: 1rem;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    }

    .intro-banner {
      background: rgba(255, 255, 255, 0.1);
      padding: 1rem 2rem;
      margin: 1rem auto 0;
      border-radius: 30px;
      display: inline-block;
      font-size: 1.1rem;
      font-weight: 500;
      color: #ffffff;
      animation: floatIn 1.5s ease forwards;
      transform: translateY(-20px);
      opacity: 0;
    }

    @keyframes floatIn {
      to {
        transform: translateY(0);
        opacity: 1;
      }
    }

    .section {
      padding: 3rem 10%;
      max-width: 1200px;
      margin: auto;
    }

    .section h2 {
      color: #3b82f6;
      margin-bottom: 1.5rem;
      font-size: 2rem;
    }

    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 1.5rem;
    }

    .card {
      background: white;
      border-radius: 16px;
      padding: 1.5rem;
      box-shadow: 0 6px 20px rgba(0,0,0,0.05);
      text-align: center;
      transition: transform 0.3s ease;
    }

    .card:hover {
      transform: translateY(-5px);
    }

    .card img {
      max-width: 100%;
      border-radius: 10px;
    }

    .card a {
      display: block;
      margin-top: 0.75rem;
      text-decoration: none;
      color: #3b82f6;
      font-weight: 600;
    }

    .footer {
      background: #e5e7eb;
      text-align: center;
      padding: 2rem 1rem;
      font-size: 0.9rem;
      margin-top: 2rem;
    }

    .contact a {
      color: #2563eb;
      font-weight: 600;
      text-decoration: none;
    }

    @media screen and (max-width: 768px) {
      .section {
        padding: 2rem 1rem;
      }
    }
  </style>
</head>
<body>

<header>
  <img src="https://i.imgur.com/dYcYQ7E.png" alt="Catherine Kamau" class="profile-photo" />
  <div class="intro-banner">
    👋 Welcome to my Portfolio – I'm Catherine Kamau
  </div>
  <h1 style="margin-top: 1.5rem;">Data Analyst | IT Support | Digital Marketer</h1>
</header>

<section class="section">
  <h2>👩‍💻 About Me</h2>
  <p>
    I'm passionate about using technology to solve real-world problems. With a background in Business Information Technology, I bring hands-on experience in data analytics, AI simulations, IT support, and digital marketing.
  </p>
</section>

<section class="section">
  <h2>🚀 Projects</h2>
  <div class="card">
    <a href="./Projects/AI_Chatbot_Project/README.md">🤖 AI Chatbot – BCG Forage GenAI Simulation</a>
  </div>
</section>

<section class="section">
  <h2>📊 Dashboards</h2>
  <div class="grid">
    <div class="card">
      <img src="https://img.icons8.com/color/96/000000/microsoft-excel-2019--v1.png" alt="Excel Icon" />
      <a href="./Dashboards/Dashboard%20Data%20(HEROES.xlsx" target="_blank">Heroes Campaign Dashboard</a>
    </div>
    <div class="card">
      <img src="https://img.icons8.com/color/96/000000/microsoft-excel-2019--v1.png" alt="Excel Icon" />
      <a href="./Dashboards/MCU%20DASHBOARD.xlsx" target="_blank">MCU Dashboard</a>
    </div>
  </div>
</section>

<section class="section">
  <h2>🎨 Posters</h2>
  <div class="grid">
    <div class="card"><img src="./Posters/BLUECOVER FATHER'S DAY.png"><a href="#">Bluecover – Father's Day</a></div>
    <div class="card"><img src="./Posters/MADARAKA DAY BLUECOVER 4.png"><a href="#">Bluecover – Madaraka Day</a></div>
    <div class="card"><img src="./Posters/MAESTRO FATHER'S DAY2.png"><a href="#">Maestroville – Father's Day</a></div>
    <div class="card"><img src="./Posters/MAESTRO MADARAKA 4.png"><a href="#">Maestroville – Madaraka Day</a></div>
    <div class="card"><img src="./Posters/UNDERSEA.png"><a href="#">Undersea Campaign Poster</a></div>
  </div>
</section>

<section class="section">
  <h2>🎓 Certifications</h2>
  <p><a href="./Certifications/BCG-FORAGE GEN AI CERTIFICATE.pdf" target="_blank">✅ BCG GenAI Job Simulation Certificate</a></p>
</section>

<section class="section">
  <h2>📄 Resume</h2>
  <p><a href="./CV/CatherineKamau_Resume.pdf" target="_blank">📄 Download My CV</a></p>
</section>

<section class="section contact">
  <h2>📬 Contact</h2>
  <p>Email: <a href="mailto:catherine.kamau381@gmail.com">catherine.kamau381@gmail.com</a></p>
  <p>Phone: <a href="tel:+254701029671">+254701029671</a></p>
  <p>LinkedIn: <a href="https://www.linkedin.com/in/catherine-kamau-98b83a326" target="_blank">linkedin.com/in/catherine-kamau</a></p>
</section>

<footer class="footer">
  © 2025 Catherine Kamau. Built with ❤️ using GitHub Pages.
</footer>

</body>
</html>
