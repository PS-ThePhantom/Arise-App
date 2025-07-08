import React from "react";
import logo from "./assets/Logo.png";
import tax from "./assets/tax.png";
import budget from "./assets/budget.png";
import whoWeAreIco from "./assets/group.png";
import ourMissionIco from "./assets/leadership.png";
import ourVisionIco from "./assets/monitoring.png";
import consultant from "./assets/consultant.png";
import whyChooseUs from "./assets/question.png";
import sait from "./assets/sait.png";
import sars from "./assets/sars.png";
import ciba from "./assets/ciba.png";
import sage from "./assets/sage.png";
import "./App.css";

function Home(){
  const [faq1Open, setFaq1Open] = React.useState(false);
  const [faq2Open, setFaq2Open] = React.useState(false);
  const [faq3Open, setFaq3Open] = React.useState(false);
  const [faq4Open, setFaq4Open] = React.useState(false);
  const [faq5Open, setFaq5Open] = React.useState(false);

  return (
  <div className="App">
      <header className="header">
        <img src={logo} className="App-logo" alt="logo" />
        <a href="#" class="apply-button">
          <span class="apply-text">Apply Now</span>
          <span class="apply-additional-info">Free 60 minute consultation</span>
        </a>
      </header>

      <div class="Main-Content">
        <img src={logo} className="Main-logo" alt="logo" />
        <div class="Main-Info">
          <h1>World-Class Accountants and Tax Advisors</h1>
          <p>Empowering Business Growth Through Expert Tax, Accounting & Advisory Solutions.</p>
        </div>
      </div>

      <div className="values-missions">
        <div className="we">
          <div className="Values-mission-ico-container">
            <img src={whoWeAreIco} className="we-icon Values-mission-icon" alt="icon" />
          </div>
          <h1>Who We Are</h1>
          <p>Arise Consulting is a dynamic professional services firm offering tax, accounting, and business advisory solutions. We are committed to supporting entrepreneurs, small to medium enterprises, and growing businesses with practical, compliant, and growth-focused financial services.</p>
        </div>
        <div className="mission">
          <div className="Values-mission-ico-container">
            <img src={ourMissionIco} className="mission-icon Values-mission-icon" alt="icon" />
          </div>
          <h1>Our Mission</h1>
          <p>To support businesses with expert tax, accounting, and advisory services that promote compliance, profitability, and sustainable growth. We are committed to delivering tailored financial solutions, empowering our clients to make informed decisions and thrive in a dynamic business environment.</p>
        </div>
        <div className="vision">
          <div className="Values-mission-ico-container">
            <img src={ourVisionIco} className="vison-icon Values-mission-icon" alt="icon" />
          </div>
          <h1>Our Vision</h1>
          <p>To be a trusted partner for entrepreneurs and businesses across South Africa and beyond—delivering excellence in financial management, driving strategic growth, and enabling long-term success.</p>
        </div>
      </div>

      <div className="Services">
        <h1>We Provide Exceptional Services</h1>
        <p>We offer a range of services to help your business thrive, so you stay complient and stay focused on growth</p>
        <div className="Services-Box">
          <div className="Tax">
            <div className="Service-Box-inner-Text">
              <h2>Tax Services</h2>
              <ul>
                <li><i class="fas fa-check services-check"></i><i>VAT, PAYE, Income Tax Submissions</i></li>
                <li><i class="fas fa-check services-check"></i><i>SARS Compliance & Dispute Resolution</i></li>
                <li><i class="fas fa-check services-check"></i><i>Tax Planning & Advisory</i></li>
              </ul>
            </div>
            <div className="Service-Box-inner-Image">
              <img src={tax} className="tax-icon Service-Box-icon" alt="icon" />
            </div>
          </div>

          <div className="Accounting">
            <div className="Service-Box-inner-Text">
              <h2>Accounting Services</h2>
              <ul>
                <li><i class="fas fa-check services-check"></i><i>Bookkeeping</i></li>
                <li><i class="fas fa-check services-check"></i><i>Financial Statement Preparation</i></li>
                <li><i class="fas fa-check services-check"></i><i>Payroll Administration</i></li>
                <li><i class="fas fa-check services-check"></i><i>Budgeting, Cash Flow & Forecasting</i></li>
              </ul>
            </div>
            <div className="Service-Box-inner-Image">
              <img src={budget} className="accounting-icon Service-Box-icon" alt="icon" />
            </div>
          </div>

          <div className="Consulting">
            <div className="Service-Box-inner-Text">
              <h2>Business Consulting</h2>
              <ul>
                <li><i class="fas fa-check services-check"></i><i>Internal Controls & Risk Management</i></li>
                <li><i class="fas fa-check services-check"></i><i>B-BBEE Advisory & Verification Support</i></li>
                <li><i class="fas fa-check services-check"></i><i>Business Process Improvement</i></li>
                <li><i class="fas fa-check services-check"></i><i>CIPC Registrations & Compliance</i></li>
              </ul>
            </div>
            <div className="Service-Box-inner-Image">
              <img src={consultant} className="consulting-icon Service-Box-icon" alt="icon" />
            </div>
          </div>
        </div>
      </div>

      <div className="why-choose-us">
        <div className="Values-mission-ico-container">
          <img src={whyChooseUs} className="why-choose-us-icon Values-mission-icon" alt="icon" />
        </div>
        <h1>Why Choose Arise Consulting?</h1>
        <ul>
          <li><strong>Integrity</strong> – We uphold the highest ethical standards</li>
          <li><strong>Excellence</strong> – Precision and quality in every engagement</li>
          <li><strong>Client-Centric</strong> – We tailor our services to your unique business needs</li>
          <li><strong>Innovation</strong> – Embracing smart solutions for modern challenges</li>
          <li><strong>Accountability</strong> – We deliver on our promises</li>
          <li><strong>Growth-Focused</strong> – We care about your long-term success</li>
        </ul>
      </div>

      <div className="registered-with">
        <h1>Registered With</h1>
        <div className="registered-with-logos">
          <div><img src={sait} className="sait-logo" alt="logo" /></div>
          <div><img src={sars} className="sars-logo" alt="logo" /></div>
          <div><img src={ciba} className="ciba-logo" alt="logo" /></div>
          <div><img src={sage} className="sage-logo" alt="logo" /></div>
        </div>
      </div>

      <div className="Faqs-container">
        <h1>Frequently Asked Questions</h1>
        <p>Here are some common questions we get</p>
        <div className="Faqs">

          <div className="Faq">
            <a className="Faq-header" onClick={() => setFaq1Open(!faq1Open)}>
              <h2>1. What documents do I need to provide for tax filing?</h2>
              <i class={!faq1Open ? "fas fa-chevron-down" : "fas fa-chevron-up"}></i>
            </a>
            <div className="Faq-body" style={{display: faq1Open ? 'block' : 'none'}}>
              <div className="Faq-divider"></div>
              <p>You’ll need your ID, IRP5(s), bank statements, proof of income and expenses, medical aid certificates, retirement annuity contributions, and any supporting documents for deductions or allowances.</p>
            </div>
          </div>

          <div className="Faq">
            <a className="Faq-header" onClick={() => setFaq2Open(!faq2Open)}>
              <h2>2. How can your firm help me save on taxes?</h2>
              <i class={!faq2Open ? "fas fa-chevron-down" : "fas fa-chevron-up"}></i>
            </a>
            <div className="Faq-body" style={{display: faq2Open ? 'block' : 'none'}}>
              <div className="Faq-divider"></div>
              <p>We identify legal deductions, rebates, and incentives based on your business or personal profile. Our strategic tax planning ensures you pay only what’s required — nothing more.</p>
            </div>
          </div>

          <div className="Faq">
            <a className="Faq-header" onClick={() => setFaq3Open(!faq3Open)}>
              <h2>3. What's the difference between an accountant and a bookkeeper?</h2>
              <i class={!faq3Open ? "fas fa-chevron-down" : "fas fa-chevron-up"}></i>
            </a>
            <div className="Faq-body" style={{display: faq3Open ? 'block' : 'none'}}>
              <div className="Faq-divider"></div>
              <p>A bookkeeper records day-to-day transactions, while an accountant interprets that data to prepare financial statements, give advice, and ensure compliance with SARS and other regulations.</p>
            </div>
          </div>

          <div className="Faq">
            <a className="Faq-header" onClick={() => setFaq4Open(!faq4Open)}>
              <h2>4. Why is regular financial reporting important for my business?</h2>
              <i class={!faq4Open ? "fas fa-chevron-down" : "fas fa-chevron-up"}></i>
            </a>
            <div className="Faq-body" style={{display: faq4Open ? 'block' : 'none'}}>
              <div className="Faq-divider"></div>
              <p>Monthly or quarterly reporting gives you insight into your cash flow, profitability, and tax obligations. It helps you make informed decisions and avoid financial surprises.</p>
            </div>
          </div>

          <div className="Faq">
            <a className="Faq-header" onClick={() => setFaq5Open(!faq5Open)}>
              <h2>5. Do I really need an accountant if I use accounting software?</h2>
              <i class={!faq5Open ? "fas fa-chevron-down" : "fas fa-chevron-up"}></i>
            </a>
            <div className="Faq-body" style={{display: faq5Open ? 'block' : 'none'}}>
              <div className="Faq-divider"></div>
              <p>Yes. Software helps record transactions, but an accountant ensures accuracy, compliance, strategic insights, and can represent you in audits or with SARS if needed</p>
            </div>
          </div>

        </div>
      </div>

      <div className="Footer">
        <h1>Let’s Grow Together</h1>
        <p>Whether you're launching, scaling, or strengthening your business, Arise Consulting is your partner for trusted financial guidance and long-term value. Our expert team delivers tailored tax, accounting, and advisory services to help you thrive in a dynamic business environment.</p>
        <div className="Contact-Us">
          <h2>Contact Us</h2>
          <div className="contacts">
            <a href="mailto:info@ariseconsulting.co.za"><i class="far fa-envelope"></i>info@ariseconsulting.co.za</a>
            <a href="tel:+27636018951"><i class="fas fa-phone"></i>+27 636018951</a>
            <a href="tel:+2773798806"><i class="fas fa-phone"></i>+27 73798806</a>
            <a href="https://wa.me/+27636018951"><i class="fab fa-whatsapp"></i>+27 636018951</a>
            <a href="https://wa.me/+2773798806"><i class="fab fa-whatsapp"></i>+27 73798806</a>
            <a href="https://www.linkedin.com/company/arise-consulting"><i class="fab fa-linkedin"></i>LinkedIn</a>
            <a href="https://www.facebook.com/ariseconsulting"><i class="fab fa-facebook"></i>Facebook</a>
          </div>
        </div>
        <span className="copyright">© {new Date().getFullYear()} Arise Consulting. All rights reserved.</span>
        <span className="creator">Website by <a href="https://www.linkedin.com/in/phuluso-singo">Phuluso Singo</a></span>
      </div>

    </div>
  );
}


function App() {
  

  return (
    Home()
  );
    
}

function Test(){
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);
}

export default App;