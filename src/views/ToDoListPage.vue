<template>
  <div class="home">
    <h1>ToDoList</h1>
    <ToDoItem
      v-for="todoItem in todo"
      :key="`todo_item_${todoItem.id}`"
      :id="todoItem.id"
      :content="todoItem.content"
      :date-added="todoItem.dateAdded"
    />
  </div>
</template>

<script>
import { mapState } from "vuex";

import ToDoItem from "../components/ToDoItem";

export default {
  name: "ToDoList",
  components: {
    ToDoItem
  },
  computed: {
    ...mapState({
      todo: ({ todo }) => todo.toDoList
    })
  }
};
</script>
