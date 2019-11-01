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
  r: [ 255, 0, 0 ]
};

describe('ClrTable.vue', () => {
});
