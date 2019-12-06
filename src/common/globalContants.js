/**
 * Description:
 * 全局常量
 * Created by longyihuang on 2019/4/26
 * E-Mail: 475865662@qq.com
 */

export const DATE_TIME_FORMAT = 'YYYY-MM-DD HH:mm:ss';
export const PAGE_SIZE = 10;
export const ALIYUN_CALL_CENTER_INSTANCE_ID = '5de5e024-bfa4-4e3f-b25f-ce6adcccb09e';
export const CODE_INTERVAL_SECONDS = 60;
export const VERSION = 'V1.0.1'


export const CallWorkStatus = {
  WORK_STATUS_SIGN_OUT: 1, // 签出
  WORK_STATUS_SIGN_IN: 2, // 签入
  WORK_STATUS_READY: 3, // 空闲
  WORK_STATUS_BREAK: 4, // 小休
  WORK_STATUS_AFTER_CALL: 5, // 话后处理
  WORK_STATUS_CALL_COMING: 6, // 来电振铃
  WORK_STATUS_DIALING_CALL: 8, // 拨号
  WORK_STATUS_IN_CALL_COMING: 9, // 来电接通
  WORK_STATUS_IN_DIALING_CALL: 10 // 拨号接通
}

export const CallType = {
  CALL_IN: 1,
  CALL_OUT: 2
}

export const OrderHandleRecordType = {
  RECORD_TYPE_CREATE_ORDER: 1,
  RECORD_TYPE_AUTO_DISPATCH: 2,
  RECORE_TYPE_DISPATCH: 3
}





export const OrderType = {
  ORDER_TYPE_CLEAN_INDOOR: 1, // 户内保洁工单
  ORDER_TYPE_CLEAN_PUBLIC_AREA: 2, // 公区保洁工单
  ORDER_TYPE_MAINTAIN_INDOOR: 3, // 户内维修工单
  ORDER_TYPE_MAINTAIN_PUBLIC_AREA: 4, // 公区维修工单
  ORDER_TYPE_COMPLAINT_CLEAN: 5, // 保洁投诉工单
  ORDER_TYPE_COMPLAINT_MAINTAIN: 6, // 维修投诉工单
  ORDER_TYPE_COMPLAINT_SALE: 7, // 销售投诉工单
  ORDER_TYPE_COMPLAINT_VTOWN: 8, // 微棠投诉工单
  ORDER_TYPE_COMPLAINT_ORDER: 9, // 其他投诉工单
  ORDER_TYPE_VTOWN: 10, // 微棠工单
  ORDER_TYPE_OTHER: -1 // 其他类型的工单
}


export const BzFormItemType = {
    None: -1,
    Input: 0,
    Checkbox: 1,
    Radio: 2,
    TimePicker: 3,
    DatePicker: 4,
    DateTimePicker: 5,
    InputArea: 6,
    UploadImage: 7,
    UploadFile: 8,
    UploadAvatar: 9,
    Select: 10,
    RentCheckOut: 11,
    InputNumber: 12
}
export const ProductStatus = {
  PATAWAY_UP: 1, // 上架
  SOLD_OUT: 2 // 下架
}


export const HouseLockStatus = {
  LOCK: 1, // 锁房
  UNLOCK: 0 // 解锁
}

export const ProductCoverCategory = {
  BIG_COVER: 1, // 大封面
  SMALL_COVER: 2 // 小封面
}

export const EnclosureType = {
  CHECK_IN_CONVENTION: 1, // 入住公约
  SAFETY_INSTRUCTION: 2, // 安全须知
  CONTRACT: 3 // 合同正文
}


export const NotificationStatus = {
  PUBLISH: 1, // 已发布
  REPEAL: 0 // 已撤销
}

export const NotifyFeatureTypes = {
  TENANTS: 1 // 住户
}
