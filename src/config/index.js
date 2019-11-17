import configs from './config.json'

// 设置环境配置
const env = (process.env.NODE_ENV || 'development').trim()
let config = {}

config.env = env
config.envConfig = configs[env]

export default config
