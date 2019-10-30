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
                <pixel-side-panel v-model="program.settings" />
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
      :options="allPrograms.map(p => {return {id: p.id, name: p.name}})"
      @close="showFileSelect = false"
      @input="handleLoadProgram($event)"
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
          action: this.handleOpenClicked
        },
        // { icon: 'download' },
        // { icon: 'upload' },
        // { icon: 'file-export' },
        // { icon: 'copy' }
      ]
    };
  },

  computed: {
    ...mapGetters('programs', [
      'autoSave',
      'allPrograms',
      'maxId',
      'lastProgram'
    ])
  },

  watch: {
    program: {
      handler(_, oldProgram) {
        if (oldProgram) {
          this.dirty = true;
          this.autoSave && this.save();
        }
      },
      deep: true
    }
  },

  created() {
    this.program = JSON.parse(JSON.stringify(this.lastProgram));
    this.dirty = false;
  },

  mounted() {
    this.render();
  },

  methods: {
    ...mapActions('programs', [
      'saveProgram',
      'loadProgram',
      'updateAutoSave'
    ]),

    render() {
      const pixels = this.parse(this.program.text);

      if (pixels) {
        this.$refs.sketch.render(
          pixels,
          this.program.settings.size,
          this.program.settings.frameRate
        );
      }
    },

    handleInput(e) {
      this.errorMessage = null;
      this.validate(this.program.text);
    },

    validate: debounce(function (string) {
      console.log('validating');
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
      console.log(string);
      const program = parse(string).toArray();

      if (program.some(pixel => {
        return pixel && !{}.hasOwnProperty.call(this.program.settings.clrs, pixel);
      })) {
        return null;
      }

      return program.map(c => c ? this.program.settings.clrs[c].rgb : null);
    },

    createNew() {
      this.program = {
        id: null,
        name: 'Untitled',
        text: '',
        settings: JSON.parse(JSON.stringify(defaults.settings))
      };
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
      this.loadProgram(id);
      this.program = this.allPrograms.find(program => program.id === id);
    }
  }
};
</script>
