import { StyleSheet } from 'react-native';
import { Platform, Dimensions } from 'react-native';
import { COLORS, SIZES, FONTS } from '../../Constants';
const styles = StyleSheet.create({
    SafeAreaViewstyle: {
        flex: 1
    },

    viewafterimagebg: {
        flex: 1,
        // backgroundColor: "#000000c0",
    },
    imgBackground: {
        flex: 1,
    },
    inputicon: {
        ...FONTS.icons,
    },
    rideContainer: {
        borderRadius: 10,
        borderWidth: 1,
        borderColor: COLORS.white,
        backgroundColor: COLORS.white,
        height: 150,
        width: '95%',
        alignSelf: 'center',
        alignItems: 'flex-end',
        marginBottom: 30,
        marginTop: 15,
    },
    RealNameDesc1: {
        color: COLORS.white,
        ...FONTS.body4,
        width: 200,
    },
    ridebackground: {
        width: '100%',
        height: '100%',
        borderRadius: 10,
    },
    rideimagecontainerposition: {
        position: 'absolute',
    },
    sendreqContainer: {
        flexDirection: 'row',
        margin: 10,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    RealNameContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 10,
    },
    RealName1: {
        color: COLORS.white,
        ...FONTS.body6,
        fontWeight: '600'
    },
    memberBudgetRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    rideimagebg: {
        width: 60,
        height: 60
    },
    name: {
        color: COLORS.white,
        ...FONTS.body5,
        fontWeight: '600'
    },
    resImage: {
        width: '100%',
        height: '100%'
    },
    sendreqbuttontext: {
        color: COLORS.white,
        fontSize: 10,
    },
    sendRequestbg: {
        backgroundColor: COLORS.primary,
        width: 100,
        height: SIZES.height / 30,
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 1
    },

});

export default styles;
