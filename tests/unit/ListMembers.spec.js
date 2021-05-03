import { mount } from '@vue/test-utils';
import ListMembers from "../../src/components/ListMembers";

describe('Component ListMembers.vue', () => {
    it('check if the test works', () => {
        expect(true).toBeTruthy();
    });
    it(' component has been painted', () => {
        const wrapper = mount(ListMembers);
    });
    it('has a hook created', () => {
        expect(typeof ListMembers.mounted).toBe('function')
    })
});
