import React from 'react';
import {View, Text} from 'react-native';

import { Option } from '../Option';
import { Copyright } from '../Copyright';
import { styles } from "./styles";
import { feedbackTypes } from '../../utils/feedbackTypes';
import { FeedbackType } from '../Widget';

interface Props{
    onFeedbackTypeChanged: (feedbackType: FeedbackType) => void;
}

export const Options = ({onFeedbackTypeChanged}: Props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Deixe seu feedback
            </Text>
            <View style={styles.options}>
                {Object.entries(feedbackTypes).map(([key, value]) => (
                    <Option 
                        key={key}
                        title={value.title}
                        image={value.img}
                        onPress={() => onFeedbackTypeChanged(key as FeedbackType)}
                    />
                ))}
            </View>
            <Copyright />
        </View>
    )
}