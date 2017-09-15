let url = {
  hotLists: '/index/hotLists',
  banner: '/index/banner',
  topList: '/category/topList',
  subList: '/category/subList',
  rank: '/category/rank',
  searchList: '/search/list',
  details: '/goods/details',
  deal: '/goods/deal',
  cartAdd: '/cart/add',
  cartLists: '/cart/list',
  cartReduce: '/cart/reduce',
  cartRemove: '/cart/remove',
  cartMremove: '/cart/mremove'
}



// 开发环境和真实环境的切换 RAp的接口的切换

let host = 'http://rapapi.org/mockjsdata/24170'


for (let key in url) {
	if (url.hasOwnProperty(key)) {
       url[key] = host + url[key]
	}
}
// 所有url上面加上host
export default url