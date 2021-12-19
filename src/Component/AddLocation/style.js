import { StyleSheet } from 'react-native';
import { Platform, Dimensions } from 'react-native';
import { COLORS, SIZES, FONTS } from '../../Constants';
const styles = StyleSheet.create({
    SafeAreaViewstyle: {
        flex: 1
    },
    inputView: {
        width: '90%',
        flexDirection: 'row',
        alignItems: 'center',
        marginStart: 20,
        marginEnd: 25,
        marginTop: 25,
        justifyContent: 'space-between',
        alignSelf: 'center',
    },
    inputView1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    descriptionView: {
        width: '90%',
        // alignItems: 'center',
        marginStart: 20,
        marginEnd: 25,
        marginTop: 40,
        alignSelf: 'center',
    },
    descriptiontext: {
        borderColor: "#fff",
        borderWidth: 1,
        borderRadius: 10,
        width: '100%',
        marginTop: 10,
        height: 60,
        color:COLORS.white,
    },
    viewafterimagebg: {
        flex: 1,
        // backgroundColor: "#000000c0",
    },

    input: {
        height: 40,
        borderWidth: 0,
        width: '90%',
        ...FONTS.textInput
    },

    input1: {
        height: 40,
        borderWidth: 0,
        width: '100%',
        color:COLORS.white,
        ...FONTS.textInput,
    },

    datetimeinput:
    {
        flexDirection: 'row',
        width: '90%',
        alignItems: 'center',
        marginTop: 40,
        justifyContent: 'space-between',
        alignSelf: 'center',
    },

    StartDateTime: {
        flexDirection: 'row',
        width: '80%',
        alignItems: 'center',
    },

    StartDateTime1: {
        flexDirection: 'row',
        width: '50%',
        alignItems: 'center',
        marginEnd: 5,
        justifyContent: 'space-between',
    },
    timeborder: {
        width: '95%',
        borderWidth: .8,
        borderColor: COLORS.white,
        paddingHorizontal: 5,
        alignSelf: 'center'
    },

    imgBackground: {
        flex: 1,
    },

    inputicon: {
        ...FONTS.icons,
    },

    inputicon1: {
        color: COLORS.white,
        ...FONTS.body3,
        textTransform: 'uppercase',
    },
    buttonText: {
        color: COLORS.white,
        ...FONTS.body3,
        textTransform: 'uppercase',
    },
    buttonBg: {
        backgroundColor: COLORS.darkOrange,
        width: '100%',
        height: '6%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    },
    uploadimagefolder: {
        width: '90%',
        alignSelf: 'center',
        marginTop: 30,
        borderRadius: 5,
        backgroundColor: COLORS.darkOrange,
        height: 100,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textInput: {
        borderColor: "#fff",
        borderWidth: 1,
        borderRadius: 10,
        width: '100%',
        marginTop: 10,
        height: 60,
    },
    menuiconstyle: {
        marginStart: 5,
        marginEnd: 10,
        marginTop: 10
    }

});

export default styles;
