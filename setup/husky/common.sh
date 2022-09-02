#!/bin/sh

if [[ "$OSTYPE" =~ ^darwin ]]; then
  export NVM_DIR="$HOME/.nvm"
  [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
fi

if [[ "$OSTYPE" =~ ^msys ]]; then
  command_exists () {
    command -v "$1" >/dev/null 2>&1
  }

  # Workaround for Windows 10, Git Bash and Yarn
  if command_exists winpty && test -t 1; then
    exec < /dev/tty
  fi
fi