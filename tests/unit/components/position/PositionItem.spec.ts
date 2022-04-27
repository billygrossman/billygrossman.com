import { shallowMount } from '@vue/test-utils';

import PositionItem from '@/components/position/PositionItem.vue';

const defaultProps = {
  company: 'Company Name',
  endDate: 'End Date',
  jobTitle: 'This is the job title',
  location: 'This is the location',
  responsibilities: ['Item one', 'Item Two'],
  startDate: 'Start Date',
};

const optionalProps = {
  description: 'This is the description',
};

describe('PositionItem', () => {
  describe('Renders Default', () => {
    const wrapper = shallowMount(PositionItem, {
      props: defaultProps,
    });

    it('renders container', () => {
      expect(wrapper.attributes('data-test')).toBe('position');
    });

    describe('Heading Behavior', () => {
      it('renders heading', () => {
        expect(wrapper.find('[data-test="position-heading"]').exists()).toBe(
          true
        );
      });

      it('renders heading text', () => {
        expect(wrapper.find('[data-test="position-heading"]').text()).toBe(
          `${defaultProps.company}, ${defaultProps.location} - ${defaultProps.jobTitle}`
        );
      });
    });

    it('renders dates', () => {
      expect(wrapper.find('[data-test="position-dates"]').text()).toBe(
        `${defaultProps.startDate} - ${defaultProps.endDate}`
      );
    });

    it('renders responsibilities container', () => {
      expect(wrapper.find('[data-test="position-list-wrapper"]').exists()).toBe(
        true
      );
    });

    it('does not render description container', () => {
      expect(wrapper.find('[data-test="position-description"]').exists()).toBe(
        false
      );
    });
  });

  describe('Renders with optional props', () => {
    const wrapper = shallowMount(PositionItem, {
      props: { ...defaultProps, ...optionalProps },
    });

    it('renders description container', () => {
      expect(wrapper.find('[data-test="position-description"]').exists()).toBe(
        true
      );
    });
  });
});
