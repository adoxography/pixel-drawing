<template>
  <div class="columns">
    <div class="column">
      <div class="columns">
        <div class="column is-narrow">
          <div style="min-width: 1em">
            <a
              class="icon can-rotate"
              :class="{ 'rotated': !panelShown }"
              :title="panelShown ? 'Hide Panel' : 'Show Panel'"
              @click="panelShown = !panelShown"
            >
              <i class="fas fa-chevron-right"></i>
            </a>

            <transition name="slide-fade">
              <div v-if="panelShown">
                <pixel-side-panel v-model="settings" />
                <div class="field">
                  <label class="label">
                    Frame Rate
                  </label>
                  <p class="control">
                    <input
                      v-model.number="frameRate"
                      type="range"
                      step="1"
                      min="1"
                      max="60"
                      class="slider"
                    >
                  </p>
                </div>
              </div>
            </transition>
          </div>
        </div>

        <div class="column program-container">
          <pixel-toolbar :buttons="toolbarButtons" />

          <div class="field">
            <span class="control">
              <input
                v-model="name"
                class="input"
                @blur="updateName($event.target.value)"
              >
            </span>
          </div>

          <div class="field">
            <pixel-editor v-model="program" />
            <p
              v-show="errorMessage"
              class="has-text-danger"
            >
              Error: {{ errorMessage }}
            </p>
          </div>

          <button
            class="draw-button button is-primary"
            :disabled="errorMessage"
            @click="render"
          >
            Draw!
          </button>
        </div>
      </div>
    </div>
    <div class="column is-narrow">
      <pixel-sketch ref="sketch" />
    </div>

    <pixel-file-select
      v-show="showFileSelect"
      :options="savedFiles"
      @close="showFileSelect = false"
      @input="loadFile"
    />
  </div>
</template>

<script>
import SidePanel from '@/components/SidePanel';
import Sketch from '@/components/Sketch';
import Editor from '@/components/Editor';
import FileSelect from '@/components/FileSelect';
import Toolbar from '@/components/Toolbar';
import { mapActions, mapGetters } from 'vuex';

import programApi from '@/api/programs';
import defaults from '@/defaults';
import { debounce } from '@/util';
import parse from '@/parsing';

export default {
  components: {
    'pixel-side-panel': SidePanel,
    'pixel-sketch': Sketch,
    'pixel-editor': Editor,
    'pixel-file-select': FileSelect,
    'pixel-toolbar': Toolbar
  },

  data() {
    return {
      name: defaults.name,
      program: defaults.program,
      settings: defaults.settings,
      frameRate: defaults.frameRate,

      panelShown: true,
      showFileSelect: false,
      errorMessage: null,

      savedFiles: [],

      toolbarButtons: [
        { icon: 'plus', title: 'New', action: this.newSketch },
        // { icon: 'save', action: this.save },
        // { icon: 'folder-open', action: this.handleOpenClicked },
        // { icon: 'download' },
        // { icon: 'upload' },
        // { icon: 'file-export' },
        // { icon: 'copy' }
      ]
    };
  },

  computed: {
    ...mapGetters('programs', [ 'allPrograms' ])
  },

  created() {
    const name = localStorage.getItem('pixel-last-program');

    if (name !== null) {
      this.loadFile(name);
    }

    this.savedFiles = this.allPrograms;
  },

  mounted() {
    this.getAllPrograms();
    this.render();
  },

  methods: {
    ...mapActions('programs', [
      'saveProgram',
      'renameProgram',
      'getAllPrograms'
    ]),

    render() {
      const pixels = this.parse(this.program);

      if (pixels) {
        this.$refs.sketch.render(
          pixels,
          this.settings.size,
          this.frameRate
        );
        // this.save(this.program);
      }
    },

    onInput(e) {
      this.errorMessage = null;
      this.validate(this.program);
    },

    validate: debounce(function (string) {
      try {
        const program = parse(string).toArray();

        for (const pixel of program) {
          if (pixel && !Object.prototype.hasOwnProperty.call(this.clrs, pixel)) {
            this.errorMessage = `Unknown colour '${pixel}'`;
            break;
          }
        }
      } catch (err) {
        this.errorMessage = err.message;
      }
    }, 500),

    parse(string) {
      console.log(string);
      const program = parse(string).toArray();

      if (program.some(pixel => {
        return pixel
          && !Object.prototype.hasOwnProperty.call(this.settings.clrs, pixel);
      })) {
        return null;
      }

      return program.map(c => c ? this.settings.clrs[c].rgb : null);
    },

    save() {
      this.saveProgram(this.name, {
        program: this.program,
        settings: this.settings
      });

      localStorage.setItem('pixel-last-program', this.name);
    },

    handleOpenClicked() {
      this.showFileSelect = true;
    },

    loadFile(name) {
      programApi.getProgram(name)
        .then(programData => {
          this.program = programData.program;
          this.settings = programData.settings;
          this.name = name;
          this.showFileSelect = false;
          localStorage.setItem('pixel-last-program', name);
        });
    },

    newSketch() {
      this.name = 'Untitled';
      this.program = '';
      this.save();
    },

    updateName(newName) {
      this.renameProgram(this.name, newName);
    }
  }
};
</script>
