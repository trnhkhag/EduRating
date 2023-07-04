import Background from '../../images/background.jpg';
import '../../styles/home.css';
import schoolIcon from '../../images/schools.png';
import professorIcon from '../../images/professors.png';
import departmentIcon from '../../images/departments.png';

function Home() {
  return (
    <div>
      <div className='slider-container'>
        <img className='background-img' src={Background} alt='background'/>
      </div>
      <div className='container'>
        <div className='block'>
          <img src={schoolIcon} alt='schools'/><br/>
          <a href='/schools'>Schools</a>
        </div>
        <div className='block'>
        <img src={professorIcon} alt='professors'/><br/>
          <a href='/professors'>Professorss</a>
        </div>
        <div className='block'>
        <img src={departmentIcon} alt='departments'/><br/>
          <a href='/departments'>Departments</a>
        </div>
      </div>
    </div>
  );
}

export default Home;