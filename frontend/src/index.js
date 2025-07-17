import "./index.css";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App.js";
import { BrowserRouter } from "react-router-dom";
import { SigninContextProvider } from "./context/Shared/SigninContext/SigninContext.jsx";
import { SignupContextProvider } from "./context/Shared/SignupContext/SignupContext.jsx";
import { NavigationContextProvider } from "./context/Shared/NavigationContext/Navigation.jsx";
// import { SignupContextProvider } from "./context/SignupContext/SignupContext.jsx";
// import { SigninContextProvider } from "./context/SigninContext/SigninContext.jsx";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <SignupContextProvider>
      <SigninContextProvider>
        <NavigationContextProvider>
          <App />
        </NavigationContextProvider>
      </SigninContextProvider>
    </SignupContextProvider>
  </BrowserRouter>
);
