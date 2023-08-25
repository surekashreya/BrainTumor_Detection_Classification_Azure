// import React, { useState } from 'react';
// import axios from 'axios';
// import { faCommentAlt, faTimes } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import "./chatbot.css";

// function Chatbot() {
//     const [showChat, setShowChat] = useState(false);

//     const toggleChat = () => {
//       setShowChat(!showChat);
//     };

// return (
//     <button
//           className={`chat-button ${showChat ? "active" : ""}`}
//           onClick={toggleChat}
//         >
//           {showChat ? (
//             <FontAwesomeIcon icon={faTimes} className="chat-icon" />
//           ) : (
//             <FontAwesomeIcon icon={faCommentAlt} className="chat-icon" />
//           )};
//         </button>
//         {showChat && (
//           <div className="chat-overlay">
//             // {/* <button className="close-button" onClick={toggleChat}>
//             //   Close
//             // </button> */}
//             <iframe
//               className="chat-iframe"
//               width="350"
//               height="430"
//               allow="microphone; geolocation;"
//               src="https://widget.kommunicate.io/chat?appId=1837531277ae9f0e2cb57420325e7f70a"
//             ></iframe>
//           </div>
//         )}
//     );
//   }

// export default Chatbot;

import React, { useState } from 'react';
import axios from 'axios';
import { faCommentAlt, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./chatbot.css";

function Chatbot() {
  const [showChat, setShowChat] = useState(false);

  const toggleChat = () => {
    setShowChat(!showChat);
  };

  return (
    <React.Fragment>
      <button
        className={`chat-button ${showChat ? "active" : ""}`}
        onClick={toggleChat}
      >
        {showChat ? (
          <FontAwesomeIcon icon={faTimes} className="chat-icon" />
        ) : (
          <FontAwesomeIcon icon={faCommentAlt} className="chat-icon" />
        )}
      </button>
      {showChat && (
        <div className="chat-overlay">
          <iframe
            className="chat-iframe"
            width="350"
            height="430"
            allow="microphone; geolocation;"
            src="https://widget.kommunicate.io/chat?appId=1837531277ae9f0e2cb57420325e7f70a"
          ></iframe>
        </div>
      )}
    </React.Fragment>
  );
  
}

export default Chatbot;
