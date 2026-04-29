import Header from '../components/Header';
import wechatQR from '../assets/wechat.png';

function Contact() {
  return (
    <div>
      <Header />

      <div style={{
        padding: '60px 20px',
        textAlign: 'center'
      }}>
        <h1>Contact Us</h1>
        <p>We are ready to support your automation needs</p>

        {/* Contact Info Box */}
        <div style={{
          maxWidth: '600px',
          margin: '40px auto',
          background: 'white',
          padding: '30px',
          borderRadius: '10px',
          boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
          textAlign: 'left'
        }}>
          <h3>Company Information</h3>

          <p>
            <strong>Company Name:</strong><br />
            Dongguan Haoyue Intelligent Technology Co., Ltd.
          </p>

          <p style={{ marginTop: '10px' }}>
            <strong>Address:</strong><br />
            <span style={{ color: '#38bdf8', fontWeight: '500' }}>
              No.227, Lane 3, Xintou Village,<br />
              Tangxia Town, Dongguan City,<br />
              Guangdong Province, China
            </span>
          </p>

          <p>
            <strong>Email:</strong><br />
            <a 
              href="mailto:1805017901@qq.com" 
              style={{ color: '#38bdf8', textDecoration: 'none' }}
            >
              1805017901@qq.com
            </a>
          </p>
        </div>

        {/* WeChat Section (NOW OUTSIDE) */}
        <div style={{ marginTop: '40px' }}>
          <h3>Connect on WeChat</h3>

          <img
            src={wechatQR}
            alt="WeChat QR"
            style={{ width: '200px', marginTop: '10px' }}
          />

          <p style={{ marginTop: '10px' }}>
            Scan QR to contact us directly on WeChat
          </p>

          <p>
            WeChat ID: <strong>FA-ODM</strong>
          </p>
        </div>

      </div>
    </div>
  );
}

export default Contact;