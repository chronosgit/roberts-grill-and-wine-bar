import HomeHero from "./home-hero/HomeHero";
import HomeHistory from "./home-history/HomeHistory";
import styles from "./home.module.css";

const Home = () => {
    return (
        <div className={styles.home}>
            <HomeHero />

            <HomeHistory />
        </div>
    )
}

export default Home;