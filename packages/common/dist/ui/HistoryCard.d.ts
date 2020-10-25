/// <reference types="react" />
import { CurrentExercise } from "../stores/WorkoutStore";
interface Props {
    header: string;
    currentExercise: Array<CurrentExercise>;
    onPress: () => void;
}
declare const HistoryCard: ({ header, currentExercise, onPress }: Props) => JSX.Element;
export default HistoryCard;
