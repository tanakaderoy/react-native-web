"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_native_1 = require("react-native");
var FAB = function (_a) {
    var onPress = _a.onPress;
    return (react_1.default.createElement(react_native_1.TouchableOpacity, { onPress: onPress, style: styles.fab },
        react_1.default.createElement(react_native_1.Text, { style: styles.text }, "+")));
};
exports.default = FAB;
var styles = react_native_1.StyleSheet.create({
    text: { fontSize: 18, marginLeft: 2, marginBottom: 2 },
    fab: {
        width: 40,
        height: 40,
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "pink",
        position: "absolute",
        bottom: 20,
        right: 20
    }
});
