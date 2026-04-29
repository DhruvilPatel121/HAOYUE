import Layout from '../components/Layout';
import m1img from '../assets/servo/servo7.jpeg'; // your motor image

function M1() {
  return (
    <Layout>

      {/* TOP BANNER */}
      <div style={{
        background: 'linear-gradient(to right, #0f4c5c, #1b6b7a)',
        color: 'white',
        padding: '40px'
      }}>
        <h2>Servo Motor</h2>
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
            src={m1img} 
            alt="M1 Motor"
            style={{ width: '350px' }}
          />
        </div>

        {/* RIGHT DETAILS */}
        <div style={{ flex: '1', minWidth: '300px' }}>

          <h2>SM1 Series Servo Motors</h2>

          <div style={line}></div>

          <p><strong>Release date:</strong> 2025-09-24</p>
          <div style={line}></div>

          <p><strong>Page views:</strong> 313</p>
          <div style={line}></div>

          <p><strong>Product Type:</strong> Servo Motor</p>
          <div style={line}></div>

          <p><strong>Product color:</strong> Standard Industrial</p>
          <div style={line}></div>

          <p><strong>Product Price:</strong> ₹2999</p>

          {/* BUTTON */}
          <button style={btn}>
            Inquire Now
          </button>

        </div>
      </div>

      {/* PRODUCT DETAILS */}
      <div style={{ padding: '40px' }}>
        <h3>Product Details</h3>

        <ul>
          <li>High torque servo motor</li>
          <li>Stable performance for CNC & automation</li>
          <li>Multiple frame sizes available</li>
          <li>17bits 23bits option Available With magnetic and optical encoder</li>
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
  cursor: 'pointer',
  fontSize: '16px'
};

export default M1;