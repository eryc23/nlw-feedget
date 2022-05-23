import React from "react";
import { View, TouchableOpacity, Image } from "react-native";
import { Camera, Trash } from "phosphor-react-native";

import { theme } from "../../theme";
import { styles } from "./styles";

interface Props {
    ss: string | null;
    onTakeSS: () => void;
    onRemoveShot: () => void;
}

export const SSButton = ({ss, onRemoveShot, onTakeSS}: Props) => {
    return (
        <TouchableOpacity 
            style={styles.container}
            onPress={ss ? onRemoveShot : onTakeSS}
        >
            {ss ? (
                <View>
                    <Image source={{uri: ss}} style={styles.image} />
                    <Trash size={22} color={theme.colors.text_secondary} weight="fill" style={styles.removeIcon} />
                </View>
            ) : 
                <Camera size={24} color={theme.colors.text_secondary} weight="bold" />
            }
        </TouchableOpacity>
    )
}