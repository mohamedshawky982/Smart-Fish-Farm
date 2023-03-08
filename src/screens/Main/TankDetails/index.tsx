import React from "react";
import {
    SensorDataCard,
    ScreenContainerWithPadding,
    AppFlatList,
    ListItem,
    WhiteSpace
} from "../../../components";
import { View } from "react-native";
import SCREEN_NAMES from '../../../navigation/screenNames';
import { useNavigation } from '@react-navigation/native';

const TankDetails = () => {
    const navigation = useNavigation()
    return (
        <>
            <ScreenContainerWithPadding>
                <View style={{ flex: 2.5, }}>
                    <AppFlatList
                        data={[1, 2, 3, 4]}
                        itemComponent={SensorDataCard}
                        numColumns={2}
                        columnWrapperStyle={{ flexDirection: 'row-reverse' }}
                    />
                </View>
                <View style={{ flex: 3.5 }}>
                    <ListItem item={{ name: "متابعه الغذاء" }}
                        onPress={() =>
                            navigation.navigate(SCREEN_NAMES.MonitorFoodOrWeight, {
                                screenTitle: "متابعه الغذاء"
                            })} />
                    <WhiteSpace variant={0.5} />
                    <ListItem item={{ name: "متابعه الوزن" }} onPress={() =>
                        navigation.navigate(SCREEN_NAMES.MonitorFoodOrWeight, {
                            screenTitle: "متابعه الوزن"
                        })} />
                </View>
            </ScreenContainerWithPadding>
        </>
    )
}

export default TankDetails