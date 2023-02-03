import RandomNumber from '@/components/RandomNumber.vue';
import { mount } from '@vue/test-utils';

describe('RandomNumber', () => {
  it('random number is 0 by default', () => {
    const wrapper = mount(RandomNumber);
    expect(wrapper.html()).toContain('<span>0</span>');
    expect(true).toBe(true);
  });

  it('random number is between 1 and 10 after click', async () => {
    const wrapper = mount(RandomNumber);
    await wrapper.find('button').trigger('click');
    const randomNumber = parseInt(wrapper.find('span').text());
    expect(randomNumber).toBeGreaterThanOrEqual(1);
    expect(randomNumber).toBeLessThanOrEqual(10);
  });

  it('random number is between 200 and 300 after click', async () => {
    const min = 200;
    const max = 300;
    const wrapper = mount(RandomNumber, { props: { min, max } });

    await wrapper.find('button').trigger('click');
    const randomNumber = parseInt(wrapper.find('span').text());
    expect(randomNumber).toBeGreaterThanOrEqual(min);
    expect(randomNumber).toBeLessThanOrEqual(max);
  });
});
