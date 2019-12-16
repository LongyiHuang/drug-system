import { Loading } from 'element-ui'
let needLoadingRequestCount = 0

let loading

function startLoading () {
  loading = Loading.service({
    lock: true,
    text: '加载中……',
    background: 'rgba(0, 0, 0, 0.7)'
  })
}

function endLoading () {
  loading.close()
}


export function tryHideFullScreenLoading () {
  if (needLoadingRequestCount <= 0) return
  needLoadingRequestCount--
  if (needLoadingRequestCount === 0) {
    setTimeout(tryCloseLoading, 300)
  }
}

export function showFullScreenLoading () {
  if (needLoadingRequestCount === 0) {
    startLoading()
  }
  needLoadingRequestCount++
}

const tryCloseLoading = () => {
  if (needLoadingRequestCount === 0) {
    endLoading()
  }
}
