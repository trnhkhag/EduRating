import '../../../../styles/header.css';

function Header() {
  return (
    <header>
      <h1 className="brand">EduRating</h1>
      <div>
        <input type="text" name="search" placeholder="Search Schools And Professors"></input>
      </div>
      <div>
        <button>Login</button>
        <button>Sign Up</button>
      </div>
    </header>
  );
}

export default Header;