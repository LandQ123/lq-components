const checkAuth = (authName) => {
    let authMap = ['admin', 'superAdmin', 'admin-1', 'landq'] // 根据实际项目需求配置
    return authMap.includes(authName);
}
export default checkAuth;