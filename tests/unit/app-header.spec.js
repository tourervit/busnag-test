import AppHeader from '@/components/AppHeader';
import { mount } from '@vue/test-utils';

describe('AppHeader', () => {
  it('if user is logged in, show logout button', () => {
    const wrapper = mount(AppHeader);
    expect(wrapper.find('button').isVisible()).toBe(true);
  });

  it('if user isn`t logged in, don`t show logout button', async () => {
    const wrapper = mount(AppHeader);
    await wrapper.setData({ isLoggedIn: false });

    expect(wrapper.find('button').isVisible()).toBe(false);
  });
});
