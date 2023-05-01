const core = require('@actions/core');

validateTitle();

function validateTitle() {
  try {
    /* Check if title pass regex */
    const regex = new RegExp(core.getInput('regex'));
    const pullRequestTitle = process.env.GITHUB_HEAD_REF || process.env.GITHUB_HEAD_REF;

    if (!regex.test(pullRequestTitle)) {
      throw new Error(`The pull request title "${ pullRequestTitle }" does not match the expected pattern: ${ regex }`);
    }

    /* Check min length */
    const minLength = +core.getInput('min_length');

    if (pullRequestTitle.length < minLength) {
      throw new Error(`The pull request title "${ pullRequestTitle }" is smaller than min length specified: ${minLength}`);
    }
  } catch (error) {
    core.setFailed(error.message);
  }
}
