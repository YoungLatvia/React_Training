import React from "react";
import ReactDOM from "react-dom";
import logo from "./download.png";
import "./index.css";
import Header from "./Header";
import MainContent from "./MainContent";
import Footer from "./Footer";

// function Challange1() {
//   return (
//     <div>
//       <h1>Hello,everyone!</h1>
//       <ul>
//         <li>
//           <p>line 1</p>
//         </li>
//         <li>
//           <p>line 2</p>
//         </li>
//         <li>
//           <p>line 3</p>
//         </li>
//       </ul>
//     </div>
//   );
// } init

// function Navbar() {
//   return (
//     <nav>
//       <h1>Romans Web Page</h1>
//       <ul>
//         <li>Pricing</li>
//         <li>About</li>
//         <li>Contact</li>
//       </ul>
//     </nav>
//   );
// }

// const page = (
//   <div>
//     <img className="react-logo" src={logo} />
//       <h1>Fun facts about react</h1>
//       <ul>
//           <li>Was first released in 2013</li>
//           <li>Was originally created by Jordan Walke</li>
//           <li>Has well over 100k stars on GitHub</li>
//           <li>Is maintained by Facebook</li>
//           <li>Powers thousands of enterprise apps, including mobile apps</li>
//       </ul>
//   </div>
// )
// console.log(page);






function Page() {
  return (
    <>
      <Header />
      <MainContent />
      <Footer />
    </>
  );
}
ReactDOM.render(<Page />, document.getElementById("root"));
