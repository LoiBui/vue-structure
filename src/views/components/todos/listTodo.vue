<template>
  <div>
    <h1 class="title">Pending Task</h1>
    <ul class="list-todo" v-if="pendingTask.length > 0">
      <item
        v-for="(item, index) in pendingTask"
        :key="index"
        :item="item"
        :on-done="onDoneTask"
        :on-delete="onDelete"
      ></item>
    </ul>
    <div v-else>
      <p class="txt-msg">Pending task is empty</p>
    </div>

    <h1 class="title">Done Task</h1>
    <ul class="list-todo" v-if="doneTask.length > 0">
      <item
        v-for="(item, index) in doneTask"
        :key="index"
        :item="item"
        :on-delete="onDelete"
        :on-up="onUp"
        :type="1"
      ></item>
    </ul>
    <div v-else>
      <p class="txt-msg">Done task is empty</p>
    </div>
  </div>
</template>

<script>
import Item from "./item";
import { mapGetters } from "vuex";
import { PENDING_TASK } from "@/config/todo";

export default {
  name: "listTodo",
  components: {
    Item,
  },
  computed: {
    ...mapGetters("todo", ["pendingTask", "doneTask"]),
  },
  methods: {
    onDoneTask(id) {
      this.$store.dispatch("todo/doneTask", { id });
    },
    onDelete(id) {
      this.$store.dispatch("todo/deleteTask", { id });
    },
    onUp(id) {
      this.$store.dispatch("todo/updateStatusTask", {
        id,
        status: PENDING_TASK,
      });
    },
  },
};
</script>

<style lang="css" scoped>
.list-todo {
  list-style: none;
  margin: 0;
  padding: 0;
}
.title {
  text-align: center;
  padding-top: 20px;
}
.txt-msg {
  text-align: center;
}
</style>