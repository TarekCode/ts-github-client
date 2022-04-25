
# Github client
A simple cli app that will create/promote releases in a github repo.

## Usage

1. Compile source: `npm run build`
2. Create a new release: `node ./build/app.js --create -n v2.0 -t myToken`
3. Create a pre-release: `node ./build/app.js --create --prerelease -n v2.0 -t myToken`
4. Promote a prerelease: `node ./build/app.js --promote -n v2.0 -t myToken`

## Options

 - `-n = tagName`
 - `-t = github api token`
