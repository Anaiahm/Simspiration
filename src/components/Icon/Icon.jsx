import Cheats from "../../assets/images/CheatsLogo.png";
import Tips from "../../assets/images/TipsLogo.png";
import Build from "../../assets/images/BuildLogo.png";
import Game from "../../assets/images/GameLogo.png";
import Recycle from "../../assets/images/Recycle.png";
import Trash from "../../assets/images/Trash.png";
import Create from "../../assets/images/Create.png"
import Profile from "../../assets/images/Profile.png"
import Calendar from "../../assets/images/Calendar.png"
import SignupIcon from '../../assets/images/signup.png';
import LoginIcon from '../../assets/images/SignIn.png';



const Icon = ({ category }) => {
    const icons = {
     Cheats: Cheats,
      Tips: Tips,
      "Build Challenges" : Build ,
      "GamePlay Challenges" : Game,
      Edit: Recycle,
      Trash: Trash,
      Create: Create,
      "ProfileIcon" : Profile,
      "Calendar" : Calendar,
      SignupIcon : SignupIcon,
      LoginIcon : LoginIcon,
    };
  
    return (
      <img
        src={icons[category]}
        alt={`A ${category} icon.`}
        id={category.toLowerCase()}
        className="icon"
      />
    );
  };
  
  export default Icon;
  