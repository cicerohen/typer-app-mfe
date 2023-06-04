_>> **Under development** <<_

# Typer

It's just a fictional publishing(similar to Medium) app that implements a **micro-frontend architecture** using [single-spa](https://single-spa.js.org/) and [importmap](https://github.com/WICG/import-maps) specifications

[See the Figjam file with an example of mfe architecture here](https://www.figma.com/file/pwb3aAjZzwQhsBOdKLFgz6/MFE-Architecture?type=whiteboard&node-id=0%3A1&t=ARGdj5kjAMjqxwhK-1)

[Click here to see more pet projets](https://github.com/cicerohen/projets)

### Typer projects

#### [typer-app-mfe](https://github.com/cicerohen/typer-app-mfe)

It's a monorepo project that contains the [microfrontends](https://single-spa.js.org/docs/module-types) used by Typer. Currently all micro-frontends are being implemented using React

#### [typer-app-importmap-deployer](https://github.com/cicerohen/typer-app-importmap-deployer)

It's a small project that is responsible for updating the importmap-[stage].json with the URL to the latest version of a micro-frontend javascript bundle hosted in an S3 bucket

#### [typer-app-server](https://github.com/cicerohen/typer-app-server)

It's the backend project used by Typer. It is being build using [NestJS](https://nestjs.com/) and [GraphQL](https://docs.nestjs.com/graphql/quick-start).

# This Project

### Development

1.  Access your AWS account and create a IAM user.
2.  Create a .env file based on [.env.example](https://github.com/cicerohen/typer-app-mfe/blob/master/.env.example) and put your AWS credentials on it. The possible values for stage are **dev** or **prod**
3.  Deploy the project to the AWS using [Serverless](https://www.serverless.com/): _yarn sls:deploy:[**stage**]_
4.  Remove the project from AWS using Serverless: _yarn sls:remove:[**stage**]_
