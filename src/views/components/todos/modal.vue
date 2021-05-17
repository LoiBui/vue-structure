<template>
  <div id="myModal" class="modal">
    <!-- Modal content -->
    <div class="modal-content">
      <span class="close" @click="closeModal">&times;</span>
      <div style="clear: both"></div>
      <br />
      <form @submit.prevent="addTask">
        <input
          type="text"
          class="input-task"
          :class="{ 'input-danger': errors.first('task') }"
          v-model="task"
          v-validate="'required'"
          name="task"
        />
        <span v-show="errors.has('task')" class="help is-danger">{{
          errors.first("task")
        }}</span>
      </form>

      <button class="btn-action btn-add-task" @click="addTask">Add</button>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { PENDING_TASK } from "@/config/todo";
import { makeUuid } from "@/helper";

export default {
  name: "modal",
  props: {
    close: {
      type: Function,
    },
  },
  data() {
    return {
      task: "",
    };
  },
  methods: {
    ...mapActions("todo", {
      addNewTask: "addTask",
    }),
    closeModal() {
      this.close();
    },
    async addTask() {
      const isValid = await this.$validator.validateAll();
      if (isValid) {
        this.addNewTask({
          id: makeUuid(),
          status: PENDING_TASK,
          task: this.task,
        });
        this.close();
      }
    },
  },
};
</script>

<style lang="css">
.btn-add-task {
  float: right;
  margin-top: 10px !important;
  margin: -5px;
}
.input-task {
  width: 99%;
  outline: none;
  border: 1px solid #909090;
  border-radius: 4px;
  height: 30px;
  padding: 0 5px;
  font-size: 15px;
}
.modal {
  position: fixed;
  z-index: 1;
  padding-top: 100px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
}

.modal-content {
  background-color: #fefefe;
  margin: auto;
  padding: 20px;
  border: 1px solid #888;
  width: 40%;
  padding-top: 10px;
  min-height: 130px;
}

.close {
  color: #aaaaaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: #000;
  text-decoration: none;
  cursor: pointer;
}
</style>