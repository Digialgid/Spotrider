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
    viewafterimagebg: {
        flex: 1,
        // backgroundColor: "#000000c0",
    },

    input: {
        height: 40,
        borderWidth: 0,
        width: '85%',
        ...FONTS.textInput,
    },

    input1: {
        height: 40,
        borderWidth: 0,
        width: '100%',
        ...FONTS.textInput,
    },

    datetimeinput:
    {
        flexDirection: 'row',
        width: '90%',
        alignItems: 'center',
        marginTop: 20,
        justifyContent: 'space-between',
        alignSelf: 'center',
    },

    StartDateTime: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '80%'
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
        ...FONTS.icons,
        alignSelf: 'flex-end',
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
    }

});

export default styles;
