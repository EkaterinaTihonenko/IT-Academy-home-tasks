class Todo {
  constructor() {
    this.tasks = [];
  }

  addTitle(title, description) {
    this.tasks.push({
      title,
      description,
      id: this.tasks.length + 1,
      data: Date(),
      isCompleted: false,
    });
  }

  complete(id) {
    this.tasks = this.tasks.map((i) => {
      if (i.id === id) {
        return {
          ...i,
          data: Date(),
          isCompleted: true,
        };
      } else {
        return i;
      }
    });
  }

  delete(id) {
    this.tasks = this.tasks.filter((i) => i.id !== id);
  }

  edit(task) {
    const { id, title, description, data, isCompleted } = task;
    this.tasks = this.tasks.map((i) => {
      if (i.id === id) {
        return {
          ...i,
          title,
          description,
          data,
          isCompleted,
        };
      }
      return i;
    });
  }

  showTasks() {
    if (this.tasks.length) {
      this.tasks.forEach((i) => {
        console.log(i);
      });
    } else {
      console.log("No tasks!");
    }
  }
}

const todoList = new Todo();

todoList.addTitle("'Task №1'");
todoList.addTitle("'Task №2'");
todoList.addTitle("'Task №3'");
todoList.addTitle("'Task №4'");

todoList.complete(4);

todoList.delete(3);

todoList.edit({
  id: 1,
  title: "Выучить JavaScript",
  description: "Установить Node.js" + ", " + "Выучить React",
  data: Date(),
  isCompleted: false,
});

todoList.edit({
  id: 2,
  title: "Установить Git",
  description: "Установить VS Code",
  data: Date(),
  isCompleted: false,
});

todoList.showTasks();

console.log(todoList);
