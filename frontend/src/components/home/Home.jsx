import React, { useState } from "react";
import styles from "./Home.module.css";
import Category from "./Category";


const Home = () => {
    const [search, setSearch] = useState("");
    const suggestions = [
        "Camera",
        "Bike",
        "Car",
        "Plumber",
        "Laptop",
        "Electrician",
        "AC Repair"
    ];

    const filteredSuggestions = suggestions.filter(item =>
        item.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className={styles.container}>
            {/* HERO */}
            <section className={styles.hero}>
                <h1>Rent Anything. Hire Anyone.</h1>
                <p>Electronics • Vehicles • Services • Appliances</p>

                <div className={styles.searchBox}>
                    <div className={styles.searchInput}>
                        <input
                            type="text"
                            placeholder="What do you want to rent?"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                        <button className={styles.searchBtn}>Search</button>
                    </div>

                    {search && (
                        <div className={styles.suggestions}>
                            {filteredSuggestions.map((item, index) => (
                                <div key={index} className={styles.suggestionItem}>
                                    {item}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </section>

            {/* CATEGORIES */}
            <Category />

            {/* HOW IT WORKS */}
            <section className={styles.howSection}>
                <h2>How It Works</h2>
                <div className={styles.steps}>
                    <div className={styles.step}>
                        <span>🔍</span>
                        <h3>Search</h3>
                        <p>Find items or services near you.</p>
                    </div>
                    <div className={styles.step}>
                        <span>📅</span>
                        <h3>Book</h3>
                        <p>Select dates & pay securely.</p>
                    </div>
                    <div className={styles.step}>
                        <span>🚀</span>
                        <h3>Enjoy</h3>
                        <p>Use item or get service done.</p>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className={styles.cta}>
                <h2>Turn Your Items Into Income</h2>
                <p>List your items or services and start earning today.</p>
                <button className={styles.primaryBtnLarge}>
                    Become a Vendor
                </button>
            </section>

            {/* FOOTER */}
            <footer className={styles.footer}>
                <p>© 2026 RentEverything. All rights reserved.</p>
            </footer>

        </div>
    );
};

export default Home;