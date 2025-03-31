const COS = require('cos-nodejs-sdk-v5');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

// 配置 COS 实例
const cos = new COS({
    SecretId: process.env.COS_SECRET_ID,
    SecretKey: process.env.COS_SECRET_KEY,
});

// 要上传的本地目录（通常是构建目录）
const localDir = path.resolve(process.cwd(), 'out');

// 递归上传目录
async function uploadDirectory(dirPath, targetPrefix = '') {
    const files = fs.readdirSync(dirPath);

    for (const file of files) {
        const filePath = path.join(dirPath, file);
        const stat = fs.statSync(filePath);
        const relativePath = path.join(targetPrefix, file);

        if (stat.isDirectory()) {
            await uploadDirectory(filePath, relativePath);
        } else {
            await uploadFile(filePath, relativePath);
        }
    }
}

// 上传单个文件
function uploadFile(filePath, cosKey) {
    return new Promise((resolve, reject) => {
        cos.putObject(
            {
                Bucket: process.env.COS_BUCKET,
                Region: process.env.COS_REGION,
                Key: path.join(process.env.COS_UPLOAD_PATH, cosKey).replace(/\\/g, '/'), // 统一路径格式
                Body: fs.createReadStream(filePath),
            },
            (err, data) => {
                if (err) {
                    console.error(`Upload failed: ${cosKey}`, err);
                    reject(err);
                } else {
                    console.log(`Upload success: ${cosKey}`);
                    resolve(data);
                }
            },
        );
    });
}

// 执行上传
(async () => {
    try {
        console.log('Starting COS upload...');
        await uploadDirectory(localDir);
        console.log('All files uploaded successfully!');
    } catch (err) {
        console.error('Upload failed:', err);
        process.exit(1);
    }
})();
