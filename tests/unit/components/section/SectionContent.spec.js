import { shallowMount } from '@vue/test-utils';

import SectionContent from '@/components/section/SectionContent.vue';

const defaultProps = {
  heading: 'Heading',
};

const optionalProps = {
  content: '<p>This is content</p>',
  details: ['Item One', 'Item Two'],
};

describe('SectionContent', () => {
  describe('Renders Default', () => {
    const wrapper = shallowMount(SectionContent, {
      props: defaultProps,
    });

    it('renders container', () => {
      expect(wrapper.attributes('data-test')).toBe('section-content');
    });

    describe('Heading Behavior', () => {
      it('renders heading', () => {
        expect(
          wrapper.find('[data-test="section-content-heading"]').exists()
        ).toBe(true);
      });

      it('renders heading text', () => {
        expect(
          wrapper.find('[data-test="section-content-heading"]').text()
        ).toBe(defaultProps.heading);
      });
    });
  });

  describe('Renders Optional Settings', () => {
    const wrapper = shallowMount(SectionContent, {
      props: { ...defaultProps, ...optionalProps },
      slots: {
        main: '<div data-test="slot-main">This is the main slot!</div>',
      },
    });

    describe('Optional Props', () => {
      it('renders container', () => {
        expect(wrapper.attributes('data-test')).toBe('section-content');
      });

      it('renders content container', () => {
        expect(
          wrapper.find('[data-test="section-content-content"]').exists()
        ).toBe(true);
      });

      it('renders list container', () => {
        expect(
          wrapper.find('[data-test="section-content-list"]').exists()
        ).toBe(true);
      });
    });

    describe('Optional Slots', () => {
      it('renders slot container', () => {
        expect(wrapper.find('[data-test="slot-main"]').exists()).toBe(true);
      });
    });
  });
});
