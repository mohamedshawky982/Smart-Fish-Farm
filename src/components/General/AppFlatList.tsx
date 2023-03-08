import React from "react";
import { FlatList } from "react-native";
import { ListItemComponentType } from "../../utils/types"
const AppFlatList = (
    { data,
        itemComponent: ItemComponent,
        componentType,
        ...props }: {
            data: any,
            itemComponent: any
            componentType: ListItemComponentType
        }
) => {
    return (
        <FlatList
            data={data}
            {...props}
            renderItem={({ item, index }) => <ItemComponent
                item={item}
                index={index}
                componentType={componentType}
                
            />}
        />

    )
}

export default AppFlatList