import {v1} from "uuid";

export let todolistID1 = v1();
export let todolistID2 = v1();

export type FilterValuesType = 'All' | 'Active' | 'Completed';

export type TodolistType = {
    id: string
    title: string
    filter: FilterValuesType
}
const initialState: TodolistType[] = [
    {id: todolistID1, title: 'What to learn', filter: 'All'},
    {id: todolistID2, title: 'What to buy', filter: 'All'},
]

export const todolistReducer = (state=initialState, action: TodolistActionType) => {
    switch (action.type) {
        case 'Todolist/REMOVE-TODOLIST':
            return state.filter(tl => tl.id !== action.todolistId)
        case 'Todolist/ADD-TODOLIST':
            return [...state, {id: action.todolistId, title: action.title, filter: 'All'}]
        case 'Todolist/UPDATE-TODOLIST':
            return state.map(tl => tl.id === action.todolistId ? {...tl, title: action.title} : tl)
        case'Todolist/CHANGE-FILTER-TODOLIST':
            return state.map(tl => tl.id === action.todolistId ? {...tl, filter: action.filter} : tl)
        default:
            return state
    }
}
type TodolistActionType =
    RemoveTodolistType | AddTodolistType | UpdateTodolistType | ChangeFilterTodolistType

export type ChangeFilterTodolistType = ReturnType<typeof changeFilterTodolistAC>
export const changeFilterTodolistAC = (todolistId: string, filter: FilterValuesType) => {
    return {
        type: 'Todolist/CHANGE-FILTER-TODOLIST',
        todolistId,
        filter
    } as const
}

export type RemoveTodolistType = ReturnType<typeof removeTodolistAC>
export const removeTodolistAC = (todolistId: string) => {
    return {
        type: 'Todolist/REMOVE-TODOLIST',
        todolistId
    } as const
}
export type AddTodolistType = ReturnType<typeof addTodolistAC>
export const addTodolistAC = (title: string) => {
    return {
        type: 'Todolist/ADD-TODOLIST',
        title,
        todolistId: v1()
    } as const
}
export type  UpdateTodolistType = ReturnType<typeof updateTodolistAC>
export const updateTodolistAC = (todolistId: string, title: string) => {
    return {
        type: 'Todolist/UPDATE-TODOLIST',
        title, todolistId
    } as const
}

