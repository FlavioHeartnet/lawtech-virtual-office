import TaskStatus from "./value-objects/task-status";

export default class Task{
    constructor(
        public id: string,
        public title: string,
        public description: string,
        public status: TaskStatus
    ){}
    

}