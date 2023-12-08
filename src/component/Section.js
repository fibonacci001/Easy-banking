import onlinebanking from '../images/icon-online.svg';
import simplebudgeting from '../images/icon-budgeting.svg';
import onboarding from '../images/icon-onboarding.svg';
import api from '../images/icon-api.svg';



const Section = ({Aos}) => {
    return ( 
        <section>
            <div className="sectionmain-div">
            <div className="section-header-div">
            <h2 className="section-header">Why choose Easybank?</h2>
            <p className="section-p">We leverage Open Banking to turn your bank account into your financial hub. Control 
  your finances like never before.</p>
  </div>
            <div className="benefits"
            
            >
                <div className="benefit 1"
                data-aos="zoom-in"
                data-aos-delay="100"
                data-aos-duration="700"
                data-aos-easing="ease-in"

                >
                    <img src={onlinebanking} alt="" className='section-icon' />
                <h3 className="benefithead">Online Banking</h3>
                <p className="benefit-p">Our modern web and mobile applications allow you to keep track of your finances 
  wherever you are in the world.</p>
                </div>
                <div className="benefit 2"
                data-aos="zoom-in"
                data-aos-delay="200"
                data-aos-duration="700"
                data-aos-easing="ease-in"
                
                >
                    <img src={simplebudgeting} alt="" className='section-icon' />
                <h3 className="benefithead">Simple Budgeting</h3>
                <p className="benefit-p">See exactly where your money goes each month. Receive notifications when you’re 
  close to hitting your limits.</p>
                </div>
                <div className="benefit 3"
                data-aos="zoom-in"
                data-aos-delay="300"
                data-aos-duration="700"
                data-aos-easing="ease-in"
                >
                    <img src={onboarding} alt="" className='section-icon' />
                <h3 className="benefithead">Fast Onboarding</h3> 
                <p className="benefit-p">We don’t do branches. Open your account in minutes online and start taking control 
  of your finances right away.</p>
                </div>
                <div className="benefit 4"
                data-aos="zoom-in"
                data-aos-delay="400"
                data-aos-duration="700"
                data-aos-easing="ease-in"
                >
                    <img src={api} alt="" className='section-icon' />
                <h3 className="benefithead">Open API</h3>
                <p className="benefit-p longerp">Manage your savings, investments, pension, and much more from one account. Tracking 
  your money has never been easier.</p>
                </div>
            </div>
            </div>
        </section>
     );
}
 
export default Section;