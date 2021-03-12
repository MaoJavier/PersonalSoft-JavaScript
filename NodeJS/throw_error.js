class CustomError extends Error {
  constructor(foo = 'error general', ...params) {
    super(...params)

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, CustomError)
    }

    this.name = 'CustomError'
    this.foo = foo
    this.date = new Date()
  }
}

try {
  throw new CustomError('error parametro', 'se espera valor numerico')
} catch(e) {
  console.error(e.name)    // CustomError
  console.error(e.foo)     
  console.error(e.message) 
  console.error(e.stack)   // stacktrace
}