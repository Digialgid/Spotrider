import { StyleSheet } from 'react-native';
import { Platform, Dimensions, PixelRatio } from 'react-native';
import { COLORS, SIZES, FONTS } from '../../Constants';

const styles = StyleSheet.create({
    SafeAreaViewstyle: {
        flex: 1
    },
    viewafterimagebg: {
        flex: 1,
        backgroundColor: COLORS.Transparent,
        opacity: 1
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
        marginTop: 40,
        margin:'4%',
        // height:'auto',
        borderRadius:10,
        borderWidth:1,
        // minHeight:'50%', 
        borderColor:COLORS.white,
        
    },
    EventName: {
        color: COLORS.white,
        ...FONTS.body1,
    },
    Discription: {
        color: COLORS.realName,
        ...FONTS.body2,
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
        backgroundColor: COLORS.blue,
        width: SIZES.width / 5,
        height: SIZES.height / 30,
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5
    },
    buttontext:{
        color: COLORS.white, 
        fontSize: 15,
    }
});

export default styles;
