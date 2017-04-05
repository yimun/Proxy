function FindProxyForURL(url, host) {
    var PROXY = "PROXY tunnel.douban.com:8118;HTTPS tunnel.douban.com:8443;DIRECT";
    var DEFAULT = "DIRECT";

    var common_list = [
        "abc.xyz",
        "amazonaws.com",
        "android.com",
        "appspot.com",
        "archive.org",
        "awsstatic.com",
        "bit.ly",
        "blogger.com",
        "blogspot.com",
        "blogspot.jp",
        "bloomberg.com",
        "brit.co",
        "bustle.com",
        "cloudflare.com",
        "cloudfront.net",
        "digg.com",
        "doubleclick.net",
        "dropbox.com",
        "facebook.com",
        "facebook.net",
        "fastly.net",
        "fbcdn.net",
        "flickr.com",
        "freepik.com",
        "g.co",
        "ggpht.com",
        "git-scm.com",
        "github.com",
        "githubusercontent.com",
        "gmail.com",
        "golang.org",
        "goo.gl",
        "google-analytics.com",
        "google.cn",
        "google.co.id",
        "google.co.jp",
        "google.com",
        "google.com.hk",
        "google.com.pk",
        "google.com.tw",
        "googleapis.com",
        "googlecode.com",
        "googlesource.com",
        "googletagservices.com",
        "googleusercontent.com",
        "googlevideo.com",
        "gravatar.com",
        "gstatic.com",
        "instagram.com",
        "jsbin.com",
        "lgtm.in",
        "media.net",
        "medium.com",
        "nyt.com",
        "nytimes.com",
        "nytimes.com",
        "nytstyle.com",
        "openvpn.net",
        "openx.net",
        "pinimg.com",
        "pinterest.com",
        "popsugar-assets.com",
        "popsugar.com",
        "python.org",
        "readthedocs.org",
        "refinery29.com",
        "salon.com",
        "slack-edge.com",
        "slack-msgs.com",
        "slack.com",
        "slack.global.ssl.fastly.net",
        "slideshare.net",
        "soundcloud.com",
        "sstatic.net",
        "t.co",
        "trello.com",
        "trellocdn.com",
        "tumblr.com",
        "twimg.com",
        "twitter.com",
        "uplynk.com",
        "vimeo.com",
        "vultr.com",
        "whatismyipaddress.com",
        "wikipedia.org",
        "wordpress.com",
        "wp.com",
        "www.shutterstock.com",
        "yimg.com",
        "youtu.be",
        "youtube.com",
        "ytimg.com",
        "ytimg.com",
    ]

    for(var i=0; i<common_list.length; i++){
        if(dnsDomainIs(host, common_list[i])){
            return PROXY;
        }
    }

    return DEFAULT;
}
