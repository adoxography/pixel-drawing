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

import { debounce } from '@/util';
import { allPrograms, generateKey, generateName, getProgram, renameProgram, saveProgram } from '@/io';
import Parser from '@/parser';

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
      name: 'Jump Man',
      program: '',
      savedFiles: [],
      showFileSelect: false,

      toolbarButtons: [
        {
          icon: 'save',
          action: this.save
        },
        {
          icon: 'folder-open',
          action: this.handleOpenClicked
        },
        {
          icon: 'plus',
          action: this.newSketch
        },
        // {
        //   icon: 'download'
        // },
        // {
        //   icon: 'upload'
        // },
        // {
        //   icon: 'file-export'
        // },
        // {
        //   icon: 'copy'
        // }
      ],

      parser: new Parser(),

      settings: {
        size: 20,
        clrs: {
          b:  { name: 'blue',   rgb: [ 0,   0,   255 ] },
          r:  { name: 'red',    rgb: [ 255, 0,   0 ] },
          g:  { name: 'green',  rgb: [ 0,   255, 0 ] },
          gr: { name: 'grey',   rgb: [ 80,  80,  80 ] },
          y:  { name: 'yellow', rgb: [ 255, 255, 0 ] },
          pu: { name: 'purple', rgb: [ 255, 0,   255 ] },
          o:  { name: 'orange', rgb: [ 255, 125, 0 ] },
          c:  { name: 'cyan',   rgb: [ 0,   255, 255 ] },
          w:  { name: 'white',  rgb: [ 255, 255, 255 ] },
          k:  { name: 'black',  rgb: [ 0,   0,   0 ] },
          br: { name: 'brown',  rgb: [ 125, 80,  0 ] },
          pi: { name: 'pink',   rgb: [ 255, 80, 125 ] }
        }
      },

      frameRate: 16,

      errorMessage: null
    };
  },

  computed: {
    slug() {
      return generateKey(this.name);
    }
  },

  mounted() {
    const program = localStorage.getItem('pixel-drawing');

    if (program !== null) {
      this.program = program;
    }

    this.savedFiles = allPrograms();

    this.render();
  },

  methods: {
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
        const program = this.parser.parse(string).toArray();

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
      const program = this.parser.parse(string).toArray();

      if (program.some(pixel => {
        return pixel
          && !Object.prototype.hasOwnProperty.call(this.settings.clrs, pixel);
      })) {
        return null;
      }

      return program.map(c => c ? this.settings.clrs[c].rgb : null);
    },

    save() {
      saveProgram(this.slug, {
        program: this.program,
        settings: this.settings
      });
    },

    handleOpenClicked() {
      this.showFileSelect = true;
    },

    loadFile(name) {
      const programData = getProgram(name);
      this.program = programData.program;
      this.settings = programData.settings;
      this.name = name;
      this.showFileSelect = false;
    },

    newSketch() {
      this.name = generateName('Untitled');
      this.program = '';
      this.save();
    },

    updateName(initialName) {
      const oldSlug = this.slug;
      this.name = generateName(initialName);

      renameProgram(oldSlug, this.slug);
    }
  }
};
</script>
