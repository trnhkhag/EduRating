import Header from '../components/Header/header';

function DefaultLayout({ children }) {
  return ( 
    <div>
      <Header/>
      <div className='content'>
        {children}
      </div>
    </div>
  );
}

export default DefaultLayout;