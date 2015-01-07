# angular-spring generator [![Build Status](https://secure.travis-ci.org/madtrax/generator-angular-spring.png?branch=master)](https://travis-ci.org/madtrax/generator-angular-spring) [![Dependency Status](https://david-dm.org/madtrax/generator-angular-spring
.svg)]

## Getting Started

### What is angular-spring generator?

I realized I usually spend more time removing all the unecessary libraries and extra stuff when I use existing generators, so here is a lightweight and clean generator to bootstrap a project which doesn't require lunar load balancing, 64 clustered oracle instances and 782 hadoop nodes.

angular-spring generator is a [Yeoman](http://yeoman.io) generator to create a solid base project using Java Spring MVC & AngularJS and can be quickly deployed on Tomcat. The following tools will be included [Maven](http://maven.apache.org), [Grunt](http://gruntjs.com) & [Bower](http://bower.io).

You can optionnaly includes additional features like: [FontAwesome](http://fortawesome.github.io/Font-Awesome/) & [AngularStrap](http://mgcrea.github.io/angular-strap/).
(@TODO: [Compass](http://compass-style.org/), WebSocket)

The AngularJS style is based on [@john_papa style guide](https://github.com/johnpapa/angularjs-styleguide)

If you do not have Yeoman on your computer, please install it first using the command below:

```bash
npm install -g yo
```

### Use angular-spring Generator

To install generator-angular-spring from npm, run:

```bash
npm install -g generator-angular-spring
```

Finally, initiate the generator:

```bash
yo javastar
```

### Example of generated application [![Build Status](https://travis-ci.org/madtrax/sample-angular-spring.svg?branch=master)](https://travis-ci.org/madtrax/sample-angular-spring)

You can find a sample of generated application [here](https://github.com/madtrax/sample-angular-spring)

![Image](https://lh6.googleusercontent.com/RPnKG2R57R7ZQ-Xm0Eo5dj589BMg_j4LC4Pwn8ZZB_cnXyqhmNpmbXTX_gPmhTUqWkUOSkh5vUA=w1499-h798)

The application folder structure before running grunt and bower should be:

```bash
├── Gruntfile.js
├── README.md
├── bower.json
├── package.json
├── pom.xml
└── src
    └── main
        ├── java
        │   └── com
        │       └── mycompany
        │           └── myapp
        │               ├── controller
        │               │   └── ApplicationController.java
        │               └── service
        │                   └── ApplicationService.java
        ├── resources
        │   ├── log4j2.xml
        │   └── spring
        │       ├── application-config.xml
        │       └── mvc-config.xml
        └── webapp
            ├── app
            │   ├── app.js
            │   ├── components
            │   │   ├── core
            │   │   │   └── directives
            │   │   │       └── directives.js
            │   │   └── main
            │   │       ├── controllers
            │   │       │   └── main.js
            │   │       └── services
            │   │           └── main.js
            │   ├── config.js
            │   └── routes.js
            ├── config
            │   └── config.properties
            ├── index.html
            ├── style
            │   └── style.css
            ├── templates
            │   ├── header.html
            │   └── main
            │       └── main.html
            └── web.xml

22 directories, 22 files
```

### Contributions are welcome

There is many improvements that can be done for this project, feel free to contribute.

### Getting To Know Yeoman

Yeoman has a heart of gold. He's a person with feelings and opinions, but he's very easy to work with. If you think he's too opinionated, he can be easily convinced.

If you'd like to get to know Yeoman better and meet some of his friends, [Grunt](http://gruntjs.com) and [Bower](http://bower.io), check out the complete [Getting Started Guide](https://github.com/yeoman/yeoman/wiki/Getting-Started).

## License

MIT