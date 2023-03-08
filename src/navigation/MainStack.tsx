import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import {
    Home,
    MonitorFoodOrWeight,
    TankDetails,
    SensorDetails,
    TanksList
} from '../screens/Main';
import SCREEN_NAMES from "./screenNames";
import { WithHeader } from "../components";

const Stack = createNativeStackNavigator();
const MainStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} >
            <Stack.Screen name={SCREEN_NAMES.Home} component={WithHeader({ WrappedComponent: Home, headerTitle: "المزارع" })} />
            <Stack.Screen name={SCREEN_NAMES.TankData} component={WithHeader({ WrappedComponent: TankDetails, headerTitle: "تفاصيل الخزان", withNavigation: true })} />
            <Stack.Screen name={SCREEN_NAMES.MonitorFoodOrWeight} component={MonitorFoodOrWeight} />
            <Stack.Screen name={SCREEN_NAMES.SensorDetails} component={WithHeader({ WrappedComponent: SensorDetails, headerTitle: "تفاصيل مستشعر الخزان", withNavigation: true })} />
            <Stack.Screen name={SCREEN_NAMES.TanksList} component={WithHeader({ WrappedComponent: TanksList, headerTitle: "الخزانات", withNavigation: true })} />
        </Stack.Navigator>
    )
}
export default MainStack