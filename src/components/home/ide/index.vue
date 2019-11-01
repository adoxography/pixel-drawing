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
                <pixel-side-panel
                  v-model="program.settings"
                  @input="handlePanelInput"
                />
              </div>
            </transition>
          </div>
        </div>

        <div class="column program-container">
          <pixel-toolbar :buttons="toolbarButtons" />

          <div class="field">
            <span class="control">
              <input
                v-model="program.name"
                class="input"
                aria-label="Program name"
              >
            </span>
          </div>

          <div class="field">
            <pixel-editor
              v-model="program.text"
              :clrs="program.settings.clrs"
              @input="handleInput"
            />
            <p
              v-show="errorMessage"
              class="has-text-danger"
            >
              Error: {{ errorMessage }}
            </p>

            <div class="field">
              <span class="control">
                <label class="checkbox">
                  <input
                    :checked="autoSave"
                    type="checkbox"
                    @input="updateAutoSave($event.target.checked)"
                  >
                  Auto Save
                </label>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="column is-narrow">
      <div class="field">
        <button
          class="draw-button button is-success"
          title="Draw!"
          :disabled="errorMessage"
          @click="render"
        >
          <span class="icon">
            <i class="fas fa-flag"></i>
          </span>
        </button>
      </div>

      <pixel-sketch
        ref="sketch"
        :size="program.settings.size"
        :frame-rate="program.settings.frameRate"
      />
    </div>

    <pixel-file-select
      v-show="showFileSelect"
      :options="allPrograms.map(p => {return {id: p.id, name: p.name}})"
      @close="showFileSelect = false"
      @input="handleLoadProgram($event)"
    />
  </div>
</template>

<script>
import SidePanel from './SidePanel';
import Sketch from './Canvas';
import Editor from './Editor';
import Toolbar from './Toolbar';
import FileSelect from '@/components/util/FileSelect';
import { mapActions, mapGetters } from 'vuex';

import defaults from '@/defaults';
import { debounce, openFile, pushDownload } from '@/util';
import { Program } from '@/program';
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
      panelShown: true,
      showFileSelect: false,
      errorMessage: null,
      dirty: false,

      program: null,

      toolbarButtons: [
        {
          icon: 'plus',
          title: 'New',
          action: this.createNew
        },
        {
          icon: 'save',
          title: 'Save',
          action: this.save,
          disabled: () => !this.dirty
        },
        {
          icon: 'folder-open',
          title: 'Load',
          action: this.handleOpenClicked,
          disabled: () => this.allPrograms.length === 0
        },
        {
          icon: 'copy',
          title: 'Duplicate',
          action: this.duplicate,
          disabled: () => this.program.id === null
        },
        {
          icon: 'download',
          title: 'Download',
          action: this.handleDownload
        },
        {
          icon: 'upload',
          title: 'Upload',
          action: () => this.handleUpload()
        },
        // { icon: 'file-export' },
      ]
    };
  },

  computed: {
    ...mapGetters('programs', [
      'allPrograms',
      'maxId',
      'lastProgram'
    ]),

    ...mapGetters([ 'autoSave' ])
  },

  created() {
    this.program = new Program(this.lastProgram);
    this.dirty = false;
  },

  mounted() {
    this.render();
  },

  methods: {
    ...mapActions('programs', [
      'saveProgram',
      'tapProgram',
      'updateAutoSave'
    ]),

    ...mapActions([ 'updateAutoSave' ]),

    render() {
      const pixels = this.parse(this.program.text);

      if (pixels) {
        this.$refs.sketch.render(pixels);
      }
    },

    handleInput(e) {
      this.errorMessage = null;
      this.validate(this.program.text);
      this.handleChange();
    },

    handlePanelInput(e) {
      this.handleChange();
    },

    handleChange(e) {
      this.dirty = true;
      this.autoSave && this.save();
    },

    handleDownload() {
      const fileName = this.program.name + '.pxl';
      const data = this.program.toString();

      pushDownload(fileName, data);
    },

    handleUpload() {
      const options = {
        accept: '.pxl'
      };

      openFile(options).then(data => {
        if (!this.dirty || confirm('Unsaved changes. Continue?')) {
          const program = Program.parse(data.body);
          program.name = data.name.match(/^(.*)\..*$/)[1];
          this.program = program;
        }
      });
    },

    validate: debounce(function (string) {
      try {
        const program = parse(string).toArray();

        for (const pixel of program) {
          if (pixel && !{}.hasOwnProperty.call(this.program.settings.clrs, pixel)) {
            this.errorMessage = `Unknown colour '${pixel}'`;
            break;
          }
        }
      } catch (err) {
        this.errorMessage = err.message;
      }
    }, 500),

    parse(string) {
      const program = parse(string).toArray();

      if (program.some(pixel => {
        return pixel && !{}.hasOwnProperty.call(this.program.settings.clrs, pixel);
      })) {
        return null;
      }

      return program.map(c => this.program.settings.clrs[c]);
    },

    createNew() {
      if (!this.dirty || confirm('Unsaved changes. Continue?')) {
        this.program = new Program();
      }
    },

    duplicate() {
      if (!this.dirty || confirm('Unsaved changes. Continue?')) {
        const newProgram = this.program.clone();
        newProgram.id = null;
        newProgram.name += ' (2)';

        this.program = newProgram;
      }
    },

    save() {
      if (!this.program.id) {
        this.program.id = this.maxId + 1;
      }
      this.saveProgram(this.program);
      this.dirty = false;
    },

    handleOpenClicked() {
      this.showFileSelect = true;
    },

    handleLoadProgram(id) {
      this.showFileSelect = false;
      this.tapProgram(id);
      const props = this.allPrograms.find(program => program.id === id);
      this.program = new Program(props);
    }
  }
};
</script>
