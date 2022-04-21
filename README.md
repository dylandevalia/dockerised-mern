# Dockerised MERN

A full-stack boilerplate project using MERN (**M**ongoDB, **E**xpress, **R**eact, **N**ode.js) technologies and written to be run as Docker instances. The project (both frontend and backend) are also written in Typescript. For a full list of dependencies used, check out the [Technologies page](https://github.com/dylandevalia/dockerised-mern/blob/master/client/src/routes/TechInfo/index.tsx)

Branches are used for additions or variations on what tools are being used

## Background

I initially started to help me get familiar with some new technologies and as a foundation I could use for other projects. There are other solutions in this space which produce similar results but after trying a few out I found I'm not particularly comfortable downloading boilerplate I'm not familiar with and simply expecting it to work

My main gripe is that nothing I tried was exactly what I wanted (e.g. didn't support Typescript, wasn't dockerised etc.), which was expected, but it was then a nightmare to try and extend them to my spec since I didn't know how they worked

The two main ways I've tried to make this project different:

- Lots of comments - This was build to learn some new things and I want anyone that downloads this repo to be able to look around and be able to understand what is happening and why
- Keep it simple - It may not looks like it from first glance but I have tried incredibly to keep the code and packages to a minimum as to not overwhelm the project

## Usage

Before starting, you will need setup [Docker](https://www.docker.com/get-started/) and [yarn](https://yarnpkg.com/getting-started)

1. Download the project

```bash
# Clone the repo
git clone https://github.com/dylandevalia/dockerised-mern.git

# Optional: you can rename the folder from the default repo title
mv dockerised-mern myapp

# Navigate into the folder
cd myapp
```

_Optional_: You can switch branch here if there is another stack variation that has been created that you want to use

```bash
# Change <branch-name> to the branch you want to use
# e.g. `git checkout socket.io`
git checkout <branch-name>
```

2. Be your own git

```bash
# Removes the existing git directory which points to this repo
rm -rf .git

# Initialise a new local git repo
git init
```

This will only create a local repo, o connect it to your own GitHub project follow [these docs](https://docs.github.com/en/get-started/importing-your-projects-to-github/importing-source-code-to-github/adding-locally-hosted-code-to-github)

3. Name your project. There's a few places in the code which can be batch renamed - find instances of `myapp` and replace it with your project name

4. The code can be run in two ways, for development and for production

### Development

Enables hot reloading of both frontend and backend. Backend runs on `localhost:3000` and the frontend `localhost:3001` as separate containers

```bash
docker-compose -f docker-compose.dev.yml up --build --remove-orphans
```

### Production

Builds the frontend which is served by the backend. Runs on `localhost:3000`

```bash
docker-compose -f docker-compose.prod.yml up --build --remove-orphans
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change

## Licence

[MIT](https://choosealicense.com/licenses/mit/)
