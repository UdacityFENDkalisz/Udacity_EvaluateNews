# Evaluate News App Project

## Description
This project uses the [MeaningCloud](https://www.meaningcloud.com/) API service to scan content at a URL entered by the user.  The scan will perform NLP (Natural Language Processing) to check for objectivity-subjectivity and positivity-negativity. Local server running on *Node* and *Express* is used.

## Prerequisite
This project runs on a local server. It uses Node. If you don't have Node already installed on your machine, you can download it [**here**](https://nodejs.org/en/download/).

You also must have an API key for [MeaningCloud](https://www.meaningcloud.com/). The sign-up page is [**here**](https://www.meaningcloud.com/developer/create-account).

After you get your API key, make a file called *.env* in the project root folder. File should contain:

```
API_KEY={your key here}
```

## Installation
If Node is installed, then you can use the Node Package Manager to install the packages needed to run this program. In the terminal, use this command:

```
npm install
```
When those packages have installed, make builds and start the server with the following commands (note that the build-dev runs webpack-dev-server):

```
npm run build-dev
npm run build-prod
npm run start
```
