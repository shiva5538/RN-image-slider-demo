import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
        width: '100%'
    },
    content2: {
        width: '100%',
        height: 80,
        marginTop: 10,
        backgroundColor: 'gray',
        justifyContent: 'center',
        alignItems: 'center',
    },
    contentText: { color: '#fff' },
    buttons: {
        zIndex: 1,
        height: 15,
        marginTop: -25,
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    button: {
        margin: 3,
        width: 15,
        height: 15,
        opacity: 0.9,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomColor: 'red',
        borderBottomWidth: 2,
    },
    buttonSelected: {
        opacity: 1,
        color: 'red',
    },
    customSlide: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    customImage: {
        width: "100%",
        height: 400,
    },
    addImgBtnContainer: {
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    addImgBtn: {
        width: 110,
    }
});
