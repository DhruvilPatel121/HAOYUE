import Layout from '../components/Layout';
import j10img from '../assets/servo/servo2.jpeg'; // your J10 image

function J10() {
  return (
    <Layout>

      {/* TOP BANNER */}
      <div style={{
        background: 'linear-gradient(to right, #0f4c5c, #1b6b7a)',
        color: 'white',
        padding: '40px'
      }}>
        <h2>Servo Driver</h2>
        <p>Service creates value, existence shapes the future.</p>
      </div>

      {/* MAIN */}
      <div style={{
        display: 'flex',
        padding: '40px',
        gap: '40px',
        flexWrap: 'wrap'
      }}>

        {/* IMAGE */}
        <div style={{ flex: '1', minWidth: '300px', textAlign: 'center' }}>
          <img src={j10img} alt="J10 Servo" style={{ width: '300px' }} />
        </div>

        {/* DETAILS */}
        <div style={{ flex: '1', minWidth: '300px' }}>

          <h2>J10 Series Servo Drives</h2>

          <div style={line}></div>

          <p><strong>Release date:</strong> 2025-08-01</p>
          <div style={line}></div>

          <p><strong>Page views:</strong> 420</p>
          <div style={line}></div>

          <p><strong>Product Type:</strong> Servo Driver</p>
          <div style={line}></div>

          <p><strong>Product options:</strong> Pulse type</p>
          <div style={line}></div>

          <p><strong>Product Price:</strong> ₹320</p>

          <button style={btn}>
            Inquire Now
          </button>

        </div>
      </div>

      {/* DETAILS */}
      <div style={{ padding: '40px' }}>
        <h3>Product Details</h3>
        <ul>
          <li>Compact and cost-effective servo</li>
          <li>Stable performance</li>
          <li>Easy installation</li>
        </ul>
      </div>

    </Layout>
  );
}

const line = {
  height: '1px',
  background: '#ddd',
  margin: '10px 0'
};

const btn = {
  marginTop: '20px',
  padding: '12px 25px',
  background: '#e63946',
  color: 'white',
  border: 'none',
  cursor: 'pointer'
};

export default J10;