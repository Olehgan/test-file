import {v1} from "uuid";
import {
    FilterValuesType,
    removeTodolistAC,
    todolistReducer,
    TodolistType,
} from "./todolist-reducer";

let todolistId1 = v1();
let todolistId2 = v1();

const startState: Array<TodolistType> = [
    {id: todolistId1, title: "What to learn", filter: "All"},
    {id: todolistId2, title: "What to buy", filter: "All"}
];

test('correct todolist should be removed', () => {

    const endState = todolistReducer(startState, removeTodolistAC(todolistId1));

    expect(endState.length).toBe(1);
    expect(endState[0].id).toBe(todolistId2);
});
