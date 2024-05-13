
    //store, next, action

   export const loggerMiddleware=(store)=>{
        return function(next){
            return function(action){
                //log actions
                console.log("[LOG]:" + action.type +" "+ new Date().toDateString());
                //call next middlewarecin pipeline
                next(action);
                //log the modified state of the app
                console.log(store.getState());
            }
        }
    }