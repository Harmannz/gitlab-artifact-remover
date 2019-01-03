<template>
  <div class="removeForm">
    <template>
      <form id="FormValidation" class="md-layout md-alignment-center-center"
        v-bind:class="{ invalidFormValidation: error}"
        novalidate @submit.prevent="validateFields">
        <md-card md-with-hover class="md-layout-item md-size-66">

          <md-card-content>
            <div class="md-layout md-gutter">
              <div class="md-layout-item md-small-size-100">
                <md-field :class="getValidationClass('projectId')">
                  <label for="project-id">Project Id</label>
                  <md-input name="project-id" type="number" id="project-id"
                            v-model.number="form.projectId" :disabled="deleting" />
                  <span class="md-error" v-if="!$v.form.projectId.required">
                    The project id is required
                  </span>
                </md-field>
              </div>

              <div class="md-layout-item md-small-size-100">
                <md-field :class="getValidationClass('startId')">
                  <label for="start-id">Start Id</label>
                  <md-input name="start-id" type="number" id="start-id"
                            v-model.number="form.startId" :disabled="deleting" />
                  <span class="md-error" v-if="!$v.form.startId.required">
                    The start id is required
                  </span>
                </md-field>
              </div>

              <div class="md-layout-item md-small-size-100">
                <md-field :class="getValidationClass('endId')">
                  <label for="end-id" >End Id</label>
                  <md-input name="end-id" type="number" id="end-id"
                            v-model.number="form.endId" :disabled="deleting" />
                  <span class="md-error" v-if="!$v.form.endId.required">
                    The end id is required
                  </span>
                  <span class="md-error" v-else-if="!$v.form.endId.endIdGreaterThanOrEqualStartId">
                    Must be greater or equal to start id
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

          <md-progress-bar v-if="performingAction"
            v-bind:class="{ 'md-accent': error, 'md-primary': success}"
            :md-mode="deleting ? 'indeterminate' : 'determinate'"
            :md-value="100" />

          <md-card-actions>
            <md-button type="submit" class="md-raised md-primary" :disabled="deleting">
              Delete Artifacts
            </md-button>
          </md-card-actions>
        </md-card>
        <md-snackbar :md-active.sync="success" md-position="left" :md-duration="10000">
          The artifacts {{ form.startId }} to {{ form.endId }} were deleted!!
        </md-snackbar>
        <md-snackbar :md-active.sync="error" md-position="left" :md-duration="15000">
          There was a problem deleting artifacts. Please retry.
        </md-snackbar>
      </form>
    </template>

    <!--/container-->
  </div>

</template>

<script>
import { validationMixin } from 'vuelidate';
import { numeric, required } from 'vuelidate/lib/validators';

const axios = require('axios');

const endIdGreaterThanOrEqualStartId = (value, vm) => vm.startId <= value;

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
    deleting: false,
    success: false,
    error: false,
  }),
  computed: {
    performingAction: function performingAction() {
      return this.deleting || this.success || this.error;
    },
  },
  validations: {
    form: {
      startId: {
        required,
        numeric,
      },
      endId: {
        required,
        numeric,
        endIdGreaterThanOrEqualStartId,
      },
      projectId: {
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
    },
    buildRequest(jobId) {
      return axios.post(
        `https://${this.form.baseUrl}/api/v4/projects/${this.form.projectId}/jobs/${jobId}/erase`,
        {},
        {
          headers: {
            'PRIVATE-TOKEN': this.form.token,
          },
        },
      );
    },
    deleteArtifacts() {
      // turn this into batch processing to sequentially handle large number of requests.
      this.deleting = true;
      this.error = false;
      this.success = false;
      // build requests array
      const requests = [];
      for (let i = this.form.startId; i <= this.form.endId; i += 1) {
        requests.push(this.buildRequest(i));
      }

      // execute requests in parallel
      axios.all(requests)
        .then(axios.spread(() => {
          // do something with both responses
          this.success = true;
          this.deleting = false;
          this.clearForm();
        }))
        .catch(() => {
          this.error = true;
          this.deleting = false;
          this.clearForm();
        });
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.md-progress-bar {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
}

.invalidFormValidation {
  animation: shake 0.82s cubic-bezier(.36,.07,.19,.97) both;
  transform: translate3d(0, 0, 0);
  backface-visibility: hidden;
  perspective: 1000px;
}

@keyframes shake {
  10%, 90% {
    transform: translate3d(-1px, 0, 0);
  }
  20%, 80% {
    transform: translate3d(2px, 0, 0);
  }
  30%, 50%, 70% {
    transform: translate3d(-4px, 0, 0);
  }
  40%, 60% {
    transform: translate3d(4px, 0, 0);
  }
}
</style>
