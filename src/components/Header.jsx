import { NavLink } from 'react-router-dom';
import { useState } from 'react';

function Header() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div style={{
      background: '#0a1f44',
      color: 'white',
      padding: '15px 40px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}>
      <h2>Dongguan Haoyue Intelligent Technology Co., Ltd.</h2>

      <div style={{ display: 'flex', alignItems: 'center' }}>

        <NavLink to="/" style={{ margin: '0 15px', color: 'white' }}>
          Home
        </NavLink>

        {/* PRODUCTS */}
        <div
          onMouseEnter={() => setShowMenu(true)}
          onMouseLeave={() => setShowMenu(false)}
          style={{ position: 'relative', margin: '0 15px' }}
        >
          <span style={{ cursor: 'pointer' }}>Products ▾</span>

          {showMenu && (
            <div style={{
              position: 'absolute',
              top: '100%',
              left: 0,
              background: 'white',
              color: 'black',
              borderRadius: '5px',
              boxShadow: '0 5px 15px rgba(0,0,0,0.2)'
            }}>
              <NavLink to="/j30" style={itemStyle}>J30 Servo</NavLink>
              <NavLink to="/j10" style={itemStyle}>J10 Servo</NavLink>
              <NavLink to="/m1" style={itemStyle}>M1 Motors</NavLink>
            </div>
          )}
        </div>

        <NavLink to="/contact" style={{ margin: '0 15px', color: 'white' }}>
          Contact
        </NavLink>

      </div>
    </div>
  );
}

const itemStyle = {
  display: 'block',
  padding: '10px 20px',
  textDecoration: 'none',
  color: 'black'
};

export default Header;