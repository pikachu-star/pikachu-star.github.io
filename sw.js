/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/pikachu-star.github.io/404.html","056ef0887c1cc0a3b0901db8af4bac13"],["/pikachu-star.github.io/archives/2020/08/index.html","6b8092dced18176952341a94b6b4a73f"],["/pikachu-star.github.io/archives/2020/08/page/2/index.html","93c8531f79323d704ad10e188f6a0a75"],["/pikachu-star.github.io/archives/2020/index.html","6637d38ea8ce661bd7e7676bc05ae5fd"],["/pikachu-star.github.io/archives/2020/page/2/index.html","1d82f4515b290243725438c7852affab"],["/pikachu-star.github.io/archives/index.html","7f4479e0c9427254755b0a680238e2c6"],["/pikachu-star.github.io/archives/page/2/index.html","a139ee990d16adffd7204114ffd72249"],["/pikachu-star.github.io/assets/01.jpg","053b07ab096643b4328b1c12787fbf64"],["/pikachu-star.github.io/assets/1.jpg","04a9aa2fdffa99398a9c349fc7838c38"],["/pikachu-star.github.io/assets/2.jpg","610fe65a68617076e474afa977e182d2"],["/pikachu-star.github.io/assets/3.jpg","39f5214281e9a7a9dd3ce1aade9e97f6"],["/pikachu-star.github.io/assets/35.jpg","75bcda0c4300c05aba48229a2edf756c"],["/pikachu-star.github.io/assets/4.jpg","116972b449667dd08e6bbea21ef60322"],["/pikachu-star.github.io/assets/post.jpg","8fb7d10986b67a1dcba885f50a5de3a9"],["/pikachu-star.github.io/bangumis/index.html","91d838299b00e43f3b9aa354f0dd2319"],["/pikachu-star.github.io/books/index.html","186f552f2da15da2fd80867bd31d4326"],["/pikachu-star.github.io/box/about/index.html","fc838116effc5344b7efc0560b004f99"],["/pikachu-star.github.io/box/index.html","e74249b32bb86f8a3bc67bb98a07abb9"],["/pikachu-star.github.io/css/index.css","e8f601a744fe67e5dca42ff2f23e24a9"],["/pikachu-star.github.io/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/pikachu-star.github.io/home/index.html","1eb8c2a002f58345b4d24d4d0d20837e"],["/pikachu-star.github.io/img/1.jpg","73f0939dc74229aa3dcba69d531a3f64"],["/pikachu-star.github.io/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/pikachu-star.github.io/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/pikachu-star.github.io/img/avatar.png","c291715561b777d5601df42b8d8fc791"],["/pikachu-star.github.io/img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["/pikachu-star.github.io/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/pikachu-star.github.io/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/pikachu-star.github.io/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/pikachu-star.github.io/img/index.jpg","dce4b2c6fe3c36d9c9e8059f64f4d506"],["/pikachu-star.github.io/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/pikachu-star.github.io/img/post.jpg","b4c221a548615f2ab2e21b9d19115a6d"],["/pikachu-star.github.io/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["/pikachu-star.github.io/index.html","9d5c791febcbfb74a43ccfc3d5b2b2cc"],["/pikachu-star.github.io/js/calendar.js","7c97c12ab5c2c59378bcef3ea8c4594b"],["/pikachu-star.github.io/js/fireworks.js","87dd2a6ee3696b24a74e727439c9b27a"],["/pikachu-star.github.io/js/languages.js","09753f588fdaae0985d91e181f3a940b"],["/pikachu-star.github.io/js/main.js","b382597891e958e71bb7c1099977ec66"],["/pikachu-star.github.io/js/search/algolia.js","24e286714f775d2a52053e530b2ac199"],["/pikachu-star.github.io/js/search/local-search.js","e3a22e76d8b457655f619551990316e8"],["/pikachu-star.github.io/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["/pikachu-star.github.io/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["/pikachu-star.github.io/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["/pikachu-star.github.io/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["/pikachu-star.github.io/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["/pikachu-star.github.io/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["/pikachu-star.github.io/js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["/pikachu-star.github.io/js/tw_cn.js","0dcf46510648b9ff1a8a65d270ba117a"],["/pikachu-star.github.io/js/utils.js","9fadc7723c6bd679aa69c1c158f65af0"],["/pikachu-star.github.io/live2dw/assets/moc/haruto.2048/texture_00.png","56ff69b411abfc80cb68d0b1267959c5"],["/pikachu-star.github.io/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/pikachu-star.github.io/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/pikachu-star.github.io/movies/index.html","e68cade3395b5c89fde45c7528a114a0"],["/pikachu-star.github.io/page/2/index.html","48c100cd13372c9da1231c434d16d32c"],["/pikachu-star.github.io/posts/10163/index.html","6eec09523847890c8d4b81a40765673d"],["/pikachu-star.github.io/posts/10329/index.html","10d26162e9289934acfeec32d4aeaa42"],["/pikachu-star.github.io/posts/13134/index.html","4d23a1fe701c2a0eac3bc6770e247485"],["/pikachu-star.github.io/posts/16154/index.html","4370309486eb63028e1d6127f8c8435b"],["/pikachu-star.github.io/posts/21871/index.html","75193c2cac1129dfc3a89cf56c3e94e4"],["/pikachu-star.github.io/posts/22913/index.html","17091f9a60a23a74a3867fae82b3f149"],["/pikachu-star.github.io/posts/31182/index.html","d55fed071700c07131c61e21f0533ca3"],["/pikachu-star.github.io/posts/44734/index.html","09a22aed442bd1b37637ba272c145bf0"],["/pikachu-star.github.io/posts/57632/index.html","c0dc9125c0367ca89aa462fbade65a75"],["/pikachu-star.github.io/posts/58122/index.html","155066ae03535551e758f2fe58a69c2e"],["/pikachu-star.github.io/posts/60454/index.html","058f5b81e687eb3cf4939a142f5c542e"],["/pikachu-star.github.io/sw-register.js","da76c83cf18f0a777647d4fc30b5b62e"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
