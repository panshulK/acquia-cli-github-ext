# Acquia CLI GitHub Action

This GitHub Action integrates Acquia CLI with GitHub workflows.

## Usage

### Example Workflow

```yaml
name: CI

on: [push]

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
    - name: Checkout code
      uses: actions/checkout@v2

    - name: Set up Node.js
      uses: actions/setup-node@v2
      with:
        node-version: '14'

    - name: Install Acquia CLI
      run: |
        curl -OL https://github.com/acquia/cli/releases/download/2.0.0/acli.phar
        chmod +x acli.phar
        sudo mv acli.phar /usr/local/bin/acli

    - name: Run Acquia CLI command
      uses: your-username/acquia-cli-github-ext@v1.0.0
      with:
        command: 'status'
