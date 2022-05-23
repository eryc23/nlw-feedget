import React from 'react';
import { View, Image, Text, TouchableOpacity } from "react-native";
import { Copyright } from '../Copyright';

import { styles } from "./styles";

interface Props{
    onSendAnotherFeedback: () => void;
}

export const Success = ({onSendAnotherFeedback}: Props) => {
    return (
        <View style={styles.container}>
            <Image
                source={{uri: 'https://cdn-icons-png.flaticon.com/512/190/190411.png'}}
                style={styles.image}
            />
            <Text style={styles.title}>
                Agradecemos o feedback
            </Text>
            <TouchableOpacity onPress={onSendAnotherFeedback} style={styles.button}>
                <Text style={styles.buttonTitle}>
                    Quero enviar outro
                </Text>
            </TouchableOpacity>
            <Copyright />
        </View>
    )
}