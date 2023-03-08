import React from "react";
import {
    AppFlatList,
    ExpandableView,
    ScreenContainerWithPadding,
    SensorLineChart,
    WhiteSpace,
    ListItem
} from "../../../components";
const data = [{ name: "day 1", sensorData: 212 }, { name: "day 2", sensorData: 224 }, { name: "day 3", sensorData: 432 }]
const SensorDetails = () => {
    return (
        <>
            <ScreenContainerWithPadding>
                <WhiteSpace variant={1} />
                <ExpandableView />
                <WhiteSpace variant={2} />
                <SensorLineChart />

                <AppFlatList
                    data={data}
                    itemComponent={ListItem}
                    componentType="showSensorNumber"
                />
            </ScreenContainerWithPadding>

        </>
    )
}

export default SensorDetails