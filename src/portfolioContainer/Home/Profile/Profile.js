// import React from "react";
// import Typical from "react-typical";
// import "./Porfile.css";

// function Porfile() {
//   return (
//     <div className="profile-container">
//       <div className="profile-parent">
//         <div className="colz">
//           <div className="colz-icon">
//             <a href="https://github.com/shima1364">
//               <i className="bi bi-github"></i>
//             </a>
//             <a href="#">
//               <i className="bi bi-telegram"></i>
//             </a>
//           </div>
//         </div>
//         <div className="profile-details-name">
//           <span className="primary-text">
//             {" "}
//             Hello, I'M <span className="highlighted-text">Shima</span>
//           </span>
//         </div>
//         <div className="profile-details-role">
//           <span className="primary-text">
//             {""}
//             <h1>
//               {" "}
//               <Typical
//                 loop={Infinity}
//                 steps={[
//                   "Enthusiastic Dev",
//                   1000,
//                   "Full Stack Developer",
//                   1000,
//                   "Mern stack Developer",
//                   1000,
//                   "React Developer",
//                   1000,
//                 ]}
//               />
//             </h1>
//             <span className="profile-role-tagline">
//               building application with front and back end
//             </span>
//           </span>
//         </div>

//         <div className="profile-option">
//           <a
//             href="#"
//             //  download={}
//           >
//             <button className="btn highlighted-btn">Resume</button>
//           </a>
//         </div>
//         <div className="profile-picture">
//           <div className="profile-picture-background"></div>
//         </div>
//       </div>
//     </div>
//   );

// }

// export default Porfile;
import React from "react";
import Typical from "react-typical";
import "./Profile.css";

function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="colz">
          <div className="colz-icon">
            <a href="https://github.com/shima1364">
              <i className="bi bi-github"></i>
            </a>
            <a href="#">
              <i className="bi bi-telegram"></i>
            </a>
          </div>
        </div>
        <div className="profile-details-name">
          <span className="primary-text">
            Hello, I'M <span className="highlighted-text">Shima</span>
          </span>
        </div>
        <div className="profile-details-role">
          <span className="primary-text">
            <h1>
              <Typical
                loop={Infinity}
                steps={[
                  "Enthusiastic Dev",
                  1000,
                  "Full Stack Developer",
                  1000,
                  "Mern stack Developer",
                  1000,
                  "React Developer",
                  1000,
                ]}
              />
            </h1>
            <span className="profile-role-tagline">
              building application with front and back end
            </span>
          </span>
        </div>

        <div className="profile-option">
          <a href="#">
            <button className="btn highlighted-btn">Resume</button>
          </a>
        </div>
      </div>
      <div className="profile-picture">
        <div className="profile-picture-background"></div>
      </div>
    </div>
  );
}

export default Profile;
