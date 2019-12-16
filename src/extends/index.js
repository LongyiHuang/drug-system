import { PAGE_SIZE } from '../common/globalContants'

/**
 * Description: 页面加载公共类 支持分页
 *
 * Created by longyihuang on 2019/4/26
 * E-Mail: 475865662@qq.com
 */
export const tableList = {
  data () {
    return {
      dataSource: [],
      total: 0,
      currentPage: 1,
      pageSize: PAGE_SIZE,
      apiRequest: undefined,
      params: undefined
    }
  },

  methods: {
    async getDataSource (apiRequest, params) {
      if (!apiRequest) {
        return;
      }
      this.apiRequest = apiRequest
      this.params = params
      const p = {
        currentPage: this.currentPage,
        pageSize: this.pageSize,
        ...this.params
      }
      const data = await apiRequest(p)
      this.dataSource = data.rows
      this.total = data.total
    },

    handlePageChange (currentPage) {
      this.currentPage = currentPage
      this.getDataSource(this.apiRequest, this.params)
    },

    handlePageSizeChange (pageSize) {
      this.currentPage = 1
      this.pageSize = pageSize
      this.getDataSource(this.apiRequest, this.params)
    }
  }
}

