# Domuna 个人作品集 · GitHub Pages 可部署版

本文件夹是可直接发布的静态网站，保持 V1.1 审美、页面内容、项目弹窗和移动端交互不变。**不需要安装 Node.js、React 或 Next.js。**

## 立即部署：GitHub Pages（免费）

1. 登录自己的 [GitHub](https://github.com/)，点击右上角 `+` → `New repository`。
2. 仓库名填写 **`Domuna.github.io`**（大小写不影响最终访问网址，建议用 `domuna.github.io`）；设置为 **Public**；创建仓库。注意：这会把上传的所有文件公开。
3. 进入新仓库，选 `Add file` → `Upload files`。上传**本文件夹里的文件**（`index.html`、`styles.css`、`script.js`、`favicon.svg`、`social-cover.svg`、`robots.txt`、`sitemap.xml`、`.nojekyll`）。请勿只上传 ZIP，也不要把所有文件包在一层子目录内。`README.md` 可以一起上传。
4. 提交到 `main`。进入仓库 `Settings` → `Pages`，`Build and deployment` 的 `Source` 选 **Deploy from a branch**，Branch 选 `main`，Folder 选 `/(root)`，点击 **Save**。
5. 等待 GitHub Pages 发布成功，从仓库 `Settings → Pages` 打开提供的网址。若用户名确为 `Domuna` 且采用用户站点仓库，预期网址是 **https://domuna.github.io/**。这个 URL 是**预期地址，不代表目前已经发布成功**。
6. 用电脑和手机分别打开站点，检查首屏、项目筛选、详情弹窗、GitHub 链接、菜单、简历待添加提示，以及在 320px 的窄屏浏览效果。

> 源代码已上传到 GitHub。GitHub Pages 需在仓库 Settings → Pages 中启用。

## 公开发布注意

- 当前站点展示的是项目概念视觉，**不是项目实际运行截图**，页面内已注明。
- 真实邮箱、简历 PDF、实习单位与具体时间暂未添加；Resume 按钮现在会解释原因，不会伪装成已能下载。
- 不要上传 API Key、私有数据、公司内部评测素材或其他敏感信息。
- 三个案例目前通过模态弹窗展示，暂时没有各自独立、可索引的网址；建议在发布首版后再迭代为独立详情页。

## 基础搜索与分享信息

- `index.html` 已配置 `title`、`description`、`canonical`、Open Graph 和 Twitter 分享元信息。
- `robots.txt` + `sitemap.xml` 指向 **https://domuna.github.io/**；如果以后更换为 `portfolio` 项目地址或自购域名，请让 Codex 把上述 URL **整体替换为正式网址**后再发布。
- `social-cover.svg` 用于分享到部分平台的预览封面。
- 上线后可以使用 Google Search Console 验证站点并提交 Sitemap，但**收录不保证成功，也不保证排名**。

## 文件结构

- `index.html`：网站主体和 SEO 元信息
- `styles.css`：视觉与全端响应式样式
- `script.js`：项目筛选、弹窗、移动菜单与轻量动画
- `favicon.svg`：站点图标
- `social-cover.svg`：分享封面
- `robots.txt` / `sitemap.xml`：搜索引擎基础文件
- `.nojekyll`：提示 GitHub Pages 无需 Jekyll 处理

## 以后如何通过 Codex 更新

让 Codex 修改仓库代码，运行本地验证，提交到 `main`。在已启用从 main 分支发布后，新提交会触发 GitHub Pages 的重新发布。无需重做网站。