# Dynamic Simplifier API - Angular/TypeScript

- [Dynamic Simplifier API - Angular/TypeScript](#dynamic-simplifier-api---angulartypescript)
  - [Information about the project](#information-about-the-project)
  - [How to open the devcontainer](#how-to-open-the-devcontainer)
  - [Quick start](#quick-start)
  - [How to commit](#how-to-commit)
  - [Git hooks](#git-hooks)
    - [commit-msg](#commit-msg)
    - [pre-push](#pre-push)
  - [Pre-defined scripts](#pre-defined-scripts)
    - [Lint library (ESLint)](#lint-library-eslint)
    - [Test library (Jest)](#test-library-jest)
    - [Build library](#build-library)
    - [Run Test Application](#run-test-application)
- [Troubleshooting](#troubleshooting)
  - [Microsoft Windows](#microsoft-windows)
    - [ssh ENOENT error](#ssh-enoent-error)
    - [Git Credentials not working](#git-credentials-not-working)

## Information about the project
This is a template project to use when creating new angular libraries.

It includes an angular workspace ready to use with a library and a test application project.

**Test Application Project (library-test-app)**
This application is used as a demo project to showcase the library in use as well as for development purposes without the need of a whole product/customer application. This way developers can develop features independently.

>*This project is not ment to be deployed anywhere!*

**Library Project (dynamic-simplifier-services)**
This is the library that will contain all features.

>*The library will be published to our internal npm registry!*

## How to open the devcontainer

This repository can be developed on by using [VS Code's development containers](https://code.visualstudio.com/docs/remote/containers).

**You need to have:**

* Linux (other OS should work, but have not been tested)
* VS Code
* Docker

Set environment variables `DEVCON_UID` and `DEVCON_GID` to the uid and gid of the repository files owner.
Since this usually is the login user, you can add this to your `.bashrc`:

```
export DEVCON_UID=$(id -u)
export DEVCON_GID=$(id -g)
```

Check that your environment is populated with these variables:

```
echo $DEVCON_UID
echo $DEVCON_GID
```

1. Clone this repository.
2. Open the cloned repository folder in VS Code.
3. Open it inside a development container (VS Code will most probably suggest that in the bottom-right corner when opening the folder) or install a plugin called `Dev Containers` (ID: ms-vscode-remote.remote-containers) and use `[CTRL]+[SHIFT]+[P]` and use command `Dev Containers: Open Folder in Container...`

## Quick start

In order to start deeloping within the container you need to install all dependencies. Use the following command to do so:

`yarn install --immutable && yarn run prepare`

## How to commit

Using the devcontainer's integrated terminal, run `git cz` instead of git commit, to create a new commit.
This will run you through a helper to create conventional commits.

Let's try to stick to [Angular Commit Message Conventions](https://github.com/angular/angular/blob/main/CONTRIBUTING.md#-commit-message-format)

>**Please note that a git hook will prevent you from creating ill-formatted commit messages.**

## Git hooks

This package uses `pre-push` and `commit-msg` git hooks:

### commit-msg
Will check your commit message based on already mentioned [Angular Commit Message Conventions](#how-to-commit)

### pre-push
Will check these three:
* ESLint
* UnitTests
* Building the package

In case you need to push changes regardless of these checks you can add `--no-verify` to your commit to skip hooks.

## Pre-defined scripts

### Lint library (ESLint)
`yarn run lint`

This will lint the `dynamic-simplifier-services` only. The test application will not be linted!

### Test library (Jest)
`yarn run test`

This will test the `dynamic-simplifier-services` only. The test application will not be tested!

### Build library
`yarn run build`

This will build the `dynamic-simplifier-services` only. The test application will not be build!

### Run Test Application
`yarn run start`

This will launch the test application `library-test-app`. This application can be seen in the browser by opening http://localhost:4200. 

# Troubleshooting

## Microsoft Windows

If you want to work remotely from a windows system and connect to e.g. a Ubuntu workstation.

### ssh ENOENT error
It might happen that on starting the container it can not connect to your workstation using ssh. An error message is displayed saying something like:

```
Command 'Dev Containers: Open Filder in Container...' resulted in an error (Shell server failed: Error: spawn C:\Program Files (x86)\ Microsoft VS Code\ssh ENOENT at Process-ChildProcess._handle.onexit (...
```

If that is the case try the following setting in VSCode:

>**Remote.SSH: Path**
>
>An absolute path to the SSH executable. When empty, it will use "ssh" on the path or in common install locations.
>
>`C:\Program Files\Git\usr\bin\ssh.exe`

### Git Credentials not working

In case your git credentials are declined do the following steps on your local system (not the remote machine):

1. Create RSA key on your local system
    * use `ssh-keygen`
    * or make use of the `git GUI` to create a new SSH key
2. These keys are usually stored in:
    * `C:\Users\<USERNAME>\.ssh\`
3. Add public key ( content of e.g. id_rsa.pub) to your GitLab account ( GitLab -> Edit Profile -> SSH Keys)
4. Add the key to SSH Agent:
    * `ssh-add  ~/.ssh/id_rsa`
5. Copy the key over to your remote system:
    * `type C:\Users\<USERNAME>\.ssh\id_rsa.pub | ssh <USER>@ws-<USER>.local.hacon.de "cat >> .ssh/authorized_keys"`

If things are still not working start a **local Administrator PowerShell** and run the following commands:

```PowerShell
# Make sure you're running as an Administrator
Set-Service ssh-agent -StartupType Automatic
Start-Service ssh-agent
Get-Service ssh-agen
```