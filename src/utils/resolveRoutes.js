const resolveRoutes = (route) => {
    // si route es = a un '/' sino es = a un id
    if (route.length <= 3){
        let validRoute = route === '/' ? route : '/:id'
        return validRoute
    }
    return `/${route}`;
}

export default resolveRoutes