import "./Account.css";
import "@aws-amplify/ui-react/styles.css";
import { Auth } from "aws-amplify";

const Account = () => {
  const handleSignOut = async () => {
    try {
      await Auth.signOut();
    } catch (error) {
      console.log("Error signing out:", error);
    }
  };

  return (
    <header className="AppHeader">
      <div className="HeaderBox">
        <text className="HeaderText">Log into ur account to save data</text>
      </div>

      <button onClick={() => handleSignOut()}>Sign Out</button>
    </header>
  );
};

export default Account;
