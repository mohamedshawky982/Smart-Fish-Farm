import React from "react"
import {
    LineChart
} from "react-native-chart-kit";
import { Dimensions } from "react-native"
import { themes } from "../../utils";
const { width, height } = Dimensions.get("window")
const SensorLineChart = () => {
    return (
        <LineChart
            data={{
                labels: ["January", "February", "March", "April", "May", "June"],
                datasets: [
                    {
                        data: [
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100
                        ]
                    }
                ]
            }}
            width={Dimensions.get("window").width - 50} // from react-native
            height={220}
            yAxisLabel="$"
            yAxisSuffix="k"
            yAxisInterval={1} // optional, defaults to 1
            chartConfig={{
                backgroundColor: themes.primaryColor,
                backgroundGradientFrom: themes.primaryColor,
                backgroundGradientTo: themes.black,
                decimalPlaces: 2, // optional, defaults to 2dp
                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                style: {
                    borderRadius: 16
                },
                propsForDots: {
                    r: "6",
                    strokeWidth: "2",
                    stroke: "#ffa726"
                }
            }}
            bezier
            style={{
                marginVertical: 8,
                borderRadius: 16,
                alignSelf:"center"
            }}
        />
    )
}
export default SensorLineChart