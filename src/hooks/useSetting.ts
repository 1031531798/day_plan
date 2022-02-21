import { systemConfig } from '../config/system'
function usePrefixCls (className: string): string {
  const prefix = systemConfig.publicPrefixCls
  return `${prefix}-${className}`
}

export {
  usePrefixCls
}
