<template>
  <div class="about">
    <h1>Here we will add ToDo item! {{ lastToDoId }}</h1>
    <label>
      <input type="text" placeholder="ToDo content" v-model="newToDoContent" />
    </label>
    <br />
    <button @click="addToDoItem">Add ToDo</button>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "AddToDoPage",
  data() {
    return {
      newToDoContent: ""
    };
  },
  computed: {
    ...mapGetters("todo", ["lastToDoId"])
  },
  methods: {
    ...mapActions("todo", ["addToDo"]),
    addToDoItem() {
      const dateAdded = new Date();
      const id = this.lastToDoId + 1;
      this.addToDo({ id, content: this.newToDoContent, dateAdded });
    }
  }
};
</script>
