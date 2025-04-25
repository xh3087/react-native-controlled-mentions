"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultTriggerTextStyle = exports.emptyObject = exports.DEFAULT_ALLOWED_SPACES_COUNT = exports.singleGroupTriggerRegEx = exports.triggerRegEx = void 0;
/**
 * RegEx grouped results. Example - "{@}[Full Name](123abc)"
 * We have 4 groups here:
 * - The whole original string - "{@}[Full Name](123abc)"
 * - Mention trigger - "@"
 * - Name - "Full Name"
 * - Id - "123abc"
 */
const triggerRegEx = /({([^{^}]*)}\[([^[]*)]\(([^(^)]*)\))/i;
exports.triggerRegEx = triggerRegEx;
/**
 * We need this single group regex for using String.prototype.split method
 */
const singleGroupTriggerRegEx = /({[^{^}]*}\[[^[]*]\([^(^)]*\))/gi;
exports.singleGroupTriggerRegEx = singleGroupTriggerRegEx;
const DEFAULT_ALLOWED_SPACES_COUNT = 1;
exports.DEFAULT_ALLOWED_SPACES_COUNT = DEFAULT_ALLOWED_SPACES_COUNT;
// Empty object with static reference
const emptyObject = {};
exports.emptyObject = emptyObject;
const defaultTriggerTextStyle = {
    fontWeight: 'bold',
    color: 'blue',
};
exports.defaultTriggerTextStyle = defaultTriggerTextStyle;
//# sourceMappingURL=constraints.js.map