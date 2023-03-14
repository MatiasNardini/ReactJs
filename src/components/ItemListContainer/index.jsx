import styles from "./itemlistcontainer.module.scss"
const ItemlistContainer = ({greeting}) => {
  return (
    <div className={styles.itemlistt}><p>{greeting}</p></div>
  )
}

export default ItemlistContainer