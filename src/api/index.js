import Ajax from '@/ajax/Ajax'
// 1.三级分类列表数据数据函数
// 请求地址：/api/product/getBaseCategoryList
// 请求方式:GET
// 参数:无

export const reqCategoryList = () => {
    return Ajax({
        url:'/product/getBaseCategoryList',
        method:'get'
    })
}

// reqCategoryList()