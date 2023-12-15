import{_ as s,o as a,c as i,R as e}from"./chunks/framework.TktCGlL7.js";const b=JSON.parse('{"title":"更新及卸载","description":"","frontmatter":{},"headers":[],"relativePath":"life/two.md","filePath":"life/two.md","lastUpdated":1702284585000}'),n={name:"life/two.md"},l=e(`<h1 id="更新及卸载" tabindex="-1">更新及卸载 <a class="header-anchor" href="#更新及卸载" aria-label="Permalink to &quot;更新及卸载&quot;">​</a></h1><blockquote><p>更新时间：2023-10-28</p></blockquote><h2 id="更新" tabindex="-1">更新 <a class="header-anchor" href="#更新" aria-label="Permalink to &quot;更新&quot;">​</a></h2><h3 id="安装ncu" tabindex="-1">安装ncu <a class="header-anchor" href="#安装ncu" aria-label="Permalink to &quot;安装ncu&quot;">​</a></h3><div class="danger custom-block"><p class="custom-block-title">注意</p><p>已经安装过的可以无视</p></div><p>由于直接用命令更新，不能改变 <code>package.json</code> 的内容</p><p>我更推荐用 npm-check-updates，即 <code>ncu</code></p><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> i</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -g</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> npm-check-updates</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>ncu可以可以检查出需更新的软件包</p><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ncu</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="更新-1" tabindex="-1">更新 <a class="header-anchor" href="#更新-1" aria-label="Permalink to &quot;更新&quot;">​</a></h3><p>更新模块包版本信息</p><div class="tip custom-block"><p class="custom-block-title">说明</p><p>这时候我们的 <code>package.json</code> 里的版本都按最新的填写完毕了</p></div><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#即运行ncu -u to upgrade package.json</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ncu</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -u</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>我们直接用命令更新安装依赖即可</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-w-kdq" id="tab-AK-Eq5V" checked="checked"><label for="tab-AK-Eq5V">pmpm</label><input type="radio" name="group-w-kdq" id="tab-j4vXIXg"><label for="tab-j4vXIXg">yarn</label><input type="radio" name="group-w-kdq" id="tab-P8Ui17M"><label for="tab-P8Ui17M">bun</label></div><div class="blocks"><div class="language-sh vp-adaptive-theme active line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yarn</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">bun</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div></div></div><h2 id="卸载" tabindex="-1">卸载 <a class="header-anchor" href="#卸载" aria-label="Permalink to &quot;卸载&quot;">​</a></h2><p>卸载就比较简单了，在 <code>package.json</code> 中找到包名即可</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-_SqXc" id="tab-Ti0IqDG" checked="checked"><label for="tab-Ti0IqDG">pmpm</label><input type="radio" name="group-_SqXc" id="tab-wpZRkAF"><label for="tab-wpZRkAF">yarn</label><input type="radio" name="group-_SqXc" id="tab-wcEPfBe"><label for="tab-wcEPfBe">bun</label></div><div class="blocks"><div class="language-sh vp-adaptive-theme active line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> uninstall</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">包</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">名</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yarn</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> uninstall</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">包</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">名</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">bun</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> uninstall</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">包</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">名</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div></div></div><div class="info custom-block"><p class="custom-block-title">比如</p><p>pnpm uninstall vue</p><p><code>vue</code> 就是包名</p></div>`,20),t=[l];function p(d,h,r,c,o,k){return a(),i("div",null,t)}const g=s(n,[["render",p]]);export{b as __pageData,g as default};
