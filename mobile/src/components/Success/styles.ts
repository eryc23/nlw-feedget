import { StyleSheet } from "react-native";
import { theme } from "../../theme";


export const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },
    image: {
        width: 40,
        height: 40,
        marginTop: 42,
        marginBottom: 10
    },
    title: {
        marginVertical: 14,
        fontSize: 20,
        fontFamily: theme.fonts.medium,
        color: theme.colors.text_primary
    },
    button: {
        height: 40,
        backgroundColor: theme.colors.surface_secondary,
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 24,
        marginBottom: 36
    },
    buttonTitle: {
        fontSize: 14,
        fontFamily: theme.fonts.medium,
        color: theme.colors.text_primary
    }
})