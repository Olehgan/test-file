import {addTaskAC, changeTaskStatusAC, removeTaskAC, tasksReducer, TasksType, updateTaskAC} from "./tasks-reducer";
import {addTodolistAC, removeTodolistAC} from "./todolist-reducer";

let startState: TasksType = {}
beforeEach(() => {
    startState = {
        "todolistID1": [
            {id: '1', title: "HTML&CSS", isDone: true},
            {id: '2', title: "JS", isDone: true},
            {id: '3', title: "ReactJS", isDone: false},
        ],
        "todolistID2": [
            {id: '1', title: "HTML&CSS2", isDone: true},
            {id: '2', title: "JS2", isDone: true},
            {id: '3', title: "ReactJS2", isDone: false},
        ]
    }
})
test('correct task should be deleted from correct array', () => {

    const endState = tasksReducer(startState, removeTaskAC('1', "todolistID2"));

    expect(endState["todolistID1"].length).toBe(3);
    expect(endState["todolistID2"].length).toBe(2);

});
test('correct tasks should be add', () => {

    const newTitle = "new Title"

    const endState = tasksReducer(startState, addTaskAC(newTitle, 'todolistID2'))

    expect(endState["todolistID1"].length).toBe(3);
    expect(endState["todolistID1"][0].isDone).toBe(true);
    expect(endState["todolistID1"][0].title).toBe("HTML&CSS");
    expect(endState["todolistID2"].length).toBe(4);
    expect(endState["todolistID2"][0].title).toBe(newTitle);
    expect(endState["todolistID2"][0].isDone).toBe(false);

});
test('title of specified task should be changed', () => {

    const newTitle = "new Title"

    const endState = tasksReducer(startState, updateTaskAC('1', 'todolistID2', newTitle,))
    expect(endState['todolistID1'][0].title).toBe("HTML&CSS");
    expect(endState["todolistID2"][0].title).toBe(newTitle);

});
test('status of specified task should be changed', () => {

    const endState = tasksReducer(startState, changeTaskStatusAC('1', false, "todolistID2"))

    expect(endState["todolistID1"][0].isDone).toBe(true);
    expect(endState["todolistID2"][0].isDone).toBe(false);
});
test('new array should be added when new todolist is added', () => {
    const endState = tasksReducer(startState, addTodolistAC("new todolist"))
    const keys = Object.keys(endState);
    const newKey = keys.find(k => k !== "todolistID1" && k !== "todolistID2");
    if (!newKey) {
        throw Error("new key should be added")
    }

    expect(keys.length).toBe(3);
    expect(endState[newKey]).toEqual([]);
});

test('property with todolistId should be deleted', () => {
    const action = removeTodolistAC("todolistID2");
    const endState = tasksReducer(startState, action)
    const keys = Object.keys(endState);

    expect(keys.length).toBe(1);
    expect(endState["todolistId2"]).not.toBeDefined();
});

