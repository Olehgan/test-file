import {v1} from "uuid";
import {addTodolistAC, removeTodolistAC, todolistReducer, TodolistType, updateTodolistAC,} from "./todolist-reducer";

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

test('correct todolist should be add', () => {
    let newTodolistTitle = "New Todolist";

    const endState = todolistReducer(startState, addTodolistAC(newTodolistTitle))
    expect(endState.length).toBe(3);
    expect(endState[2].title).toBe(newTodolistTitle);
    expect(endState[2].filter).toBe('All')
});
test('correct todolist change its name', () => {

    let newTodolistTitle = "New Todolist";

    const endState = todolistReducer(startState, updateTodolistAC(todolistId2, newTodolistTitle));
    expect(endState.length).toBe(2);
    expect(endState[0].title).toBe("What to learn");
    expect(endState[1].title).toBe(newTodolistTitle);
    expect(endState[1].filter).toBe('All')
});
