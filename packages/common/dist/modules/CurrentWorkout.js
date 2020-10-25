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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dayjs_1 = __importDefault(require("dayjs"));
var mobx_react_lite_1 = require("mobx-react-lite");
var react_1 = __importStar(require("react"));
var react_native_1 = require("react-native");
var RootStore_1 = require("../stores/RootStore");
var WorkoutCard_1 = __importDefault(require("../ui/WorkoutCard"));
var WorkoutTimer_1 = __importDefault(require("../ui/WorkoutTimer"));
var utils_1 = require("../utils/utils");
var CurrentWorkout = mobx_react_lite_1.observer(function (_a) {
    var history = _a.history, _b = _a.match.params, year = _b.year, day = _b.day, month = _b.month, h = _b.h, m = _b.m, s = _b.s;
    var isCurrentWorkout = !year && !month && !day;
    var dateKey = year + "-" + month + "-" + day + " " + h + ":" + m + ":" + s;
    var _c = react_1.useContext(RootStore_1.RootStoreContext), workoutStore = _c.workoutStore, workoutTimerStore = _c.workoutTimerStore;
    console.log(dateKey);
    react_1.useEffect(function () {
        return function () {
            workoutTimerStore.stopTimer();
        };
    }, []);
    return (react_1.default.createElement(react_native_1.View, { style: styles.container },
        react_1.default.createElement(react_native_1.ScrollView, { keyboardShouldPersistTaps: "always", contentContainerStyle: styles.scrollContainer },
            (isCurrentWorkout
                ? workoutStore.currentExercises
                : workoutStore.history[dateKey]).map(function (it) {
                return (react_1.default.createElement(WorkoutCard_1.default, { onSetPress: function (setIndex) {
                        workoutTimerStore.startTimer();
                        var v = it.sets[setIndex];
                        var newValue;
                        if (v === "") {
                            newValue = "" + it.reps;
                        }
                        else if (v === "0") {
                            workoutTimerStore.stopTimer();
                            newValue = "";
                        }
                        else {
                            newValue = "" + (parseInt(v) - 1);
                        }
                        it.sets[setIndex] = newValue;
                    }, key: it.exercise + it.reps + it.weight + it.sets + utils_1.uuidv4(), excercise: it.exercise, repsAndWeight: it.reps + "x" + it.numSets + " " + it.weight, sets: it.sets }));
            }),
            react_1.default.createElement(react_native_1.Button, { title: "SAVE", onPress: function () {
                    if (isCurrentWorkout) {
                        workoutStore.history[dayjs_1.default().format("YYYY-MM-DD h:mm:ss")] =
                            workoutStore.currentExercises;
                        workoutStore.currentExercises = [];
                    }
                    history.push("/");
                } })),
        workoutTimerStore.isRunning ? (react_1.default.createElement(WorkoutTimer_1.default, { percent: workoutTimerStore.percent, currentTime: workoutTimerStore.display, onXpress: function () { return workoutTimerStore.stopTimer(); } })) : null));
});
var styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fafafa"
    },
    scrollContainer: {
        padding: 10,
        marginBottom: 50
    }
});
exports.default = CurrentWorkout;
