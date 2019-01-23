import { EditorShowDirective } from './editor-show.directive';

describe('EditorShowDirective', () => {
  it('should create an instance', () => {
    const directive = new EditorShowDirective("3");
    expect(directive).toBeTruthy();
  });
});
