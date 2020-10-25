"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mobx_react_lite_1 = require("mobx-react-lite");
var react_1 = __importDefault(require("react"));
var react_native_1 = require("react-native");
var Card_1 = __importDefault(require("./Card"));
var WorkoutCard = mobx_react_lite_1.observer(function (_a) {
    var excercise = _a.excercise, sets = _a.sets, repsAndWeight = _a.repsAndWeight, onSetPress = _a.onSetPress;
    return (react_1.default.createElement(react_native_1.View, { style: styles.cardContainer },
        react_1.default.createElement(Card_1.default, null,
            react_1.default.createElement(react_native_1.View, { style: styles.topRow },
                react_1.default.createElement(react_native_1.Text, { style: styles.topRowText }, excercise),
                react_1.default.createElement(react_native_1.Text, { style: styles.topRowText }, repsAndWeight)),
            react_1.default.createElement(react_native_1.View, { style: styles.bottomRow }, sets.map(function (set, index) {
                if (set === "x") {
                    return (react_1.default.createElement(react_native_1.View, { style: [styles.circle, styles.fadedBackground], key: set + index },
                        react_1.default.createElement(react_native_1.Text, { style: [styles.grayText, styles.circleText] }, "X")));
                }
                if (set === "") {
                    return (react_1.default.createElement(react_native_1.TouchableOpacity, { onPress: function () { return onSetPress(index); }, style: [styles.circle, styles.fadedBackground], key: set + index }));
                }
                return (react_1.default.createElement(react_native_1.TouchableOpacity, { onPress: function () { return onSetPress(index); }, style: styles.circle, key: set + index },
                    react_1.default.createElement(react_native_1.Text, { style: [styles.circleText, styles.whiteText] }, set)));
            })))));
});
var styles = react_native_1.StyleSheet.create({
    cardContainer: {
        marginBottom: 10
    },
    topRow: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    topRowText: {
        fontSize: 16
    },
    bottomRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 14
    },
    circle: {
        borderRadius: 25,
        backgroundColor: "#3893EB",
        height: 50,
        width: 50
    },
    circleText: {
        fontSize: 16,
        margin: "auto"
    },
    whiteText: {
        color: "#fff"
    },
    fadedBackground: {
        backgroundColor: "#828F9E"
    },
    grayText: {
        color: "#E4E7EB"
    }
});
exports.default = WorkoutCard;
