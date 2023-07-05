import "./Home.css";

const Home = () => {
  return (
    <header className="AppHeader">
      <div className="HeaderBox">
        <text className="HeaderText">
          Codewars Challenge Tracker: Level up your coding skills!
        </text>
      </div>
      <div className="ContentBox">
        <p className="ContentText">
          Welcome to the Codewars Challenge Tracker, where you can search, save,
          and conquer coding challenges to sharpen your programming abilities.
          Whether you're a beginner or a seasoned developer, this platform is
          designed to help you enhance your problem-solving skills and level up
          your coding game.
        </p>
        <p className="ContentText">
          With our intuitive search feature, you can easily find a wide range of
          challenges across various programming languages and difficulty levels.
          From algorithms and data structures to web development and more, we've
          got challenges to suit every interest and skill level.
        </p>
        <p className="ContentText">
          Powered by React and backed by AWS, our platform ensures a seamless
          user experience and secure data management. Your challenge progress
          and personal information are protected with state-of-the-art security
          measures, so you can focus on what matters most: honing your coding
          skills.
        </p>
        <p className="ContentText">
          Are you ready to embark on a coding adventure? Start exploring our
          challenges, earn points, and showcase your coding prowess. Join the
          Codewars Challenge Tracker community today and take your coding skills
          to new heights!
        </p>
      </div>
    </header>
  );
};

export default Home;
