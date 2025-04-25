import type { Change } from 'diff';
import type { StyleProp, TextStyle } from 'react-native';
declare type Suggestion = {
    id: string;
    name: string;
};
declare type TriggerData = {
    original: string;
    trigger: string;
    name: string;
    id: string;
};
declare type CharactersDiffChange = Omit<Change, 'count'> & {
    count: number;
};
declare type RegexMatchResult = string[] & {
    0: string;
    1: string;
    2: string;
    3: string;
    4: string;
    index: number;
    groups: TriggerData;
};
declare type Position = {
    start: number;
    end: number;
};
/**
 * Props that we can provide to the suggestions components
 */
declare type SuggestionsProvidedProps = {
    keyword?: string;
    onSelect: (suggestion: Suggestion) => void;
};
declare type TriggerConfigBase = {
    trigger: string;
    allowedSpacesCount?: number;
    isInsertSpaceAfterMention?: boolean;
    textStyle?: StyleProp<TextStyle>;
    textStyleFunc?: (data: TriggerData) => StyleProp<TextStyle>;
    getPlainString?: (mention: TriggerData) => string;
};
declare type DefaultTriggerConfig = TriggerConfigBase;
declare type CustomTriggerConfig = TriggerConfigBase & {
    pattern: RegExp;
    getTriggerData: (regexMatch: string) => TriggerData;
    getTriggerValue: (suggestion: Suggestion) => string;
};
declare type TriggerConfig = DefaultTriggerConfig | CustomTriggerConfig;
declare type PatternConfig = {
    pattern: RegExp;
    textStyle?: StyleProp<TextStyle>;
    textStyleFunc?: (data: TriggerData) => StyleProp<TextStyle>;
};
declare type Config = TriggerConfig | PatternConfig;
/**
 * Config of trigger part types
 */
declare type TriggersConfig<TriggerName extends string> = Record<TriggerName, TriggerConfig>;
/**
 * Config of pattern part types that can highlight some matches in the `TextInput`
 */
declare type PatternsConfig = Record<string, PatternConfig>;
declare type Part = {
    text: string;
    position: Position;
    config?: Config;
    data?: TriggerData;
};
declare type MentionState = {
    plainText: string;
    parts: Part[];
};
declare type Triggers<TriggerName extends string> = Record<TriggerName, SuggestionsProvidedProps>;
declare type UseMentionsConfig<TriggerName extends string> = {
    value: string;
    onChange: (value: string) => void;
    triggersConfig?: TriggersConfig<TriggerName>;
    patternsConfig?: PatternsConfig;
    onSelectionChange?: (selection: Position) => void;
    selectionNew?: any;
};
export type { Suggestion, TriggerData, CharactersDiffChange, RegexMatchResult, Position, Part, SuggestionsProvidedProps, DefaultTriggerConfig, CustomTriggerConfig, TriggerConfig, PatternConfig, TriggersConfig, PatternsConfig, Config, MentionState, Triggers, UseMentionsConfig, };
