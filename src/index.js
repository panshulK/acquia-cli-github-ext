const core = require('@actions/core');
const exec = require('@actions/exec');

async function run() {
    try {
        const command = core.getInput('command');
        await exec.exec(`acli ${command}`);
    } catch (error) {
        core.setFailed(error.message);
    }
}

run();
