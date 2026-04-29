import Header from './Header';

function Layout({ children }) {
  return (
    <div>
      <Header />

      {/* Page Content */}
      {children}

      {/* Footer */}
      <div style={{
        background: '#0a1f44',
        color: 'white',
        padding: '30px',
        textAlign: 'center',
        marginTop: '40px'
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

export default Layout;