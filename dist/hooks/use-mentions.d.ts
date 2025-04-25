import { UseMentionsConfig } from '../types';
import React from 'react';
import { NativeSyntheticEvent, Text, TextInputSelectionChangeEventData } from 'react-native';
/**
 * Hook that stores mention context.
 *
 * @param value
 * @param onChange
 * @param triggersConfig
 * @param patterns
 */
declare const useMentions: <TriggerName extends string>({ value, onChange, triggersConfig, patternsConfig, onSelectionChange, New, }: UseMentionsConfig<TriggerName>) => {
    triggers: Record<TriggerName, import("../types/types").SuggestionsProvidedProps>;
    textInputProps: {
        onChangeText: (text: string) => void;
        onSelectionChange: (event: NativeSyntheticEvent<TextInputSelectionChangeEventData>) => void;
        children: React.CElement<import("react-native").TextProps, Text>;
    };
    mentionState: import("../types/types").MentionState;
};
export { useMentions };
