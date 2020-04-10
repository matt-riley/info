export const timeTreeMiddleWare = async (resolve: () => any, _parent: any, _args: any, ctx: any, info: any) => {
  const logger = ctx.logger;
  const timer = ctx.timer;
  const newTimer = timer.split(info.fieldName, {
    operation: info.operation,
  })
  try {
    const result = await resolve();
    newTimer.end()
    return result
  } catch (error) {
    newTimer.end()
    logger.error(error)
    return error
  }
}