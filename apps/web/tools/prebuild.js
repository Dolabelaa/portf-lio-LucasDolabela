import { existsSync } from 'node:fs';
import { resolve } from 'node:path';
import { spawnSync } from 'node:child_process';

const scriptPath = resolve(process.cwd(), 'tools', 'generate-llms.js');

if (!existsSync(scriptPath)) {
  process.exit(0);
}

const result = spawnSync(process.execPath, [scriptPath], { stdio: 'inherit' });

if (result.status !== 0) {
  process.exit(result.status ?? 1);
}
