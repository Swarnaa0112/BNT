import "./App.css";
import ClockApp from "./component/ClockApp";
import NetworkStatus from "./component/NetworkStatus";
import UsersList from "./component/UsersList";
import ScrollTracker from "./component/ScrollTracker";
import WindowSize from "./component/WindowSize";


function App() {
  return (
    <>
      <ClockApp />
      <UsersList />
      <NetworkStatus />
      <ScrollTracker />
      <WindowSize />
    </>
  );
}

export default App;
