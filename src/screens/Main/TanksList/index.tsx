import React from "react";
import { AppFlatList, AppPlusButton, ScreenContainerWithPadding, WhiteSpace } from "../../../components";
import { TanksListItem } from "../../../components";
const TanksList = () => {
    return (
        <>
            <ScreenContainerWithPadding>
                <WhiteSpace variant={1} />
                <AppFlatList
                    data={[{
                        name: "الحراره", sensors: {
                            sensorOne:
                                { name: "الحراره", },
                            sensorTwo: { name: "الاكسجين" },
                            sensorThree: { name: "تلوث المياه" },
                            sensorFour: { name: "الامونيا" },

                        },
                    },

                    {
                        name: "الحراره", sensors: {
                            sensorOne:
                                { name: "الحراره", },
                            sensorTwo: { name: "الاكسجين" },
                            sensorThree: { name: "تلوث المياه" },
                            sensorFour: { name: "الامونيا" },

                        },
                    }
                    ]}
                    itemComponent={TanksListItem}
                />
            </ScreenContainerWithPadding>
            <AppPlusButton onPress={() => { }} />

        </>
    )
}

export default TanksList