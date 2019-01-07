/* eslint-disable */

const ROOT_URL = 'http://39.98.165.19:8080/'

const PAGE_SIZE = {
    large: 10,
    mid: 6,
    small: 3,
    test: 1,
}

const ROUTERS = {
    applyingRequest: 'admin/seller/request/applying',
    aprrovedRequest: 'admin/seller/request/approved',
    rejectedRequest: 'admin/seller/request/rejected',
    adApplying: 'admin/ad/applying',
    adApproved: 'admin/ad/approved',
    adRejected: 'admin/ad/rejected',
    shopBlacklist: 'admin/blacklist/shop',
    sellerBlacklist: 'admin/blacklist/seller',
    buyerBlacklist: 'admin/blacklist/buyer',
    handleRequest: 'admin/seller/request/deal',
    handleAdvertisement: 'admin/ad/request/approval',
    deleteRequest: 'admin/seller/request/delete',
    deleteShop: 'admin/seller/shop/delete',
    deleteSeller: 'admin/seller/delete',
    deleteBuyer: 'admin/customer/delete',
    blackSomething: 'admin/seller/blacklist/add',
    removeFromBlacklist: 'admin/seller/blacklist/remove',
    changeCommissionRate: 'admin/commission/add',
    backupDatabase: 'admin/db/backup',
    requestAmount: 'admin/seller/request/amount',
    shopAmount: 'admin/seller/shop/amount',
    sellerAmount: 'admin/seller/amount',
    buyerAmount: 'admin/customer/amount',
    ordersAmount: 'admin/order/amount',
    adRequestAmount: 'admin/ad/request/amount',
    blacklistAmount: 'admin/seller/blacklist/amount',
    listRequest: 'admin/seller/request/list',
    listShop: 'admin/seller/shop/list',
    listSeller: 'admin/seller/list',
    listBuyer: 'admin/customer/list',
    listAdRequest: 'admin/ad/request/list',
    listBlacklist: 'admin/seller/blacklist/list',
    orders: 'admin/order/findOrders',
    totalIncome: 'admin/sales/total',
    partlyIncome: 'admin/sales/partly',
    commissionRate: 'admin/commission/findLast',
    SearchForShop: 'admin/seller/search/shopname',
    SearchForSeller: 'admin/seller/search/sellername',
    SearchForBuyer: 'admin/customer/search/name',
    searchForOrder: 'admin/order/search',
    getUserType: 'user/role',
    userLogin: 'user/login',
    changePwd: 'change/password',
    loginBoolean: 'user/auth',
    logout: 'logout',
}

const REQUEST_STATUS = {
    applying: {status: 0},
    approved: {status: 1},
    rejected: {status: 2}
}


const INSTANCE_STATUS = {
    seller: 0,
    shop: 1,
    buyer: 2,
    ad: 3,
}

const TYPE = {
    request: Symbol('request'),
    blacklist: Symbol('blacklist'),
    seller: Symbol('seller'),
    buyer: Symbol('buyer'),
    shop: Symbol('shop'),
    default: Symbol('default'),
    adRequest: Symbol('adRequest')
}

function GET_URL(path){ //得到url
    return ROOT_URL+path
}

export {
    ROOT_URL,
    PAGE_SIZE,
    ROUTERS,
    REQUEST_STATUS,
    INSTANCE_STATUS,
    GET_URL,
    TYPE
}