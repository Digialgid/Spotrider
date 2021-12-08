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
        height: 50,
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
    starImageStyle:{
        width: 15,
    height: 15,
    resizeMode: 'cover',
    }

});

export default styles;
