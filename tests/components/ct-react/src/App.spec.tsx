import { test, expect } from '@playwright/test';
import App from './App';

test.use({ viewport: { width: 500, height: 500 } });

test('should work', async ({ mount }) => {
  const component = await mount(<App></App>);
  await expect(component).toContainText('Learn React');
});
