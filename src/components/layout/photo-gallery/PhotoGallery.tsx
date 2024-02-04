import { Link } from "react-router-dom";
import Line from "../../ui/line/Line";
import styles from "./photo-gallery.module.css";

const PhotoGallery = () => {



    return (
        <section className={styles.gallery}>
            <img 
                src="../../../../public/images/gallery/photo-1.jpg"
                alt="Party"
                className={styles.first}
            />

            <div className={styles.main}>
                <Line
                    width="3rem"
                    height="2px"
                    color="var(--clr-white)"
                />

                <p className={styles.title}>Photo Gallery</p>

                <Link to="#" className={styles.btn}>
                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="16px" height="16px" viewBox="0 0 16 16" version="1.1">
                        <g id="surface1">
                            <path
                                d="M 12.152344 7.484375 L 4.878906 0.214844 C 4.59375 -0.0703125 4.132812 -0.0703125 3.847656 0.214844 C 3.566406 0.496094 3.566406 0.957031 3.847656 1.242188 L 10.609375 8 L 3.847656 14.757812 C 3.566406 15.042969 3.566406 15.503906 3.847656 15.785156 C 3.992188 15.929688 4.175781 16 4.363281 16 C 4.550781 16 4.734375 15.929688 4.878906 15.785156 L 12.152344 8.515625 C 12.285156 8.378906 12.363281 8.191406 12.363281 8 C 12.363281 7.808594 12.285156 7.621094 12.152344 7.484375 Z M 12.152344 7.484375 "
                            />
                        </g>
                    </svg>
                </Link>
            </div>

            <img 
                src="../../../../public/images/gallery/photo-2.jpg"
                alt="Food"
                className={styles.second}
            />

            <img 
                src="../../../../public/images/gallery/photo-3.jpg"
                alt="Food"
                className={styles.third}
            />

            <img 
                src="../../../../public/images/gallery/photo-4.jpg"
                alt="Alcohol"
                className={styles.fourth}
            />

            <img 
                src="../../../../public/images/gallery/photo-5.jpg"
                alt="Food"
                className={styles.fifth}
            />
        </section>
    )
}

export default PhotoGallery;