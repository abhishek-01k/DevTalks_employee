import styles from "./navbar.module.css";
import classNames from "classnames";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className={classNames(styles.navbar,"px-8 py-4 ")}>
      <div className={classNames(styles.navContainer,"flex items-center")}>
        <span className={styles.logo}>Dev Talks</span>
        <div className='flex flex-1 items-center ml-10'>
        <p
          className={classNames(styles.navDiv,styles.activeNav)}>
            <Link to='/team'>Our Team</Link>
          </p>
          <p className={styles.navDiv}>

            Podcasts
            
            </p>
          <p className={styles.navDiv}>
            Resources
            <span><ArrowDropDownIcon /></span>
            </p>
        </div>
        <div className={styles.navItems}>
          <button className={classNames(styles.navButton,styles.registerBtn,'mr-4')}>SignUp</button>
          <button className={styles.navButton}>Login</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar