import { MentionState, Part, Config, Position, Suggestion, TriggerData, TriggerConfig, TriggersConfig } from '../types';
declare const isTriggerConfig: (config: Config) => config is TriggerConfig;
declare const getTextLength: (text: string) => number;
/**
 * Helper that returns typed array of object's keys
 *
 * @param obj
 */
declare const getTypedKeys: <T extends object>(obj: T) => (keyof T)[];
/**
 * Combines object configs into array
 *
 * @param triggersConfig
 * @param patternsConfig
 */
declare const getConfigsArray: <TriggerName extends string>(triggersConfig?: Record<TriggerName, TriggerConfig> | undefined, patternsConfig?: Record<string, import("../types/types").PatternConfig> | undefined) => (import("../types/types").PatternConfig | Record<TriggerName, TriggerConfig>[TriggerName])[];
/**
 * The method for getting parts between two cursor positions.
 * ```
 * | part1 |   part2   |   part3   |
 *  a b c|d e f g h i j h k|l m n o
 *  ```
 *  We will get 3 parts here:
 *  1. Part included 'd'
 *  2. Part included 'efghij'
 *  3. Part included 'hk'
 *  Cursor will move to position after 'k'
 *
 * @param parts full part list
 * @param cursor current cursor position
 * @param count count of characters that didn't change
 */
declare const getPartsInterval: (parts: Part[], cursor: number, count: number) => Part[];
declare const getKeyword: ({ mentionState, selection, config, }: {
    mentionState: MentionState;
    selection: Position;
    config: TriggerConfig;
}) => string | undefined;
/**
 * Function for getting object with keyword for each mention part type
 *
 * If keyword is undefined then we don't tracking mention typing and shouldn't show suggestions.
 * If keyword is not undefined (even empty string '') then we are tracking mention typing.
 *
 * Examples where @name is just plain text yet, not mention:
 * '|abc @name dfg' - keyword is undefined
 * 'abc @| dfg' - keyword is ''
 * 'abc @name| dfg' - keyword is 'name'
 * 'abc @na|me dfg' - keyword is 'na'
 * 'abc @|name dfg' - keyword is against ''
 * 'abc @name |dfg' - keyword is 'name '
 * 'abc @name dfg|' - keyword is 'name dfg'
 * 'abc @name dfg |' - keyword is undefined (we have more than one space)
 * 'abc @name dfg he|' - keyword is undefined (we have more than one space)
 *
 * // ToDo — refactor to object params
 */
declare const getTriggerPartSuggestionKeywords: <TriggerName extends string>(mentionState: MentionState, selection: Position, triggersConfig: Record<TriggerName, TriggerConfig>, onChange?: (newValue: string) => void) => Record<TriggerName, import("../types/types").SuggestionsProvidedProps>;
/**
 * Generates new value when we are changing text.
 *
 * @param mentionState
 * @param changedText changed plain text
 */
declare const generateValueFromMentionStateAndChangedText: (mentionState: MentionState, changedText: string) => string;
/**
 * Method for adding suggestion to the parts and generating value. We should:
 * - Find part with plain text where we were tracking mention typing using selection state
 * - Split the part to next parts:
 * -* Before new mention
 * -* With new mention
 * -* After mention with space at the beginning
 * - Generate new parts array and convert it to value
 *
 * @param mentionState - current mention state with parts and plainText
 * @param selection - current selection
 * @param triggerConfig - actually the mention type
 * @param suggestion - suggestion that should be added
 */
declare const generateValueWithAddedSuggestion: (mentionState: MentionState, selection: Position, triggerConfig: TriggerConfig, suggestion: Suggestion) => string | undefined;
/**
 * Method for generating part for plain text
 *
 * @param text - plain text that will be added to the part
 * @param positionOffset - position offset from the very beginning of text
 */
declare const generatePlainTextPart: (text: string, positionOffset?: number) => Part;
/**
 * Method for generating part for mention
 *
 * @param triggerConfig
 * @param triggerData - mention data
 * @param positionOffset - position offset from the very beginning of text
 */
declare const generateTriggerPart: (triggerConfig: TriggerConfig, triggerData: TriggerData, positionOffset?: number) => Part;
/**
 * Method for generation mention value that accepts mention regex
 *
 * @param triggerConfig
 * @param suggestion
 */
declare const getTriggerValue: (triggerConfig: TriggerConfig, suggestion: Suggestion) => string;
/**
 * Recursive function for deep parse MentionInput's value and get plainText with parts
 *
 * ToDo – move all utility helpers to a class
 * @param value - the MentionInput's value
 * @param configs - All provided part types
 * @param positionOffset - offset from the very beginning of plain text
 */
declare const parseValue: (value: string, configs: Config[], positionOffset?: number) => MentionState;
/**
 * Function for generation value from parts array
 *
 * @param parts
 */
declare const getValueFromParts: (parts: Part[]) => string;
/**
 * Replace all mention values in value to some specified format
 *
 * @param value - value that is generated by MentionInput component
 * @param replacer - function that takes mention object as parameter and returns string
 */
declare const replaceTriggerValues: (value: string, replacer: (mention: TriggerData) => string) => string;
export { isTriggerConfig, getTextLength, getTypedKeys, getConfigsArray, getPartsInterval, getKeyword, getTriggerPartSuggestionKeywords, generateValueFromMentionStateAndChangedText, generateValueWithAddedSuggestion, generatePlainTextPart, generateTriggerPart, getTriggerValue, parseValue, getValueFromParts, replaceTriggerValues, };
