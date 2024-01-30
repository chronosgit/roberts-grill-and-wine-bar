import HomeHero from "./home-hero/HomeHero";
import styles from "./home.module.css";

const Home = () => {
    return (
        <div className={styles.home}>
            <HomeHero maxWidth="md" center />
        </div>
    )
}

export default Home;