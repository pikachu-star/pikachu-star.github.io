/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/pikachu-star.github.io/404.html","22cf2b869ee3b105d3236737b806c25a"],["/pikachu-star.github.io/archives/2020/08/index.html","ca00488b9e372549d50a246946e67e25"],["/pikachu-star.github.io/archives/2020/08/page/2/index.html","9e27abe62c745c56cde75a227ffc44d5"],["/pikachu-star.github.io/archives/2020/index.html","35b135b379cee67ad4d0799d61e21ca3"],["/pikachu-star.github.io/archives/2020/page/2/index.html","437237d3969253542b2db3245e442a82"],["/pikachu-star.github.io/archives/index.html","89a614acf8d33ec1c941ab68d631b500"],["/pikachu-star.github.io/archives/page/2/index.html","fa5d995093775539c7f414866fd615c4"],["/pikachu-star.github.io/assets/01.jpg","053b07ab096643b4328b1c12787fbf64"],["/pikachu-star.github.io/assets/1.jpg","04a9aa2fdffa99398a9c349fc7838c38"],["/pikachu-star.github.io/assets/2.jpg","610fe65a68617076e474afa977e182d2"],["/pikachu-star.github.io/assets/3.jpg","39f5214281e9a7a9dd3ce1aade9e97f6"],["/pikachu-star.github.io/assets/35.jpg","75bcda0c4300c05aba48229a2edf756c"],["/pikachu-star.github.io/assets/4.jpg","116972b449667dd08e6bbea21ef60322"],["/pikachu-star.github.io/assets/post.jpg","8fb7d10986b67a1dcba885f50a5de3a9"],["/pikachu-star.github.io/bangumis/index.html","d939b360b693c656840e55c2f6b0abfc"],["/pikachu-star.github.io/books/index.html","3d63c602dda0a413cd8eb6c1f64bc851"],["/pikachu-star.github.io/box/about/index.html","334c6c7252c06fcaa3bc16343ffad56d"],["/pikachu-star.github.io/box/index.html","1da46b2361bcda99cb11a4c5ea368520"],["/pikachu-star.github.io/css/index.css","e8f601a744fe67e5dca42ff2f23e24a9"],["/pikachu-star.github.io/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/pikachu-star.github.io/home/index.html","06049d5f454448c66689fd081c55e44c"],["/pikachu-star.github.io/img/1.jpg","73f0939dc74229aa3dcba69d531a3f64"],["/pikachu-star.github.io/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/pikachu-star.github.io/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/pikachu-star.github.io/img/avatar.png","c291715561b777d5601df42b8d8fc791"],["/pikachu-star.github.io/img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["/pikachu-star.github.io/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/pikachu-star.github.io/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/pikachu-star.github.io/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/pikachu-star.github.io/img/index.jpg","dce4b2c6fe3c36d9c9e8059f64f4d506"],["/pikachu-star.github.io/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/pikachu-star.github.io/img/post.jpg","b4c221a548615f2ab2e21b9d19115a6d"],["/pikachu-star.github.io/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["/pikachu-star.github.io/index.html","245c8fa304fef81a333ac4f95017e120"],["/pikachu-star.github.io/js/calendar.js","7c97c12ab5c2c59378bcef3ea8c4594b"],["/pikachu-star.github.io/js/fireworks.js","87dd2a6ee3696b24a74e727439c9b27a"],["/pikachu-star.github.io/js/languages.js","09753f588fdaae0985d91e181f3a940b"],["/pikachu-star.github.io/js/main.js","b382597891e958e71bb7c1099977ec66"],["/pikachu-star.github.io/js/search/algolia.js","24e286714f775d2a52053e530b2ac199"],["/pikachu-star.github.io/js/search/local-search.js","e3a22e76d8b457655f619551990316e8"],["/pikachu-star.github.io/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["/pikachu-star.github.io/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["/pikachu-star.github.io/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["/pikachu-star.github.io/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["/pikachu-star.github.io/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["/pikachu-star.github.io/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["/pikachu-star.github.io/js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["/pikachu-star.github.io/js/tw_cn.js","0dcf46510648b9ff1a8a65d270ba117a"],["/pikachu-star.github.io/js/utils.js","9fadc7723c6bd679aa69c1c158f65af0"],["/pikachu-star.github.io/live2dw/assets/moc/haruto.2048/texture_00.png","56ff69b411abfc80cb68d0b1267959c5"],["/pikachu-star.github.io/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/pikachu-star.github.io/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/pikachu-star.github.io/movies/index.html","ccb13d90722c87fdb66b2169752ef5d8"],["/pikachu-star.github.io/page/2/index.html","dc8886311f81783bc33bcd7544f0d2d0"],["/pikachu-star.github.io/posts/10163/index.html","01493324fa0e9218362b8e6f3447245a"],["/pikachu-star.github.io/posts/10329/index.html","e8e85fa6f55162c933955e7d8279728e"],["/pikachu-star.github.io/posts/13134/index.html","882e1d5fb75d954de84f30cd2e26815a"],["/pikachu-star.github.io/posts/16154/index.html","6091a8f00aa0ada4b1204c1a00020aff"],["/pikachu-star.github.io/posts/21871/index.html","78af86883f9f57e47e512a8e7797234f"],["/pikachu-star.github.io/posts/22913/index.html","86c588d8d9d732cf7c1b788f95b8cb48"],["/pikachu-star.github.io/posts/31182/index.html","77853bb321ac0215962a0a969db78757"],["/pikachu-star.github.io/posts/44734/index.html","032a41281aaa141de3b91d5ca5a816c9"],["/pikachu-star.github.io/posts/57632/index.html","c07457d92bf542ee2a90a89b6672fb9c"],["/pikachu-star.github.io/posts/58122/index.html","32cca48a6160747c2dff225aeb93de88"],["/pikachu-star.github.io/posts/60454/index.html","e659c82c97571dd83490f37397c62197"],["/pikachu-star.github.io/sw-register.js","c19aac2184400a3a93f1c299560c61e1"]];
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
