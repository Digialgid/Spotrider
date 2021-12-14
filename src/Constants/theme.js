import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    widthPercentageToFonts as wf,
    heightPercentageToFonts as hf,
} from "react-native-responsive-screen-font";
export const COLORS = {
    // base colors
    primary: "#ff6701", // orange
    // secondary: "#CDCDD2",   // gray

    // colors
    black: "#000000",
    white: "#ffffff",

    lightOrange: "#f9994b",
    darkOrange: "#ff6701",
    blue: "#0095f6",
    darkBlue: "#1a2e53",
    darkBlue1: "##131e40",
    lightGray4: "#F8F8F9",
    transparent: "transparent",
    darkgray: '#898C95',
    realName: '#6e7280',
    Transparent: '#000000c0',
};

export const SIZES = {
 width,
 height,   
};

export const FONTS = {
   
    body1: { fontFamily: "OpenSans-Regular", fontSize: wf("5%"),  },
    body2: { fontFamily: "OpenSans-Regular", fontSize: wf("3.5%"), },
    body3: { fontFamily: "OpenSans-Bold", fontSize: wf("4%"), },
    body4: { fontFamily: "OpenSans-Bold", fontSize: wf("5%"), },
    body5: { fontFamily: "OpenSans-Regular", fontSize: wf("5%"), },
    headerHeading: { fontFamily: "Poppins-SemiBold", fontSize: wf("5%"),},
    textInput: {  fontFamily: "OpenSans-Regular",fontSize: wf("4%"), color: COLORS.white },
    icons: { width: 20, height: 20, tintColor: COLORS.white },
};

const appTheme = { COLORS, SIZES, FONTS };

export default appTheme;