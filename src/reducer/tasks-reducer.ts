import {v1} from "uuid";
import {todolistID1, todolistID2} from "./todolist-reducer";

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}
export type TasksType = { [key: string]: TaskType[] }

const initialState: TasksType = {
    [todolistID1]: [
        {id: v1(), title: "HTML&CSS", isDone: true},
        {id: v1(), title: "JS", isDone: true},
        {id: v1(), title: "ReactJS", isDone: false},
        {id: v1(), title: "Rest API", isDone: false},
        {id: v1(), title: "GraphQL", isDone: false},
    ],
    [todolistID2]: [
        {id: v1(), title: "HTML&CSS2", isDone: true},
        {id: v1(), title: "JS2", isDone: true},
        {id: v1(), title: "ReactJS2", isDone: false},
        {id: v1(), title: "Rest API2", isDone: false},
        {id: v1(), title: "GraphQL2", isDone: false},
    ]
}
export const tasksReducer = (state = initialState, action: TasksActionType) => {
    switch (action.type) {
        case 'Tasks/REMOVE-TASK':
            return {...state, [action.todolistId]: state[action.todolistId].filter(t => t.id !== action.taskId)}
        default:
            return state
    }
};
type TasksActionType =
    RemoveTasksType

export type RemoveTasksType = ReturnType<typeof removeTaskAC>
export const removeTaskAC = (taskId: string, todolistId: string,) => {
    return {
        type: 'Tasks/REMOVE-TASK',
        todolistId, taskId
    } as const
};

