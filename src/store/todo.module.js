const initialState = () => ({
  toDoList: [
    {
      id: 1,
      content: "Idź do sklepu",
      dateAdded: new Date()
    }
  ]
});

const state = initialState();

const actions = {
  addToDo({ commit }, newToDoItem) {
    commit("addToDo", newToDoItem);
  },

  deleteToDo({ commit }, id) {
    commit("deleteToDo", id);
  }
};

const mutations = {
  addToDo(state, newToDoItem) {
    state.toDoList.push(newToDoItem);
  },

  deleteToDo(state, id) {
    state.toDoList = state.toDoList.filter(toDoItem => toDoItem.id !== id);
  }
};

const getters = {
  lastToDoId(state) {
    return state.toDoList.length > 0
      ? Math.max(...state.toDoList.map(todoItem => todoItem.id))
      : 0;
  }
};

export const todo = {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
};
