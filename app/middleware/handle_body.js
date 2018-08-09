
module.exports = () => {
  return async function (ctx, next) {
    await next()
    if (ctx.status === 200) {

      ctx.body = {
        code: 0,
        msg: 'ok',
        result: ctx.body
      }
    }
  }
}


