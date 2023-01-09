import { Feedback } from "./Feedback";
import "../scss/feedback.scss";
import "../scss/home.scss";
import { Home } from "./Home";
export const Layout = () => {
  return (
    <div className="layout">
      <Feedback />
      <Home />
    </div>
  );
};
