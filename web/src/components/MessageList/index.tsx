import styles from './styles.module.scss'

import logoImg from '../../assets/logo.svg'

export function MessageList() {
    return (
        <div className={styles.messageListWrapper}>
            <img src={logoImg} alt="DoWhile 2021" />
            <ul className={styles.messageList}>

                <li className={styles.message}>
                    <p className={styles.messageContent}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non error reiciendis, veritatis illum expedita reprehenderit neque doloremque et magnam omnis corrupti tempore ea optio. Beatae exercitationem inventore quisquam dolorum voluptates!</p>
                    <div className={styles.messageUser}>
                        <div className={styles.userImage}>
                            <img src="https://github.com/tarcnux.png" alt="Tarcísio Nunes" />
                        </div>
                        <span>Tarcnux</span>
                    </div>
                </li>

                <li className={styles.message}>
                    <p className={styles.messageContent}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non error reiciendis, veritatis illum expedita reprehenderit neque doloremque et magnam omnis corrupti tempore ea optio. Beatae exercitationem inventore quisquam dolorum voluptates!</p>
                    <div className={styles.messageUser}>
                        <div className={styles.userImage}>
                            <img src="https://github.com/tarcnux.png" alt="Tarcísio Nunes" />
                        </div>
                        <span>Tarcnux</span>
                    </div>
                </li>

                <li className={styles.message}>
                    <p className={styles.messageContent}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non error reiciendis, veritatis illum expedita reprehenderit neque doloremque et magnam omnis corrupti tempore ea optio. Beatae exercitationem inventore quisquam dolorum voluptates!</p>
                    <div className={styles.messageUser}>
                        <div className={styles.userImage}>
                            <img src="https://github.com/tarcnux.png" alt="Tarcísio Nunes" />
                        </div>
                        <span>Tarcnux</span>
                    </div>
                </li>
            </ul>
        </div>

    )
}