import { StyleSheet } from "react-native"
import { themes } from "../../utils/themes";
const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderRadius: 30,
        backgroundColor: themes.white,
        alignItems: "center"

    },
    WelcomeContainer:{
        flex:1,
        alignItems:"center",
        justifyContent:"center"
    },
    mainContainer:{
        flex:1,
        backgroundColor:themes.white
    }

})

export default styles