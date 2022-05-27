import styles from "./navbar.module.css"

const Navbar = (props) => {

    return (
        <div className={styles.NavBar} >
            <h1>Abandoned Cabin Escape Room</h1>
            {props.submitted && <p>Welcome {props.name}</p>}
        </div>
    )
}

export default Navbar