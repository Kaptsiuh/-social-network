import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import {
  Dialogs,
  DialogsDataPropsType,
  MessagesDataPropsType,
} from "./components/Dialogs/Dialogs";
import { Header } from "./components/Header/Header";
import { Navbar } from "./components/Navbar/Navbar";
import { Profile } from "./components/Profile/Profile";
import { News } from "./components/News/News";
import { Music } from "./components/Music/Music";
import { Settings } from "./components/Settings/Settings";
import { MyPostsPropsType } from "./components/Profile/MyPosts/MyPosts";

function App(props: {
  postsData: MyPostsPropsType[];
  dialogsData: DialogsDataPropsType[];
  messagesData: MessagesDataPropsType[];
}) {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Route
            path={"/profile"}
            render={() => <Profile postsData={props.postsData} />}
          />
          <Route
            path={"/dialogs"}
            render={() => (
              <Dialogs
                dialogsData={props.dialogsData}
                messagesData={props.messagesData}
              />
            )}
          />
          <Route path={"/news"} render={() => <News />} />
          <Route path={"/music"} render={() => <Music />} />
          <Route path={"/settings"} render={() => <Settings />} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
