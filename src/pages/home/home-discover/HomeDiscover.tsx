import { useMemo } from "react";
import WineItems from "../../../components/layout/wine-items/WineItems";
import Button from "../../../components/ui/button/Button";
import Line from "../../../components/ui/line/Line";
import getSpecialWines from "../../../utils/getSpecialWines";
import styles from "./home-discover.module.css";

const HomeDiscover = () => {

    const specialWines = useMemo(getSpecialWines, []);
    const fewSpecialWines = specialWines.slice(0, 4);

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <Line 
                    width="3rem"
                    height="1px"
                    color="var(--clr-beige-400)"
                    center
                    marginBlockEnd="2.5rem"
                />

                <h2 className={styles.header}>Discover <br />Special Wines</h2>

                {
                    fewSpecialWines.length > 0 
                    ?
                    <>
                        <div className={styles.items_wrapper}>
                            <WineItems wineItems={fewSpecialWines} />
                        </div>

                        <Button 
                            text="All Special Wines"
                            textColor="var(--clr-beige-700)"
                            backgroundColor="transparent"
                            hoverTextColor="var(--clr-white"
                            hoverBgColor="var(--clr-beige-700)"
                            borderWidth="1px"
                            borderStyle="solid"
                            borderColor="var(--clr-beige-700)"
                        />
                    </>
                    :
                        <p className={styles.message}>
                            Oops... Our wine got sold really quickly! 
                            Waiting for new supplies...
                        </p>
                }
            </div>
        </section>
    )
}

export default HomeDiscover;