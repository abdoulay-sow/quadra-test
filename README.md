# Toutes les Commandes sont disponibles ici

# quadra-testsuite

## Set Local Env 
```
    cd quadra-testsuite
    ./env-test.sh
```

## Serve Local
```
    cd quadra-testsuite
    ./env-test.sh
    cd ../functions
    firebase serve --only functions,hosting
```
## Set Prod Env 
```
    cd quadra-testsuite
    ./env-prod.sh
```
## Deploy Env 
```
    cd quadra-testsuite
    ./env-prod.sh
    cd ../functions
    firebase deploy --only hosting,functions
```

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).



