

import {PAGE_SIZE} from '../common/globalContants'

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
      ppage: 1,
      pnumber: PAGE_SIZE,
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
        ppage: this.ppage,
        pnumber: this.pnumber,
        ...this.params
      }
      const data = await apiRequest(p)
      this.dataSource = data.rows
      this.total = data.total
    },

    handlePageChange (ppage) {
      this.ppage = ppage
      this.getDataSource(this.apiRequest, this.params)
    },

    handlePageSizeChange (pnumber) {
      this.ppage = 1
      this.pnumber = pnumber
      this.getDataSource(this.apiRequest, this.params)
    }
  }
}

