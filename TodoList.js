class Todo {
  constructor() {
    this.tasks = [];
  }

  add(title, description) {
    this.tasks.push({
      title,
      description,
      id: this.tasks.length + 1,
      date: new Date().toLocaleString(),
      priority: true,
      isCompleted: false,
    });
  }

  complete(id) {
    this.tasks = this.tasks.map((i) => {
      if (i.id === id) {
        return {
          ...i,
          date: new Date().toLocaleString(),
          priority: true,
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
    const { id, title, description, date, priority, isCompleted } = task;
    this.tasks = this.tasks.map((i) => {
      if (i.id === id) {
        return {
          ...i,
          title,
          description,
          date,
          priority,
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

class NewTodo extends Todo {
  constructor(tasks) {
    super(tasks);
  }

  dateSort(date) {
    const sortedDate = this.tasks.sort((a, b) => {
      return a.tasks[date] < b.tasks[date]
        ? -1
        : a.tasks[date] > b.tasks[date]
        ? 1
        : 0;
    });
    console.log(sortedDate);
  }

  prioritySort() {
    const prioritySort = this.tasks.sort((x, y) => {
      return x.priority === y.priority ? 0 : x ? -1 : 1;
    });
    console.log(prioritySort);
  }

  titleFilter() {
    const newFilter = this.tasks.sort((a, b) => {
      const atask = a.title.toLocaleLowerCase();
      const btask = b.title.toLocaleLowerCase();
      return atask < btask ? -1 : atask > btask ? 1 : 0;
    });
    console.log(newFilter);
  }
}

const todoList = new Todo();
const newTodo = new NewTodo();

newTodo.dateSort();

todoList.add("Task №1");
todoList.add("Task №2");
todoList.add("Task №3");
todoList.add("Task №4. Выучить HTML, CSS");

newTodo.add("Task №10");
newTodo.add("Task №20");
newTodo.add("a. Установить Git");
newTodo.add("Task №40");

todoList.complete(4);

newTodo.complete(3);

todoList.delete(3);
newTodo.delete(4);

todoList.edit({
  id: 1,
  title: "Выучить JavaScript",
  description: "Установить Node.js" + ", " + "Выучить React",
  date: new Date("18.01.2022, 05:22:10").toLocaleString(),
  priority: true,
  isCompleted: false,
});

todoList.edit({
  id: 2,
  title: "Установить Git",
  description: "Установить VS Code",
  date: new Date("09.12.2021, 22:30:08").toLocaleString(),
  priority: false,
  isCompleted: false,
});

newTodo.edit({
  id: 1,
  title: "Установить Node.js",
  description: "Lorem ipsum dolor sit amet.",
  date: new Date("20.01.2021, 10:22:10").toLocaleString(),
  priority: false,
  isCompleted: false,
});

newTodo.edit({
  id: 2,
  title: " b. ESLint",
  description: "Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.",
  date: new Date("09.02.2022, 05:30:08").toLocaleString(),
  priority: true,
  isCompleted: false,
});

newTodo.prioritySort();

newTodo.titleFilter();

todoList.showTasks();
newTodo.showTasks();

console.log(todoList);
console.log(newTodo);
