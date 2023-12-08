import currency from '../images/image-currency.jpg';
import confetti from '../images/image-confetti.jpg';
import plane from '../images/image-plane.jpg';
import resturant from '../images/image-restaurant.jpg';

const Articles = () => {
    return ( 
        <div className="section">
            <h2 className="article-header">Latest Articles</h2>
            <div className="article-div">

                <div className="article-item"
                data-aos="zoom-in"
                data-aos-delay="100"
                data-aos-duration="1000"
                data-aos-easing="ease-in"
                >
                <img src={currency} alt="" className="article-image currency" />
                <div className="article-text">
                <p className="article-author">
                By Claire Robinson
                </p>
                <h4 className="articletext-head">
                Receive money in any currency with no fees
                </h4>
                <p className="articletext-p">
                The world is getting smaller and we’re becoming more mobile. So why should you be 
  forced to only receive money in a single …
                </p>
                </div>
                </div>

                <div className="article-item"
                data-aos="zoom-in"
                data-aos-delay="200"
                data-aos-duration="1000"
                data-aos-easing="ease-in"
                >
                <img src={resturant} alt="" className="article-image" />
                <div className="article-text">
                <p className="article-author">
                By Wilson Hutton
                </p>
                <h4 className="articletext-head">
                Treat yourself without worrying about money
                </h4>
                <p className="articletext-p">
                Our simple budgeting feature allows you to separate out your spending and set 
  realistic limits each month. That means you …
                </p>
                </div>

                </div>

                <div className="article-item"
                data-aos="zoom-in"
                data-aos-delay="300"
                data-aos-duration="1000"
                data-aos-easing="ease-in"
                
                >
                <img src={plane} alt="" className="article-image" />
                <div className="article-text">
                <p className="article-author">
                By Wilson Hutton
                </p>
                <h4 className="articletext-head">
                Take your Easybank card wherever you go
                </h4>
                <p className="articletext-p">
                We want you to enjoy your travels. This is why we don’t charge any fees on purchases 
  while you’re abroad. We’ll even show you …
                </p>
                </div>

                </div>

                <div className="article-item"
                data-aos="zoom-in"
                data-aos-delay="400"
                data-aos-duration="1000"
                data-aos-easing="ease-in"
                >
                <img src={confetti} alt="" className="article-image" />
                <div className="article-text">
                <p className="article-author">
                By Claire Robinson
                </p>
                <h4 className="articletext-head">
                Our invite-only Beta accounts are now live!
                </h4>
                <p className="articletext-p">
                After a lot of hard work by the whole team, we’re excited to launch our closed beta. 
  It’s easy to request an invite through the site ...
                </p>
                </div>

                </div>
            </div>
        </div>
     );
}
 
export default Articles;