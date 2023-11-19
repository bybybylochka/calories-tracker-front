import styles from './App.module.scss';
import {BrowserRouter} from "react-router-dom";
import Header from "./components/header/Header";

const App = () => {
  return (
      <BrowserRouter>
        <div className={styles.wrapper}>
          <Header/>
        </div>
      </BrowserRouter>
      );
}

export default App;
