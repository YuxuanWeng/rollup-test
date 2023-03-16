import OSS from 'ali-oss' // rollup会报错
// const OSS = require('ali-oss') // 不会报错，但是打出来的包把这句话原本输出了，运行的时候报错，我们生产的项目是electron-builder打包的，对大小有要求，把node_modules都屏蔽了，而且我们想用esm
const oss = new OSS({
    region: 'test',
    accessKeyId: 'test',
    accessKeySecret: 'test',
    bucket: 'test'
})
console.log(oss)