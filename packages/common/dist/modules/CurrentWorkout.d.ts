import React from "react";
import { RouteComponentProps } from "react-router-dom";
interface CurrentWorkoutProps extends RouteComponentProps<{
    year?: string;
    month?: string;
    day?: string;
    h?: string;
    m?: string;
    s?: string;
}> {
}
declare const CurrentWorkout: React.FC<CurrentWorkoutProps>;
export default CurrentWorkout;
