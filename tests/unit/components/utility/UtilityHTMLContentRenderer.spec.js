import { mount } from '@vue/test-utils';

import UtilityHTMLContentRenderer from '@/components/utility/UtilityHTMLContentRenderer.vue';

const defaultProps = {
  content: 'This is the <span>content</span>',
};

const optionalProps = {
  tag: 'p',
};

describe('UtilityDetailList', () => {
  describe('Renders Default', () => {
    const wrapper = mount(UtilityHTMLContentRenderer, {
      props: defaultProps,
    });

    it('renders container', () => {
      expect(wrapper.attributes('data-test')).toBe('html-content-renderer');
    });

    it('renders container with default tag', () => {
      expect(wrapper.element.tagName.toLowerCase()).toBe('div');
    });

    it('renders prop content', () => {
      expect(
        wrapper.find('[data-test="html-content-renderer"]').html()
      ).toContain(defaultProps.content);
    });
  });

  describe('Renders with optional props', () => {
    const wrapper = mount(UtilityHTMLContentRenderer, {
      props: { ...defaultProps, ...optionalProps },
    });

    it('renders container with correct tag', () => {
      expect(wrapper.element.tagName.toLowerCase()).toBe(optionalProps.tag);
    });

    it('renders prop content', () => {
      expect(
        wrapper.find('[data-test="html-content-renderer"]').html()
      ).toContain(defaultProps.content);
    });
  });
});
