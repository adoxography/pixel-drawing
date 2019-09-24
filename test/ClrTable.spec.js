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
  it('maps colour names', () => {
    const wrapper = factory({ clrs });
    expect(wrapper.find('.clr-table-row-name').text()).toBe('red');
  });

  it('maps colour codes', () => {
    const wrapper = factory({ clrs });
    expect(wrapper.find('.clr-table-row-code').text()).toBe('r');
  });

  it('maps colour styles', () => {
    const wrapper = factory({ clrs });
    expect(wrapper.find('.clr-table-row-clr').element.style['background-color']).toBe('rgb(255, 0, 0)');
  });
});
