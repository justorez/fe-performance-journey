// 兼容 node 17+
// NODE_OPTIONS=--openssl-legacy-provider
// v17 中的 OpenSSL3.0 对算法和密钥大小增加了严格的限制
console.log(process.env.NODE_OPTIONS)