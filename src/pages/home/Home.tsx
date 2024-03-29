import HomeHero from "./home-hero/HomeHero";
import History from "../../components/layout/history/History";
import HomeMenus from "./home-menus/HomeMenus";
import HomeDiscover from "./home-discover/HomeDiscover";
import Order from "../../components/layout/order/Order";
import PhotoGallery from "../../components/layout/photo-gallery/PhotoGallery";
import styles from "./home.module.css";
import Explore from "../../components/layout/explore/Explore";

const Home = () => {

    const homeHistoryData = {
        header: "History",
        title: "175 Years Of Service",
        textIntro: 
            `Lorem ipsum dolor sit amet, 
            consectetur adipisicing elit, 
            sed do eiusmod tempor incididunt 
            ut labore et dolore magna aliqua.`,
        textMain: 
            `Nemo enim ipsam voluptatem quia voluptas sit 
            aspernatur aut odit aut fugit, sed quia consequuntur 
            magni dolores eos qui ratione voluptatem sequi 
            nesciunt. Neque porro quisquam est, qui dolorem 
            ipsum quia dolor sit amet, consectetur, adipisci 
            velit, sed quia non numquam eius modi 
            tempora incidunt ut labore.`,
        btnText: "More About Us",
    }

    return (
        <div className={styles.home}>
            <HomeHero />

            <History data={homeHistoryData} />
            
            <HomeMenus />

            <HomeDiscover />

            <Order />

            <PhotoGallery />

            <Explore />
        </div>
    )
}

export default Home;