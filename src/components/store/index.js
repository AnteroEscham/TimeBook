import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
    todos: []
};

const mutations = {
    ADD_TODO(state, payload) {
        state.todos.push(payload);
    },

    REMOVE_TODO(state, payload) {
        state.todos.forEach((el, i, arr) => {
            if (payload == el) {
                arr.splice(i, 1);
            }
        });
    },

    SET_TODO_STATUS(state, payload) {
        state.todos.forEach(el => {
            if (payload.todo == el) {
                el.status = payload.status;
            }
        });
    }
};

const actions = {
    addTodo(context, item) {
        context.commit('ADD_TODO', item);
    },

    removeTodo(context, item) {
        context.commit('REMOVE_TODO', item);
    },

    setTodoStatus(context, item) {
        context.commit('SET_TODO_STATUS', item);
    }
};

const getters = {
    todos: state => state.todos
};

const store = new Vuex.Store({
    state,
    mutations,
    actions,
    getters
});

export default store;