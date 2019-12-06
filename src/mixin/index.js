/**
 * Description:
 *
 * Created by longyihuang on 2019/4/26
 * E-Mail: 475865662@qq.com
 */

export const keyEvent = {
  methods: {
    /**
     * 回车登录
     */
    keyupEnter (url, after) {
      document.onkeydown = e => {
        let body = document.getElementsByTagName('body')[0]
        if (e.keyCode === 13 && e.target.baseURI.match(url) && e.target === body) {
          after()
        }
      }
    }
  }
}


