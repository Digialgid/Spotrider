import { StyleSheet } from 'react-native';
import { Platform, Dimensions } from 'react-native';
import { COLORS, SIZES, FONTS } from '../../Constants';
const styles = StyleSheet.create({
    SafeAreaViewstyle: {
        flex: 1
    },

    viewafterimagebg: {
        flex: 1,
        backgroundColor: "#000000c0",
    },

    imgBackground: {
        flex: 1,
    },

    inputicon: {
        ...FONTS.icons,
    },

    budgetfontstyle: {
        ...FONTS.body4,
        color: COLORS.white
    },
    rowcontainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    rowborder1: {
        borderColor: COLORS.white,
        borderLeftWidth: 1,
        borderTopWidth: 1,
        width: '45%',
        padding: '2%',
        alignItems: 'center',

    },
    rowborder2: {
        borderColor:COLORS.white,
        width: '45%',
        padding: '2%',
        borderRightWidth: 1,
        alignItems: 'center',
        borderLeftWidth: 1,
        borderTopWidth: 1,
    }


});

export default styles;
