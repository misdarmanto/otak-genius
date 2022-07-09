import Home from "./screens/Home";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Game from "./screens/Game";
import { GrayColor } from "./global/Color";
import { LogBox } from "react-native";
import _ from "lodash";
import { ContextApi } from "./functions/Context";
import { useState } from "react";
import Headerstyle from "./components/Header";

LogBox.ignoreLogs([
  "Non-serializable values were found in the navigation state",
]);
const _console = _.clone(console);
console.warn = (message) => {
  if (message.indexOf("Setting a timer") <= -1) {
    _console.warn(message);
  }
};

const Stack = createNativeStackNavigator();

export default function App() {
  const [gameLevel, setGameLevel] = useState(1);
  const [gameLevelArray, setGameLevelArray] = useState([]);
  const [useSound, setUseSound] = useState(true);
  const [showModal, setShowModal] = useState(false);
 
  return (
    <ContextApi.Provider
      value={{
        gameLevel,
        setGameLevel,
        useSound,
        setUseSound,
        gameLevelArray,
        setGameLevelArray,
        setShowModal,
        showModal
      }}
    >
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              headerTitle: (props) => <Headerstyle {...props} />,
            }}
          />
          <Stack.Screen
            name="Game"
            component={Game}
            options={{ title: "", headerShown: false }}
          />
         
        </Stack.Navigator>
      </NavigationContainer>
    </ContextApi.Provider>
  );
}
