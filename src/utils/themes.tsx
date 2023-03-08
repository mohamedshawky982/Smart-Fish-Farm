
import { RFValue } from 'react-native-responsive-fontsize';
import { heightPercentageToDP as HP, widthPercentageToDP as WP } from 'react-native-responsive-screen';

export const fontSizeValue = (size: number) => RFValue(size)
export const themes = {
    white: "#fff",
    black: "#000",
    primaryColor: "#4ba064",
    secondaryColor: "#f7c600",
    darkYellow: "#d4a936",
    lightRed: "#ff5e5e",
    grey: "#ddd",
    red: "red",
    iconSizeOne: fontSizeValue(18),
    h1: { size: fontSizeValue(20), fonWeight: "900" },
    h2: { size: fontSizeValue(18), fonWeight: "800" },
    h3: { size: fontSizeValue(16), fonWeight: "600" },
    h4: { size: fontSizeValue(14), fonWeight: "400" },
    h5: { size: fontSizeValue(12), fonWeight: "200" },
    h6: { size: fontSizeValue(10), fonWeight: "normal" },


}


export const hp = (variant: any) => HP(variant)
export const wp = (variant: any) => WP(variant)
