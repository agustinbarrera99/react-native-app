import { StatusBar } from "expo-status-bar";
import MainNavigator from "./src/navigation/MainNavigator";
import { store } from "./src/app/store"
import { Provider } from "react-redux";
import { init } from "./src/db";


    init()

export default function App() {
  return (
    <>
      <Provider store={store}>
        <MainNavigator />
      </Provider>
      <StatusBar style="auto" />
    </>
  );
}
