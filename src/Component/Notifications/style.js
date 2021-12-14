import { StyleSheet } from 'react-native';
import { Platform, Dimensions, PixelRatio } from 'react-native';
import { COLORS, SIZES, FONTS } from '../../Constants';

const styles = StyleSheet.create({
    SafeAreaViewstyle: {
        flex: 1
    },
    viewafterimagebg: {
        flex: 1,
        // backgroundColor: COLORS.Transparent,
    },
    imgBackground: {
        flex: 1,
    },
    ArrowIcon: {
        ...FONTS.icons,
    },
    NotificationsHeading: {
        ...FONTS.headerHeading,
        color: COLORS.white,
        marginStart: 10,
        marginTop: 10,
    },
    arrwoeiconbg: {
        marginStart: 10,
        marginTop: 10
    },
    NotificationsContainer: {
        flexDirection: 'row',
        marginTop: 25,
        margin: '2%',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: COLORS.white,
        height: '20%'

    },
    EventName: {
        color: COLORS.white,
        ...FONTS.body1,
    },
    Discription: {
        color: COLORS.realName,
        ...FONTS.body2,
        height: '45%',
    },
    imageContainer: {
        height: SIZES.height / 10,
        width: SIZES.width / 5,
    },
    followimage: {
        width: '100%',
        height: '100%',
        borderRadius: PixelRatio.getPixelSizeForLayoutSize(100),

    },
    buttonbg: {
        backgroundColor: COLORS.darkOrange,
        width: SIZES.width / 5,
        height: SIZES.height / 30,
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5
    },
    buttontext: {
        color: COLORS.white,
        fontSize: 15,
    },
    declinebuttton: {
        width: SIZES.width / 5,
        height: SIZES.height / 30,
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: COLORS.white
    }
});

export default styles;
