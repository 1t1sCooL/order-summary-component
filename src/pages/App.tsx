import styles from './App.module.css'

function App() {


  return (
    <section className={styles.container}>
        <div className={styles.img}>
            <img src='/illustration-hero.svg' alt={'illustration'} />
        </div>
        <div className={styles.containerWrap}>
            <h2 className={styles.header}>Order Summary</h2>
            <p className={styles.description}>
                You can now listen to millions of songs, audiobooks, and podcasts on any
                device anywhere you like!
            </p>
            <div className={styles.priceWrap}>
                <div className={styles.tarif}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48"><g fill="none" fill-rule="evenodd"><circle cx="24" cy="24" r="24" fill="#DFE6FB"/><path fill="#717FA6" fill-rule="nonzero" d="M32.574 15.198a.81.81 0 00-.646-.19L20.581 16.63a.81.81 0 00-.696.803V26.934a3.232 3.232 0 00-1.632-.44A3.257 3.257 0 0015 29.747 3.257 3.257 0 0018.253 33a3.257 3.257 0 003.253-3.253v-8.37l9.726-1.39v5.327a3.232 3.232 0 00-1.631-.441 3.257 3.257 0 00-3.254 3.253 3.257 3.257 0 003.254 3.253 3.257 3.257 0 003.253-3.253V15.81a.81.81 0 00-.28-.613z"/></g>
                    </svg>
                    <div className={styles.price}>
                        <span className={styles.plan}>Annual Plan</span>
                        <span className={styles.tarif_price}>$59.99/year</span>
                    </div>
                </div>
                <a href={'#'} className={styles.link}>Change</a>
            </div>
            <button className={styles.payment}>Proceed to Payment</button>
            <button className={styles.cancel}>Cancel Order</button>
        </div>
    </section>
  )
}

export default App
