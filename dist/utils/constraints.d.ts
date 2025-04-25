import { StyleProp, TextStyle } from 'react-native';
/**
 * RegEx grouped results. Example - "{@}[Full Name](123abc)"
 * We have 4 groups here:
 * - The whole original string - "{@}[Full Name](123abc)"
 * - Mention trigger - "@"
 * - Name - "Full Name"
 * - Id - "123abc"
 */
declare const triggerRegEx: RegExp;
/**
 * We need this single group regex for using String.prototype.split method
 */
declare const singleGroupTriggerRegEx: RegExp;
declare const DEFAULT_ALLOWED_SPACES_COUNT = 1;
declare const emptyObject: any;
declare const defaultTriggerTextStyle: StyleProp<TextStyle>;
export { triggerRegEx, singleGroupTriggerRegEx, DEFAULT_ALLOWED_SPACES_COUNT, emptyObject, defaultTriggerTextStyle, };
