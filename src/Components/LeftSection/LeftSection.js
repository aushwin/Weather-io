import styles from './LeftSection.module.css'
import Highlight from "./Highlight";
const LeftSection = ()=>{
    return <div className={styles.wrapper}>
        <div className={styles.logo}>weather io</div>
        <div><Highlight/></div>
    </div>
}

export default LeftSection