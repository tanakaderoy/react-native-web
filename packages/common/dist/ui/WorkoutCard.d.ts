import React from "react";
interface WorkoutCardProps {
    excercise: string;
    repsAndWeight: string;
    sets: Array<string>;
    onSetPress: (index: number) => void;
}
declare const WorkoutCard: React.FunctionComponent<WorkoutCardProps>;
export default WorkoutCard;
