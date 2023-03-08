import React, { useState } from 'react';
import {
    WhiteSpace,
    ScreenContainerWithPadding,
    ListItem,
    AppFlatList,
    AppPlusButton,
    AddFarmModal,
} from '../../../components';

const Home = (props: object) => {
    const data = [
        {
            name: "fish"
        },
        {
            name: "test"
        },
        {
            name: "test"
        },

    ]
    const [showAddFarmModal, setShowAddFarmModal] = useState(false)
    return (
        <>
            <ScreenContainerWithPadding>
                <WhiteSpace variant={1} />
                <AppFlatList
                    data={data}
                    itemComponent={ListItem} />
            </ScreenContainerWithPadding>
            <AppPlusButton
                onPress={() => setShowAddFarmModal(true)} />
            <AddFarmModal
                visible={showAddFarmModal}
                onRequestClose={() => setShowAddFarmModal(false)} />
        </>
    )
}

export default Home
