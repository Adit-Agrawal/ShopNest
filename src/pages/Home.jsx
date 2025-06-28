import Banner from "../components/Banner";
import BannerReverse from "../components/BannerReverse";
import Footer from "../components/Footer";
import MainBanner from "../components/MainBanner";
import Newsletter from "../components/Newsletter";
import BestSellers from "../components/BestSellers";
import TrendingSlider from "../components/TrendingSlider";
import Banner1 from "../img/banner/banner1.jpg";
import Banner2 from "../img/banner/banner2.jpg";

function Home() {
  return (
    <>
      <MainBanner />
      <BestSellers />
      <Banner
        title="Decorate and live harmoniously"
        text="Our products are all made to standard sizes so that you can mix and match them freely."
        img={Banner1}
      />
      <TrendingSlider />
      <BannerReverse
        title="Comfortable & Elegante Living"
        text="Our products are all made to standard sizes so that you can mix and match them freely."
        img={Banner2}
      />
      <Newsletter />
      <Footer />
    </>
  );
}

export default Home;
