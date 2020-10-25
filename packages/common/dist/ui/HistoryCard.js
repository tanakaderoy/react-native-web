"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_native_1 = require("react-native");
var utils_1 = require("../utils/utils");
var Card_1 = __importDefault(require("./Card"));
var exerciseShortHand = function (ex) {
    switch (ex) {
        case "BarbellRow":
            return "ROW";
        case "BenchPress":
            return "BP";
        case "DeadLift":
            return "DL";
        case "OverHeadPress":
            return "OHP";
        case "Squat":
            return "SQ";
        default:
            return "ERROR";
    }
};
var HistoryCard = function (_a) {
    var header = _a.header, currentExercise = _a.currentExercise, onPress = _a.onPress;
    return (react_1.default.createElement(react_native_1.View, { style: styles.cardContainer },
        react_1.default.createElement(Card_1.default, { onPress: onPress },
            react_1.default.createElement(react_native_1.Text, null, header),
            currentExercise.map(function (ce) {
                return (react_1.default.createElement(react_native_1.Text, { key: ce.exercise + utils_1.uuidv4() }, exerciseShortHand(ce.exercise) + " " + ce.numSets + " x " + ce.reps + " " + ce.weight));
            }))));
};
exports.default = HistoryCard;
var styles = react_native_1.StyleSheet.create({
    cardContainer: {
        flex: 1,
        padding: 10
    }
});
