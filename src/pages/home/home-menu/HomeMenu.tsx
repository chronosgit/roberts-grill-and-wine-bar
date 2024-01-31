import { FC } from "react";
import Button from "../../../components/ui/button/Button";
import Line from "../../../components/ui/line/Line";
import IHomeMenu from "../../../interfaces/IHomeMenu";
import styles from "./home-menu.module.css";

interface Props {
    menu: IHomeMenu,
}

const HomeMenu: FC<Props> = ({menu}) => {
    const {title, descr, btnText, bgUrl, btnOptions} = menu;
    const {btnTextColor, btnBgColor, btnHoverTextColor, btnHoverBgColor} = btnOptions;

    const backgroundImageStyle = {
        background: `url(${bgUrl})`
    }

    return (
        <div className={styles.menu} style={backgroundImageStyle}>
            <div className={styles.darken_wrapper}>
                <h2 className={styles.title}>{title}</h2>

                <Line
                    width="3rem"
                    height="2px"
                    color="var(--clr-white"
                    center
                    marginBlock="1rem"
                />

                <p className={styles.descr}>{descr}</p>

                <Button 
                    text={btnText}
                    textColor={btnTextColor} 
                    backgroundColor={btnBgColor} 
                    hoverTextColor={btnHoverTextColor} 
                    hoverBgColor={btnHoverBgColor} 
                />
            </div>
        </div>
    )
}

export default HomeMenu;