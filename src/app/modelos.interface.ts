export interface Task {
  idList: number;
  idTask: number;
  name: string;
  description: string;
  complete: boolean;
  color: string;
  expiration: Date;
}

export interface TaskList {
  id: number;
  name: string;
  tasks: Array < Task > ;
}

export interface Data {
  lists: Array < TaskList > ;
}
