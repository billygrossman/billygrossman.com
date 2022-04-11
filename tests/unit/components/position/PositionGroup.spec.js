import { shallowMount } from '@vue/test-utils';

import PositionGroup from '@/components/position/PositionGroup.vue';

const props = {
  data: [
    {
      company: 'Company Name',
      endDate: 'End Date',
      jobTitle: 'This is the job title',
      location: 'This is the location',
      responsibilities: ['Item one', 'Item Two'],
      startDate: 'Start Date',
    },
    {
      company: 'Company Name',
      endDate: 'End Date',
      jobTitle: 'This is the job title',
      location: 'This is the location',
      responsibilities: ['Item one', 'Item Two'],
      startDate: 'Start Date',
    },
  ],
};

describe('PositionGroup', () => {
  describe('Renders Default', () => {
    const wrapper = shallowMount(PositionGroup, {
      props,
    });

    it('renders container', () => {
      expect(wrapper.attributes('data-test')).toBe('position-group');
    });

    it('renders correct number of children', () => {
      expect(wrapper.findAll('.position-group__item').length).toBe(
        props.data.length
      );
    });
  });
});
