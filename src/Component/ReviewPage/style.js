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
    ReviewContainer: {
        marginTop: 5,
        margin: '2%',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: COLORS.white,
        height: 130,
        backgroundColor: COLORS.white,
        padding: 10,
    },

    descriptionView: {
        width: '90%',
        // alignItems: 'center',
        marginStart: 20,
        marginEnd: 25,
        marginTop: 20,
        alignSelf: 'center',
    },
    descriptiontext: {
        borderColor: "#fff",
        borderWidth: 1,
        borderRadius: 10,
        width: '100%',
        marginTop: 10,
        height: 80,
        color: COLORS.white,
    },
    starImageStyle: {
        width: 15,
        height: 15,
        resizeMode: 'cover',
        marginTop: 30,

    },
    starimagecontainer: {
        flexDirection: 'row',
        width: '90%',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    submitButton: {
        alignItems: "center",
        marginLeft: 20,
        marginTop: 10,
        borderRadius: 1,
        justifyContent: 'center',
        backgroundColor: COLORS.darkOrange,
        width: 100,
        height: 20,
        marginTop: 30
    },
    ReviewHeading: {
        marginTop: 2,
        fontSize: 15,
        fontFamily: 'Poppins-SemiBold',
        color: COLORS.black
    },
    reviewDescription: {
        marginTop: 2,
        fontSize: 13,
        fontFamily: 'Poppins-SemiBold',
    }

});

export default styles;
