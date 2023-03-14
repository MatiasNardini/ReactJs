import styles from "./navbar.module.scss"

const NavBar = ({icono}) => {
  return (
    <div className={styles.container}>
        <a href="">Home</a>
        <a href="">About</a>
        <a href="">Contact</a>
        <img src={icono} alt="" width="40" height="40"/>
        <p>7</p>
    </div>
  )
}
 

export default NavBar