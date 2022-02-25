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
        case  'Tasks/ADD-TASK':
            return {
                ...state, [action.todolistId]:
                    [{id: v1(), title: action.title, isDone: false}, ...state[action.todolistId]]
            }
        case 'Tasks/UPDATE - TASK-TITLE':
            return {
                ...state, [action.todolistId]:
                    state[action.todolistId].map(t => t.id === action.taskId ? {...t, title: action.title} : t)
            }

        default:
            return state
    }
};
type TasksActionType =
    RemoveTasksType | AddTasksType
    | UpdateTasksType|ChangeTaskStatusType

export type ChangeTaskStatusType = ReturnType<typeof changeTaskStatusAC>
export const changeTaskStatusAC = (taskId: string, isDone: boolean, todolistId: string) => {
    return {
        type: 'Tasks/CHANGE - TASK-STATUS',
        taskId, isDone, todolistId
    } as const
};

export type UpdateTasksType = ReturnType<typeof updateTaskAC>
export const updateTaskAC = (taskId: string, todolistId: string, title: string) => {
    return {
        type: 'Tasks/UPDATE - TASK-TITLE',
        todolistId, taskId, title
    } as const
};

export type RemoveTasksType = ReturnType<typeof removeTaskAC>
export const removeTaskAC = (taskId: string, todolistId: string,) => {
    return {
        type: 'Tasks/REMOVE-TASK',
        todolistId, taskId
    } as const
};

export type AddTasksType = ReturnType<typeof addTaskAC>
export const addTaskAC = (title: string, todolistId: string,) => {
    return {
        type: 'Tasks/ADD-TASK',
        todolistId, title
    } as const
};

