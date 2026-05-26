import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'

const Privacidade = () => (
  <>
    <Navbar />
    <main>
      <section className="section">
        <div className="container">
          <h1 style={{ marginBottom: '1.5rem' }}>Privacy Policy</h1>
          <p style={{ marginBottom: '1rem', color: '#FFFFFF' }}>Symeia ("we") operates an automated customer service platform via Instagram for clinics and businesses.</p>

          <h2 style={{ marginTop: '2rem', marginBottom: '0.75rem' }}>Data we collect</h2>
          <p style={{ marginBottom: '1rem', color: '#FFFFFF' }}>When you send us a direct message on Instagram, we collect the message content and your Instagram user identifier to process and respond to your request.</p>

          <h2 style={{ marginTop: '2rem', marginBottom: '0.75rem' }}>How we use your data</h2>
          <p style={{ marginBottom: '1rem', color: '#FFFFFF' }}>We use your messages exclusively to respond to your inquiries automatically. We do not store your data beyond what is necessary to process the conversation.</p>

          <h2 style={{ marginTop: '2rem', marginBottom: '0.75rem' }}>Data sharing</h2>
          <p style={{ marginBottom: '1rem', color: '#FFFFFF' }}>We do not sell, rent, or share your data with third parties.</p>

          <h2 style={{ marginTop: '2rem', marginBottom: '0.75rem' }}>Data retention</h2>
          <p style={{ marginBottom: '1rem', color: '#FFFFFF' }}>Conversation data is kept only for as long as necessary to respond to your message.</p>

          <h2 style={{ marginTop: '2rem', marginBottom: '0.75rem' }}>Contact</h2>
          <p style={{ marginBottom: '1rem', color: '#FFFFFF' }}>If you have any questions about this policy, please contact us at: <a href="mailto:oi@symeia.com" style={{ color: '#FFFFFF', textDecoration: 'underline' }}>oi@symeia.com</a></p>

          <p style={{ marginTop: '2rem', color: '#FFFFFF', opacity: 0.8 }}>Last updated: May 2026</p>
        </div>
      </section>
    </main>
    <Footer />
  </>
)

export default Privacidade
