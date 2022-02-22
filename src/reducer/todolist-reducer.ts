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
        case 'Todolist/ADD-TODOLIST':
            return [...state, {id: v1(), title: action.title, filter: 'All'}];
        case 'Todolist/UPDATE-TODOLIST':
            return state.map(tl => tl.id === action.todolistId ? {...tl, title: action.title} : tl);
        case'Todolist/CHANGE-FILTER-TODOLIST':
            return state.map(tl => tl.id === action.todolistId ? {...tl, filter: action.filter} : tl);
        default:
            throw new Error("Error")
    }
};
type TodolistActionType =
    RemoveTodolistType | AddTodolistType | UpdateTodolistType | ChangeFilterTodolistType

export type ChangeFilterTodolistType = ReturnType<typeof changeFilterTodolistAC>
export const changeFilterTodolistAC = (todolistId: string, filter: FilterValuesType) => {
    return {
        type: 'Todolist/CHANGE-FILTER-TODOLIST',
        todolistId,
        filter
    } as const
};

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
export type  UpdateTodolistType = ReturnType<typeof updateTodolistAC>
export const updateTodolistAC = (todolistId: string, title: string) => {
    return {
        type: 'Todolist/UPDATE-TODOLIST',
        title, todolistId
    } as const
};

