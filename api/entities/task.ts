import TaskStatus from "./agreegates/task-status";

export default class Task{
    constructor(
        public id: string,
        public title: string,
        public description: string,
        public status: TaskStatus
    ){}
    

}