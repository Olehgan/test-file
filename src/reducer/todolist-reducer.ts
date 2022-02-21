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
    RemoveTodolistType

export type RemoveTodolistType = ReturnType<typeof removeTodolistAC>
export const removeTodolistAC = (todolistId: string) => {
    return {
        type: 'Todolist/REMOVE-TODOLIST',
        todolistId
    } as const
};
