import { Switch, Route } from "react-router-dom";

// components
import StreamCreate from './components/streams/stream-create.component';
import StreamDelete from './components/streams/stream-delete.component';
import StreamEdit from './components/streams/stream-edit.component';
import StreamList from './components/streams/stream-list.component';
import StreamShow from './components/streams/stream-show.component';
import Header from "./components/header/header.component";

const App = () => {
  return (
    <div className="ui container">
      <Header />
      <Switch>
        <Route path="/" exact component={StreamList} />
        <Route path="/streams/create" exact component={StreamCreate} />
        <Route path="/streams/delete/:id" exact component={StreamDelete} />
        <Route path="/streams/edit/:id" exact component={StreamEdit} />
        <Route path="/streams/show" exact component={StreamShow} />
      </Switch>
    </div>
  );
}

export default App;
