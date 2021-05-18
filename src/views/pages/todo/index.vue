<template>
  <div class="todos">
    <button class="btn-action btn-add" @click="toggleModal">
      <i class="fas fa-plus"></i>
    </button>
    <list-todo></list-todo>
    <modal v-show="isShowModal" :close="closeModal"></modal>
  </div>
</template>

<script>
import listTodo from "@/views/components/todos/listTodo";
import Modal from "../../components/todos/modal.vue";


export default {
  name: "todos",
  components: {
    listTodo,
    Modal,
  },
  data() {
    return {
      isShowModal: false,
    };
  },
  mounted() {
    this.$store.dispatch("todo/getTodos");
  },
  methods: {
    toggleModal() {
      this.isShowModal = !this.isShowModal;
    },
    closeModal() {
      this.isShowModal = false;
    },
  },
};
</script>

<style lang="css" scoped>
.todos {
  width: 80%;
  min-height: 600px;
  background: white;
  margin: 0 auto;
  border-radius: 10px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  position: relative;
}
.btn-add {
  position: absolute;
  top: 25px;
  right: 10px;
  color: #ff9a00;
}
</style>