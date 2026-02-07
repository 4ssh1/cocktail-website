import { FaXTwitter, FaLinkedinIn, FaMedium } from "react-icons/fa6";

function Contact() {
    const styles = {
        container: {
            padding: '80px 20px',
            textAlign: 'center',
            fontFamily: '"Playfair Display", serif',
            color: 'white',
        },
        heading: {
            fontSize: '3rem',
            fontWeight: '900',
            marginBottom: '10px',
        },
        subtext: {
            fontSize: '1rem',
            color: '#888',
            maxWidth: '600px',
            margin: '0 auto 50px auto',
            lineHeight: '1.6',
        },
        grid: {
            display: 'flex',
            justifyContent: 'center',
            gap: '60px',
            flexWrap: 'wrap',
        },
        card: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            minWidth: '200px',
        },
        iconWrapper: {
            marginBottom: '20px',
            color: '#333',
        },
        label: {
            fontSize: '0.9rem',
            letterSpacing: '2px',
            fontWeight: '700',
            color: '#666',
            margin: '10px 0',
            textTransform: 'uppercase',
        },
        value: {
            fontSize: '1rem',
            color: '#333',
            textDecoration: 'none',
            transition: 'opacity 0.2s',
        }
    };
    const contactData = [
        {
            icon: <FaXTwitter size={32} strokeWidth={1.5} />,
            label: "X (TWITTER)",
            value: "@just_sarah",
            link: "https://x.com/just_sarah"
        },
        {
            icon: <FaLinkedinIn size={32} strokeWidth={1.5} />,
            label: "LINKEDIN",
            value: "Sarah Nzeshi",
        },
        {
            icon: <FaMedium size={32} strokeWidth={1.5} />,
            label: "MEDIUM",
            value: "medium.com/@sarahnzeshi05",
        }
    ];
    return (
        <footer id="contact" className="relative w-full h-screen">
            <div className="w-full h-full relative">
                <img src="/hero-left-leaf.png" alt="left-leaf" className="absolute -top-16 w-1/5 left-0" />
                <img src="/hero-right-leaf.png" alt="right-leaf" className="absolute -bottom-16 w-1/5 right-0" />

                <div style={styles.container as React.CSSProperties} >
                    <h1 style={styles.heading}>Contact Us</h1>
                    <p style={styles.subtext}>
                        Reach out via our social channels or professional platforms.
                        We are active and ready to collaborate.
                    </p>

                    <div style={styles.grid as React.CSSProperties}>
                        {contactData.map((item, index) => (
                            <div key={index} style={styles.card as React.CSSProperties  }>
                                <div style={styles.iconWrapper}>{item.icon}</div>
                                <h3 style={styles.label as React.CSSProperties}>{item.label}</h3>
                                <a href={item.link} style={styles.value as React.CSSProperties} target="_blank" rel="noreferrer">
                                    {item.value}
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </footer >
    )
}

export default Contact