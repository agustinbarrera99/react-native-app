import { StatusBar } from "expo-status-bar";
import { Navigator } from "./src/navigation/navigator";
import store from "./src/app/store";
import { Provider } from "react-redux";

export default function App() {
  return (
    <>
      <Provider store={store}>
        <Navigator />
      </Provider>
      <StatusBar style="auto" />
    </>
  );
}
