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
        opacity: 1
    },
    imgBackground: {
        flex: 1,
    },
    ArrowIcon: {
        ...FONTS.icons,
    },
    folllowerdHeading: {
        ...FONTS.headerHeading,
        color: COLORS.white,
        marginStart: 10,
        marginTop: 10,
    },
    arrwoeiconbg: {
        marginStart: 10,
        marginTop: 10
    },
    folowerrsRowContainer: {
        flexDirection: 'row',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginTop: 40,
        margin:'4%'
    },
    Nickname: {
        color: COLORS.white,
        ...FONTS.body1,
        width:SIZES.width/4
    },
    Realname: {
        color: COLORS.realName,
        ...FONTS.body2,
        width:SIZES.width/4
    },
    imageContainer: {
        height: 70,
        width: 70,
    },
    followimage: {
        width: '100%',
        height: '100%',
        borderRadius: 50,
       
    },
    buttonbg: {
        backgroundColor: COLORS.blue,
        width: SIZES.width / 3,
        height: SIZES.height / 20,
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    followtext:{
        color: COLORS.white, 
        ...FONTS.body3
    }
});

export default styles;
