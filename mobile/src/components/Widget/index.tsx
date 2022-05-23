import React, {useRef, useState} from "react";
import { TouchableOpacity } from "react-native";
import { ChatTeardropText } from "phosphor-react-native";
import BottomSheet from "@gorhom/bottom-sheet"
import { gestureHandlerRootHOC } from "react-native-gesture-handler"

import { styles } from "./styles";
import { theme } from "../../theme";

import { Options } from "../Options";
import { Success } from '../Success';
import { Form } from "../Form";

import { feedbackTypes } from '../../utils/feedbackTypes';

export type FeedbackType = keyof typeof feedbackTypes;

export const Widget = () => {
    const [feedbackType, setFeedbackType] = useState<FeedbackType | null>();
    const [feedbackSent, setFeedbackSent] = useState(false);

    const bottomSheetRef = useRef<BottomSheet>(null);

    const handleOpen = () => {
        bottomSheetRef.current?.expand();
    }
    
    const handleResetFeedback = () => {
        setFeedbackType(null);
        setFeedbackSent(false);
    }

    return (
        <>
            <TouchableOpacity onPress={handleOpen} style={styles.btn}>
                <ChatTeardropText size={24} color={theme.colors.text_on_norma_color} weight="bold" />
            </TouchableOpacity>

            <BottomSheet 
                ref={bottomSheetRef}  
                snapPoints={[1,280]}
                backgroundStyle={styles.modal}
                handleIndicatorStyle={styles.indicatorStyle}
            >
                {feedbackSent ? <Success onSendAnotherFeedback={handleResetFeedback} /> : 
                    <>
                        {feedbackType ? 
                            <Form 
                                feedbackType={feedbackType}
                                onFeedbackCancel={handleResetFeedback}
                                onFeedbackSent={() => setFeedbackSent(true)}
                            /> :
                            <Options onFeedbackTypeChanged={setFeedbackType}/>
                        }
                    </>
                }
            </BottomSheet>
        </>
    )
}

export default gestureHandlerRootHOC(Widget);