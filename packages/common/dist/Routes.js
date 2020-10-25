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
exports.RouteNames = exports.Routes = void 0;
var react_1 = __importStar(require("react"));
var CurrentWorkout_1 = __importDefault(require("./modules/CurrentWorkout"));
var WorkoutHistory_1 = __importDefault(require("./modules/WorkoutHistory"));
var index_1 = require("./Router/index");
var RootStore_1 = require("./stores/RootStore");
exports.Routes = function () {
    var rootStore = react_1.useContext(RootStore_1.RootStoreContext);
    return (react_1.default.createElement(index_1.Router, null,
        react_1.default.createElement(index_1.Switch, null,
            react_1.default.createElement(index_1.Route, { exact: true, path: exports.RouteNames.workoutHistory, component: WorkoutHistory_1.default }),
            react_1.default.createElement(index_1.Route, { exact: true, path: exports.RouteNames.currentWorkout, component: CurrentWorkout_1.default }),
            react_1.default.createElement(index_1.Route, { exact: true, path: exports.RouteNames.workout, component: CurrentWorkout_1.default }))));
};
exports.RouteNames = {
    workoutHistory: "/",
    currentWorkout: "/current-workout",
    workout: "/workout/:year/:month/:day/:h/:m/:s"
};
