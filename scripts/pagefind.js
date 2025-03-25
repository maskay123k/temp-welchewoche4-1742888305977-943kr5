import { exec } from 'child_process';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const projectRoot = join(__dirname, '..');

// Run pagefind command
exec('npx -y pagefind --source dist', { cwd: projectRoot }, (error, stdout, stderr) => {
  if (error) {
    console.error(`Error running pagefind: ${error}`);
    return;
  }
  if (stderr) {
    console.error(`Pagefind stderr: ${stderr}`);
  }
  console.log(`Pagefind stdout: ${stdout}`);
});
