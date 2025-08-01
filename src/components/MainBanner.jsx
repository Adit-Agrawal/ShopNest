import "./Header.css";
import Main1 from "../img/header/home.jpg";
import Main2 from "../img/header/skincare.jpg";
import Main3 from "../img/header/kitchen.jpg";
import Main4 from "../img/header/electronics.jpg";
import { Link } from "react-router-dom";

function MainBanner() {
  return (
    <>
      <div className="home-container">
        <div className="container">
          <div className="grid-container">
            <div className="featured grid-one">
              <Link to="categories/furnitures">
                <div id="img1" className="lil-overlay"></div>
                <img src={Main1} alt="img1" />
                <p className="main-description">Home</p>
              </Link>
            </div>
            <div className="featured grid-two">
              <Link to="categories/skin-care">
                <div id="img2" className="lil-overlay"></div>
                <img src={Main2} alt="img2" />
                <p className="main-description">Skincare</p>
              </Link>
            </div>
            <div className="featured grid-four">
              <Link to="categories/kitchen">
                <div id="img3" className="lil-overlay"></div>
                <img src={Main3} alt="img3" />
                <p className="main-description">Kitchen</p>
              </Link>
            </div>
            <div className="featured grid-four-low">
              <Link to="categories/electronics">
                <div id="img4" className="lil-overlay"></div>
                <img src={Main4} alt="img4" />
                <p className="main-description">Electronics</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainBanner;
