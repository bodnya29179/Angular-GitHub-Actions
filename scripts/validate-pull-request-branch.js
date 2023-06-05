const core = require('@actions/core');
const github = require('@actions/github');

validateBranch();

function validateBranch() {
  try {
    const branchName = github.context.payload.pull_request.head.ref;
    core.info(`📝 Branch name: ${ branchName }`);

    /* Check if branch pass regex */
    const regex = new RegExp(core.getInput('regex'));
    core.info(`📝 Regex: ${ regex }`);

    if (!regex.test(branchName)) {
      throw new Error(`⛔ Branch "${ branchName }" does not match the expected pattern: ${ regex }`);
    }

    /* Check min length */
    const minLength = +core.getInput('min_length');

    if (branchName.length < minLength) {
      throw new Error(`⛔ Branch "${ branchName }" is smaller than min length specified - ${ minLength }`);
    }

    /* Check max length */
    const maxLength = +core.getInput('max_length');

    if (maxLength > 0 && branchName.length > maxLength) {
      throw new Error(`⛔ Branch "${ branchName }" is greater than max length specified - ${ maxLength }`);
    }

    core.info('🙌 Branch name check passed successfully');
  } catch (error) {
    core.setFailed(error.message);
  }
}
