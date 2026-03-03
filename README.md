# scatool-test-project
This is a project that can be used for testing in SCA tool.

## Overview
This project contains npm dependencies without source code location for testing Software Composition Analysis (SCA) tools.

## Installation

```bash
npm install scatool-test-project
```

## Usage

```js
const app = require('scatool-test-project');
```

Or run it directly:

```bash
node app.js
```

## Dependencies

None.

## Publishing to npm

1. Create an account on [npmjs.com](https://www.npmjs.com/) if you don't have one.
2. Log in via the CLI:
   ```bash
   npm login
   ```
3. Publish the package:
   ```bash
   npm publish
   ```

### Automated Publishing via GitHub Actions

This repository includes a GitHub Actions workflow (`.github/workflows/npm-publish.yml`) that automatically publishes to npm whenever a new GitHub Release is created.

To set it up:
1. Generate an npm access token at [npmjs.com](https://www.npmjs.com/settings/~/tokens).
2. Add it as a repository secret named `NPM_TOKEN` in **Settings → Secrets and variables → Actions**.
3. Create a GitHub Release — the workflow will publish the package automatically.

## Security Scan

To view any potential vulnerabilities:

```bash
npm audit
```

**Note:** This project is for testing purposes only.
