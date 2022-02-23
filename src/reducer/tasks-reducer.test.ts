import {removeTaskAC, tasksReducer, TasksType} from "./tasks-reducer";

let startState : TasksType = {}
beforeEach(()=>{
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




