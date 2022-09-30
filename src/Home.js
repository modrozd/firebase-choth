import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h1>HOME PAGE</h1>
        <p>
          <Link to="/login">Log In</Link> or <Link to="/signup">Sign Up</Link> 
        </p>
    </>
  );
};

export default Home;