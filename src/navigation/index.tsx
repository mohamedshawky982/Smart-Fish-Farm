import React from "react";
import AuthStack from "./AuthStack";
import { NavigationContainer } from '@react-navigation/native';
import MainStack from './MainStack';
const Route = () => {
    const userAuthenticated = true
    return (
        <NavigationContainer>
            {
                userAuthenticated ?
                    <MainStack />
                    :
                    <AuthStack />
            }
        </NavigationContainer>
    )
}

export default Route