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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dayjs_1 = __importDefault(require("dayjs"));
var mobx_react_lite_1 = require("mobx-react-lite");
var react_1 = __importStar(require("react"));
var react_native_1 = require("react-native");
var Routes_1 = require("../Routes");
var RootStore_1 = require("../stores/RootStore");
var FAB_1 = __importDefault(require("../ui/FAB"));
var HistoryCard_1 = __importDefault(require("../ui/HistoryCard"));
var utils_1 = require("../utils/utils");
var WorkoutHistory = mobx_react_lite_1.observer(function (_a) {
    var history = _a.history;
    var workoutStore = react_1.useContext(RootStore_1.RootStoreContext).workoutStore;
    var rows = [];
    Object.entries(workoutStore.history).forEach(function (_a, i) {
        var date = _a[0], exercises = _a[1];
        // const hc = <HistoryCard currentExercise={v} header={dt} key={dt} />;
        if (i % 3 === 0) {
            rows.push([{ date: date, exercises: exercises }]);
        }
        else {
            rows[rows.length - 1].push({ date: date, exercises: exercises });
        }
    });
    var func = function () {
        if (!workoutStore.hasCurrentWorkout) {
            var emptySets = new Array(5).fill("");
            var currentBarbellRow = workoutStore.currentBarbellRow, currentBenchPress = workoutStore.currentBenchPress, currentDeadlift = workoutStore.currentDeadlift, currentExercises = workoutStore.currentExercises, currentSquat = workoutStore.currentSquat, currentoverheadPress = workoutStore.currentoverheadPress;
            if (workoutStore.lastWorkOutType === "b") {
                workoutStore.currentExercises.push({
                    exercise: "Squat",
                    numSets: 5,
                    reps: 5,
                    sets: __spreadArrays(emptySets),
                    weight: currentSquat
                }, {
                    exercise: "BenchPress",
                    numSets: 5,
                    reps: 5,
                    sets: __spreadArrays(emptySets),
                    weight: currentBenchPress
                }, {
                    exercise: "DeadLift",
                    numSets: 1,
                    reps: 5,
                    sets: ["", "x", "x", "x", "x"],
                    weight: currentDeadlift
                });
                workoutStore.currentSquat += 5;
                workoutStore.currentBenchPress += 5;
                workoutStore.currentDeadlift += 5;
            }
            else {
                workoutStore.currentExercises.push({
                    exercise: "Squat",
                    numSets: 5,
                    reps: 5,
                    sets: __spreadArrays(emptySets),
                    weight: currentSquat
                }, {
                    exercise: "OverHeadPress",
                    numSets: 5,
                    reps: 5,
                    sets: __spreadArrays(emptySets),
                    weight: currentoverheadPress
                }, {
                    exercise: "BarbellRow",
                    numSets: 1,
                    reps: 5,
                    sets: __spreadArrays(emptySets),
                    weight: currentBarbellRow
                });
                workoutStore.currentSquat += 5;
                workoutStore.currentoverheadPress += 5;
                workoutStore.currentBarbellRow += 5;
            }
            workoutStore.lastWorkOutType =
                workoutStore.lastWorkOutType === "a" ? "b" : "a";
        }
        history.push(Routes_1.RouteNames.currentWorkout);
    };
    return (react_1.default.createElement(react_native_1.View, { style: styles.container },
        react_1.default.createElement(react_native_1.FlatList, { data: rows, keyExtractor: function (item) { return item.reduce(function (pv, cv) { return pv + " " + cv.date; }, ""); }, renderItem: function (_a) {
                var item = _a.item;
                return (react_1.default.createElement(react_native_1.View, { style: styles.row },
                    item.map(function (_a) {
                        var date = _a.date, exercises = _a.exercises;
                        return (react_1.default.createElement(HistoryCard_1.default, { onPress: function () {
                                var normDate = dayjs_1.default(date).format("YYYY-MM-DD-h-mm-ss");
                                var parts = normDate.split("-");
                                history.push("/workout/" + parts[0] + "/" + parts[1] + "/" + parts[2] + "/" + parts[3] + "/" + parts[4] + "/" + parts[5]);
                            }, currentExercise: exercises, header: date, key: date + utils_1.uuidv4() }));
                    }),
                    item.length < 3 ? (react_1.default.createElement(react_native_1.View, { style: { flex: 1, padding: 10 } })) : null,
                    item.length < 2 ? (react_1.default.createElement(react_native_1.View, { style: { flex: 1, padding: 10 } })) : null));
            } }),
        react_1.default.createElement(FAB_1.default, { onPress: func })));
});
var styles = react_native_1.StyleSheet.create({
    row: {
        flexDirection: "row"
    },
    container: {
        flex: 1
    }
});
exports.default = WorkoutHistory;
