/*
使用mockjs提供mock数据接口
 */
import Mock from 'mockjs'
import data from './data.json'

// demo的接口,返回demo对象
Mock.mock('/demo', {data: data.demo})

