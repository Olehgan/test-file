import {v1} from "uuid";

export type FilterValuesType = 'All' | 'Active' | 'Completed';
export type TodolistType = {
    id: string
    title: string
    filter: FilterValuesType
}
export const todolistReducer = (state: TodolistType[], action: TodolistActionType) => {
    switch (action.type) {
        case 'Todolist/REMOVE-TODOLIST':
            return state.filter(tl => tl.id !== action.todolistId);
        default:
            throw new Error("Error")
    }
};
type TodolistActionType =
    RemoveTodolistType | AddTodolistType

export type RemoveTodolistType = ReturnType<typeof removeTodolistAC>
export const removeTodolistAC = (todolistId: string) => {
    return {
        type: 'Todolist/REMOVE-TODOLIST',
        todolistId
    } as const
};
export type AddTodolistType = ReturnType<typeof addTodolistAC>
export const addTodolistAC = (title: string) => {
    return {
        type: 'Todolist/ADD-TODOLIST',
        title
    } as const
};