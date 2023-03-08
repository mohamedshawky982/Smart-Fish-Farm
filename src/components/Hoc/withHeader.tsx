import React from "react";
import AppHeader from "../General/Header";
import { useNavigation } from '@react-navigation/native';

const WithHeader = (
    {
        WrappedComponent,
        headerTitle,
        withNavigation
    }: {
        WrappedComponent: any,
        headerTitle: string,
        withNavigation?: boolean
    }) => {
    const navigation = useNavigation();
    return () => (
        <>
            <AppHeader navigation={ withNavigation  ? navigation : null} title={headerTitle} />
            <WrappedComponent />
        </>

    )
}
export default WithHeader