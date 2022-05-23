import { StyleSheet } from "react-native";
import { theme } from "../../theme";

export const styles = StyleSheet.create({
    btn: {
        width: 48,
        height: 48,
        borderRadius: 24,
        backgroundColor: theme.colors.norma,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        right: 16,
        bottom: 16
    },
    modal: {
        backgroundColor: theme.colors.surface_primary,
        paddingBottom: 16
    },
    indicatorStyle: {
        backgroundColor: theme.colors.text_primary,
        width: 56
    }
})