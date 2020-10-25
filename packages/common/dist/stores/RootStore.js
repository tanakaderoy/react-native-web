"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RootStoreContext = exports.RootStore = void 0;
var async_storage_1 = __importDefault(require("@react-native-community/async-storage"));
var mobx_persist_1 = require("mobx-persist");
var react_1 = require("react");
var WorkoutStore_1 = require("./WorkoutStore");
var WorkoutTimerStore_1 = require("./WorkoutTimerStore");
var hydrate = mobx_persist_1.create({
    storage: async_storage_1.default,
    jsonify: true
});
var RootStore = /** @class */ (function () {
    function RootStore() {
        var _this = this;
        this.workoutStore = new WorkoutStore_1.WorkoutStore(this);
        this.workoutTimerStore = new WorkoutTimerStore_1.WorkoutTimerStore(this);
        hydrate("workoutTimer", this.workoutTimerStore).then(function () {
            _this.workoutTimerStore.isRunning
                ? _this.workoutTimerStore.measure()
                : null;
        });
        hydrate("workout", this.workoutStore);
    }
    return RootStore;
}());
exports.RootStore = RootStore;
exports.RootStoreContext = react_1.createContext(new RootStore());
