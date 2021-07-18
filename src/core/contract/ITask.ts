export interface ITask {
  Id: number
  Execute(): boolean
  Error: string
}

export interface ITaskProcessor<T extends ITask> {
  ProcessTasks(tasks: Array<T>): T
  CurrentTask: T
}

export class TaskProcessor<T extends ITask> implements ITaskProcessor<T> {
  public CurrentTask: T = null
  constructor() {}
  public ProcessTasks(tasks: T[]): T {
    for (var i = 0; i < tasks.length; i++) {
      this.CurrentTask = tasks[i]
      if (this.CurrentTask.Execute() == false) {
        return tasks[i]
      }
    }
    this.CurrentTask = null
    return null
  }
}
