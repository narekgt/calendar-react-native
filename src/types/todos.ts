export interface Todo {
   id: string;
   text: string;
   completed: boolean;
   date: string;
}

export interface TodosState {
   todos: Todo[];
}