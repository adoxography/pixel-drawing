import { shallowMount } from '@vue/test-utils';
import ClrTable from '@/components/ClrTable';

const factory = (props = {}) => {
  return shallowMount(ClrTable, {
    propsData: {
      ...props
    }
  });
};

const clrs = {
  r: {
    name: 'red',
    rgb: [ 255, 0, 0 ]
  }
};

describe('ClrTable.vue', () => {
});
