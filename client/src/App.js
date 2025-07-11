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

function checkBusinessInputs(){
  const company = document.getElementById("company").value.replace(/ /g, "");;
  const companyAge = document.getElementById("company-age").value;
  const businessRevenue = document.getElementById("business-revenue").value;

  if(company === ""){
    alert("Please enter your company name");
    return false;
  }else if (companyAge === "none"){
    alert("Please select your company age");
    return false;
  }else if (businessRevenue === "none"){
    alert("Please select your business revenue");
    return false;
  }

  return true;
}

function checkPersonalInputs(){
  const firstName = document.getElementById("first-name").value.replace(/ /g, "");
  const lastName = document.getElementById("last-name").value.replace(/ /g, "");
  const phone = document.getElementById("phone").value.replace(/ /g, "");
  const email = document.getElementById("email").value;
  const service = document.getElementById("service").value;
  const type = document.getElementById("type").value;

  //email and phone vlaidity regex
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  const phoneRegex = /^((\+27)|0)\d{9}$/;

  if(firstName === ""){
    alert("Please enter your first name");
    return false;
  } else if (lastName === ""){
    alert("Please enter your last name");
    return false;
  } else if (!phoneRegex.test(phone)){
    alert("Please enter a valid phone number");
    return false;
  } else if (!emailRegex.test(email)){
    alert("Please enter a valid email address");
    return false;
  } else if (service === "none"){
    alert("Please select a service");
    return false;
  } else if (type === "none"){
    alert("Please select a type");
    return false;
  }
  
  return true;
}

function Home({ setHome }){
  const [faq1Open, setFaq1Open] = React.useState(false);
  const [faq2Open, setFaq2Open] = React.useState(false);
  const [faq3Open, setFaq3Open] = React.useState(false);
  const [faq4Open, setFaq4Open] = React.useState(false);
  const [faq5Open, setFaq5Open] = React.useState(false);

  return (
  <div className="App">
      <header className="header">
        <img src={logo} className="App-logo" alt="logo" />
        <a className="apply-button" href="#Apply-Form" onClick={() => setHome(false)}>
          <span className="apply-text">Apply Now</span>
          <span className="apply-additional-info">Free 60 minute consultation</span>
        </a>
      </header>

      <div className="Main-Content">
        <img src={logo} className="Main-logo" alt="logo" />
        <div className="Main-Info">
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
                <li><i className="fas fa-check services-check"></i><i>VAT, PAYE, Income Tax Submissions</i></li>
                <li><i className="fas fa-check services-check"></i><i>SARS Compliance & Dispute Resolution</i></li>
                <li><i className="fas fa-check services-check"></i><i>Tax Planning & Advisory</i></li>
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
                <li><i className="fas fa-check services-check"></i><i>Bookkeeping</i></li>
                <li><i className="fas fa-check services-check"></i><i>Financial Statement Preparation</i></li>
                <li><i className="fas fa-check services-check"></i><i>Payroll Administration</i></li>
                <li><i className="fas fa-check services-check"></i><i>Budgeting, Cash Flow & Forecasting</i></li>
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
                <li><i className="fas fa-check services-check"></i><i>Internal Controls & Risk Management</i></li>
                <li><i className="fas fa-check services-check"></i><i>B-BBEE Advisory & Verification Support</i></li>
                <li><i className="fas fa-check services-check"></i><i>Business Process Improvement</i></li>
                <li><i className="fas fa-check services-check"></i><i>CIPC Registrations & Compliance</i></li>
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
              <i className={!faq1Open ? "fas fa-chevron-down" : "fas fa-chevron-up"}></i>
            </a>
            <div className="Faq-body" style={{display: faq1Open ? 'block' : 'none'}}>
              <div className="Faq-divider"></div>
              <p>You’ll need your ID, IRP5(s), bank statements, proof of income and expenses, medical aid certificates, retirement annuity contributions, and any supporting documents for deductions or allowances.</p>
            </div>
          </div>

          <div className="Faq">
            <a className="Faq-header" onClick={() => setFaq2Open(!faq2Open)}>
              <h2>2. How can your firm help me save on taxes?</h2>
              <i className={!faq2Open ? "fas fa-chevron-down" : "fas fa-chevron-up"}></i>
            </a>
            <div className="Faq-body" style={{display: faq2Open ? 'block' : 'none'}}>
              <div className="Faq-divider"></div>
              <p>We identify legal deductions, rebates, and incentives based on your business or personal profile. Our strategic tax planning ensures you pay only what’s required — nothing more.</p>
            </div>
          </div>

          <div className="Faq">
            <a className="Faq-header" onClick={() => setFaq3Open(!faq3Open)}>
              <h2>3. What's the difference between an accountant and a bookkeeper?</h2>
              <i className={!faq3Open ? "fas fa-chevron-down" : "fas fa-chevron-up"}></i>
            </a>
            <div className="Faq-body" style={{display: faq3Open ? 'block' : 'none'}}>
              <div className="Faq-divider"></div>
              <p>A bookkeeper records day-to-day transactions, while an accountant interprets that data to prepare financial statements, give advice, and ensure compliance with SARS and other regulations.</p>
            </div>
          </div>

          <div className="Faq">
            <a className="Faq-header" onClick={() => setFaq4Open(!faq4Open)}>
              <h2>4. Why is regular financial reporting important for my business?</h2>
              <i className={!faq4Open ? "fas fa-chevron-down" : "fas fa-chevron-up"}></i>
            </a>
            <div className="Faq-body" style={{display: faq4Open ? 'block' : 'none'}}>
              <div className="Faq-divider"></div>
              <p>Monthly or quarterly reporting gives you insight into your cash flow, profitability, and tax obligations. It helps you make informed decisions and avoid financial surprises.</p>
            </div>
          </div>

          <div className="Faq">
            <a className="Faq-header" onClick={() => setFaq5Open(!faq5Open)}>
              <h2>5. Do I really need an accountant if I use accounting software?</h2>
              <i className={!faq5Open ? "fas fa-chevron-down" : "fas fa-chevron-up"}></i>
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
            <a href="mailto:info@ariseconsulting.co.za"><i className="far fa-envelope"></i>info@ariseconsulting.co.za</a>
            <a href="tel:+27636018951"><i className="fas fa-phone"></i>+27 636018951</a>
            <a href="tel:+2773798806"><i className="fas fa-phone"></i>+27 73798806</a>
            <a href="https://wa.me/+27636018951"><i className="fab fa-whatsapp"></i>+27 636018951</a>
            <a href="https://wa.me/+2773798806"><i className="fab fa-whatsapp"></i>+27 73798806</a>
            <a href="https://www.linkedin.com/company/arise-consulting"><i className="fab fa-linkedin"></i>LinkedIn</a>
            <a href="https://www.facebook.com/ariseconsulting"><i className="fab fa-facebook"></i>Facebook</a>
          </div>
        </div>
        <span className="copyright">© {new Date().getFullYear()} Arise Consulting. All rights reserved.</span>
        <span className="creator">Website by <a href="https://www.linkedin.com/in/phuluso-singo">Phuluso Singo</a></span>
      </div>

    </div>
  );
}

