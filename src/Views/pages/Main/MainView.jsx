import styles from './MainView.module.css';

const MainView = () => {
    return(
        <div className={styles.container}>
        <header className={styles.header}>
            <h1>Автоматизована система навчання</h1>
            <p>Ми створили платформу, яка дозволяє автоматизувати процеси навчання та оцінювання студентів.</p>
        </header>

        <section className={styles.features}>
            <h2>Наші можливості:</h2>
            <ul>
                <li>Легке керування журналами оцінок</li>
                <li>Миттєва перевірка успішності студентів</li>
                <li>Інтерфейс для викладачів і студентів</li>
                <li>Можливість створення та редагування навчальних курсів</li>
            </ul>
        </section>

        <section className={styles.contact}>
            <h2>Як з нами зв'язатися:</h2>
            <p>Залиште ваші контакти, і ми зв'яжемося з вами!</p>
            <button className={styles.contactButton}>Зв'язатися</button>
        </section>
    </div>
    )
}

export default MainView