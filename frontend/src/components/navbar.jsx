import { Link } from "react-router-dom";

function Navbar() {
  const styles = {
    nav: {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      backgroundColor: "white",
      padding: "1rem 2rem",
      borderBottom: "1px solid #ddd",
      zIndex: 1000, // stays on top of other elements
    },
    container: {
      maxWidth: "1200px",
      margin: "0 auto",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "wrap",
    },
    logo: {
      display: "flex",
      alignItems: "center",
      gap: "0.5rem",
      fontWeight: "bold",
      fontSize: "1.2rem",
    },
    icon: {
      fontSize: "1.3rem",
    },
    title: {
      color: "red",
    },
    navList: {
      listStyle: "none",
      display: "flex",
      gap: "1.5rem",
      margin: 0,
      padding: 0,
    },
    link: {
      color: "#000",
      textDecoration: "none",
      fontSize: "1rem",
    },
  };

  return (
    <nav style={styles.nav}>
      <div style={styles.container}>
        {/* Logo and Title */}
        <div style={styles.logo}>
            <Link to="/" style={{ textDecoration: "none" }}>
          <span style={styles.icon}></span>
          <span style={styles.title}>Digital Patient Portal</span>
          </Link>
        </div>

        {/* Navigation Links */}
        <ul style={styles.navList}>
          <li><Link to="/" style={styles.link}>Home</Link></li>
          <li><Link to="/register" style={styles.link}>Register</Link></li>
          <li><Link to="/book" style={styles.link}>Book Test</Link></li>
          <li><Link to="/download" style={styles.link}>Download Report</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
