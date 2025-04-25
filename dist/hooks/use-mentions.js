"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useMentions = void 0;
const _mention_utils_1 = require("../utils");
const react_1 = __importStar(require("react"));
const react_native_1 = require("react-native");
/**
 * Hook that stores mention context.
 *
 * @param value
 * @param onChange
 * @param triggersConfig
 * @param patterns
 */
const useMentions = ({ value, onChange, triggersConfig = _mention_utils_1.emptyObject, patternsConfig = _mention_utils_1.emptyObject, onSelectionChange, selectionNew}) => {

    const [selection, setSelection] = react_1.useState({start: 0, end: 0});
    /**
     * State that includes current parts and plain text
     */
    const mentionState = react_1.useMemo(() => _mention_utils_1.parseValue(value, _mention_utils_1.getConfigsArray(triggersConfig, patternsConfig)), [value, triggersConfig, patternsConfig]);
    /**
     * Callback that handles TextInput text change
     *
     * @param text
     */
    const handleTextChange = (text) => {
        onChange(_mention_utils_1.generateValueFromMentionStateAndChangedText(mentionState, text));
    };
    /**
     * Callback that handles TextInput selection change
     *
     * @param event
     */
    const handleSelectionChange = (event) => {
        const newSelection = event.nativeEvent.selection;
        setSelection(newSelection);
        onSelectionChange && onSelectionChange(newSelection);
    };
    /**
     * Object with triggers and their current keyword state depending on current text and selection
     */
    const triggers = react_1.useMemo(() => _mention_utils_1.getTriggerPartSuggestionKeywords(mentionState, selectionNew ? selectionNew : selection, triggersConfig, onChange, handleSelectionChange), [mentionState, selection, triggersConfig, onChange, selectionNew ? handleSelectionChange : null]);
    /**
     * `TextInput` props that we can provide to the `TextInput` component.
     */
    const textInputProps = {
        onChangeText: handleTextChange,
        onSelectionChange: handleSelectionChange,
        children: react_1.default.createElement(react_native_1.Text, null, mentionState.parts.map(({ text, config, data }, index) => {
            var _a;
            return config
                ? react_1.default.createElement(react_native_1.Text, {
                    key: `${index}-${(_a = data === null || data === void 0 ? void 0 : data.trigger) !== null && _a !== void 0 ? _a : 'pattern'}`,
                    style: [
                        _mention_utils_1.defaultTriggerTextStyle,
                        config.textStyle,
                        config.textStyleFunc && data && config.textStyleFunc(data)
                    ].filter(x => x)
                }, text)
                : react_1.default.createElement(react_native_1.Text, { key: index }, text);
        })),
    };
    return {
        triggers,
        textInputProps,
        mentionState,
    };
};
exports.useMentions = useMentions;
//# sourceMappingURL=use-mentions.js.map