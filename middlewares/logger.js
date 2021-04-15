const logger = (store) => (next) => (action) => {
    next(action)
    console.log("New State: ", store.getState())
}

export default logger
