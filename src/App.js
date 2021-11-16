import "./App.css";
import { useTranslation } from "react-i18next";
import Header from "./Header";

function App() {
  const { t } = useTranslation();
  const userName = "sophie";
  
  return (
    <div className="App">
      <Header/>
      <div>{t("Component.test", "Default value of your translation key")}</div>
      <div>{t("Component.welcome", "Hello {{user}}", {user: userName})}</div>
    </div>
  );
}

export default App;
