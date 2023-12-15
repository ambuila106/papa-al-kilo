<template>
  <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" :class="{ 'show': true }">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          ...
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'FModal',
  props: {
    type: {
      type: String,
      default: 'text'
    }
  }
}
</script>

<style>
.f-social-button {
  border: 1px solid;
  border-color: #3461fc75;
  padding: 10px;
  border-radius: 10px;
}

.f-social-button img {
  width: 25px;
}
</style>