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
    inputicon: {
        ...FONTS.icons,
    },
    starImageStyle: {
        width: 15,
        height: 15,
        resizeMode: 'cover',
    },
    input: {
        height: 50,
        borderWidth: 0,
        ...FONTS.textInput,
        marginLeft:10,
        color: COLORS.white,
        width: '90%',
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
        // backgroundColor: '#000000c0',
        backgroundColor:COLORS.white,
        opacity:.1,
        borderRadius:50,
        marginBottom:10,
    },

    slideetext: {
        color: COLORS.white,
        fontSize: 40,
        position: 'absolute',
        top: 20,
        left: 10
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
        backgroundColor:COLORS.white,
        width: 100,
        padding: 10,
        justifyContent: 'center',
        borderRadius: 30,
        opacity:.1,
    },
    ViewAll: {
        color: COLORS.darkOrange,
        fontSize: 15
    },
    nearYou: {
        color: COLORS.white, 
        alignSelf: 'center',
        
    },
    locationdistance:{
        color: COLORS.white, fontSize: 14 
    },
    
});

export default styles;
