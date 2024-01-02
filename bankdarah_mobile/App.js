
import React, { useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login, Registrasi, Lupapassword, Onboard, Home } from "./src";
import { PermissionsAndroid } from 'react-native'


const Stack = createNativeStackNavigator();

function App() {

    useEffect(() => {
        requestCameraPermission()
    }, [])
    
    const requestCameraPermission = async () => {
        try {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.CAMERA,
            {
              title: "App Camera Permission",
              message:"App needs access to your camera ",
              buttonNeutral: "Ask Me Later",
              buttonNegative: "Cancel",
              buttonPositive: "OK"
            }
          );
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            console.log("Camera permission given");
          } else {
            console.log("Camera permission denied");
          }
        } catch (err) {
          console.warn(err);
        }
      };




    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{ headerShown: false }}
            >
                <Stack.Screen name="Onboard" component={Onboard} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Registrasi" component={Registrasi} />
                <Stack.Screen name="Lupapassword" component={Lupapassword} />
                <Stack.Screen name="Home" component={Home} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;