import { Triggers, UseMentionsConfig } from '../../types';
import { TextInputProps } from 'react-native';
declare type MentionInputProps<TriggerName extends string> = Omit<TextInputProps, 'onChange'> & UseMentionsConfig<TriggerName> & {
    onTriggersChange?: (triggers: Triggers<TriggerName>) => void;
};
export { MentionInputProps };
