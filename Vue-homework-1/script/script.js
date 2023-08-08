new Vue({
  el: "#list",
  data: {
    textBtn: "Кнопка перевертыш",
    input: "",
    todoList: []
  },
  methods: {
    reverseBtn() {
      this.textBtn = this.textBtn.split("").reverse().join("");
    },
    addToDo() {
      this.todoList.push({
        id: Date.now().toString(),
        todo: this.input
      });
      this.input = "";
    },
    removeToDo(item) {
      this.todoList = this.todoList.filter((value) => value.id !== item.id);
    }
  }
});
