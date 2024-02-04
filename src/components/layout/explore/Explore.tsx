import ExploreItems from "./explore-items/ExploreItems";
import locations from "../../../db/locations";
import styles from "./explore.module.css";

const Explore = () => {

    const locationsToShow = locations.slice(0, 5);

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.title}>Explore Our<br />Outlets</h2>

                <p className={styles.descr}>
                    Lorem ipsum dolor sit amet, 
                    consectetur adipisicing elit, 
                    sed do eiusmod tempor incididunt ut labore
                </p>
            </div>

            <ExploreItems items={locationsToShow} />
        </section>
    )
}

export default Explore;