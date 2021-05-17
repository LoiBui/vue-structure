<template>
  <li class="item">
    <div class="content">
      {{item.task}}
    </div>
    <div class="actions">
        <button class="btn-action btn-done" @click="onDone(item.id)" v-show="type === 0">
            <i class="fas fa-check"></i>
        </button>
        <button class="btn-action btn-up" @click="onUp(item.id)" v-show="type === 1">
            <i class="fas fa-chevron-up"></i>
        </button>
        <button class="btn-action btn-remove" @click="onDelete(item.id)">
            <i class="fas fa-trash-alt"></i>
        </button>
    </div>
  </li>
</template>

<script>
export default {
    name: "Item",
    props: {
        item: {
            type: Object,
            required: true
        },
        onDone: {
            type: Function,
        },
        onDelete: {
            type: Function,
        },
        onUp: {
            type: Function,
        },
        type: {
            type: Number,
            default: 0
        }
    }
};
</script>

<style lang="css" scoped>
    .item{
        display: flex;
        padding: 10px;
        border-bottom: 1px solid #f0f0f0;
    }
    .item:hover{
        background: #f0f0f0;
        cursor: auto;
    }
    .actions{
        display: flex;
        justify-items: center;
        align-items: center;
    }
    .btn-done{
        color: #28a745;
    }

    .btn-remove{
        color: #dc3545;
    }
    .content{
        width: 90%;
        display: flex;
        align-items: center;
    }
    .btn-up{
        color: orange;
    }
</style>