## Project Rational

In the now era of microservices architecture, software development/scrum teams in my experience have a specific set of stand-alone applications to 'look after',
most probably divided by business unit function thus leaving a consumer to juggle multiple applications in order carry out their daily tasks.

In my idealist software development team I would focus to only build stand-alone lightweight web components that all use a single endpoint for a data source.

This architecture has the following benefits; 
1) Each consumer can build his/her own dashboard of components for their own specific daily tasks
2) GraphQL allows back-end developers to consolidate multiple APIs into one endpoint and solely focus on backend development.
3) Front-end developers can easily fetch data from this single API via a GraphQL IDE leaving them to create components fast!
4) All the business logic and processing would take place on Azure/AWS servers leaving the component lightweight and interchangeable with modern front-end languages (REACT,Angular, Vue).

This project aims to test this theory against the API end-point `https://docs.spacexdata.com/` and to gain a deeper understanding of REACT/Azure along the way.


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


### IDE
This project uses Visual Studio Code which can be downloaded at `https://code.visualstudio.com/download`

### Tutorial
The tutorial I used to get started to learn REACT can be found at `https://www.w3schools.com/REACT/` 


### Installed React Axios (https://www.npmjs.com/package/react-axios)
### `npm install axios`
### `npm install prop-types`

### Add React Router
### `npm i -D react-router-dom`

### Installed Apollo Client 
Reference: https://www.apollographql.com/docs/react/get-started
### `npm install @apollo/client graphql`

### Add Font Awesome 
See `https://docs.fontawesome.com/v5/web/use-with/react/`

This projects font awesome icons can be found at `https://fontawesome.com/v5/search?o=r&m=free&s=regular`

### How to generate URL for hook 'useHttpPostMessageToQueue'

### PowerShell
### `Get-AzLocation | Select-Object Location`
### `$location = "eastus"`
### Create a resource group
### `$resourceGroup = "howtoqueuesrg"`
### `New-AzResourceGroup -ResourceGroupName $resourceGroup -Location $location`
### Create a storage account
### `$storageAccountName = "howtoqueuestorage"`
### `$storageAccount = New-AzStorageAccount -ResourceGroupName $resourceGroup -Name $storageAccountName -Location $location -SkuName Standard_LRS`
### `$ctx = $storageAccount.Context`
### Create a queue
### `$queueName = "howtoqueue"`
### `$queue = New-AzStorageQueue -Name $queueName -Context $ctx`

### Add Access Policy against the queue
### Generate SAS using stored access policy
### Copy SAS URL to environment setting 'REACT_APP_MESSAGE_QUEUE_URL'
### 