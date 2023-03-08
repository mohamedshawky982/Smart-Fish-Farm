import { createNativeStackNavigator } from "@react-navigation/native-stack"
import SCREEN_NAMES from "./screenNames"
import { Login, PhoneNumberEntry, SignUp, WelcomeScreen,NewPassword } from "../screens/Auth"
const Stack = createNativeStackNavigator()
const AuthStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}  >
            <Stack.Screen name={SCREEN_NAMES.welcomeScreen} component={WelcomeScreen} />
            <Stack.Screen name={SCREEN_NAMES.Login} component={Login} />
            <Stack.Screen name={SCREEN_NAMES.SignUp} component={SignUp} />
            <Stack.Screen name={SCREEN_NAMES.PhoneNumberEntry} component={PhoneNumberEntry} />
            <Stack.Screen name={SCREEN_NAMES.NewPassword} component={NewPassword} />

        </Stack.Navigator>
    )
}

export default AuthStack