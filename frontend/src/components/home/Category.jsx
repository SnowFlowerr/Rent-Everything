import React from 'react'
import styles from './Home.module.css'

export default function Category() {
    let a='https://cdn.prod.website-files.com/6390e14cc734a931f8327343/679c741cfd2f81997c15fb20_Featured-image.jpg';
    const categories = [
        { title: "Electronics", image: a },
        { title: "Vehicles", image: a },
        { title: "Home Appliances", image: a },
        { title: "Plumber", image: a },
        { title: "Electrician", image: a },
        { title: "Carpenter", image: a },
        { title: "Caretaker", image: a },
        { title: "Carpenter", image: a },
    ];
    return (
        <div>
            <section className={styles.section}>
                <h2>Popular Categories</h2>
                <div className={styles.grid}>
                    {categories.map((cat, index) => (
                        <div key={index} className={styles.card}>
                            <img src={cat.image} alt={cat.title} />
                            <div className={styles.overlay}>
                                <h3>{cat.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}