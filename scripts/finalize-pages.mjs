import { rm } from 'node:fs/promises';
import { resolve } from 'node:path';

const unpublishedDraftRoutes = [
  'out/de/nutzungsbedingungen',
  'out/en/terms',
];

for (const route of unpublishedDraftRoutes) {
  await rm(resolve(route), { recursive: true, force: true });
}
