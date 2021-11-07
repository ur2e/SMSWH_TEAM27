import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "./views/HomePage";
import LoginPage from "./views/LoginPage";
import StorePage from "./views/StorePage";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import auth from "./hoc/auth";
import login from "./hoc/login";
import MyPage from "./views/MyPage";
import LandingPage from "./views/LandingPage";

//in-folder component

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={auth(HomePage, null)} />
          <Route exact path="/check" component={login()} />
          <Route exact path="/login" component={LandingPage} />
          <Route exact path="/store" component={auth(StorePage, null)} />
          <Route exact path="/mypage" component={auth(MyPage, null)} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
