import React from "react";
import CircularProgress from 'react-native-circular-progress-indicator';
import { themes } from "../../utils";

const ProgressCircle = ({ color, title }: { color?: string,title?:string }) => {
    return (
        <CircularProgress
            value={90}
            inActiveStrokeColor={'#2ecc71'}
            activeStrokeColor={color ?? themes.primaryColor}
            inActiveStrokeOpacity={0.2}
            radius={40}
            title={title}
        />
    )
}

export default ProgressCircle