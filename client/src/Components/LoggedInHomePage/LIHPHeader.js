import { useHistory } from 'react-router-dom';
import { useUser } from '../UserContext/UserContext';
import './LoggedInHomePage.css'

function LIHPHeader() {
    const { logout } = useUser();
    const history = useHistory();

    const signOut = () => {
        logout(history);
    };

    function refreshPage() {
        window.location.reload(false);
      }

    return (
      <div className="Header-Main-Box">
          <div className="Title-Box">
              <p>NorthArk Investment Bank 💵</p> 
              <p className="User-Name-Text">Welcome to your account UserName!</p>
          </div>
          <div className="Sign-Out-Ref-Button-Box">
              <button className="Sign-Out-Button" onClick={signOut}>Sign Out</button>
              <button className="Refresh-Button" onClick={refreshPage}>Refresh</button>
          </div>
      </div>
    );
  }
  
  export default LIHPHeader;
  