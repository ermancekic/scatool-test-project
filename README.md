# scatool-test-project
This is a project that can be used for testing in SCA tool.

## Overview
This project contains intentionally vulnerable npm dependencies for testing Software Composition Analysis (SCA) tools.

## Vulnerable Dependencies
The project includes 5 packages with known security vulnerabilities:

1. **lodash** (v4.17.4) - CRITICAL
2. **minimist** (v0.0.8) - CRITICAL
3. **qs** (v6.2.3) - HIGH
4. **validator** (v10.8.0) - HIGH
5. **dot-prop** (v4.2.0) - HIGH

## Running the Project

```bash
npm install
node app.js
```

## Security Scan

To view the vulnerabilities:

```bash
npm audit
```

**Note:** This project is for testing purposes only. Do not use these vulnerable dependencies in production environments.
