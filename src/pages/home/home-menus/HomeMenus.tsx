import HomeMenu from "../home-menu/HomeMenu";
import IHomeMenu from "../../../interfaces/IHomeMenu";
import styles from "./home-menus.module.css";

const HomeMenus = () => {

    const barMenu: IHomeMenu = {
        id: 1,
        title: "Bar Menu",
        descr: "Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor",
        btnText: "View our wines",
        bgUrl: "../../../../public/images/home/home-menu-1.jpg",
        btnOptions: {
            btnTextColor: "var(--clr-white)",
            btnBgColor: "var(--clr-beige-700)",
            btnHoverTextColor: "var(--clr-black)",
            btnHoverBgColor: "var(--clr-white)",
        },
    };

    const foodMenu: IHomeMenu = {   
        id: 2,
        title: "Food Menu",
        descr: "Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor",
        btnText: "View our food",
        bgUrl: "../../../../public/images/home/home-menu-2.jpg",
        btnOptions: {
            btnTextColor: "var(--clr-black)",
            btnBgColor: "var(--clr-white)",
            btnHoverTextColor: "var(--clr-white)",
            btnHoverBgColor: "var(--clr-beige-700)",
        },
    };

    return (
        <section className={styles.menus}>
            <HomeMenu menu={barMenu} />

            <HomeMenu menu={foodMenu} />
        </section>
    )
}

export default HomeMenus;