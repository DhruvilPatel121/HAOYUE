import Layout from '../components/Layout';
import j30img from '../assets/servo/servo1.jpeg'; // use your image

function J30() {
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

      {/* MAIN SECTION */}
      <div style={{
        display: 'flex',
        padding: '40px',
        gap: '40px',
        flexWrap: 'wrap'
      }}>

        {/* LEFT IMAGE */}
        <div style={{ flex: '1', minWidth: '300px', textAlign: 'center' }}>
          <img 
            src={j30img} 
            alt="J30 Servo"
            style={{ width: '300px' }}
          />
        </div>

        {/* RIGHT DETAILS */}
        <div style={{ flex: '1', minWidth: '300px' }}>

          <h2>J30 Series Servo Drives</h2>

          <div style={line}></div>

          <p><strong>Release date:</strong> 2025-08-01</p>
          <div style={line}></div>

          <p><strong>Page views:</strong> 572</p>
          <div style={line}></div>

          <p><strong>Product Type:</strong> Servo Driver</p>
          <div style={line}></div>

          <p><strong>Product options:</strong> Pulse type, EtherCAT bus type</p>
          <div style={line}></div>

          <p><strong>Product Price:</strong> ₹480</p>

          {/* BUTTON */}
          <button style={{
            marginTop: '20px',
            padding: '12px 25px',
            background: '#e63946',
            color: 'white',
            border: 'none',
            cursor: 'pointer',
            fontSize: '16px'
          }}>
            Inquire Now
          </button>

        </div>
      </div>

      {/* PRODUCT DETAILS */}
      <div style={{ padding: '40px' }}>
        <h3>Product Details</h3>

        <ul>
          <li>High precision motion control</li>
          <li>Supports EtherCAT communication</li>
          <li>Compact design</li>
          <li>Easy integration with PLC & CNC</li>
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

export default J30;