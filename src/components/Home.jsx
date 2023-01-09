import { useSelector } from "react-redux";

export const Home = () => {
  const subscriber = useSelector((state) => state.feedback.feedbackData);
  const re = /[\s)(-]/gi;
  return (
    <div className="feedback-block">
      <span className="title">Users</span>
      {subscriber
        ? subscriber.map((sub, index) => (
            <div className="user" key={index}>
              <span className="name-user">Name: {sub.name}</span>
              <span className="phone-user">
                Phone: {sub.phone.replace(re, "")}
              </span>
              <span>Message: {sub.message}</span>
            </div>
          ))
        : null}
    </div>
  );
};