function Apply({ setHome }){
  const [currentWindow, setWindow] = React.useState("Personal");
  
  // Calendar state
  const [calendarDate, setCalendarDate] = React.useState(new Date());
  const [selectedDate, setSelectedDate] = React.useState(null);
  
  // Array of month names
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December",
  ];
  
  // Get current month and year from calendar state
  const currentMonth = calendarDate.getMonth();
  const currentYear = calendarDate.getFullYear();
  
  // Function to generate calendar dates
  const generateCalendarDates = () => {
    const start = new Date(currentYear, currentMonth, 1).getDay();
    const endDate = new Date(currentYear, currentMonth + 1, 0).getDate();
    const end = new Date(currentYear, currentMonth, endDate).getDay();
    const endDatePrev = new Date(currentYear, currentMonth, 0).getDate();
    
    const dates = [];
    
    // Previous month's last days
    for (let i = start; i > 0; i--) {
      dates.push({
        date: endDatePrev - i + 1,
        isCurrentMonth: false,
        isToday: false,
        fullDate: new Date(currentYear, currentMonth - 1, endDatePrev - i + 1)
      });
    }
    
    // Current month's dates
    for (let i = 1; i <= endDate; i++) {
      const isToday = i === new Date().getDate() && 
                     currentMonth === new Date().getMonth() && 
                     currentYear === new Date().getFullYear();
      
      dates.push({
        date: i,
        isCurrentMonth: true,
        isToday: isToday,
        fullDate: new Date(currentYear, currentMonth, i)
      });
    }
    
    // Next month's first days
    for (let i = end; i < 6; i++) {
      dates.push({
        date: i - end + 1,
        isCurrentMonth: false,
        isToday: false,
        fullDate: new Date(currentYear, currentMonth + 1, i - end + 1)
      });
    }
    
    return dates;
  };
  
  // Handle navigation
  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      setCalendarDate(new Date(currentYear - 1, 11, 1));
    } else {
      setCalendarDate(new Date(currentYear, currentMonth - 1, 1));
    }
  };
  
  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCalendarDate(new Date(currentYear + 1, 0, 1));
    } else {
      setCalendarDate(new Date(currentYear, currentMonth + 1, 1));
    }
  };
  
  // Handle date selection
  const handleDateClick = (dateObj) => {
    if (dateObj.isCurrentMonth) {
      setSelectedDate(dateObj.fullDate);
      // Update the hidden date input
      const dateInput = document.getElementById('date');
      if (dateInput) {
        dateInput.value = dateObj.fullDate.toISOString().split('T')[0];
      }
    }
  };

  return (
    <div>
      <div className="apply-page-conatiner">
        <div className="HBC">
          <a className="HB" onClick={() => setHome(true)}>
            <i className="fas fa-arrow-left HBC-Arrow"></i>Home
          </a>
          <div className="HBC-Div"></div>
        </div>
        <div className="AML-container">
          <img src={logo} className="AML" alt="logo" />
        </div>
        <h1>Book a Session</h1>
        <p>Please fill in the form below to apply for our services</p>
        <form className="Apply-Form" id="Apply-Form">
          <div className="Apply-Form-Info">
            <img src={logo} alt="logo or picture" />
            <h2>1 hour free consultation</h2>
            <span><i className="far fa-clock info-clock-icon"></i> 60 mins</span>
            <div>
              <h3><i className="far fa-calendar-alt"></i> Book Your Free 1-Hour Accounting Consultation</h3>
              <p>Our free 1-hour accounting consultation is designed to help you understand your financial situation and identify areas for improvement. During this session, our expert accountant will identify your business goals, review your numbers, identify opportunities to save, and check for any compliancy challenges which can be resolved.</p>
              <ul>
                <li>• No strings attached—just real clarity.</li>
                <li>• Expert advice tailored to your business.</li>
                <li>• Ask anything—tax, payroll, reporting, we’ve got you</li>
              </ul>
              <h3>Take the first step toward cleaner books and greater peace of mind. Book your session today.</h3>
            </div>
          </div>
          <div className="inputs">
            <div className="first-inputs" style={{display: currentWindow == "Personal" ? 'grid' : 'none'}}>
              <div className="IGI">
                <label htmlFor="first-name">First Name</label>
                <input type="text" name="first-name" id="first-name" placeholder="First Name" />
              </div>
              <div className="IGI">
                <label htmlFor="last-name">Last Name</label>
                <input type="text" name="last-name" id="last-name" placeholder="Last Name" />
              </div>
              <div className="IGI">
                <label htmlFor="phone">Phone</label>
                <input type="tel" name="phone" autocomplete="off" class="countryphone" id="phone" data-required="true" placeholder="071 123 4567" data-intl-tel-input-id="0"/>
              </div>
              <div className="IGI">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" placeholder="Email Address" />
              </div>
              <div className="IGI IGI-Full">
                <label htmlFor="service">What service are you interested in?</label>
                <select name="service" id="service">
                  <option disabled selected hidden value="none">Please select one</option>
                  <option value="tax">Tax Services</option>
                  <option value="accounting">Accounting Services</option>
                  <option value="consulting">Business Consulting</option>
                </select>
              </div>
              <div className="IGI IGI-Full">
                <label htmlFor="type">Is this for your business or personal?</label>
                <select name="type" id="type" placeholder="select one">
                  <option disabled selected hidden value="none">Please select one</option>
                  <option value="business">Business</option>
                  <option value="personal">Personal</option>
                  <option value="both">Both</option>
                </select>
              </div>
              <div className="IGI IGI-Full">
                <a className="apply-button AB" onClick={() => {
                  //check if inputs are valid
                  if (!checkPersonalInputs()) return;
                  
                  //check if type is business or both and set window to business
                  //if personal go to confirm window
                  const typeSelect = document.getElementById('type');
                  const value = typeSelect.value;
                  if (value === "none") {
                    
                  } else if (value === "business" || value === "both") {
                    setWindow("Business");
                  } else {
                    setWindow("Confirm");
                  }
                }}>Next</a>
              </div>
            </div>
            <div className="business-inputs" style={{display: currentWindow == "Business" ? 'grid' : 'none'}}>
              <div className="IGI IGI-Full">
                <label htmlFor="company">What is your companies name?</label>
                <input type="text" name="company" id="company" placeholder="Company Name" />
              </div>
              <div className="IGI IGI-Full">
                <label htmlFor="company-age">How long has your company been active for?</label>
                <select name="company-age" id="company-age" placeholder="select one">
                  <option disabled selected hidden value="none">Please select one</option>
                  <option value="0-1">0 - 1 Years</option>
                  <option value="1-3">1 - 3 Years</option>
                  <option value="3-5">3 - 5 Years</option>
                  <option value="5-10">5 - 10 Years</option>
                  <option value="10+">10+ Years</option>
                </select>
              </div>
              <div className="IGI IGI-Full">
                <label htmlFor="business-revenue">How much revenue does your company bring in a year?</label>
                <select name="business-revenue" id="business-revenue" placeholder="select one">
                  <option disabled selected hidden value="none">Please select one</option>
                  <option value="0-100000">R0 - R100k Annually</option>
                  <option value="100000-500000">R100k - R500k Annually</option>
                  <option value="500000-1000000">R500k - R1m Annually</option>
                  <option value="1000000-5000000">R1m - R5m Annually</option>
                  <option value="5000000+">R5m+ Annually</option>
                </select>
              </div>
              <div className="IGI IGI-Full">
                <a className="apply-button AB" onClick={() => {
                  //check if inputs are valid
                  if (!checkBusinessInputs()) return;
      
                  //go to confirm window
                  setWindow("Confirm")
                }}>Next</a>
              </div>
            </div>

          <div className="Date-And-Time" style={{display: currentWindow == "Confirm" ? 'grid' : 'none'}}>
            <div className="IGI IGI-Full-3">
              <label htmlFor="date">Select Date & Time</label>
              <input type="date" name="date" id="date" hidden/>
            </div>
            <div className="IGI IGI-FULL Calendar">
              <div className="cal-container">
                <div className="calendar">
                  <div className="cal-head">
                    <button id="cal-prev" onClick={handlePrevMonth}></button>
                    <h3 className="cal-title">{months[currentMonth]} {currentYear}</h3>
                    <button id="cal-next" onClick={handleNextMonth}></button>
                  </div>
                  <div className="cal-body">
                      <div className="days">
                        <div>Sun</div>
                        <div>Mon</div>
                        <div>Tue</div>
                        <div>Wed</div>
                        <div>Thu</div>
                        <div>Fri</div>
                        <div>Sat</div>
                      </div>
                      <ul className="dates">
                        {generateCalendarDates().map((dateObj, index) => (
                          <li key={index} 
                              className={`${!dateObj.isCurrentMonth ? 'old' : ''} ${dateObj.isToday ? 'today' : ''}`}
                              onClick={() => handleDateClick(dateObj)}>
                            <span>{dateObj.date}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
              </div>
            </div>
            <div className="IGI">
              <div className="Time-Slots">
                <a className="Time">09:00 AM</a>
                <a className="Time">10:00 AM</a>
                <a className="Time">11:00 AM</a>
                <a className="Time">12:00 PM</a>
                <a className="Time">01:00 PM</a>
                <a className="Time">02:00 PM</a>
                <a className="Time">03:00 PM</a>
                <a className="Time">04:00 PM</a>
                <a className="Time">05:00 PM</a>
              </div>
            </div>
            <div className="IGI IGI-Full-3">
              <label htmlFor="additional-info" className="TA">Additional information</label>
              <textarea className="AI-text" name="additional-info" id="additional-info" placeholder="Is there anything you would like us to know before your appointment?" />
            </div>
            <div className="IGI IGI-Full-3">
              <a className="apply-button AB" onClick={() => {}}>Next</a>
            </div>
          </div>
          </div>
        </form>
      </div>

      <div className="Apply-Footer">
        <div className="flc">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <p>Empowering Business Growth Through Expert Tax, Accounting & Advisory Solutions.</p>
        <span className="copyright">© {new Date().getFullYear()} Arise Consulting. All rights reserved.</span>
        <span className="creator">Website by <a href="https://www.linkedin.com/in/phuluso-singo">Phuluso Singo</a></span>
      </div>

    </div>
  );  
}

function App() {
  const [home, setHome] = React.useState(true);

  return (
    home ? <Home setHome={setHome} /> : <Apply setHome={setHome}/>
  );
}

/*
function Test()
 {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);
}*/

export default App;