# puppeteer-docker

This Dockerfile use node:8-slim image. installs the missing dependencies and installs latest puppeteer via npm. Also it adds locally stored `index.js` file and runs it in container.

## Usage

```
docker build -t puppeteer-docker . && docker run -it puppeteer-docker
```
