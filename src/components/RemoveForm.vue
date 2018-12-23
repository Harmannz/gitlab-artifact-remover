<template>
  <div class="removeForm">
    <template>
      <form id="FormValidation" class="md-layout md-alignment-center-center"
            novalidate @submit.prevent="validateFields">
        <md-card md-with-hover class="md-layout-item md-size-66">

          <md-card-content>
            <div class="md-layout md-gutter">
              <div class="md-layout-item md-small-size-100">
                <md-field :class="getValidationClass('startId')">
                  <label for="start-id">Start Id</label>
                  <md-input name="start-id" type="number" id="start-id"
                            v-model="form.startId" :disabled="deleting" />
                  <span class="md-error" v-if="!$v.form.startId.required">
                    The start id is required
                  </span>
                  <span class="md-error" v-else-if="!$v.form.startId.minlength">
                    Invalid start id
                  </span>
                </md-field>
              </div>

              <div class="md-layout-item md-small-size-100">
                <md-field :class="getValidationClass('endId')">
                  <label for="end-id" >End Id</label>
                  <md-input name="end-id" type="number" id="end-id"
                            v-model="form.endId" :disabled="deleting" />
                  <span class="md-error" v-if="!$v.form.endId.required">
                    The end id is required
                  </span>
                  <span class="md-error" v-else-if="!$v.form.endId.minlength">
                    Invalid end id
                  </span>
                </md-field>
              </div>
            </div>

            <div class="md-layout md-gutter">

              <div class="md-layout-item md-small-size-100">
                <md-field :class="getValidationClass('token')">
                  <label for="token">Token</label>
                  <md-input id="token" name="token" v-model="form.token" :disabled="deleting" />
                  <span class="md-error" v-if="!$v.form.token.required">
                    The API Token is required
                  </span>
                </md-field>
              </div>
            </div>

            <md-field :class="getValidationClass('baseUrl')">
              <label for="base-url">Server Hostname</label>
              <md-input type="base-url" name="base-url" id="base-url"
                        v-model="form.baseUrl" :disabled="deleting" />
              <span class="md-error" v-if="!$v.form.baseUrl.required">
                The host url is required
              </span>
            </md-field>
          </md-card-content>

          <md-progress-bar md-mode="indeterminate" v-if="deleting" />

          <md-card-actions>
            <md-button type="submit" class="md-primary" :disabled="deleting">
              Delete Artifacts
            </md-button>
          </md-card-actions>
        </md-card>
        <md-snackbar :md-active.sync="artifactsDeleted">
          The artifacts {{ form.startId }} was saved with success!
        </md-snackbar>
      </form>
    </template>

    <!--/container-->
  </div>

</template>

<script>
import { validationMixin } from 'vuelidate';
import { required } from 'vuelidate/lib/validators';

export default {
  components: {},
  name: 'FormValidation',
  mixins: [validationMixin],
  data: () => ({
    form: {
      baseUrl: null,
      projectId: null,
      token: null,
      startId: null,
      endId: null,
    },
    artifactsDeleted: false,
    deleting: false,
  }),
  validations: {
    form: {
      startId: {
        required,
      },
      endId: {
        required,
      },
      token: {
        required,
      },
      baseUrl: {
        required,
      },
    },
  },
  methods: {
    getValidationClass(fieldName) {
      const field = this.$v.form[fieldName];

      if (field) {
        return {
          'md-invalid': field.$invalid && field.$dirty,
        };
      }
      return 'md-invalid';
    },
    clearForm() {
      this.$v.$reset();
      this.form.startId = null;
      this.form.endId = null;
      this.form.token = null;
      this.form.baseUrl = null;
    },
    deleteArtifacts() {
      this.deleting = true;
      // this.$Progress.start();
      // this.$Progress.finish();
      this.clearForm();
      this.artifactsDeleted = true;
      window.setTimeout(() => {
        this.deleting = false;
      }, 5000);
      // https://stackoverflow.com/questions/45403463/progress-bar-with-vue-and-axios
    },
    validateFields() {
      this.$v.$touch();

      if (!this.$v.$invalid) {
        this.deleteArtifacts();
      }
    },
  },
};
</script>

<style lang="scss" scoped>
  .md-progress-bar {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
  }
</style>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import "~vue-material/dist/theme/engine"; // Import the theme engine

  @include md-register-theme("default", (
    primary: #706dff, // The primary color of your brand
    accent: #6ea0e8 // The secondary color of your brand
  ));
  @import "~vue-material/dist/theme/all"; // Apply the theme
</style>
