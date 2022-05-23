import React, { useState } from 'react';
import { View, TextInput, Image, Text, TouchableOpacity, ToastAndroid } from "react-native"
import { ArrowLeft } from 'phosphor-react-native';
import { captureScreen } from 'react-native-view-shot';
import fs from 'react-native-fs';

import { FeedbackType } from '../Widget';
import { Button } from '../Button';
import { SSButton } from '../SSButton';

import { theme } from '../../theme';
import { styles } from "./styles"
import { feedbackTypes } from '../../utils/feedbackTypes';
import { api } from '../../libs/api';

interface Props {
    feedbackType: FeedbackType;
    onFeedbackCancel: () => void;
    onFeedbackSent: () => void;
}

export const Form = ({feedbackType, onFeedbackCancel, onFeedbackSent}: Props) => {
    const [isSendingFeedback, setIsSendingFeedback] = useState(false);

    const [comment, setComment] = useState('');
    const [SS, setSS] = useState<string | null>(null);

    const feedbackTypeInfo = feedbackTypes[feedbackType];

    const handleSS = () => {
        captureScreen({
            format: 'png',
            quality: .8
        }).then(uri => setSS(uri))
    }

    const handleSendFeedback = async () => {
        if(isSendingFeedback) return;
        if(!comment) return ToastAndroid.show('Preenchimento dos campos é obrigatorio', ToastAndroid.LONG);
        const ssBase64 = SS && await fs.readFile(SS, 'base64');

        setIsSendingFeedback(true);

        try{
            await api.post('/feedbacks', {
                type: feedbackType,
                comment,
                ss: `data: image/png;base64,${ssBase64}`,
            })
        }catch(err){
            setIsSendingFeedback(false);
            console.log(err)
        }
        onFeedbackSent();
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={onFeedbackCancel}>
                    <ArrowLeft size={24} weight="bold" color={theme.colors.text_secondary} />
                </TouchableOpacity>
                <View style={styles.titleContainer}>
                    <Image source={feedbackTypeInfo.img} style={styles.image} />
                    <Text style={styles.titleText}> 
                        {feedbackTypeInfo.title}
                    </Text>
                </View>
            </View>
            <TextInput 
                multiline 
                style={styles.input} 
                placeholder="Algo não está funcionando bem? Queremos corrigir. Conte com detalhes o que está acontecendo..."
                placeholderTextColor={theme.colors.text_secondary}
                autoCorrect={false}
                onChangeText={setComment}
            />
            <View style={styles.footer}>
                <SSButton 
                    ss={SS}
                    onTakeSS={handleSS}
                    onRemoveShot={() => setSS(null)}
                />
                <Button isLoading={isSendingFeedback} onPress={handleSendFeedback} />
            </View>
        </View>
    )
}