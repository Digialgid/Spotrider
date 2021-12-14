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
    sliderContainer: {
        width: SIZES.width / 4,
        margin: 10,
        height: SIZES.height / 7,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageStyle: {
        alignSelf: 'center',
        height: '100%',
        width: '100%',
        borderRadius: 20
    },
    imagesliderText: {
        color: COLORS.white,
        alignSelf: 'center',
        ...FONTS.body1,
        textAlign: 'center',
        position: 'absolute',
    },

    imageTextContainer: {
        flexDirection: 'row',
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'space-between',
        backgroundColor: "#000000c0",
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        padding: 10,
    },

    card2Container: {
        width: '45%',
        margin: '2%',
        justifyContent: 'center',
        height: SIZES.height / 5,
        alignItems: 'center',
        alignSelf: 'center',
    },

    locationName2: {
        color: COLORS.white,
        fontSize: 8,
    },
    locationName1: {
        color: COLORS.white,
        fontSize: 10,
    },

    inputicon: {
        ...FONTS.icons,
    },

    starImageStyle: {
        width: 10,
        height: 10,
        resizeMode: 'cover',
    },

    card2ratingImage:
    {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        justifyContent: "space-around"
    },
    card1ratingImage: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }

});

export default styles;
