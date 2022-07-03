class Todo {
  id: string;
  text: string;

  constructor(todoText: string) {
    this.text = todoText;
    this.id = String(Math.random() * 10);
  }
}

export default Todo;
