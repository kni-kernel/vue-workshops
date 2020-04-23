<template>
  <div>
    {{ content }} <br />
    {{ dateAdded.toLocaleString() }} <br />
    <button @click="deleteToDoWithId">Delete</button>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "ToDoItem",
  props: {
    id: Number,
    content: String,
    dateAdded: Date
  },
  methods: {
    ...mapActions("todo", ["deleteToDo"]),
    deleteToDoWithId() {
      this.deleteToDo(this.id);
    }
  }
};
</script>
