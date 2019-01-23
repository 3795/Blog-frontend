import { EditorWriteDirective } from './editor-write.directive';

describe('EditorWriteDirective', () => {
  it('should create an instance', () => {
    const directive = new EditorWriteDirective("6");
    expect(directive).toBeTruthy();
  });
});
