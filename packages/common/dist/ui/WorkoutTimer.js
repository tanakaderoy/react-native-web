"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mobx_react_lite_1 = require("mobx-react-lite");
var react_1 = __importDefault(require("react"));
var react_native_1 = require("react-native");
var WorkoutTimer = mobx_react_lite_1.observer(function (_a) {
    var onXpress = _a.onXpress, currentTime = _a.currentTime, percent = _a.percent;
    return (react_1.default.createElement(react_native_1.View, { style: styles.container },
        react_1.default.createElement(react_native_1.View, { style: [styles.line, { width: percent }] }),
        react_1.default.createElement(react_native_1.View, { style: styles.row },
            react_1.default.createElement(react_native_1.Text, { style: styles.timeText }, currentTime),
            react_1.default.createElement(react_native_1.TouchableOpacity, { onPress: onXpress, style: styles.xContainer },
                react_1.default.createElement(react_native_1.Text, { style: styles.textX }, "X")))));
});
exports.default = WorkoutTimer;
var styles = react_native_1.StyleSheet.create({
    container: {
        position: "absolute",
        bottom: 0,
        left: 0,
        height: 50,
        width: "100%",
        backgroundColor: "#374BE6"
    },
    timeText: {
        color: "#fff",
        fontSize: 20
    },
    xContainer: {
        height: 30,
        width: 30,
        borderRadius: 15,
        backgroundColor: "#2C1A99"
    },
    textX: {
        fontSize: 25,
        margin: "auto",
        color: "#D3DCE0"
    },
    line: {
        height: 3,
        backgroundColor: "#E6E25E"
    },
    row: {
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 30,
        flex: 1
    }
});
