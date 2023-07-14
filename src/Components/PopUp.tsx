

import './PopUp.css';


// eslint-disable-next-line @typescript-eslint/ban-types
type Props = {};



const PopUp: React.FC<Props> = () => {



  return (

    <>



<div id="overlay">
    <div id="popup">
      <a href="#close_popup" id="close-button">X</a>
      <h3>Popup</h3>
      <p>This is a Popup which was created only with CSS.</p>
    </div>
  </div>



    </>



  );
};




export default PopUp
