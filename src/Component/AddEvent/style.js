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
        ...FONTS.textInput,
        color: COLORS.white,
        width: '90%',

    },

    input1: {
        height: 40,
        borderWidth: 0,
        width: '100%',
        color: COLORS.white,
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
        width: '80%',
        alignItems: 'center',
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
    },
    modalborder: {
        margin: 1,
        width: '90%',
        borderWidth: .8,
        borderColor: 'grey',
        paddingHorizontal: 5,
        alignSelf: 'center'
    },
    modallistitem: {
        ...FONTS.body3,
        fontWeight: '400',
        marginStart: 30,
        margin: '3%',
        textAlign: 'left'
    },
    modaliemborder: {
        borderBottomColor: 'grey',
        borderWidth: .3,
        width: '90%',
        alignSelf: 'center'
    },
    addcadegory: {
        marginLeft: '2%',
        color: COLORS.white,
        ...FONTS.body3,
    },
    dropdown: {
        tintColor: 'grey',
        width: 20,
        height: 20
    }
});

export default styles;
