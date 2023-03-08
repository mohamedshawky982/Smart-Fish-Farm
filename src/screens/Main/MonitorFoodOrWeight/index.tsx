import React, { useState } from "react";
import {
    AddMonitoringModal,
    AppFlatList,
    AppHeader,
    ListItem,
    ScreenContainerWithPadding,
    AppPlusButton
} from "../../../components";
import { useNavigation } from '@react-navigation/native';
const data = [
    { name: "اليوم الاول", weight: 10 },
    { name: "اليوم الثاني", weight: 10 },
    { name: "اليوم الثالث", weight: 10 },

]
const MonitorFoodOrWeight = ({ route }: { route: any }) => {
    const { screenTitle } = route?.params || {}
    const navigation = useNavigation()
    const [showMonitoringModal, setShowMonitoringModal] = useState(false)
    return (
        <>
            <AppHeader title={screenTitle} navigation={navigation} />
            <ScreenContainerWithPadding>
                <AppFlatList
                    data={data}
                    itemComponent={ListItem}
                    componentType="monitorWeightOrFood"
                />
            </ScreenContainerWithPadding>
            <AppPlusButton onPress={() => setShowMonitoringModal(true)} />
            <AddMonitoringModal
                visible={showMonitoringModal}
                onRequestClose={() => setShowMonitoringModal(false)}
                screenTitle={screenTitle}
            />
        </>
    )
}

export default MonitorFoodOrWeight