import HomeHero from "./home-hero/HomeHero";
import HomeHistory from "./home-history/HomeHistory";
import HomeMenus from "./home-menus/HomeMenus";
import styles from "./home.module.css";

const Home = () => {

    return (
        <div className={styles.home}>
            <HomeHero />

            <HomeHistory />
            
            <HomeMenus />
        </div>
    )
}

export default Home;