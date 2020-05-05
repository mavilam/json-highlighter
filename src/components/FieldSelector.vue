

<template>
  <button type="button" class="col-md-auto btn btn-secondary btn-md" :style="{'background-color': backColor}" @click="sendFieldName">{{ fieldName }}</button>
</template>
<script>
export default {
  props: ["fieldName"],
  data() {
    return {
      backColor: ""
    };
  },
  methods: {
    sendFieldName() {
      if (this.backColor === "") {
        this.backColor = "lightgray";
        this.$emit("selectField", this.fieldName);
      } else {
        this.backColor = "";
        this.$emit("removeField", this.fieldName);
      }
    }
  }
};
</script>
<style>
.panel-body {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 12px;
}
.param {
  cursor: pointer;
}
.param:hover {
  background-color: lightgray;
}
button {
  margin: 1px;
}
</style>

