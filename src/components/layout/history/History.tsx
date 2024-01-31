import { FC } from "react";
import Button from "../../ui/button/Button";
import Line from "../../ui/line/Line";
import IHistoryData from "../../../interfaces/IHistoryData";
import styles from "./history.module.css";

interface Props {
    data: IHistoryData,
}

const History: FC<Props> = ({data}) => {
    
    const {header, title, textIntro, textMain, btnText} = data;

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.title}>{header}</h2>

                <p className={styles.date}>{title}</p>

                <Line
                    width="3.5rem"
                    height="2px"
                    color="var(--clr-white"
                    center
                    marginBlock="2.5rem"
                />

                <p className={styles.text_intro}>{textIntro}</p>

                <p className={styles.text_main}>{textMain}</p>

                <Button 
                    text={btnText}
                    textColor="var(--clr-black)" 
                    backgroundColor="var(--clr-white)"
                    hoverTextColor="var(--clr-white)"
                    hoverBgColor="var(--clr-black)"
                />
            </div>
        </section>
    )
}

export default History;