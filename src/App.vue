
<template>
  <v-app dark>
    <v-container class="justify-center">
      <div class="text-center">
        <app-text-area
          :selected="selected"
          @sendJsons="showFields"
          @sendFields="asignFields"
          @showSnackBar="snackbar = true"
          @hideFields="hideFields"
        />
      </div>
      <v-row class="fields">
        <div v-show="areFieldsDisplayed">
          <div class="text-center">
            <h3 v-if="fields.length !== 0">
              Select what params you want to display
            </h3>
          </div>
          <v-container
            grid-list-md
            text-xs-center
          >
            <v-layout
              row
              wrap
            >
              <app-selector
                v-for="field in fields"
                :key="field"
                :field-name="field"
                @selectField="selectField"
                @removeField="removeField"
              />
            </v-layout>
          </v-container>
        </div>
      </v-row>
      <div
        v-for="(msg, index) in msgs"
        :key="index"
      >
        <app-msgs :msg="msg" />
      </div>
      <v-snackbar
        v-model="snackbar"
        :timeout="4000"
        :color="snackColor"
      >
        {{ snackBarText }}
        <v-btn
          @click.native="snackbar = false"
        >
          Close
        </v-btn>
      </v-snackbar>
    </v-container>
  </v-app>
</template>

<script>
import TextArea from "./components/TextArea.vue"
import Msgs from "./components/Messages.vue"
import Selector from "./components/FieldSelector.vue"

export default {
  components: {
    appTextArea: TextArea,
    appMsgs: Msgs,
    appSelector: Selector
  },
  data() {
    return {
      msgs: [],
      fields: [],
      selected: [],
      areFieldsDisplayed: true,
      snackBarText: "There was an error with the messages, are they correctly format?",
      snackbar: false,
      snackColor: "#1976d2"
    }
  },
  methods: {
    showFields(objToShow) {
      this.msgs = objToShow
    },
    asignFields(jsonFields) {
      this.fields = jsonFields.sort()
    },
    selectField(fieldName) {
      this.selected.push(fieldName)
    },
    removeField(fieldName) {
      var index = this.selected.indexOf(fieldName)
      if (index > -1) {
        this.selected.splice(index, 1)
      }
    },
    hideFields(hideFields) {
      this.areFieldsDisplayed = hideFields
    }
  }
}
</script>

<style>
  body {
    margin: 2em;
    color: cornflowerblue;
    margin-left: 15%;
    margin-right: 15%;
  }
  h3 {
    color: #3D5F82;
  }
  .fields {
    margin-top: 1em;
  }
</style>
