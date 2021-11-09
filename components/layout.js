import styles from './layout.module.css'

function Layout({ children }) {
    return <div className={styles.overlay}>{children}</div>
}

export default Layout;