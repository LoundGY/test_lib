#!/bin/bash

echo "bebraasdasdasdasd"

yarn run build

DIR="$( dirname -- "${BASH_SOURCE[0]}"; )";   # Get the directory name
DIR="$( realpath "$DIR"; )";    # Resolve its full path if need be
DIR="$DIR/dist/dynamic-simplifier-services";

cd "$DIR"

echo "------------------------------------------------------------------------------"
echo "Publish Angular Package"
echo "Directory: $DIR"
echo "------------------------------------------------------------------------------"

npm publish

cd "$DIR"