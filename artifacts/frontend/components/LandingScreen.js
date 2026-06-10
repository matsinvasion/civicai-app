export default function LandingScreen({ onSelectAgency }) {
  const agencies = [
    {
      id: "URSB",
      name: "URSB",
      fullName: "Uganda Registration Services Bureau",
      luganda: "Kwandikisa Bizinesi",
      description: "Business registration & company search",
      icon: "🏢",
      color: "#1B4332",
    },
    {
      id: "URA",
      name: "URA",
      fullName: "Uganda Revenue Authority",
      luganda: "Musolo",
      description: "Tax, TIN registration & tax filing",
      icon: "🧾",
      color: "#1A3A5C",
    },
    {
      id: "KCCA",
      name: "KCCA",
      fullName: "Kampala Capital City Authority",
      luganda: "Gavumenti ya Kampala",
      description: "Trading licences & city permits",
      icon: "🏙️",
      color: "#3B1F5E",
    },
    {
      id: "NSSF",
      name: "NSSF",
      fullName: "National Social Security Fund",
      luganda: "Savings zo za Emikolo",
      description: "Social security & retirement savings",
      icon: "🛡️",
      color: "#7A2020",
    },
    {
      id: "MoIA",
      name: "MoIA",
      fullName: "Ministry of Internal Affairs",
      luganda: "Gavumenti y'Embeera ez'Omunda",
      description: "Passports, national IDs & visas",
      icon: "🪪",
      color: "#4A3000",
    },
  ];

  return (
    <div style={styles.container}>
      {/* Header */}
      <div style={styles.header}>
        <div style={styles.logoRow}>
          <span style={styles.logoIcon}>🇺🇬</span>
          <h1 style={styles.appName}>CivicAI Uganda</h1>
        </div>
        <p style={styles.tagline}>Your guide to government services</p>
        <p style={styles.taglineLuganda}>Omuyambi wo mu bifo bya gavumenti</p>
      </div>

      {/* Prompt */}
      <div style={styles.promptSection}>
        <p style={styles.promptText}>Select a service to get started</p>
        <p style={styles.promptLuganda}>Londa essimu gy'oyagala obwereze</p>
      </div>

      {/* Agency Buttons */}
      <div style={styles.agencyGrid}>
        {agencies.map((agency) => (
          <button
            key={agency.id}
            style={{
              ...styles.agencyCard,
              borderLeft: `4px solid ${agency.color}`,
            }}
            onClick={() => onSelectAgency(agency)}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "translateY(-2px)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.transform = "translateY(0)")
            }
          >
            <div style={styles.cardTop}>
              <span style={styles.agencyIcon}>{agency.icon}</span>
              <div>
                <div style={styles.agencyName}>{agency.name}</div>
                <div style={styles.agencyFullName}>{agency.fullName}</div>
              </div>
            </div>
            <div style={styles.agencyDescription}>{agency.description}</div>
            <div style={styles.agencyLuganda}>{agency.luganda}</div>
          </button>
        ))}
      </div>

      {/* Footer */}
      <div style={styles.footer}>
        <p style={styles.footerText}>
          ℹ️ CivicAI provides guidance based on publicly available government
          information. Always verify with the relevant agency before taking
          action.
        </p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    backgroundColor: "#F8F9FA",
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    padding: "0 0 40px 0",
  },
  header: {
    backgroundColor: "#000000",
    color: "#FFFFFF",
    padding: "40px 24px 32px",
    textAlign: "center",
  },
  logoRow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "12px",
    marginBottom: "12px",
  },
  logoIcon: {
    fontSize: "32px",
  },
  appName: {
    fontSize: "28px",
    fontWeight: "700",
    margin: 0,
    letterSpacing: "-0.5px",
  },
  tagline: {
    fontSize: "16px",
    color: "#CCCCCC",
    margin: "0 0 4px 0",
  },
  taglineLuganda: {
    fontSize: "13px",
    color: "#888888",
    margin: 0,
    fontStyle: "italic",
  },
  promptSection: {
    textAlign: "center",
    padding: "28px 24px 8px",
  },
  promptText: {
    fontSize: "17px",
    fontWeight: "600",
    color: "#111111",
    margin: "0 0 4px 0",
  },
  promptLuganda: {
    fontSize: "13px",
    color: "#666666",
    margin: 0,
    fontStyle: "italic",
  },
  agencyGrid: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    padding: "16px 24px",
    maxWidth: "600px",
    margin: "0 auto",
  },
  agencyCard: {
    backgroundColor: "#FFFFFF",
    border: "1px solid #E5E7EB",
    borderRadius: "12px",
    padding: "16px 18px",
    cursor: "pointer",
    textAlign: "left",
    transition: "transform 0.15s ease, box-shadow 0.15s ease",
    boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
  },
  cardTop: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    marginBottom: "8px",
  },
  agencyIcon: {
    fontSize: "28px",
  },
  agencyName: {
    fontSize: "16px",
    fontWeight: "700",
    color: "#111111",
  },
  agencyFullName: {
    fontSize: "12px",
    color: "#666666",
    marginTop: "1px",
  },
  agencyDescription: {
    fontSize: "13px",
    color: "#444444",
    marginBottom: "4px",
  },
  agencyLuganda: {
    fontSize: "11px",
    color: "#888888",
    fontStyle: "italic",
  },
  footer: {
    maxWidth: "600px",
    margin: "8px auto 0",
    padding: "0 24px",
  },
  footerText: {
    fontSize: "11px",
    color: "#888888",
    textAlign: "center",
    lineHeight: "1.6",
  },
};
