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

    imageStyle: {
        alignSelf: 'center',
        height: '100%',
        width: '100%',
        borderRadius: 20
    },
    imageStyleEvent: {
        height: '100%',
        width: '100%',
        borderRadius: 10,

    },

    imageTextContainer: {
        flexDirection: 'row',
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        height: 80,
        justifyContent: 'space-between',
        width: '100%',
        backgroundColor: "#000000c0",
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        padding: 10,
    },
    imageTextContainerEvent: {
        flexDirection: 'row',
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        height: 80,
        justifyContent: 'space-between',
        width: '100%',
        backgroundColor: "#000000c0",
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        padding: 10,
    },

    inputicon: {
        ...FONTS.icons,
    },

    starImageStyle: {
        width: 15,
        height: 15,
        resizeMode: 'cover',
    },

    menuiconstyle: {
        marginStart: 5,
        marginEnd: 10,
        marginTop: 10
    },


    button: {
        justifyContent: 'space-between',
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
        width: '95%',
        alignSelf: 'center'
    },

    buttonbg: {
        // backgroundColor: '#000000c0',
        padding: 10,
        justifyContent: 'center',
        borderRadius: 30,
    },

    ViewAll: {
        color: COLORS.darkOrange,
        fontSize: 15
    },

    nearYou: {
        color: COLORS.white,
        alignSelf: 'center',
        ...FONTS.body3,
    },

    NotificationsContainer: {
        flexDirection: 'row',
        marginTop: 25,
        margin: '2%',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: COLORS.white,
        backgroundColor: COLORS.white,
        height: 150,
    },

    locationdistance: {
        color: COLORS.white, fontSize: 14
    },

    buttonbgfollow: {
        backgroundColor: COLORS.blue,
        width: SIZES.width / 9,
        height: SIZES.height / 30,
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 1
    },

    followtext: {
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

    sendreqbuttontext: {
        color: COLORS.white,
        fontSize: 10,
    },

    nickName: {
        color: COLORS.darkBlue3,
        ...FONTS.body3,
        fontFamily: 'Poppins-SemiBold',
        fontWeight: "700"
    },

    RealNameDesc: {
        color: COLORS.darkblue2,
        ...FONTS.body4,
    },
    followers: {
        color: COLORS.darkBlue3,
        fontSize: 15,
        fontFamily: 'Poppins-SemiBold',
        fontWeight: "600"
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
    eventcontainer: {
        width: 250,
        height: 240,
        alignSelf: 'center',
        margin: 10
    },
    afterimageevent: {
        position: 'absolute',
        right: 10,
        top: 10,
        height: 50,
        width: '50%'
    },
    resImage: {
        width: '100%',
        height: '100%'
    },
    bestPlaceDesc: {
        borderColor: COLORS.white,
        borderWidth: 1,
        width: '20%',
        marginTop: 3
    },
    nickNameContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '90%',
        marginTop: 20,
        alignItems: 'center'
    },
    nicknameimage: {
        width: '100%',
        height: '100%',
        borderBottomLeftRadius: 10,
        borderTopLeftRadius: 10,
    },
    Followercontainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
        width: '90%'
    },
    folowercount: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    LinearGradiant: {
        borderRadius: 30,
        width: 90,
        height: 35,
        alignItems: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 4,
    }

});

export default styles;
