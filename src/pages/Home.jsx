import Header from '../components/Header';
import { useState, useEffect } from 'react';
import leftImage from '../assets/leftfix.jpeg';

// Load HERO images
const heroImages = Object.values(
  import.meta.glob('../assets/hero/*.{jpeg,jpg,png}', { eager: true })
).map(m => m.default);

// Load SERVO images
const servoImages = Object.values(
  import.meta.glob('../assets/servo/*.{jpeg,jpg,png}', { eager: true })
).map(m => m.default);

function Home() {

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (heroImages.length === 0) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <Header />

      {/* HERO SECTION */}
      <div style={{
        display: 'flex',
        height: '80vh'
      }}>

        {/* LEFT SIDE */}
        <div style={{
          width: '50%',
          position: 'relative',
          color: 'white',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          padding: '20px',
          backgroundImage: `url(${leftImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}>

          {/* Overlay */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'rgba(0,0,0,0.5)'
          }}></div>

          {/* CONTENT */}
          <div style={{ position: 'relative', zIndex: 1 }}>

            <h1 style={{ fontSize: '48px', lineHeight: '1.3' }}>
              Advanced Motion <br />
              Control Solutions
            </h1>

            <p style={{ fontSize: '20px', marginTop: '10px' }}>
              Servo Systems | Motion Controller | CNC Controllers
            </p>

            <button style={{
              marginTop: '20px',
              padding: '12px 25px',
              background: 'orange',
              border: 'none',
              fontSize: '16px',
              cursor: 'pointer'
            }}>
              Get Quote
            </button>

          </div>
        </div>

        {/* RIGHT SIDE (SLIDER) */}
        <div style={{
          width: '50%',
          backgroundImage: `url(${heroImages[current]})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transition: 'background-image 1s ease-in-out'
        }}>
        </div>

      </div>

      {/* PRODUCTS */}
      <div style={{
        padding: '60px 20px',
        background: '#f5f5f5'
      }}>
        <h2 style={{ textAlign: 'center', fontSize: '32px' }}>
          Our Products
        </h2>

        <div style={{
          display: 'flex',
          overflowX: 'auto',
          gap: '20px',
          marginTop: '30px',
          padding: '10px'
        }}>

          {/* SERVO */}
          <div style={{
            minWidth: '300px',
            background: 'white',
            borderRadius: '10px',
            boxShadow: '0 5px 15px rgba(0,0,0,0.1)'
          }}>
            <div style={{
              display: 'flex',
              overflowX: 'auto',
              scrollSnapType: 'x mandatory'
            }}>
              {servoImages.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  style={{
                    width: '100%',
                    minWidth: '100%',
                    height: '220px',
                    objectFit: 'cover',
                    scrollSnapAlign: 'start'
                  }}
                />
              ))}
            </div>

            <div style={{ padding: '15px' }}>
              <h3>Servo Systems</h3>
              <p>High precision motion control</p>
            </div>
          </div>

          {/* PLC */}
          <div style={{
            minWidth: '250px',
            background: 'white',
            borderRadius: '10px',
            boxShadow: '0 5px 15px rgba(0,0,0,0.1)'
          }}>
            <div style={{ height: '220px', background: '#ddd' }}></div>
            <div style={{ padding: '15px' }}>
              <h3>PLC & Controllers</h3>
              <p>Reliable industrial automation</p>
            </div>
          </div>

          {/* CNC */}
          <div style={{
            minWidth: '250px',
            background: 'white',
            borderRadius: '10px',
            boxShadow: '0 5px 15px rgba(0,0,0,0.1)'
          }}>
            <div style={{ height: '220px', background: '#ddd' }}></div>
            <div style={{ padding: '15px' }}>
              <h3>CNC Solutions</h3>
              <p>Advanced multi-axis control</p>
            </div>
          </div>

        </div>
      </div>

      {/* FOOTER */}
      <div style={{
        background: '#0a1f44',
        color: 'white',
        padding: '30px',
        textAlign: 'center'
      }}>
        <h3>Contact Us</h3>
        <p>Dongguan Haoyue Intelligent Technology Co., Ltd.</p>
        <p>
          No.227, Lane 3, Xintou Village,<br />
          Tangxia Town, Dongguan City,<br />
          Guangdong Province, China
        </p>
      </div>

    </div>
  );
}

export default Home;