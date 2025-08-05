import React from "react";

function Home() {
  const styles = {
    page: {
      display: "flex",
      flexDirection: "column",
      minHeight: "100vh",
      fontFamily: "'Segoe UI', sans-serif",
      paddingTop: "80px", // 
    },
    content: {
      flex: 1,
    },
    hero: {
      backgroundColor: "#f1f1f1",
      padding: "3rem",
      textAlign: "center",
    },
    heading: {
      fontSize: "2rem",
      marginBottom: "1rem",
    },
    subText: {
      fontSize: "1.1rem",
      marginBottom: "1.5rem",
      color: "#444",
    },
    button: {
      backgroundColor: "black",
      color: "white",
      padding: "0.75rem 1.5rem",
      textDecoration: "none",
      fontWeight: "bold",
      borderRadius: "4px",
      display: "inline-block",
    },
    services: {
      padding: "2rem 1rem",
      backgroundColor: "#fafafa",
    },
    servicesTitle: {
      textAlign: "center",
      marginBottom: "2rem",
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
      gap: "1.5rem",
      padding: "0 2rem",
    },
    card: {
      backgroundColor: "white",
      padding: "1.5rem",
      boxShadow: "0 4px 8px rgba(0,0,0,0.05)",
      borderRadius: "6px",
    },
    footer: {
      backgroundColor: "#111",
      color: "white",
      padding: "1rem 2rem",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "wrap",
    },
    footerLink: {
      color: "white",
      marginLeft: "1rem",
      textDecoration: "none",
      fontSize: "0.9rem",
    },
  };

  return (
    <div style={styles.page}>
      <div style={styles.content}>
        {/* Hero Section */}
        <header style={styles.hero}>
          <h1 style={styles.heading}>Welcome to Your Health Portal</h1>
          <p style={styles.subText}>
            Access your health records, book tests, and download reports all in one place.
          </p>
          <a href="/register" style={styles.button}>Register Now</a>
        </header>

        {/* Services Section */}
        <section style={styles.services}>
          <h2 style={styles.servicesTitle}>Our Services</h2>
          <div style={styles.grid}>
            <div style={styles.card}>
              <h3>Comprehensive Health Check-ups</h3>
              <p>Regular check-ups to monitor your health and catch any issues early.</p>
            </div>
            <div style={styles.card}>
              <h3>Specialized Testing</h3>
              <p>Advanced tests for specific conditions, ensuring accurate diagnoses.</p>
            </div>
            <div style={styles.card}>
              <h3>Personalized Health Plans</h3>
              <p>Customized health plans tailored to your specific needs and goals.</p>
            </div>
            <div style={styles.card}>
              <h3>24/7 Online Support</h3>
              <p>Our team is available around the clock to assist you with any queries.</p>
            </div>
          </div>
        </section>
      </div>

      {/* Sticky Footer */}
      <footer style={styles.footer}>
        <p>© 2025 Digital Patient Portal</p>
        <div>
          <a href="#" style={styles.footerLink}>Privacy Policy</a>
          <a href="#" style={styles.footerLink}>Terms of Service</a>
          <a href="#" style={styles.footerLink}>Contact Us</a>
        </div>
      </footer>
    </div>
  );
}

export default Home;
