<template>
  <div class="container">
    <div class="text-center">
      <app-text-area
        @sendJsons="showFields"
        @sendFields="asignFields"
        @hideFields="hideFields"
        :selected="selected"
      ></app-text-area>
    </div>
    <div class="row">
      <div v-show="areFieldsDisplayed">
        <div class="text-center">
          <h3 v-if="fields.length !== 0">Select what params you want to display</h3>
        </div>
        <div class="align-items-center">
          <app-selector
            v-for="field in fields"
            :key="field"
            @selectField="selectField"
            @removeField="removeField"
            :fieldName="field"
          ></app-selector>
        </div>
      </div>
    </div>
    <app-msgs :msgs="msgs"></app-msgs>
  </div>
</template>

<script>
import TextArea from "./components/TextArea.vue";
import Msgs from "./components/Messages.vue";
import Selector from "./components/FieldSelector.vue";

export default {
  data() {
    return {
      msgs: [],
      fields: [],
      selected: [],
      areFieldsDisplayed: true
    };
  },
  methods: {
    showFields(objToShow) {
      this.msgs = objToShow;
    },
    asignFields(jsonFields) {
      this.fields = jsonFields;
    },
    selectField(fieldName) {
      this.selected.push(fieldName);
    },
    removeField(fieldName) {
      var index = this.selected.indexOf(fieldName);
      if (index > -1) {
        this.selected.splice(index, 1);
      }
    },
    hideFields(hideFields) {
      this.areFieldsDisplayed = hideFields;
    }
  },
  components: {
    appTextArea: TextArea,
    appMsgs: Msgs,
    appSelector: Selector
  }
};
</script>

<style>
</style>
