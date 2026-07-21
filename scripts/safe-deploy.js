import { execSync } from 'child_process';
import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function runCommand(command, name) {
  console.log(`\n======================================`);
  console.log(`🚀 Running ${name}...`);
  console.log(`======================================\n`);
  try {
    execSync(command, { stdio: 'inherit' });
    console.log(`\n✅ ${name} completed successfully.`);
    return true;
  } catch (error) {
    console.error(`\n❌ ${name} failed!`);
    return false;
  }
}

async function promptRetry(failedStep) {
  return new Promise((resolve) => {
    console.log(`\n⚠️  [GUARDRAIL TRIGGERED] ${failedStep} failed.`);
    console.log(`Please fix the errors in your code.`);
    rl.question(`\nOnce fixed, press ENTER to redeploy/retry (or type "n" to cancel): `, (answer) => {
      if (answer.toLowerCase() === 'n') {
        resolve(false);
      } else {
        resolve(true);
      }
    });
  });
}

async function deployWorkflow() {
  let success = false;
  
  while (!success) {
    // Step 1: JSON Validation (already part of build but good to isolate)
    const jsonValid = runCommand('npm run validate:json', 'JSON Validation');
    if (!jsonValid) {
      const retry = await promptRetry('JSON Validation');
      if (!retry) break;
      continue;
    }

    // Step 2: TypeScript Validation
    const tsValid = runCommand('npm run validate', 'TypeScript Type Checking');
    if (!tsValid) {
      const retry = await promptRetry('TypeScript Type Checking');
      if (!retry) break;
      continue;
    }

    // Step 3: ESLint
    const lintValid = runCommand('npm run lint', 'ESLint Code Quality');
    if (!lintValid) {
      const retry = await promptRetry('ESLint Code Quality');
      if (!retry) break;
      continue;
    }

    // Step 4: Next.js Production Build
    // We already check JSON in `npm run build` but let's run next build here directly
    const buildValid = runCommand('npx next build', 'Next.js Production Build');
    if (!buildValid) {
      const retry = await promptRetry('Next.js Production Build');
      if (!retry) break;
      continue;
    }

    success = true;
    console.log(`\n🎉 All guardrail checks passed! Your app is ready for deployment.`);
    
    // Final Step: Push to GitHub to trigger Vercel deployment
    rl.question('\n🚀 Do you want to push to GitHub to trigger Vercel deployment? (y/N): ', (answer) => {
      if (answer.toLowerCase() === 'y' || answer.toLowerCase() === 'yes') {
        try {
            console.log("\nPushing to GitHub...");
            execSync('git push', { stdio: 'inherit' });
            console.log("\n✅ Pushed successfully. Vercel deployment triggered.");
        } catch (e) {
            console.error("\n❌ Failed to push to GitHub. You may need to commit your changes first.");
        }
      } else {
        console.log("\nDeployment cancelled. Remember to push your changes manually.");
      }
      rl.close();
    });
  }
  
  if (!success) {
    console.log("\nDeployment aborted.");
    rl.close();
    process.exit(1);
  }
}

deployWorkflow();
