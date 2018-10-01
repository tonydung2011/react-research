# REACT RESEARCH
this is base repository for clonning react application

### Requirement:

Node js install
visual studio CODE install

## extension:

Auto close tag: https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-close-tag
Auto complete tag: https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-complete-tag
Auto import: https://marketplace.visualstudio.com/items?itemName=steoates.autoimport (recommended)
ESLint: https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
JSHint: https://marketplace.visualstudio.com/items?itemName=dbaeumer.jshint

Theses extenstion will speed up your development process by reducing time to check syntax error and styling error.
You can find more extension on marlet place of visual studio code

## Node js global library recommended

```http-server```

## Usage:

install packgae:

```npm i```

run in development mode:

```npm start -s```

build into bundle:

```npm run build```

It will generate a static web client. This static then will be host into an file store or static server. Our app will call api from another server written by Node.js or ASP.Net 

* what have been set up?

- ES6 syntax for clean syntax
- ESLint config for consistent development proccess. You will not be able to commit code if your code is conflict with rules of this project
- Editor config: if you using vs code or sublime, your development process will auto follow the rule of code base. Preventing unexpected coding habbit
- Redux and React navigation
- Project internal submodule to avoid relative path import
- service worker to cache all static asset. Our application still able to work offline

## How to code?

**Create a new page:**

1. in folder src/containers/MainPage add 2 file

    NewScreenView.js
    NewScreenContainer.js

copy the same structure in HomeView.js into NewScreenView.js and HomeContainer.js into NewScreenContainer.js
--> start styling in NewScreenView.js

2. Add the url to src/constants/config.js file

    route: {
        home: '/',
        new: '/new',
        newScreen: '/newScreen',
    }

3. Add to navigation/index.js your new route

    import Home from '@internal/containers/MainPage/HomeContainer'
    import New from '@internal/containers/MainPage/NewContainer'
    import NewScreen from '@internal/containers/MainPage/NewScreenContainer'

    <Route
        path={AppConfig.route.newScreen}
        component={NewScreen}
        exact
    />

4. Then add the navigation link from the screen you want to connected. for example, I want to start from home screen:

    <ol>
        <li>Review the <Link to={AppConfig.route.new} >demo app</Link></li>
        <li>Review the <Link to={AppConfig.route.newScreen} >New Screen</Link></li>
        <li>Remove the demo and start coding: npm run remove-demo</li>
    </ol>

That's all
There is a hot loader which will auto refresh the page, allow you to see your immediate saved chage in browser. This will speed up developmemnt process

**How to share data across screen**

in folder src/redux create a folder <your-action>
add actions.js and reducer.js
copy the structure of todo/actions.js -> <your-folder>/actions.js
copy the structure of todo/reducer.js -> <your-folder>/reducer.js
modify as your wish

more knowledge about redux: https://www.google.com.vn/search?q=redux+tutorial+react
You just need to understand the basic concept then copy the code of this example then it will work

## styling

- Use the Material Component in Material react: https://material-ui.com/getting-started/usage/
and custom styling in src/styles/styles.css
- There are 3 ways of styling you can use in our project:
+ className styling: You can either define your style in styleguide.css and add it to your component throught out the className property. This only work with html component
+ className styling for Material component: You define set of style in folder theme/pages/<ContainerName>.js or theme/ui/<ComponentName>.js

```
    export default {
        drawerContainer: {
            minWidth: 300,
            width: '20%'
        },
        bodyContainer: {
            marginTop: 100,
        }
    }
```

In Your Component class, you export this wrapper:
```export default withStyles(styles.ui.navbar)(withRouter(NavBar))```

don't forget to ```import withStyles from '@material-ui/core/styles/withStyles```s


### FAQ

Q: after installing a dependency my application fail to load. the terminal appear to be fail when parsing ES6 syntax
A: You can run ```npm run reset-cache``` to put everything back to normal. After installing a dependency, your module map has change which lead to current issue
