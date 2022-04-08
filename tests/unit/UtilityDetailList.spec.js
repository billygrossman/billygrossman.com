import { mount } from '@vue/test-utils';

import UtilityDetailList from '@/components/utility/UtilityDetailList.vue';

const propsData = {
  items: ['Item one', 'Item two', 'Item 3'],
};

describe('UtilityDetailList', () => {
  const wrapper = mount(UtilityDetailList, {
    props: propsData,
  });

  it('renders container', () => {
    expect(wrapper.exists('[data-test="detail-list"]'));
  });

  it('renders items', () => {
    expect(wrapper.findAll('[data-test="detail-list-item"]').length).toBe(
      propsData.items.length
    );
  });

  it('renders correct content in item', () => {
    expect(
      wrapper.find('[data-test="detail-list-item"]:first-of-type').text()
    ).toBe(propsData.items[0]);
  });
});
