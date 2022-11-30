import { useEffect } from "react";
import { ANALYTICS_MEASUREMENT_ID } from "./pages/analytics";
import { Home } from "./pages/Home/Home";
import ReactGA from "react-ga4";

function App() {
  useEffect(() => {
    ReactGA.initialize(ANALYTICS_MEASUREMENT_ID);
    ReactGA.send("pageview");
  }, []);

  return <Home />;
}

export default App;
