# Dockerised MERN

A full-stack boilerplate project using MERN (**M**ongoDB, **E**xpress, **R**eact, **N**ode.js) technologies and written to be run as Docker instances. The project (both frontend and backend) are also written in Typescript. For a full list of dependencies used, check out the [Technologies page](https://github.com/dylandevalia/dockerised-mern/blob/master/client/src/routes/TechInfo/index.tsx)

Branches are used for additions or variations on what tools are being used

## Background

I initially started to help me get familiar with some new technologies and as a foundation I could use to for other projects. There are other solutions in this space which produce similar results but after trying a few out I found I'm not particularly comfortable downloading boilerplate I'm not familiar with and simply expecting it to work

My main gripe is that nothing I tried was exactly what I wanted (e.g. didn't support Typescript, wasn't dockerised etc.), which was expected, but it was then a nightmare to try and extend them to my spec since I didn't know how they worked

The two main ways I've tried to make this project different:

- Lots of comments - This was build to learn some new things and I want anyone that downloads this repo to be able to look around and be able to understand what is happening and why
- Keep it simple - It may not looks like it from first glance but I have tried incredibly to keep the code and packages to a minimum as to not overwhelm the project

## Usage

After downloading the project, one of the first things to do is name your project. There's a few places in the code which can be batch renamed. Find instances of `myapp` and replace it with your project name

The code can be run in two ways, for development and for production. The following assume you are in the main directory (where this `README` is located)

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

## License

[MIT](https://choosealicense.com/licenses/mit/)
