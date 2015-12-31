Ext.define('Semblance.generator.web.UserAgent', {
	extend: 'Semblance.generator.Base',
	alias: 'semblance.web.useragent',
	data: function () {
		var me = this,
			len = me.items.length-1,
			item = me.items[me.random(0, len)];

		return item.ua;
	},
	items: [{
	    description: 'Arora 0.6.0 - (Vista)',
	    ua: 'Mozilla/5.0 (Windows; U; Windows NT 6.0; en-US) AppleWebKit/527  (KHTML, like Gecko, Safari/419.3) Arora/0.6 (Change: )'
	}, {
	    description: 'Avant Browser 1.2',
	    ua: 'Avant Browser/1.2.789rel1 (http://www.avantbrowser.com)'
	}, {
	    description: 'Chrome 4.0.249.0 (Win 7)',
	    ua: 'Mozilla/5.0 (Windows; U; Windows NT 6.1; en-US) AppleWebKit/532.5 (KHTML, like Gecko) Chrome/4.0.249.0 Safari/532.5'
	}, {
	    description: 'Chrome 5.0.310.0 (Server 2003)',
	    ua: 'Mozilla/5.0 (Windows; U; Windows NT 5.2; en-US) AppleWebKit/532.9 (KHTML, like Gecko) Chrome/5.0.310.0 Safari/532.9'
	}, {
	    description: 'Chrome 7.0.514.0 (Win XP)',
	    ua: 'Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US) AppleWebKit/534.7 (KHTML, like Gecko) Chrome/7.0.514.0 Safari/534.7'
	}, {
	    description: 'Chrome 9.0.601.0 (Vista)',
	    ua: 'Mozilla/5.0 (Windows; U; Windows NT 6.0; en-US) AppleWebKit/534.14 (KHTML, like Gecko) Chrome/9.0.601.0 Safari/534.14'
	}, {
	    description: 'Chrome 10.0.601.0 (Win 7)',
	    ua: 'Mozilla/5.0 (Windows; U; Windows NT 6.1; en-US) AppleWebKit/534.14 (KHTML, like Gecko) Chrome/10.0.601.0 Safari/534.14'
	}, {
	    description: 'Chrome 11.0.672.2 (Win 7)',
	    ua: 'Mozilla/5.0 (Windows; U; Windows NT 6.1; en-US) AppleWebKit/534.20 (KHTML, like Gecko) Chrome/11.0.672.2 Safari/534.20'
	}, {
	    description: 'Chrome 12.0.712.0 (Win 7 64)',
	    ua: 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/534.27 (KHTML, like Gecko) Chrome/12.0.712.0 Safari/534.27'
	}, {
	    description: 'Chrome 13.0.782.24 (Win 7 64)',
	    ua: 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/535.1 (KHTML, like Gecko) Chrome/13.0.782.24 Safari/535.1'
	}, {
	    description: 'Chrome 15.0.874.120 (Vista)',
	    ua: 'Mozilla/5.0 (Windows NT 6.0) AppleWebKit/535.2 (KHTML, like Gecko) Chrome/15.0.874.120 Safari/535.2'
	}, {
	    description: 'Chrome 16.0.912.36 (Win 7 64)',
	    ua: 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/535.7 (KHTML, like Gecko) Chrome/16.0.912.36 Safari/535.7'
	}, {
	    description: 'Chrome 18.6.872.0 (Win 7)',
	    ua: 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/535.2 (KHTML, like Gecko) Chrome/18.6.872.0 Safari/535.2 UNTRUSTED/1.0 3gpp-gba UNTRUSTED/1.0'
	}, {
	    description: 'Chrome 19.0.1061.1 (Win 8 - NT 6.2)',
	    ua: 'Mozilla/5.0 (Windows NT 6.2) AppleWebKit/536.3 (KHTML, like Gecko) Chrome/19.0.1061.1 Safari/536.3'
	}, {
	    description: 'Chrome 20.0.1092.0 (Win 7)',
	    ua: 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/536.6 (KHTML, like Gecko) Chrome/20.0.1092.0 Safari/536.6'
	}, {
	    description: 'Chrome 20.0.1090.0 (Win 8)',
	    ua: 'Mozilla/5.0 (Windows NT 6.2) AppleWebKit/536.6 (KHTML, like Gecko) Chrome/20.0.1090.0 Safari/536.6'
	}, {
	    description: 'Firefox 3.0.2pre (Win XP 64)',
	    ua: 'Mozilla/5.0 (Windows; U; Windows NT 6.0 x64; en-US; rv:1.9pre) Gecko/2008072421 Minefield/3.0.2pre'
	}, {
	    description: 'Firefox 3.0.10 (Win XP)',
	    ua: 'Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.9.0.10) Gecko/2009042316 Firefox/3.0.10'
	}, {
	    description: 'Firefox 3.0.11 (Vista)   .NET',
	    ua: 'Mozilla/5.0 (Windows; U; Windows NT 6.0; en-GB; rv:1.9.0.11) Gecko/2009060215 Firefox/3.0.11 (.NET CLR 3.5.30729)'
	}, {
	    description: 'Firefox 3.5.6 (Vista)',
	    ua: 'Mozilla/5.0 (Windows; U; Windows NT 6.0; en-US; rv:1.9.1.6) Gecko/20091201 Firefox/3.5.6 GTB5'
	}, {
	    description: 'Firefox 3.6.8 (XP)',
	    ua: 'Mozilla/5.0 (Windows; U; Windows NT 5.1; tr; rv:1.9.2.8) Gecko/20100722 Firefox/3.6.8 ( .NET CLR 3.5.30729; .NET4.0E)'
	}, {
	    description: 'Firefox 4.01 (Win 7 32)',
	    ua: 'Mozilla/5.0 (Windows NT 6.1; rv:2.0.1) Gecko/20100101 Firefox/4.0.1'
	}, {
	    description: 'Firefox 4.01 (Win 7 64)',
	    ua: 'Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:2.0.1) Gecko/20100101 Firefox/4.0.1'
	}, {
	    description: 'Firefox 5.0 (XP)',
	    ua: 'Mozilla/5.0 (Windows NT 5.1; rv:5.0) Gecko/20100101 Firefox/5.0'
	}, {
	    description: 'Firefox 6.0a2 (Win 7 64)',
	    ua: 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:6.0a2) Gecko/20110622 Firefox/6.0a2'
	}, {
	    description: 'Firefox 7.0.1 (Win 7 64)',
	    ua: 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:7.0.1) Gecko/20100101 Firefox/7.0.1'
	}, {
	    description: 'Firefox 10.0.1 (Win 7 64)',
	    ua: 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:10.0.1) Gecko/20100101 Firefox/10.0.1'
	}, {
	    description: 'Firefox 12.0 (Win 7 32)',
	    ua: 'Mozilla/5.0 (Windows NT 6.1; rv:12.0) Gecko/20120403211507 Firefox/12.0'
	}, {
	    description: 'Firefox 20.0 (Win 8 32)',
	    ua: 'Mozilla/5.0 (Windows NT 6.2; rv:20.0) Gecko/20121202 Firefox/20.0'
	}, {
	    description: 'Minefield (Firefox nightly) 4.0b4pre (Win 7)',
	    ua: 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:2.0b4pre) Gecko/20100815 Minefield/4.0b4pre'
	}, {
	    description: 'MSIE 5.5 (Win 2000)',
	    ua: 'Mozilla/4.0 (compatible; MSIE 5.5; Windows NT 5.0 )'
	}, {
	    description: 'MSIE 5.5 (Win ME)',
	    ua: 'Mozilla/4.0 (compatible; MSIE 5.5; Windows 98; Win 9x 4.90)'
	}, {
	    description: 'Multizilla 1.6 (Win XP)',
	    ua: 'Mozilla/5.0 (Windows; U; Windows XP) Gecko MultiZilla/1.6.1.0a'
	}, {
	    description: 'Netscape 2.02 (Win 95)',
	    ua: 'Mozilla/2.02E (Win95; U)'
	}, {
	    description: 'Netscape 3.01 gold (Win 95)',
	    ua: 'Mozilla/3.01Gold (Win95; I)'
	}, {
	    description: 'Netscape 4.8 (Win XP)',
	    ua: 'Mozilla/4.8 [en] (Windows NT 5.1; U)'
	}, {
	    description: 'Netscape 7.1 (Win 98)',
	    ua: 'Mozilla/5.0 (Windows; U; Win98; en-US; rv:1.4) Gecko Netscape/7.1 (ax)'
	}, {
	    description: 'Opera 7.5 (Win XP)',
	    ua: 'Opera/7.50 (Windows XP; U)'
	}, {
	    description: 'Opera 7.5 (Win ME)',
	    ua: 'Opera/7.50 (Windows ME; U) [en]'
	}, {
	    description: 'Opera 7.51 (Win XP)',
	    ua: 'Opera/7.51 (Windows NT 5.1; U) [en]'
	}, {
	    description: 'Opera 8.0 (Win 2000)',
	    ua: 'Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.0; en) Opera 8.0'
	}, {
	    description: 'Opera 9.25 - (Vista)',
	    ua: 'Opera/9.25 (Windows NT 6.0; U; en)'
	}, {
	    description: 'Opera 10.10 (id as 9.8) (Server 2003)',
	    ua: 'Opera/9.80 (Windows NT 5.2; U; en) Presto/2.2.15 Version/10.10'
	}, {
	    description: 'Opera 11.10 (id as 9.8) (Win XP)',
	    ua: 'Opera/9.80 (Windows NT 5.1; U; zh-tw) Presto/2.8.131 Version/11.10'
	}, {
	    description: 'Opera 12.00 (id as 9.8) (Win 7)',
	    ua: 'Opera/9.80 (Windows NT 6.1; U; es-ES) Presto/2.9.181 Version/12.00'
	}, {
	    description: 'Phoenix 0.2 (NT 4.0)',
	    ua: 'Mozilla/5.0 (Windows; U; WinNT4.0; en-US; rv:1.2b) Gecko/20021001 Phoenix/0.2'
	}, {
	    description: 'Safari 531.21.10 (Win XP)',
	    ua: 'Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US) AppleWebKit/531.21.8 (KHTML, like Gecko) Version/4.0.4 Safari/531.21.10'
	}, {
	    description: 'SeaMonkey 1.1.18 (Win XP)',
	    ua: 'Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.8.1.23) Gecko/20090825 SeaMonkey/1.1.18'
	}, {
	    description: 'Arora 0.8.0 - (Windows)',
	    ua: 'Mozilla/5.0 (Windows; U; ; en-NZ) AppleWebKit/527  (KHTML, like Gecko, Safari/419.3) Arora/0.8.0'
	}, {
	    description: 'Avant Browser - MSIE 7 (Win XP)',
	    ua: 'Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 5.1; Avant Browser; Avant Browser; .NET CLR 1.0.3705; .NET CLR 1.1.4322; Media Center PC 4.0; .NET CLR 2.0.50727; .NET CLR 3.0.04506.30)'
	}, {
	    description: 'Beamrise - (Win 7) - Webkit 535.8',
	    ua: 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/535.8 (KHTML, like Gecko) Beamrise/17.2.0.9 Chrome/17.0.939.0 Safari/535.8'
	}, {
	    description: 'Chrome 22.0.1207.1 (Win 7 - 64 bit)',
	    ua: 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.1 (KHTML, like Gecko) Chrome/22.0.1207.1 Safari/537.1'
	}, {
	    description: 'Chrome 28.0.1469.0 (Win 7 - 64 bit)',
	    ua: 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML like Gecko) Chrome/28.0.1469.0 Safari/537.36'
	}, {
	    description: 'Chrome 28.0.1469.0 (Win 8 - 64 bit)',
	    ua: 'Mozilla/5.0 (Windows NT 6.2; WOW64) AppleWebKit/537.36 (KHTML like Gecko) Chrome/28.0.1469.0 Safari/537.36'
	}, {
	    description: 'Chrome 32.0.1667.0 (Win 8 - 64 bit)',
	    ua: 'Mozilla/5.0 (Windows NT 6.2; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/32.0.1667.0 Safari/537.36'
	}, {
	    description: 'Firefox 14.0.1 (Win Vista)',
	    ua: 'Mozilla/5.0 (Windows NT 6.0; rv:14.0) Gecko/20100101 Firefox/14.0.1'
	}, {
	    description: 'Firefox 15.0a1 (Win 7 64)',
	    ua: 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:15.0) Gecko/20120427 Firefox/15.0a1'
	}, {
	    description: 'Firefox 16.0 (Win 8 64)',
	    ua: 'Mozilla/5.0 (Windows NT 6.2; Win64; x64; rv:16.0) Gecko/16.0 Firefox/16.0'
	}, {
	    description: 'Firefox 19.0 (Win 8 32)',
	    ua: 'Mozilla/5.0 (Windows NT 6.2; rv:19.0) Gecko/20121129 Firefox/19.0'
	}, {
	    description: 'Firefox 21.0 (Win 7 32)',
	    ua: 'Mozilla/5.0 (Windows NT 6.1; rv:21.0) Gecko/20130401 Firefox/21.0'
	}, {
	    description: 'Firefox 25.0 (Win 7 64)',
	    ua: 'Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:25.0) Gecko/20100101 Firefox/25.0'
	}, {
	    description: 'iTunes 9.0.2 (Windows)',
	    ua: 'iTunes/9.0.2 (Windows; N)'
	}, {
	    description: 'Konqueror 4.5 (Win XP - KDE native)',
	    ua: 'Mozilla/5.0 (compatible; Konqueror/4.5; Windows) KHTML/4.5.4 (like Gecko)'
	}, {
	    description: 'Maxthon 2.0 (Trident/MSIE) (Win  7)',
	    ua: 'Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.1; Trident/4.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; Media Center PC 6.0; Maxthon 2.0)'
	}, {
	    description: 'Maxthon 3.0.8.2 (Webkit) (Vista)',
	    ua: 'Mozilla/5.0 (Windows; U; Windows NT 6.0; en-US) AppleWebKit/533.1 (KHTML, like Gecko) Maxthon/3.0.8.2 Safari/533.1'
	}, {
	    description: 'Maxthon 4.0.0.2000 (Webkit) (Win7 64 bit)',
	    ua: 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.1 (KHTML like Gecko) Maxthon/4.0.0.2000 Chrome/22.0.1229.79 Safari/537.1'
	}, {
	    description: 'MSIE 6 (Win XP)',
	    ua: 'Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1)'
	}, {
	    description: 'MSIE 7 (Vista)',
	    ua: 'Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.0)'
	}, {
	    description: 'MSIE 8 - standard mode (Win XP)',
	    ua: 'Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 5.1; Trident/4.0; .NET CLR 2.0.50727; .NET CLR 3.0.04506.648; .NET CLR 3.5.21022; .NET CLR 3.0.4506.2152; .NET CLR 3.5.30729)'
	}, {
	    description: 'MSIE 8 - standard mode (Win 7)',
	    ua: 'Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.1; Trident/4.0)'
	}, {
	    description: 'MSIE 8 - compat mode (Vista)',
	    ua: 'Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.0; Trident/4.0)'
	}, {
	    description: 'MSIE 8 - standard mode (Vista)',
	    ua: 'Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.0; Trident/4.0)'
	}, {
	    description: 'MSIE 9 - compat mode (Vista)',
	    ua: 'Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.0; Trident/5.0)'
	}, {
	    description: 'MSIE 9 - standard mode (Win 7)',
	    ua: 'Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; Trident/5.0)'
	}, {
	    description: 'MSIE 9 - standard mode (NT 6.2 32 Win 8)',
	    ua: 'Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.2; Trident/5.0)'
	}, {
	    description: 'MSIE 9 - standard mode (NT 6.2 64 Win 8)',
	    ua: 'Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.2; WOW64; Trident/5.0)'
	}, {
	    description: 'MSIE 9 - standard mode (with Zune plugin) (NT 6.1 Win 7)',
	    ua: 'Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; WOW64; Trident/5.0; SLCC2; Media Center PC 6.0; InfoPath.3; MS-RTC LM 8; Zune 4.7)'
	}, {
	    description: 'MSIE 10 - standard mode (Win 7 64)',
	    ua: 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.1; WOW64; Trident/6.0)'
	}, {
	    description: 'MSIE 10 - compat mode (Win 7 64)',
	    ua: 'Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.1; Trident/6.0)'
	}, {
	    description: 'MSIE 10.6 - (Win 7 32)',
	    ua: 'Mozilla/5.0 (compatible; MSIE 10.6; Windows NT 6.1; Trident/5.0; InfoPath.2; SLCC1; .NET CLR 3.0.4506.2152; .NET CLR 3.5.30729; .NET CLR 2.0.50727) 3gpp-gba UNTRUSTED/1.0'
	}, {
	    description: 'MSIE 11.0 - (Win 7 64)',
	    ua: 'Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; rv:11.0) like Gecko'
	}, {
	    description: 'MSIE 11.0 - (Win 8.1 32)',
	    ua: 'Mozilla/5.0 (Windows NT 6.3; Trident/7.0; rv:11.0) like Gecko'
	}, {
	    description: 'MSIE 11.0 (compatibility mode IE 7)- (Win 8.1 32)',
	    ua: 'Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.3; Trident/7.0; .NET4.0E; .NET4.0C)'
	}, {
	    description: 'Opera 11.01 (id as 9.8) (Win 7)',
	    ua: 'Opera/9.80 (Windows NT 6.1; U; en) Presto/2.7.62 Version/11.01'
	}, {
	    description: 'Opera 12.14 (id as 9.8) (Win Vista)',
	    ua: 'Opera/9.80 (Windows NT 6.0) Presto/2.12.388 Version/12.14'
	}, {
	    description: 'Opera 12.16 (id as 9.8) (Win 7)',
	    ua: 'Opera/9.80 (Windows NT 6.1; WOW64) Presto/2.12.388 Version/12.16'
	}, {
	    description: 'Opera 14.0.1116.4 (Webkit 537.36) (Win 7)',
	    ua: 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/27.0.1453.12 Safari/537.36 OPR/14.0.1116.4'
	}, {
	    description: 'Opera 15.0.1147.24 (Webkit 537.36) (Win 7)',
	    ua: 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/28.0.1500.29 Safari/537.36 OPR/15.0.1147.24 (Edition Next)'
	}, {
	    description: 'Opera 18.0.1284.49 (Webkit 537.36) (Win 8)',
	    ua: 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/31.0.1650.57 Safari/537.36 OPR/18.0.1284.49'
	}, {
	    description: 'Opera 19.0.1326.56 (Webkit 537.36) (Win 7)',
	    ua: 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/32.0.1700.76 Safari/537.36 OPR/19.0.1326.56'
	}, {
	    description: 'Safari 533.17.8 (Server 2003/64 bit)',
	    ua: 'Mozilla/5.0 (Windows; U; Windows NT 5.2; en-US) AppleWebKit/533.17.8 (KHTML, like Gecko) Version/5.0.1 Safari/533.17.8'
	}, {
	    description: 'Safari 533.19.4 (Win 7)',
	    ua: 'Mozilla/5.0 (Windows; U; Windows NT 6.1; en-US) AppleWebKit/533.19.4 (KHTML, like Gecko) Version/5.0.2 Safari/533.18.5'
	}, {
	    description: 'Safari 8900.00 (6) (Win 8)',
	    ua: 'Mozilla/5.0 (Windows; U; Windows NT 6.2; es-US ) AppleWebKit/540.0 (KHTML like Gecko) Version/6.0 Safari/8900.00'
	}, {
	    description: 'SeaMonkey (Mozilla) 2.0.12 (Win 7)',
	    ua: 'Mozilla/5.0 (Windows; U; Windows NT 6.1; en-GB; rv:1.9.1.17) Gecko/20110123 (like Firefox/3.x) SeaMonkey/2.0.12'
	}, {
	    description: 'SeaMonkey (Mozilla) 2.7.1 (NT 5.2)',
	    ua: 'Mozilla/5.0 (Windows NT 5.2; rv:10.0.1) Gecko/20100101 Firefox/10.0.1 SeaMonkey/2.7.1'
	}, {
	    description: 'SeaMonkey (Mozilla) 2.9 (Win7 64 bit)',
	    ua: 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:12.0) Gecko/20120422 Firefox/12.0 SeaMonkey/2.9'
	}, {
	    description: 'Chrome 4.0.302.2 (OS X 10_5_8 Intel)',
	    ua: 'Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_5_8; en-US) AppleWebKit/532.8 (KHTML, like Gecko) Chrome/4.0.302.2 Safari/532.8'
	}, {
	    description: 'Chrome 6.0.464 (OS X 10_6_4 Intel)',
	    ua: 'Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_4; en-US) AppleWebKit/534.3 (KHTML, like Gecko) Chrome/6.0.464.0 Safari/534.3'
	}, {
	    description: 'Chrome 9.0.597.15 (OS X 10_6_5 Intel)',
	    ua: 'Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_5; en-US) AppleWebKit/534.13 (KHTML, like Gecko) Chrome/9.0.597.15 Safari/534.13'
	}, {
	    description: 'Chrome 14.0.835.186 (OS X 10_7_2 Intel)',
	    ua: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_7_2) AppleWebKit/535.1 (KHTML, like Gecko) Chrome/14.0.835.186 Safari/535.1'
	}, {
	    description: 'Chrome 15.0.874.54 (OS X 10_6_8 Intel)',
	    ua: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_6_8) AppleWebKit/535.2 (KHTML, like Gecko) Chrome/15.0.874.54 Safari/535.2'
	}, {
	    description: 'Chrome 16.0.912.36 (OS X 10_6_8 Intel)',
	    ua: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_6_8) AppleWebKit/535.7 (KHTML, like Gecko) Chrome/16.0.912.36 Safari/535.7'
	}, {
	    description: 'Chrome 19.0.1063.0 (OS X 10_8_0 Intel)',
	    ua: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_0) AppleWebKit/536.3 (KHTML, like Gecko) Chrome/19.0.1063.0 Safari/536.3'
	}, {
	    description: 'Chrome 22.0.1229.79 (OS X 10_8_2 Intel)',
	    ua: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_2) AppleWebKit/537.4 (KHTML like Gecko) Chrome/22.0.1229.79 Safari/537.4'
	}, {
	    description: 'Firefox 0.9 (OS X Mach)',
	    ua: 'Mozilla/5.0 (Macintosh; U; Mac OS X Mach-O; en-US; rv:2.0a) Gecko/20040614 Firefox/3.0.0 '
	}, {
	    description: 'Firefox 3.0.3 (OS X PPC)',
	    ua: 'Mozilla/5.0 (Macintosh; U; PPC Mac OS X 10.5; en-US; rv:1.9.0.3) Gecko/2008092414 Firefox/3.0.3'
	}, {
	    description: 'Firefox 3.5 (OS X 10.5 Intel)',
	    ua: 'Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10.5; en-US; rv:1.9.1) Gecko/20090624 Firefox/3.5'
	}, {
	    description: 'Firefox 3.6 (OS X 10.6 Intel)',
	    ua: 'Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10.6; en-US; rv:1.9.2.14) Gecko/20110218 AlexaToolbar/alxf-2.0 Firefox/3.6.14'
	}, {
	    description: 'Firefox 3.6 (OS X 10.5 PPC)',
	    ua: 'Mozilla/5.0 (Macintosh; U; PPC Mac OS X 10.5; en-US; rv:1.9.2.15) Gecko/20110303 Firefox/3.6.15'
	}, {
	    description: 'Firefox 4.0.1 (OS X 10.6 Intel)',
	    ua: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.6; rv:2.0.1) Gecko/20100101 Firefox/4.0.1'
	}, {
	    description: 'Firefox 5.0 (OS X 10.6 Intel)',
	    ua: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.6; rv:5.0) Gecko/20100101 Firefox/5.0'
	}, {
	    description: 'Firefox 9.0 (OS X 10.6 Intel)',
	    ua: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.6; rv:9.0) Gecko/20100101 Firefox/9.0'
	}, {
	    description: 'Firefox 10.0.1 (OS X 10.6 Intel)',
	    ua: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_7_2; rv:10.0.1) Gecko/20100101 Firefox/10.0.1'
	}, {
	    description: 'Firefox 16.0 (OS X 10.8 Intel)',
	    ua: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.8; rv:16.0) Gecko/20120813 Firefox/16.0'
	}, {
	    description: 'MSIE 5.15 (OS 9)',
	    ua: 'Mozilla/4.0 (compatible; MSIE 5.15; Mac_PowerPC)'
	}, {
	    description: 'Omniweb 563.15 (OS X PPC)',
	    ua: 'Mozilla/5.0 (Macintosh; U; PPC Mac OS X; en-US) AppleWebKit/125.4 (KHTML, like Gecko, Safari) OmniWeb/v563.15'
	}, {
	    description: 'Opera 9.0 (OS X PPC)',
	    ua: 'Opera/9.0 (Macintosh; PPC Mac OS X; U; en)'
	}, {
	    description: 'Safari 85 (OS X PPC)',
	    ua: 'Mozilla/5.0 (Macintosh; U; PPC Mac OS X; en) AppleWebKit/125.2 (KHTML, like Gecko) Safari/85.8'
	}, {
	    description: 'Safari 125.8 (OS X PPC)',
	    ua: 'Mozilla/5.0 (Macintosh; U; PPC Mac OS X; en) AppleWebKit/125.2 (KHTML, like Gecko) Safari/125.8'
	}, {
	    description: 'Safari 312.3 (OS X PPC)',
	    ua: 'Mozilla/5.0 (Macintosh; U; PPC Mac OS X; fr-fr) AppleWebKit/312.5 (KHTML, like Gecko) Safari/312.3'
	}, {
	    description: 'Safari 419.3 (OS X PPC)',
	    ua: 'Mozilla/5.0 (Macintosh; U; PPC Mac OS X; en) AppleWebKit/418.8 (KHTML, like Gecko) Safari/419.3'
	}, {
	    description: 'Camino 2.2.1 (Firefox 4.0.1) (OS X 10.6 Intel)',
	    ua: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.6; rv:2.0.1) Gecko/20100101 Firefox/4.0.1 Camino/2.2.1'
	}, {
	    description: 'Camino 2.2a1pre (Firefox 4.0.1) (OS X 10.6 Intel)',
	    ua: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.6; rv:2.0b6pre) Gecko/20100907 Firefox/4.0b6pre Camino/2.2a1pre'
	}, {
	    description: 'Chrome 26.0.1410.63 (OS X 10_8_4 Intel)',
	    ua: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_4) AppleWebKit/537.31 (KHTML like Gecko) Chrome/26.0.1410.63 Safari/537.31'
	}, {
	    description: 'Chrome 28.0.1469.0 (OS X 10_8_3 Intel)',
	    ua: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 1083) AppleWebKit/537.36 (KHTML like Gecko) Chrome/28.0.1469.0 Safari/537.36'
	}, {
	    description: 'Chrome 32.0.1664.3 (OS X 10_9_0 Intel)',
	    ua: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/32.0.1664.3 Safari/537.36'
	}, {
	    description: 'Firefox 20.0 (OS X 10.7 Intel)',
	    ua: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.7; rv:20.0) Gecko/20100101 Firefox/20.0'
	}, {
	    description: 'Firefox 21.0 (OS X 10.8 Intel)',
	    ua: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.8; rv:21.0) Gecko/20100101 Firefox/21.0'
	}, {
	    description: 'Firefox 25.0 (OS X 10.6 Intel)',
	    ua: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.6; rv:25.0) Gecko/20100101 Firefox/25.0'
	}, {
	    description: 'iTunes 4.2 (OS X 10.2 PPC)',
	    ua: 'iTunes/4.2 (Macintosh; U; PPC Mac OS X 10.2)'
	}, {
	    description: 'iTunes 9.0.3 (OS X 10_6_2)',
	    ua: 'iTunes/9.0.3 (Macintosh; U; Intel Mac OS X 10_6_2; en-ca)'
	}, {
	    description: 'Omniweb 622.8.0 (OS X Intel)',
	    ua: 'Mozilla/5.0 (Macintosh; U; Intel Mac OS X; en-US) AppleWebKit/528.16 (KHTML, like Gecko, Safari/528.16) OmniWeb/v622.8.0.112941'
	}, {
	    description: 'Omniweb 622.8.0 (OS X 10_5_6 Intel)',
	    ua: 'Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_5_6; en-US) AppleWebKit/528.16 (KHTML, like Gecko, Safari/528.16) OmniWeb/v622.8.0'
	}, {
	    description: 'Opera 9.20 (OS X Intel)',
	    ua: 'Opera/9.20 (Macintosh; Intel Mac OS X; U; en)'
	}, {
	    description: 'Opera 9.64 (OS X PPC)',
	    ua: 'Opera/9.64 (Macintosh; PPC Mac OS X; U; en) Presto/2.1.1'
	}, {
	    description: 'Opera 10.61 (id as 9.8) (OS X Intel)',
	    ua: 'Opera/9.80 (Macintosh; Intel Mac OS X; U; en) Presto/2.6.30 Version/10.61'
	}, {
	    description: 'Opera 11.00 (id as 9.8) (OS X Intel)',
	    ua: 'Opera/9.80 (Macintosh; Intel Mac OS X 10.4.11; U; en) Presto/2.7.62 Version/11.00'
	}, {
	    description: 'Opera 11.52 (id as 9.8) (OS X Intel)',
	    ua: 'Opera/9.80 (Macintosh; Intel Mac OS X 10.6.8; U; fr) Presto/2.9.168 Version/11.52'
	}, {
	    description: 'Safari 531.21.10 (OS X 10_6_2 Intel)',
	    ua: 'Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_2; en-us) AppleWebKit/531.21.8 (KHTML, like Gecko) Version/4.0.4 Safari/531.21.10'
	}, {
	    description: 'Safari 533.19.4 (OS X 10_6_5 Intel)',
	    ua: 'Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_5; de-de) AppleWebKit/534.15  (KHTML, like Gecko) Version/5.0.3 Safari/533.19.4'
	}, {
	    description: 'Safari 533.20.27 (OS X 10_6_6 Intel)',
	    ua: 'Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_6; en-us) AppleWebKit/533.20.25 (KHTML, like Gecko) Version/5.0.4 Safari/533.20.27'
	}, {
	    description: 'Safari 534.20.8 (OS X 10_7 Intel)',
	    ua: 'Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_7; en-us) AppleWebKit/534.20.8 (KHTML, like Gecko) Version/5.1 Safari/534.20.8'
	}, {
	    description: 'Safari 534.55.3 (OS X 10_7_3 Intel)',
	    ua: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_7_3) AppleWebKit/534.55.3 (KHTML, like Gecko) Version/5.1.3 Safari/534.53.10'
	}, {
	    description: 'Safari 534.57.2 (5.1.7) (OS X 10_6_8 Intel)',
	    ua: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_6_8) AppleWebKit/537.13+ (KHTML, like Gecko) Version/5.1.7 Safari/534.57.2'
	}, {
	    description: 'Safari 536.26.17 (6) (OS X 10_7_5 Intel)',
	    ua: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_7_5) AppleWebKit/536.26.17 (KHTML like Gecko) Version/6.0.2 Safari/536.26.17'
	}, {
	    description: 'SeaMonkey 2.7.1 (OS X 10.5 - Mozilla)',
	    ua: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.5; rv:10.0.1) Gecko/20100101 Firefox/10.0.1 SeaMonkey/2.7.1'
	}, {
	    description: 'Silk 1.0.13 (AppleWebKit533.16) 2.9 (Mac OS X 10_6_3)',
	    ua: 'Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_3; en-us; Silk/1.0.13.81_10003810) AppleWebKit/533.16 (KHTML, like Gecko) Version/5.0 Safari/533.16 Silk-Accelerated=true'
	}, {
	    description: 'Elinks 0.4pre5',
	    ua: 'ELinks (0.4pre5; Linux 2.6.10-ac7 i686; 80x33)'
	}, {
	    description: 'ELinks 0.9.3 (Kanotix)',
	    ua: 'ELinks/0.9.3 (textmode; Linux 2.6.9-kanotix-8 i686; 127x41)'
	}, {
	    description: 'ELinks 0.12~pre5-4',
	    ua: 'ELinks/0.12~pre5-4'
	}, {
	    description: 'Links 0.9.1',
	    ua: 'Links/0.9.1 (Linux 2.4.24; i386;)'
	}, {
	    description: 'Links 2.1',
	    ua: 'Links (2.1pre15; Linux 2.4.26 i686; 158x61)'
	}, {
	    description: 'Links 2.3pre1',
	    ua: 'Links (2.3pre1; Linux 2.6.38-8-generic x86_64; 170x48)'
	}, {
	    description: 'Lynx 2.8.5rel.1',
	    ua: 'Lynx/2.8.5rel.1 libwww-FM/2.14 SSL-MM/1.4.1 GNUTLS/0.8.12'
	}, {
	    description: 'w3m 0.5.1',
	    ua: 'w3m/0.5.1'
	}, {
	    description: 'Chrome 4.0.237.0 (Debian)',
	    ua: 'Mozilla/5.0 (X11; U; Linux i686; en-US) AppleWebKit/532.4 (KHTML, like Gecko) Chrome/4.0.237.0 Safari/532.4 Debian'
	}, {
	    description: 'Chrome 4.0.277.0',
	    ua: 'Mozilla/5.0 (X11; U; Linux i686; en-US) AppleWebKit/532.8 (KHTML, like Gecko) Chrome/4.0.277.0 Safari/532.8'
	}, {
	    description: 'Chrome 5.0.309.0',
	    ua: 'Mozilla/5.0 (X11; U; Linux x86_64; en-US) AppleWebKit/532.9 (KHTML, like Gecko) Chrome/5.0.309.0 Safari/532.9'
	}, {
	    description: 'Chrome 7.0.514 (64 bit)',
	    ua: 'Mozilla/5.0 (X11; U; Linux x86_64; en-US) AppleWebKit/534.7 (KHTML, like Gecko) Chrome/7.0.514.0 Safari/534.7'
	}, {
	    description: 'Chrome 9.1.0.0 (Ubuntu 64 bit)',
	    ua: 'Mozilla/5.0 (X11; U; Linux x86_64; en-US) AppleWebKit/540.0 (KHTML, like Gecko) Ubuntu/10.10 Chrome/9.1.0.0 Safari/540.0'
	}, {
	    description: 'Chrome 10.0.613.0 (64 bit)',
	    ua: 'Mozilla/5.0 (X11; U; Linux x86_64; en-US) AppleWebKit/534.15 (KHTML, like Gecko) Chrome/10.0.613.0 Safari/534.15'
	}, {
	    description: 'Chrome 10.0.613.0 (Ubuntu 32 bit)',
	    ua: 'Mozilla/5.0 (X11; U; Linux i686; en-US) AppleWebKit/534.15 (KHTML, like Gecko) Ubuntu/10.10 Chromium/10.0.613.0 Chrome/10.0.613.0 Safari/534.15'
	}, {
	    description: 'Chrome 12.0.703.0 (Ubuntu 64 bit)',
	    ua: 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/534.24 (KHTML, like Gecko) Ubuntu/10.10 Chromium/12.0.703.0 Chrome/12.0.703.0 Safari/534.24'
	}, {
	    description: 'Chrome 13.0.782.20 (64 bit)',
	    ua: 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/535.1 (KHTML, like Gecko) Chrome/13.0.782.20 Safari/535.1'
	}, {
	    description: 'Chrome 13.0.782.41 (Slackware 13.37 64 bit)',
	    ua: 'Mozilla/5.0 Slackware/13.37 (X11; U; Linux x86_64; en-US) AppleWebKit/535.1 (KHTML, like Gecko) Chrome/13.0.782.41'
	}, {
	    description: 'Chrome 14.0.825.0 (Ubuntu 11.04)',
	    ua: 'Mozilla/5.0 (X11; Linux i686) AppleWebKit/535.1 (KHTML, like Gecko) Ubuntu/11.04 Chromium/14.0.825.0 Chrome/14.0.825.0 Safari/535.1'
	}, {
	    description: 'Chrome 15.0.874.120 (Ubuntu 11.10)',
	    ua: 'Mozilla/5.0 (X11; Linux i686) AppleWebKit/535.2 (KHTML, like Gecko) Ubuntu/11.10 Chromium/15.0.874.120 Chrome/15.0.874.120 Safari/535.2'
	}, {
	    description: 'Epiphany 1.2 - Gecko',
	    ua: 'Mozilla/5.0 (X11; U; Linux; i686; en-US; rv:1.6) Gecko Epiphany/1.2.5'
	}, {
	    description: 'Epiphany 1.4 - Gecko (Ubuntu)',
	    ua: 'Mozilla/5.0 (X11; U; Linux i586; en-US; rv:1.7.3) Gecko/20040924 Epiphany/1.4.4 (Ubuntu)'
	}, {
	    description: 'Firefox 0.8',
	    ua: 'Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.6) Gecko/20040614 Firefox/0.8'
	}, {
	    description: 'Firefox 2.0.0.12 (Ubuntu 7.10)',
	    ua: 'Mozilla/5.0 (X11; U; Linux x86_64; sv-SE; rv:1.8.1.12) Gecko/20080207 Ubuntu/7.10 (gutsy) Firefox/2.0.0.12'
	}, {
	    description: 'Firefox 3.0.12 - (Ubuntu karmic 9.10)',
	    ua: 'Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.9.0.11) Gecko/2009060309 Ubuntu/9.10 (karmic) Firefox/3.0.11'
	}, {
	    description: 'Firefox 3.5.2 - Shiretoko (Ubuntu 9.04)',
	    ua: 'Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.9.1.2) Gecko/20090803 Ubuntu/9.04 (jaunty) Shiretoko/3.5.2'
	}, {
	    description: 'Firefox 3.5.5',
	    ua: 'Mozilla/5.0 (X11; U; Linux x86_64; en-US; rv:1.9.1.5) Gecko/20091107 Firefox/3.5.5'
	}, {
	    description: 'Firefox 3.5.3 (Mint 8)',
	    ua: 'Mozilla/5.0 (X11; U; Linux x86_64; en-US; rv:1.9.1.3) Gecko/20091020 Linux Mint/8 (Helena) Firefox/3.5.3'
	}, {
	    description: 'Firefox 3.6.9 (Gentoo 64 bit)',
	    ua: 'Mozilla/5.0 (X11; U; Linux x86_64; en-US; rv:1.9.2.9) Gecko/20100915 Gentoo Firefox/3.6.9'
	}, {
	    description: 'Firefox 3.8 (Ubuntu/9.25)',
	    ua: 'Mozilla/5.0 (X11; U; Linux i686; pl-PL; rv:1.9.0.2) Gecko/20121223 Ubuntu/9.25 (jaunty) Firefox/3.8'
	}, {
	    description: 'Firefox 4.0b6pre (32 bit)',
	    ua: 'Mozilla/5.0 (X11; Linux i686; rv:2.0b6pre) Gecko/20100907 Firefox/4.0b6pre'
	}, {
	    description: 'Firefox 4.0.1 (32 on 64 bit)',
	    ua: 'Mozilla/5.0 (X11; Linux i686 on x86_64; rv:2.0.1) Gecko/20100101 Firefox/4.0.1'
	}, {
	    description: 'Firefox 4.0.1 (32 bit)',
	    ua: 'Mozilla/5.0 (X11; Linux i686; rv:2.0.1) Gecko/20100101 Firefox/4.0.1'
	}, {
	    description: 'Firefox 4.0.1 (64 bit)',
	    ua: 'Mozilla/5.0 (X11; Linux x86_64; rv:2.0.1) Gecko/20100101 Firefox/4.0.1'
	}, {
	    description: 'Firefox 4.2a1pre (64 bit)',
	    ua: 'Mozilla/5.0 (X11; Linux x86_64; rv:2.2a1pre) Gecko/20100101 Firefox/4.2a1pre'
	}, {
	    description: 'Firefox 5.0 (32 bit)',
	    ua: 'Mozilla/5.0 (X11; Linux i686; rv:5.0) Gecko/20100101 Firefox/5.0'
	}, {
	    description: 'Firefox 6.0 (32 bit)',
	    ua: 'Mozilla/5.0 (X11; Linux i686; rv:6.0) Gecko/20100101 Firefox/6.0'
	}, {
	    description: 'Firefox 7.0a1 (64 bit)',
	    ua: 'Mozilla/5.0 (X11; Linux x86_64; rv:7.0a1) Gecko/20110623 Firefox/7.0a1'
	}, {
	    description: 'Firefox 8.0 (32 bit)',
	    ua: 'Mozilla/5.0 (X11; Linux i686; rv:8.0) Gecko/20100101 Firefox/8.0'
	}, {
	    description: 'Firefox 10.0.1 (64 bit)',
	    ua: 'Mozilla/5.0 (X11; Linux x86_64; rv:10.0.1) Gecko/20100101 Firefox/10.0.1'
	}, {
	    description: 'Firefox 11.0 (32 bit)',
	    ua: 'Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.9.1.16) Gecko/20120421 Gecko Firefox/11.0'
	}, {
	    description: 'Firefox 12.0 (32 bit)',
	    ua: 'Mozilla/5.0 (X11; Linux i686; rv:12.0) Gecko/20100101 Firefox/12.0 '
	}, {
	    description: 'Firefox 14.0.1 (Ubuntu 64 bit)',
	    ua: 'Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:14.0) Gecko/20100101 Firefox/14.0.1'
	}, {
	    description: 'Galeon 1.3',
	    ua: 'Mozilla/5.0 (X11; U; Linux; i686; en-US; rv:1.6) Gecko Galeon/1.3.14'
	}, {
	    description: 'Iceape (SeaMonkey) 1.1.9 (Debian)',
	    ua: 'Mozilla/5.0 (X11; U; Linux ppc; en-US; rv:1.8.1.13) Gecko/20080313 Iceape/1.1.9 (Debian-1.1.9-5)'
	}, {
	    description: 'Iceweasel (Firefox) 3.6.3 (Debian)',
	    ua: 'Mozilla/5.0 (X11; U; Linux i686; pt-PT; rv:1.9.2.3) Gecko/20100402 Iceweasel/3.6.3 (like Firefox/3.6.3) GTB7.0'
	}, {
	    description: 'Iceweasel (Firefox) 5.0 (Debian 64)',
	    ua: 'Mozilla/5.0 (X11; Linux x86_64; rv:5.0) Gecko/20100101 Firefox/5.0 Iceweasel/5.0'
	}, {
	    description: 'Iceweasel (Firefox) 6.0a2 (Debian 32)',
	    ua: 'Mozilla/5.0 (X11; Linux i686; rv:6.0a2) Gecko/20110615 Firefox/6.0a2 Iceweasel/6.0a2'
	}, {
	    description: 'Konqueror 3 rc4 - khtml',
	    ua: 'Konqueror/3.0-rc4; (Konqueror/3.0-rc4; i686 Linux;;datecode)'
	}, {
	    description: 'Konqueror 3.3 - khtml (Gentoo)',
	    ua: 'Mozilla/5.0 (compatible; Konqueror/3.3; Linux 2.6.8-gentoo-r3; X11;'
	}, {
	    description: 'Konqueror 3.5 - khtml (Debian)',
	    ua: 'Mozilla/5.0 (compatible; Konqueror/3.5; Linux 2.6.30-7.dmz.1-liquorix-686; X11) KHTML/3.5.10 (like Gecko) (Debian package 4:3.5.10.dfsg.1-1 b1)'
	}, {
	    description: 'Konqueror 3.5.6 - khtml (Kubuntu)',
	    ua: 'Mozilla/5.0 (compatible; Konqueror/3.5; Linux; en_US) KHTML/3.5.6 (like Gecko) (Kubuntu)'
	}, {
	    description: 'Minefield (Firefox Nightly) 4.0b2pre',
	    ua: 'Mozilla/5.0 (X11; Linux x86_64; en-US; rv:2.0b2pre) Gecko/20100712 Minefield/4.0b2pre'
	}, {
	    description: 'Mozilla 1.6 (Debian)',
	    ua: 'Mozilla/5.0 (X11; U; Linux; i686; en-US; rv:1.6) Gecko Debian/1.6-7'
	}, {
	    description: 'Opera 7.23',
	    ua: 'MSIE (MSIE 6.0; X11; Linux; i686) Opera 7.23'
	}, {
	    description: 'SeaMonkey 2.0.12 (Mozilla)',
	    ua: 'Mozilla/5.0 (X11; U; Linux x86_64; en-US; rv:1.9.1.17) Gecko/20110123 SeaMonkey/2.0.12'
	}, {
	    description: 'Swiftfox 2.0',
	    ua: 'Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.8.1) Gecko/20061024 Firefox/2.0 (Swiftfox)'
	}, {
	    description: 'Arora 0.11.1 - WebKit',
	    ua: 'Mozilla/5.0 (X11; U; Linux; en-US) AppleWebKit/527  (KHTML, like Gecko, Safari/419.3) Arora/0.10.1'
	}, {
	    description: 'Chrome 19.0.1084.9 (64 bit)',
	    ua: 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/536.5 (KHTML, like Gecko) Chrome/19.0.1084.9 Safari/536.5'
	}, {
	    description: 'Chrome 20.0.1132.57 (CrOS)',
	    ua: 'Mozilla/5.0 (X11; CrOS i686 2268.111.0) AppleWebKit/536.11 (KHTML, like Gecko) Chrome/20.0.1132.57 Safari/536.11'
	}, {
	    description: 'Chrome 22.0.1229.56 (64 bit)',
	    ua: 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.4 (KHTML like Gecko) Chrome/22.0.1229.56 Safari/537.4'
	}, {
	    description: 'Chrome 28.0.1478.0 (32 bit)',
	    ua: 'Mozilla/5.0 (X11; Linux i686) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/28.0.1478.0 Safari/537.36'
	}, {
	    description: 'Chromium 25.0.1364 (Ubuntu 32 bit)',
	    ua: 'Mozilla/5.0 (X11; Linux i686) AppleWebKit/537.22 (KHTML like Gecko) Ubuntu Chromium/25.0.1364.160 Chrome/25.0.1364.160 Safari/537.22'
	}, {
	    description: 'Dillo 3.0',
	    ua: 'Mozilla/4.0 (compatible; Dillo 3.0)'
	}, {
	    description: 'Epiphany - WebKit (528.5)',
	    ua: 'Mozilla/5.0 (X11; U; Linux i686; en-us) AppleWebKit/528.5  (KHTML, like Gecko, Safari/528.5 ) lt-GtkLauncher'
	}, {
	    description: 'Firefox 16.0 (32 bit)',
	    ua: 'Mozilla/5.0 (X11; Linux i686; rv:16.0) Gecko/20100101 Firefox/16.0'
	}, {
	    description: 'Firefox 19.0 (Slackware 13 32 bit)',
	    ua: 'Mozilla/5.0 (X11; U; Linux i686; rv:19.0) Gecko/20100101 Slackware/13 Firefox/19.0'
	}, {
	    description: 'Firefox 20.0 (Ubuntu 64 bit)',
	    ua: 'Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:20.0) Gecko/20100101 Firefox/20.0'
	}, {
	    description: 'Firefox 20.0 (32 bit)',
	    ua: 'Mozilla/5.0 (X11; Linux i686; rv:20.0) Gecko/20100101 Firefox/20.0'
	}, {
	    description: 'Firefox 25.0 (32 bit)',
	    ua: 'Mozilla/5.0 (X11; Linux i686; rv:25.0) Gecko/20100101 Firefox/25.0'
	}, {
	    description: 'Firefox 28.0 (32 bit)',
	    ua: 'Mozilla/5.0 (X11; Linux i686; rv:28.0) Gecko/20100101 Firefox/28.0'
	}, {
	    description: 'Galeon 2.0.6 (Ubuntu)',
	    ua: 'Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.9.0.8) Gecko Galeon/2.0.6 (Ubuntu 2.0.6-2)'
	}, {
	    description: 'Galeon 2.0.6 (Gentoo)',
	    ua: 'Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.8.1.16) Gecko/20080716 (Gentoo) Galeon/2.0.6'
	}, {
	    description: 'Iceape (SeaMonkey) 2.0.8 (Debian)',
	    ua: 'Mozilla/5.0 (X11; U; Linux x86_64; en-US; rv:1.9.1.13) Gecko/20100916 Iceape/2.0.8'
	}, {
	    description: 'Iceweasel (Firefox) 14.0.1',
	    ua: 'Mozilla/5.0 (X11; Linux i686; rv:14.0) Gecko/20100101 Firefox/14.0.1 Iceweasel/14.0.1'
	}, {
	    description: 'Iceweasel (Firefox) 15.02 (Debian)',
	    ua: 'Mozilla/5.0 (X11; Linux x86_64; rv:15.0) Gecko/20120724 Debian Iceweasel/15.02'
	}, {
	    description: 'Iceweasel (Firefox) 19.0.2 (Debian 64)',
	    ua: 'Mozilla/5.0 (X11; Linux x86_64; rv:19.0) Gecko/20100101 Firefox/19.0 Iceweasel/19.0.2'
	}, {
	    description: 'Konqueror 4.3 - khtml (Slackware 13)',
	    ua: 'Mozilla/5.0 (compatible; Konqueror/4.2; Linux) KHTML/4.2.4 (like Gecko) Slackware/13.0'
	}, {
	    description: 'Konqueror 4.3.1 - khtml (Fedora 11)',
	    ua: 'Mozilla/5.0 (compatible; Konqueror/4.3; Linux) KHTML/4.3.1 (like Gecko) Fedora/4.3.1-3.fc11'
	}, {
	    description: 'Konqueror 4.4.3 - khtml (Fedora 12)',
	    ua: 'Mozilla/5.0 (compatible; Konqueror/4.4; Linux) KHTML/4.4.1 (like Gecko) Fedora/4.4.1-1.fc12'
	}, {
	    description: 'Konqueror 4.4.3 - khtml (Kubuntu)',
	    ua: 'Mozilla/5.0 (compatible; Konqueror/4.4; Linux 2.6.32-22-generic; X11; en_US) KHTML/4.4.3 (like Gecko) Kubuntu'
	}, {
	    description: 'Konqueror 4.4.3 - khtml (Kubuntu)',
	    ua: 'Mozilla/5.0 (compatible; Konqueror/4.4; Linux 2.6.32-22-generic; X11; en_US) KHTML/4.4.3 (like Gecko) Kubuntu'
	}, {
	    description: 'Konqueror 4.8.4 - khtml (Debian)',
	    ua: 'Mozilla/5.0 (X11; Linux 3.8-6.dmz.1-liquorix-686) KHTML/4.8.4 (like Gecko) Konqueror/4.8'
	}, {
	    description: 'Konqueror 4.9 - khtml',
	    ua: 'Mozilla/5.0 (X11; Linux) KHTML/4.9.1 (like Gecko) Konqueror/4.9'
	}, {
	    description: 'Midori 0.1.10 (Webkit 531)',
	    ua: 'Midori/0.1.10 (X11; Linux i686; U; en-us) WebKit/(531).(2) '
	}, {
	    description: 'Mozilla 1.9.0 (Debian)',
	    ua: 'Mozilla/5.0 (X11; U; Linux x86_64; en-US; rv:1.9.0.3) Gecko/2008092814 (Debian-3.0.1-1)'
	}, {
	    description: 'Mozilla 1.9a3pre',
	    ua: 'Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.9a3pre) Gecko/20070330'
	}, {
	    description: 'Opera 9.64 (Linux Mint)',
	    ua: 'Opera/9.64 (X11; Linux i686; U; Linux Mint; nb) Presto/2.1.1'
	}, {
	    description: 'Opera 10.10 (id as 9.8)',
	    ua: 'Opera/9.80 (X11; Linux i686; U; en) Presto/2.2.15 Version/10.10'
	}, {
	    description: 'Opera 11.00 (id as 9.8)',
	    ua: 'Opera/9.80 (X11; Linux x86_64; U; pl) Presto/2.7.62 Version/11.00'
	}, {
	    description: 'Opera 12.16 (id as 9.8, last presto)',
	    ua: 'Opera/9.80 (X11; Linux i686) Presto/2.12.388 Version/12.16'
	}, {
	    description: 'Opera 20.0.1396 (Webkit 537.36)',
	    ua: 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/33.0.1750.166 Safari/537.36 OPR/20.0.1396.73172'
	}, {
	    description: 'QupZilla 1.2.0 (Webkit 534.34)',
	    ua: 'Mozilla/5.0 (X11; Linux i686) AppleWebKit/534.34 (KHTML, like Gecko) QupZilla/1.2.0 Safari/534.34'
	}, {
	    description: 'SeaMonkey 2.7.1 (Mozilla)',
	    ua: 'Mozilla/5.0 (X11; Linux i686; rv:10.0.1) Gecko/20100101 Firefox/10.0.1 SeaMonkey/2.7.1'
	}, {
	    description: 'SeaMonkey 2.9.1 (Mozilla)',
	    ua: 'Mozilla/5.0 (X11; Linux i686; rv:12.0) Gecko/20120502 Firefox/12.0 SeaMonkey/2.9.1'
	}, {
	    description: 'Shadowfox 7.0 (Mozilla)',
	    ua: 'Mozilla/5.0 (X11; U; Linux x86_64; us; rv:1.9.1.19) Gecko/20110430 shadowfox/7.0 (like Firefox/7.0'
	}, {
	    description: 'Swiftfox 3.6.3',
	    ua: 'Mozilla/5.0 (X11; U; Linux i686; it; rv:1.9.2.3) Gecko/20100406 Firefox/3.6.3 (Swiftfox)'
	}, {
	    description: 'Uzbl (Webkit 1.3)',
	    ua: 'Uzbl (Webkit 1.3) (Linux i686 [i686])'
	}, {
	    description: 'ELinks 0.4.3 (NetBSD)',
	    ua: 'ELinks (0.4.3; NetBSD 3.0.2PATCH sparc64; 141x19)'
	}, {
	    description: 'Links 2.1 (FreeBSD)',
	    ua: 'Links (2.1pre15; FreeBSD 5.3-RELEASE i386; 196x84)'
	}, {
	    description: 'Links 2.8.7',
	    ua: 'Lynx/2.8.7dev.4 libwww-FM/2.14 SSL-MM/1.4.1 OpenSSL/0.9.8d'
	}, {
	    description: 'w3m 0.5.1',
	    ua: 'w3m/0.5.1'
	}, {
	    description: 'Chrome 4.0.207.0 (FreeBSD)',
	    ua: 'Mozilla/5.0 (X11; U; FreeBSD i386; en-US) AppleWebKit/532.0 (KHTML, like Gecko) Chrome/4.0.207.0 Safari/532.0'
	}, {
	    description: 'Chrome 5.0.359.0 (OpenBSD 32)',
	    ua: 'Mozilla/5.0 (X11; U; OpenBSD i386; en-US) AppleWebKit/533.3 (KHTML, like Gecko) Chrome/5.0.359.0 Safari/533.3'
	}, {
	    description: 'Chrome 10.0.648.204 (FreeBSD 64)',
	    ua: 'Mozilla/5.0 (X11; U; FreeBSD x86_64; en-US) AppleWebKit/534.16 (KHTML, like Gecko) Chrome/10.0.648.204 Safari/534.16'
	}, {
	    description: 'Firebird 0.6 (SunOs)',
	    ua: 'Mozilla/5.0 (X11; U; SunOS sun4m; en-US; rv:1.4b) Gecko/20030517 Mozilla Firebird/0.6'
	}, {
	    description: 'Galeon 1.3.15 (FreeBSD)',
	    ua: 'Mozilla/5.0 (X11; U; FreeBSD i386; en-US; rv:1.6) Gecko/20040406 Galeon/1.3.15'
	}, {
	    description: 'Konqueror 3.5 - khtml (NetBSD 4.0)',
	    ua: 'Mozilla/5.0 (compatible; Konqueror/3.5; NetBSD 4.0_RC3; X11) KHTML/3.5.7 (like Gecko)'
	}, {
	    description: 'Konqueror 3.5.1 - khtml (SunOS)',
	    ua: 'Mozilla/5.0 (compatible; Konqueror/3.5; SunOS) KHTML/3.5.1 (like Gecko)'
	}, {
	    description: 'Mozilla 1.7 (FreeBSD)',
	    ua: 'Mozilla/5.0 (X11; U; FreeBSD; i386; en-US; rv:1.7) Gecko'
	}, {
	    description: 'Netscape 4.77 (Irix)',
	    ua: 'Mozilla/4.77 [en] (X11; I; IRIX;64 6.5 IP30)'
	}, {
	    description: 'Netscape 4.8 (SunOS)',
	    ua: 'Mozilla/4.8 [en] (X11; U; SunOS; 5.7 sun4u)'
	}, {
	    description: 'Arora/0.10.2 (BSD/Haiku)',
	    ua: 'Mozilla/5.0 (Unknown; U; UNIX BSD/SYSV system; C -) AppleWebKit/527  (KHTML, like Gecko, Safari/419.3) Arora/0.10.2'
	}, {
	    description: 'Chrome 19.0.1084.56 (FreeBSD 64)',
	    ua: 'Mozilla/5.0 (X11; FreeBSD amd64) AppleWebKit/536.5 (KHTML like Gecko) Chrome/19.0.1084.56 Safari/536.5'
	}, {
	    description: 'Chrome 22.0.1229.79 (FreeBSD 64)',
	    ua: 'Mozilla/5.0 (X11; FreeBSD amd64) AppleWebKit/537.4 (KHTML like Gecko) Chrome/22.0.1229.79 Safari/537.4'
	}, {
	    description: 'Epiphany 2.30.0 (OpenBSD)',
	    ua: 'Mozilla/5.0 (X11; U; OpenBSD arm; en-us) AppleWebKit/531.2  (KHTML, like Gecko) Safari/531.2  Epiphany/2.30.0'
	}, {
	    description: 'Epiphany 2.30.0 (FreeBSD)',
	    ua: 'Mozilla/5.0 (X11; U; FreeBSD amd64; en-us) AppleWebKit/531.2  (KHTML, like Gecko) Safari/531.2  Epiphany/2.30.0'
	}, {
	    description: 'Firefox 3.1b3 (SunOs)',
	    ua: 'Mozilla/5.0 (X11; U; SunOS i86pc; en-US; rv:1.9.1b3) Gecko/20090429 Firefox/3.1b3'
	}, {
	    description: 'Firefox 3.5 (OpenBSD)',
	    ua: 'Mozilla/5.0 (X11; U; OpenBSD i386; en-US; rv:1.9.1) Gecko/20090702 Firefox/3.5'
	}, {
	    description: 'Firefox 3.6.8 (FreeBSD)',
	    ua: 'Mozilla/5.0 (X11; U; FreeBSD i386; de-CH; rv:1.9.2.8) Gecko/20100729 Firefox/3.6.8'
	}, {
	    description: 'Firefox 5.0 (FreeBSD 64)',
	    ua: 'Mozilla/5.0 (X11; FreeBSD amd64; rv:5.0) Gecko/20100101 Firefox/5.0'
	}, {
	    description: 'Konqueror 4.1 - khtml (DragonFly)',
	    ua: 'Mozilla/5.0 (compatible; Konqueror/4.1; DragonFly) KHTML/4.1.4 (like Gecko)'
	}, {
	    description: 'Konqueror 4.1 - khtml (OpenBSD)',
	    ua: 'Mozilla/5.0 (compatible; Konqueror/4.1; OpenBSD) KHTML/4.1.4 (like Gecko)'
	}, {
	    description: 'Konqueror 4.5.4 - khtml (NetBSD 5.0.2)',
	    ua: 'Mozilla/5.0 (compatible; Konqueror/4.5; NetBSD 5.0.2; X11; amd64; en_US) KHTML/4.5.4 (like Gecko)'
	}, {
	    description: 'Konqueror 4.5.4 - khtml (FreeBSD)',
	    ua: 'Mozilla/5.0 (compatible; Konqueror/4.5; FreeBSD) KHTML/4.5.4 (like Gecko)'
	}, {
	    description: 'Namoroka 3.6.15 (Firefox) (NetBSD)',
	    ua: 'Mozilla/5.0 (X11; U; NetBSD amd64; en-US; rv:1.9.2.15) Gecko/20110308 Namoroka/3.6.15'
	}, {
	    description: 'NetSurf 1.2 (NetBSD)',
	    ua: 'NetSurf/1.2 (NetBSD; amd64)'
	}, {
	    description: 'Opera 12.10 (FreeBSD)',
	    ua: 'Opera/9.80 (X11; FreeBSD 8.1-RELEASE i386; Edition Next) Presto/2.12.388 Version/12.10'
	}, {
	    description: 'Seamonkey 1.1.8 (Mozilla) (SunOS 32bit)',
	    ua: 'Mozilla/5.0 (X11; U; SunOS i86pc; en-US; rv:1.8.1.12) Gecko/20080303 SeaMonkey/1.1.8'
	}, {
	    description: 'Bolt 2.8 (webkit 534.6) (Sony Ericsson K800i)',
	    ua: 'Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; BOLT/2.800) AppleWebKit/534.6 (KHTML, like Gecko) Version/5.0 Safari/534.6.3'
	}, {
	    description: 'IEMobile 6.12 (Win CE) (with zune id)',
	    ua: 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 6.12; Microsoft ZuneHD 4.3)'
	}, {
	    description: 'EMobile 7.11 (MSIE 6 - Win CE)',
	    ua: 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11) '
	}, {
	    description: 'IEMobile 7.0 (MSIE 7.0) - WinPhone OS 7.0 - Asus Galaxy',
	    ua: 'Mozilla/4.0 (compatible; MSIE 7.0; Windows Phone OS 7.0; Trident/3.1; IEMobile/7.0) Asus;Galaxy6'
	}, {
	    description: 'IEMobile 7.5 (MSIE 9 - WP7.5)',
	    ua: 'Mozilla/5.0 (compatible; MSIE 9.0; Windows Phone OS 7.5; Trident/5.0; IEMobile/9.0)'
	}, {
	    description: 'IEMobile 9.0 - WinPhone OS 7.5',
	    ua: 'Mozilla/5.0 (compatible; MSIE 9.0; Windows Phone OS 7.5; Trident/5.0; IEMobile/9.0)'
	}, {
	    description: 'IEMobile 10.0 - WinPhone OS 8.0 - ARM',
	    ua: 'Mozilla/5.0 (compatible; MSIE 10.0; Windows Phone 8.0; Trident/6.0; IEMobile/10.0; ARM; Touch) '
	}, {
	    description: 'EudoraWeb 2.1 (PalmOS)',
	    ua: 'Mozilla/1.22 (compatible; MSIE 5.01; PalmOS 3.0) EudoraWeb 2.1'
	}, {
	    description: 'Firefox 4.0.1 (Win CE)',
	    ua: 'Mozilla/5.0 (WindowsCE 6.0; rv:2.0.1) Gecko/20100101 Firefox/4.0.1'
	}, {
	    description: 'Firefox Fennec 1.0.a1 (Linux arm)',
	    ua: 'Mozilla/5.0 (X11; U; Linux armv61; en-US; rv:1.9.1b2pre) Gecko/20081015 Fennec/1.0a1'
	}, {
	    description: 'Firefox Fennec 2.0.1 (Maemo arm)',
	    ua: 'Mozilla/5.0 (Maemo; Linux armv7l; rv:2.0.1) Gecko/20100101 Firefox/4.0.1 Fennec/2.0.1'
	}, {
	    description: 'Firefox Fennec 10.0.1 (Maemo arm)',
	    ua: 'Mozilla/5.0 (Maemo; Linux armv7l; rv:10.0.1) Gecko/20100101 Firefox/10.0.1 Fennec/10.0.1'
	}, {
	    description: 'Minimo 0.016 (Win CE)',
	    ua: 'Mozilla/5.0 (Windows; U; Windows CE 5.1; rv:1.8.1a3) Gecko/20060610 Minimo/0.016'
	}, {
	    description: 'Minimo 0.020 (Linux)',
	    ua: 'Mozilla/5.0 (X11; U; Linux armv6l; rv 1.8.1.5pre) Gecko/20070619 Minimo/0.020'
	}, {
	    description: 'Minimo 0.025 (Linux arm)',
	    ua: 'Mozilla/5.0 (X11; U; Linux arm7tdmi; rv:1.8.1.11) Gecko/20071130 Minimo/0.025'
	}, {
	    description: 'NetFront 3.0 (PalmOS)',
	    ua: 'Mozilla/4.0 (PDA; PalmOS/sony/model prmr/Revision:1.1.54 (en)) NetFront/3.0'
	}, {
	    description: 'Opera 9.51 beta (Windows)',
	    ua: 'Opera/9.51 Beta (Microsoft Windows; PPC; Opera Mobi/1718; U; en)'
	}, {
	    description: 'Opera 9.60 Mini 4.1 beta (Windows)',
	    ua: 'Opera/9.60 (J2ME/MIDP; Opera Mini/4.1.11320/608; U; en) Presto/2.2.0'
	}, {
	    description: 'Opera 9.60 Mini 4.2 J2ME/MIDP',
	    ua: 'Opera/9.60 (J2ME/MIDP; Opera Mini/4.2.14320/554; U; cs) Presto/2.2.0'
	}, {
	    description: 'Opera 10.00 Mobi - SymbOS',
	    ua: 'Opera/9.80 (S60; SymbOS; Opera Mobi/499; U; ru) Presto/2.4.18 Version/10.00'
	}, {
	    description: 'Opera 10.61 Mini 5.1 (J2ME/MIDP)',
	    ua: 'Opera/10.61 (J2ME/MIDP; Opera Mini/5.1.21219/19.999; en-US; rv:1.9.3a5) WebKit/534.5 Presto/2.6.30'
	}, {
	    description: 'Opera 11.1010 Mini 7.5.33361 (Android)',
	    ua: 'Opera/9.80 (Android; Opera Mini/7.5.33361/31.1543; U; en) Presto/2.8.119 Version/11.1010'
	}, {
	    description: 'Polaris 6.01',
	    ua: 'POLARIS/6.01 (BREW 3.1.5; U; en-us; LG; LX265; POLARIS/6.01/WAP) MMP/2.0 profile/MIDP-2.1 Configuration/CLDC-1.1'
	}, {
	    description: 'Puffin 2.9174AP - Android - (AP=Android Phone)',
	    ua: 'Mozilla/5.0 (X11; U; Linux x86_64; en-gb) AppleWebKit/534.35 (KHTML, like Gecko) Chrome/11.0.696.65 Safari/534.35 Puffin/2.9174AP'
	}, {
	    description: 'Puffin 2.9174AT - Android - (AT=Android Tablet)',
	    ua: 'Mozilla/5.0 (X11; U; Linux x86_64; en-us) AppleWebKit/534.35 (KHTML, like Gecko) Chrome/11.0.696.65 Safari/534.35 Puffin/2.9174AT'
	}, {
	    description: 'Puffin 3.9174IP - iOS 6_1 - (IP=iphone)',
	    ua: 'Mozilla/5.0 (iPod; U; CPU iPhone OS 6_1 like Mac OS X; en-HK) AppleWebKit/534.35 (KHTML, like Gecko) Chrome/11.0.696.65 Safari/534.35 Puffin/3.9174IP Mobile '
	}, {
	    description: 'Puffin 3.9174IT -(says Linux) - (IT=iOS tablet)',
	    ua: 'Mozilla/5.0 (X11; U; Linux x86_64; en-AU) AppleWebKit/534.35 (KHTML, like Gecko) Chrome/11.0.696.65 Safari/534.35 Puffin/3.9174IT '
	}, {
	    description: 'Puffin2.0.5603M - Linux - (M=mobile)',
	    ua: 'Mozilla/5.0 (X11; U; Linux i686; en-gb) AppleWebKit/534.35 (KHTML, like Gecko) Chrome/11.0.696.65 Safari/534.35 Puffin/2.0.5603M'
	}, {
	    description: 'Mobile Safari 530.17 (Android)',
	    ua: 'Mozilla/5.0 (Linux; U; Android 2.0; en-us; Droid Build/ESD20) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17'
	}, {
	    description: 'Safari 533 - iPad - iOS 4_2_1)',
	    ua: 'Mozilla/5.0 (iPad; U; CPU OS 4_2_1 like Mac OS X; ja-jp) AppleWebKit/533.17.9 (KHTML, like Gecko) Version/5.0.2 Mobile/8C148 Safari/6533.18.5'
	}, {
	    description: 'Safari 533.17.9 - iPhone - iOS 4_2_1',
	    ua: 'Mozilla/5.0 (iPhone; U; CPU iPhone OS 4_2_1 like Mac OS X; da-dk) AppleWebKit/533.17.9 (KHTML, like Gecko) Version/5.0.2 Mobile/8C148 Safari/6533.18.5'
	}, {
	    description: 'Safari 6 (8536.25) - Apple iPad 2 - iOS 6_0',
	    ua: 'Mozilla/5.0 (iPad; CPU OS 6_0 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Version/6.0 Mobile/10A5355d Safari/8536.25'
	}, {
	    description: 'UCBrowser 2.9.0 - Trident/MSIE 9.0 - WindowsPhone 7',
	    ua: 'Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; Trident/5.0; XBLWP7; ZuneWP7) UCBrowser/2.9.0.263'
	}, {
	    description: 'UCBrowser 8.6.1 - Webkit 533 - Android 2.3.3',
	    ua: 'Mozilla/5.0 (Linux; U; Android 2.3.3; en-us ; LS670 Build/GRI40) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1/UCBrowser/8.6.1.262/145/355'
	}, {
	    description: 'Acer Iconia - Android - 3.0.1 - AppleWebKit 534.13',
	    ua: 'Mozilla/5.0 (Linux; U; Android 3.0.1; fr-fr; A500 Build/HRI66) AppleWebKit/534.13 (KHTML, like Gecko) Version/4.0 Safari/534.13'
	}, {
	    description: '(device unknown) - Android 4.1 - AppleWebKit 534.30',
	    ua: 'Mozilla/5.0 (Linux; U; Android 4.1; en-us; sdk Build/MR1) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.1 Safari/534.30'
	}, {
	    description: '(device unknown) - Android 4.2 - Safari 535.19',
	    ua: 'Mozilla/5.0 (Linux; U; Android 4.2; en-us; sdk Build/MR1) AppleWebKit/535.19 (KHTML, like Gecko) Version/4.2 Safari/535.19'
	}, {
	    description: '(device unknown) - Android - Puffin 2.9174AT (AT=android tablet)',
	    ua: 'Mozilla/5.0 (X11; U; Linux x86_64; en-us) AppleWebKit/534.35 (KHTML, like Gecko) Chrome/11.0.696.65 Safari/534.35 Puffin/2.9174AT'
	}, {
	    description: 'Apple iPad - iOS - Puffin/3.9174IT (IT=ios tablet)',
	    ua: 'Mozilla/5.0 (X11; U; Linux x86_64; en-AU) AppleWebKit/534.35 (KHTML, like Gecko) Chrome/11.0.696.65 Safari/534.35 Puffin/3.9174IT'
	}, {
	    description: 'Apple iPad 1 - iOS 3.2 - Safari 531',
	    ua: 'Mozilla/5.0 (iPad; U; CPU OS 3_2 like Mac OS X; en-us) AppleWebKit/531.21.10 (KHTML, like Gecko) Version/4.0.4 Mobile/7B334b Safari/531.21.10'
	}, {
	    description: 'Apple iPad 1 - iOS 4_2_1 - Safari 533',
	    ua: 'Mozilla/5.0 (iPad; U; CPU OS 4_2_1 like Mac OS X; ja-jp) AppleWebKit/533.17.9 (KHTML, like Gecko) Version/5.0.2 Mobile/8C148 Safari/6533.18.5'
	}, {
	    description: 'Apple iPad 2 - iOS 4_3 - Safari 533',
	    ua: 'Mozilla/5.0 (iPad; U; CPU OS 4_3 like Mac OS X; en-us) AppleWebKit/533.17.9 (KHTML, like Gecko) Version/5.0.2 Mobile/8F190 Safari/6533.18.5'
	}, {
	    description: 'Apple iPad 2 - iOS 6_0 - Safari 6 (8536.25)',
	    ua: 'Mozilla/5.0 (iPad; CPU OS 6_0 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Version/6.0 Mobile/10A5355d Safari/8536.25'
	}, {
	    description: 'Barnes & Noble Nook Color - (Masked: IDs as: OS_X 10_5_7) - Safari 530.17',
	    ua: 'Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_5_7;en-us) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Safari/530.17'
	}, {
	    description: 'HP Touchpad 1.0 - WebOS 3.0.2 - wOSBrowser 234.40.1',
	    ua: 'Mozilla/5.0 (hp-tablet; Linux; hpwOS/3.0.2; U; de-DE) AppleWebKit/534.6 (KHTML, like Gecko) wOSBrowser/234.40.1 Safari/534.6 TouchPad/1.0'
	}, {
	    description: 'Kindle Fire - Android 4.0.3 - Silk 2.1 (AppleWebKit 535.19)',
	    ua: 'Mozilla/5.0 (Linux; U; Android 4.0.3; en-us; KFTT Build/IML74K) AppleWebKit/535.19 (KHTML, like Gecko) Silk/2.1 Mobile Safari/535.19 Silk-Accelerated=true'
	}, {
	    description: 'Motorola Xoom - Android 3.0.1 - Mobile Safari 523.12',
	    ua: 'Mozilla/5.0 (Linux; U; Android 3.0; en-us; Xoom Build/HRI39) AppleWebKit/525.10  (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2'
	}, {
	    description: 'RIM (Blackberry) Playbook - OS 2.1.0 - Safari 536.2+',
	    ua: 'Mozilla/5.0 (PlayBook; U; RIM Tablet OS 2.1.0; en-US) AppleWebKit/536.2+ (KHTML like Gecko) Version/7.2.1.0 Safari/536.2+'
	}, {
	    description: 'Samsung Galaxy - Android 1.5 - Mobile Safari 525.20.1',
	    ua: 'Mozilla/5.0 (Linux; U; Android 1.5; de-de; Galaxy Build/CUPCAKE) AppleWebKit/528.5  (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1'
	}, {
	    description: 'Samsung Galaxy - Android 2.2 - Mobile Safari 533.1',
	    ua: 'Mozilla/5.0 (Linux; U; Android 2.2; en-ca; GT-P1000M Build/FROYO) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1'
	}, {
	    description: 'Samsung Galaxy (Verizon) - Android 2.2 - Mobile Safari 533.1',
	    ua: 'Mozilla/5.0 (Linux; U; Android 2.2; en-us; SCH-I800 Build/FROYO) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1'
	}, {
	    description: 'Samsung GT-P7100 - Android 3.0.1 - AppleWebKit 534.13',
	    ua: 'Mozilla/5.0 (Linux; U; Android 3.0.1; en-us; GT-P7100 Build/HRI83) AppleWebkit/534.13 (KHTML, like Gecko) Version/4.0 Safari/534.13'
	}, {
	    description: 'Kindle 2.0 - Linux',
	    ua: 'Mozilla/4.0 (compatible; Linux 2.6.22) NetFront/3.4 Kindle/2.0 (screen 600x800)'
	}, {
	    description: 'Kindle 3.0 - AppleWebKit 528.5 - Linux',
	    ua: 'Mozilla/5.0 (Linux U; en-US)  AppleWebKit/528.5  (KHTML, like Gecko, Safari/528.5 ) Version/4.0 Kindle/3.0 (screen 600x800; rotate)'
	}, {
	    description: 'Kindle Fire - Silk/2.1 (AppleWebKit 535.19) - Android',
	    ua: 'Mozilla/5.0 (Linux; U; Android 4.0.3; en-us; KFTT Build/IML74K) AppleWebKit/535.19 (KHTML, like Gecko) Silk/2.1 Mobile Safari/535.19 Silk-Accelerated=true'
	}, {
	    description: 'Iconia Tablet - Android - 3.0.1 - AppleWebKit 534.13',
	    ua: 'Mozilla/5.0 (Linux; U; Android 3.0.1; fr-fr; A500 Build/HRI66) AppleWebKit/534.13 (KHTML, like Gecko) Version/4.0 Safari/534.13'
	}, {
	    description: 'iPad 1 - iOS 3.2 - Safari 531',
	    ua: 'Mozilla/5.0 (iPad; U; CPU OS 3_2 like Mac OS X; en-us) AppleWebKit/531.21.10 (KHTML, like Gecko) Version/4.0.4 Mobile/7B334b Safari/531.21.10'
	}, {
	    description: 'iPad 1 - iOS 4_2_1 - Safari 533',
	    ua: 'Mozilla/5.0 (iPad; U; CPU OS 4_2_1 like Mac OS X; ja-jp) AppleWebKit/533.17.9 (KHTML, like Gecko) Version/5.0.2 Mobile/8C148 Safari/6533.18.5'
	}, {
	    description: 'iPad 2 - iOS 4_3 - Safari 533',
	    ua: 'Mozilla/5.0 (iPad; U; CPU OS 4_3 like Mac OS X; en-us) AppleWebKit/533.17.9 (KHTML, like Gecko) Version/5.0.2 Mobile/8F190 Safari/6533.18.5'
	}, {
	    description: 'iPad 2 - iOS 5_0_1 - Safari 6533.18.5',
	    ua: 'Mozilla/5.0 (iPad; U; CPU iPad OS 5_0_1 like Mac OS X; en-us) AppleWebKit/535.1+ (KHTML like Gecko) Version/7.2.0.0 Safari/6533.18.5'
	}, {
	    description: 'iPad - iOS 6_0 - Safari 6 (8536.25)',
	    ua: 'Mozilla/5.0 (iPad; CPU OS 6_0 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Version/6.0 Mobile/10A5355d Safari/8536.25'
	}, {
	    description: 'iPad - iOS 7_0 - Safari 6 (8536.25)',
	    ua: 'Mozilla/5.0 (iPad; CPU OS 7_0 like Mac OS X) AppleWebKit/537.51.1 (KHTML, like Gecko) CriOS/30.0.1599.12 Mobile/11A465 Safari/8536.25 (3B92C18B-D9DE-4CB7-A02A-22FD2AF17C8F)'
	}, {
	    description: 'iPhone - iOS 1.0 - Safari 419.3',
	    ua: 'Mozilla/5.0 (iPhone; U; CPU like Mac OS X; en) AppleWebKit/420  (KHTML, like Gecko) Version/3.0 Mobile/1A543a Safari/419.3'
	}, {
	    description: 'iPhone - iOS 2.0 - Safari 525.200',
	    ua: 'Mozilla/5.0 (iPhone; U; CPU iPhone OS 2_0 like Mac OS X; en-us) AppleWebKit/525.18.1 (KHTML, like Gecko) Version/3.1.1 Mobile/5A347 Safari/525.200'
	}, {
	    description: 'iPhone - iOS 3.0 - Safari 528.16',
	    ua: 'Mozilla/5.0 (iPhone; U; CPU iPhone OS 3_0 like Mac OS X; en-us) AppleWebKit/528.18 (KHTML, like Gecko) Version/4.0 Mobile/7A341 Safari/528.16'
	}, {
	    description: 'iPhone - iOS 4_0 - Safari 531.22.7',
	    ua: 'Mozilla/5.0 (iPhone; U; CPU iPhone OS 4_0 like Mac OS X; en-us) AppleWebKit/532.9 (KHTML, like Gecko) Version/4.0.5 Mobile/8A293 Safari/531.22.7'
	}, {
	    description: 'iPhone - iOS 4_2_1 - Safari 533.17.9',
	    ua: 'Mozilla/5.0 (iPhone; U; CPU iPhone OS 4_2_1 like Mac OS X; da-dk) AppleWebKit/533.17.9 (KHTML, like Gecko) Version/5.0.2 Mobile/8C148 Safari/6533.18.5'
	}, {
	    description: 'iPhone - iOS 5_1_1 - Chrome (crios) 19.0.1084.60',
	    ua: 'Mozilla/5.0 (iPhone; U; CPU iPhone OS 5_1_1 like Mac OS X; da-dk) AppleWebKit/534.46.0 (KHTML, like Gecko) CriOS/19.0.1084.60 Mobile/9B206 Safari/7534.48.3'
	}, {
	    description: 'iPhone - iOS 6 - UCWEB 8.8',
	    ua: 'UCWEB/8.8 (iPhone; CPU OS_6; en-US)AppleWebKit/534.1 U3/3.0.0 Mobile'
	}, {
	    description: 'iPod Touch - iOS 2.2.1 - Safari 525.20',
	    ua: 'Mozilla/5.0 (iPod; U; CPU iPhone OS 2_2_1 like Mac OS X; en-us) AppleWebKit/525.18.1 (KHTML, like Gecko) Version/3.1.1 Mobile/5H11a Safari/525.20'
	}, {
	    description: 'iPod Touch - iOS 3_1_1 - Safari 528.16',
	    ua: 'Mozilla/5.0 (iPod; U; CPU iPhone OS 3_1_1 like Mac OS X; en-us) AppleWebKit/528.18 (KHTML, like Gecko) Mobile/7C145'
	}, {
	    description: 'Nook 2 (limited data)',
	    ua: 'nook browser/1.0'
	}, {
	    description: 'Nook Color - Android - IDs as: OS_X 10_5_7 - Safari 530.17',
	    ua: 'Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_5_7;en-us) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Safari/530.17'
	}, {
	    description: 'Nook Tablet - Android 2.3.4 - Safari 533.1',
	    ua: 'Mozilla/5.0 (Linux; U; Android 2.3.4; en-us; BNTV250 Build/GINGERBREAD) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Safari/533.1'
	}, {
	    description: '7100',
	    ua: 'BlackBerry7100i/4.1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/103'
	}, {
	    description: '8300 Bold',
	    ua: 'BlackBerry8300/4.2.2 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/107 UP.Link/6.2.3.15.0'
	}, {
	    description: '8320 Curve',
	    ua: 'BlackBerry8320/4.2.2 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/100'
	}, {
	    description: '8330',
	    ua: 'BlackBerry8330/4.3.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/105'
	}, {
	    description: '9000',
	    ua: 'BlackBerry9000/4.6.0.167 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/102'
	}, {
	    description: '9530 Storm',
	    ua: 'BlackBerry9530/4.7.0.167 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/102 UP.Link/6.3.1.20.0'
	}, {
	    description: '9700',
	    ua: 'BlackBerry9700/5.0.0.351 Profile/MIDP-2.1 Configuration/CLDC-1.1 VendorID/123'
	}, {
	    description: '9800 Torch - Safari 534.1',
	    ua: 'Mozilla/5.0 (BlackBerry; U; BlackBerry 9800; en) AppleWebKit/534.1  (KHTML, Like Gecko) Version/6.0.0.141 Mobile Safari/534.1'
	}, {
	    description: 'Playbook (tablet) - OS 2.1.0 - Safari 536.2+',
	    ua: 'Mozilla/5.0 (PlayBook; U; RIM Tablet OS 2.1.0; en-US) AppleWebKit/536.2+ (KHTML like Gecko) Version/7.2.1.0 Safari/536.2+'
	}, {
	    description: 'Z10 - BB10 OS - Mobile Safari 537.10+',
	    ua: 'Mozilla/5.0 (BB10; Touch) AppleWebKit/537.10+ (KHTML, like Gecko) Version/10.1.0.2342 Mobile Safari/537.10+'
	}, {
	    description: 'Android SDK - Android 1.5 - Mobile Safari 525.20.1',
	    ua: 'Mozilla/5.0 (Linux; U; Android 1.5; en-us; sdk Build/CUPCAKE) AppleWebkit/528.5  (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1'
	}, {
	    description: 'Nexus One - Android 2.1 - Mobile Safari 530.17',
	    ua: 'Mozilla/5.0 (Linux; U; Android 2.1; en-us; Nexus One Build/ERD62) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17'
	}, {
	    description: 'Nexus One - Android 2.2 - Mobile Safari 533.1',
	    ua: 'Mozilla/5.0 (Linux; U; Android 2.2; en-us; Nexus One Build/FRF91) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1'
	}, {
	    description: 'Nexus 5 - Android 4.4 - AppleWebKit/536.23',
	    ua: 'Mozilla/5.0 (Linux; Android 4.4; Nexus 5 Build/BuildID) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/30.0.0.0 Mobile Safari/537.36'
	}, {
	    description: 'Touchpad 1.0 - WebOS 3.0.2 - wOSBrowser 234.40.1',
	    ua: 'Mozilla/5.0 (hp-tablet; Linux; hpwOS/3.0.2; U; de-DE) AppleWebKit/534.6 (KHTML, like Gecko) wOSBrowser/234.40.1 Safari/534.6 TouchPad/1.0'
	}, {
	    description: 'Pre3 - webOS 2.2.4 - wOSBrowser 221.56',
	    ua: 'Mozilla/5.0 (Linux; webOS/2.2.4; U; en-US) AppleWebKit/534.6 (KHTML, like Gecko) webOSBrowser/221.56 Safari/534.6 Pre/3.0 '
	}, {
	    description: '6800 - WinCE - IEMobile 7.11 (MSIE 6.0) - Sprint',
	    ua: 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11) Sprint:PPC6800 '
	}, {
	    description: '6800 - WinCE - IEMobile 7.11 (MSIE 6.0) - Verizon',
	    ua: 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11) XV6800 '
	}, {
	    description: 'Bahamas - Android 1.5 - Mobile Safari 525.20.1',
	    ua: 'Mozilla/5.0 (Linux; U; Android 1.5; en-us; htc_bahamas Build/CRB17) AppleWebKit/528.5  (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1'
	}, {
	    description: 'Desire - Android 2.1 - Mobile Safari 530.17',
	    ua: 'Mozilla/5.0 (Linux; U; Android 2.1-update1; de-de; HTC Desire 1.19.161.5 Build/ERE27) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17'
	}, {
	    description: 'Dream - Android 1.5 - Mobile Safari 525',
	    ua: 'HTC_Dream Mozilla/5.0 (Linux; U; Android 1.5; en-ca; Build/CUPCAKE) AppleWebKit/528.5  (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1'
	}, {
	    description: 'Evo - Android 2.2 - Mobile Safari 533.1',
	    ua: 'Mozilla/5.0 (Linux; U; Android 2.2; en-us; Sprint APA9292KT Build/FRF91) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1'
	}, {
	    description: 'Hero - Android 1.5 - Mobile Safari 525.20',
	    ua: 'Mozilla/5.0 (Linux; U; Android 1.5; de-ch; HTC Hero Build/CUPCAKE) AppleWebKit/528.5  (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1'
	}, {
	    description: 'Incredible - Android 2.2 - Mobile Safari 533.1',
	    ua: 'Mozilla/5.0 (Linux; U; Android 2.2; en-us; ADR6300 Build/FRF91) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1'
	}, {
	    description: 'Legend - Android 2.1 - Mobile Safari 530.17',
	    ua: 'Mozilla/5.0 (Linux; U; Android 2.1; en-us; HTC Legend Build/cupcake) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17'
	}, {
	    description: 'Magic - Android 1.5 - Mobile Safari 525.20.1',
	    ua: 'Mozilla/5.0 (Linux; U; Android 1.5; de-de; HTC Magic Build/PLAT-RC33) AppleWebKit/528.5  (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1 FirePHP/0.3'
	}, {
	    description: 'Sensation - Android 4.0.3 - Mobile Safari 534.30',
	    ua: 'Mozilla/5.0 (Linux; U; Android 4.0.3; de-ch; HTC Sensation Build/IML74K) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30'
	}, {
	    description: 'ST7377 - Win XP - Opera 9.5',
	    ua: 'HTC-ST7377/1.59.502.3 (67150) Opera/9.50 (Windows NT 5.1; U; en) UP.Link/6.3.1.17.0'
	}, {
	    description: 'Tattoo - Android 1.6 - Mobile Safari/525.20.1',
	    ua: 'Mozilla/5.0 (Linux; U; Android 1.6; en-us; HTC_TATTOO_A3288 Build/DRC79) AppleWebKit/528.5  (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1'
	}, {
	    description: 'Fusic LX550',
	    ua: 'LG-LX550 AU-MIC-LX550/2.0 MMP/2.0 Profile/MIDP-2.0 Configuration/CLDC-1.1'
	}, {
	    description: 'Rumor2 LX265 - Polaris',
	    ua: 'POLARIS/6.01(BREW 3.1.5;U;en-us;LG;LX265;POLARIS/6.01/WAP;)MMP/2.0 profile/MIDP-201 Configuration /CLDC-1.1'
	}, {
	    description: 'Viewty',
	    ua: 'LG-GC900/V10a Obigo/WAP2.0 Profile/MIDP-2.1 Configuration/CLDC-1.1'
	}, {
	    description: 'MDA Pro - Win CE',
	    ua: 'Mozilla/4.0 (compatible; MSIE 4.01; Windows CE; PPC; MDA Pro/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1)'
	}, {
	    description: 'T-Mobile G1 - Android 1.0 - Mobile Safari 523.12.2',
	    ua: 'Mozilla/5.0 (Linux; U; Android 1.0; en-us; dream) AppleWebKit/525.10  (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2'
	}, {
	    description: 'T-Mobile G1 - Android 1.5 -  Mobile Safari 525.20.1',
	    ua: 'Mozilla/5.0 (Linux; U; Android 1.5; en-us; T-Mobile G1 Build/CRB43) AppleWebKit/528.5  (KHTML, like Gecko) Version/3.1.2 Mobile Safari 525.20.1'
	}, {
	    description: 'T-Mobile G2 - Android 1.5 - Mobile Safari 525.20.1',
	    ua: 'Mozilla/5.0 (Linux; U; Android 1.5; en-gb; T-Mobile_G2_Touch Build/CUPCAKE) AppleWebKit/528.5  (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1'
	}, {
	    description: 'Droid - Android 2.0 - Mobile Safari 530.17',
	    ua: 'Mozilla/5.0 (Linux; U; Android 2.0; en-us; Droid Build/ESD20) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17'
	}, {
	    description: 'Droid V2.2 - Android 2.2 - Mobile Safari 533.1',
	    ua: 'Mozilla/5.0 (Linux; U; Android 2.2; en-us; Droid Build/FRG22D) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1'
	}, {
	    description: 'L7',
	    ua: 'MOT-L7v/08.B7.5DR MIB/2.2.1 Profile/MIDP-2.0 Configuration/CLDC-1.1 UP.Link/6.3.0.0.0'
	}, {
	    description: 'Milestone - Android 2.0 - Mobile Safari 530.17',
	    ua: 'Mozilla/5.0 (Linux; U; Android 2.0; en-us; Milestone Build/ SHOLS_U2_01.03.1) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17'
	}, {
	    description: 'Milestone  Android 2.0.1 - Mobile Safari 530.17',
	    ua: 'Mozilla/5.0 (Linux; U; Android 2.0.1; de-de; Milestone Build/SHOLS_U2_01.14.0) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17'
	}, {
	    description: 'Razr V9',
	    ua: 'MOT-V9mm/00.62 UP.Browser/6.2.3.4.c.1.123 (GUI) MMP/2.0'
	}, {
	    description: 'RIZR - Symbian OS - Opera 8.65',
	    ua: 'MOTORIZR-Z8/46.00.00 Mozilla/4.0 (compatible; MSIE 6.0; Symbian OS; 356) Opera 8.65 [it] UP.Link/6.3.0.0.0'
	}, {
	    description: 'V177',
	    ua: 'MOT-V177/0.1.75 UP.Browser/6.2.3.9.c.12 (GUI) MMP/2.0 UP.Link/6.3.1.13.0'
	}, {
	    description: 'Xoom - Android 3.0.1 - Mobile Safari 523.12',
	    ua: 'Mozilla/5.0 (Linux; U; Android 3.0; en-us; Xoom Build/HRI39) AppleWebKit/525.10  (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2'
	}, {
	    description: 'NEC n410i i-Mode',
	    ua: 'portalmmm/2.0 N410i(c20;TB) '
	}, {
	    description: '3230 - SymbianOS 7.0s',
	    ua: 'Nokia3230/2.0 (5.0614.0) SymbianOS/7.0s Series60/2.1 Profile/MIDP-2.0 Configuration/CLDC-1.0'
	}, {
	    description: '5700 - SymbianOS 9.2 - Safari 413',
	    ua: 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 Nokia5700/3.27; Profile/MIDP-2.0 Configuration/CLDC-1.1) AppleWebKit/413 (KHTML, like Gecko) Safari/413'
	}, {
	    description: '6120 Classic - SymbianOS 9.2 - Safari 413',
	    ua: 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 Nokia6120c/3.70; Profile/MIDP-2.0 Configuration/CLDC-1.1) AppleWebKit/413 (KHTML, like Gecko) Safari/413'
	}, {
	    description: '6230',
	    ua: 'Nokia6230/2.0 (04.44) Profile/MIDP-2.0 Configuration/CLDC-1.1'
	}, {
	    description: '6230i',
	    ua: 'Nokia6230i/2.0 (03.80) Profile/MIDP-2.0 Configuration/CLDC-1.1'
	}, {
	    description: '6600 Smartphone - Symbian OS - Opera 6.20',
	    ua: 'Mozilla/4.1 (compatible; MSIE 5.0; Symbian OS; Nokia 6600;452) Opera 6.20 [en-US]'
	}, {
	    description: '6630 - SymbianOS 8.0',
	    ua: 'Nokia6630/1.0 (2.39.15) SymbianOS/8.0 Series60/2.6 Profile/MIDP-2.0 Configuration/CLDC-1.1'
	}, {
	    description: '7250',
	    ua: 'Nokia7250/1.0 (3.14) Profile/MIDP-1.0 Configuration/CLDC-1.0'
	}, {
	    description: '9500',
	    ua: 'Mozilla/4.0 (compatible; MSIE 5.0; Series80/2.0 Nokia9500/4.51 Profile/MIDP-2.0 Configuration/CLDC-1.1)'
	}, {
	    description: 'C6-01 - Symbian 3 - Safari 525',
	    ua: 'Mozilla/5.0 (Symbian/3; Series60/5.2 NokiaC6-01/011.010; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.2.7.2 3gpp-gba'
	}, {
	    description: 'C7 - Symbian 3 - Safari 525',
	    ua: 'Mozilla/5.0 (Symbian/3; Series60/5.2 NokiaC7-00/012.003; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.2.7.3 3gpp-gba'
	}, {
	    description: 'E50 - SymbianOS 9.1 - Safari 413 es50',
	    ua: 'Mozilla/5.0 (SymbianOS/9.1; U; en-us) AppleWebKit/413 (KHTML, like Gecko) Safari/413 es50'
	}, {
	    description: 'E6-00 - SymbianOS 3 - Safari 533.4',
	    ua: 'Mozilla/5.0 (Symbian/3; Series60/5.2 NokiaE6-00/021.002; Profile/MIDP-2.1 Configuration/CLDC-1.1) AppleWebKit/533.4 (KHTML, like Gecko) NokiaBrowser/7.3.1.16 Mobile Safari/533.4 3gpp-gba'
	}, {
	    description: 'E63 - SymbianOS 9.2 - UCWEB 8.8 (webkit)',
	    ua: 'UCWEB/8.8 (SymbianOS/9.2; U; en-US; NokiaE63) AppleWebKit/534.1 UCBrowser/8.8.0.245 Mobile'
	}, {
	    description: 'E65 - SymbianOS 9.1 - Safari 413 es65',
	    ua: 'Mozilla/5.0 (SymbianOS/9.1; U; en-us) AppleWebKit/413 (KHTML, like Gecko) Safari/413 es65'
	}, {
	    description: 'E7 - Symbian 3 - Safari 525',
	    ua: 'Mozilla/5.0 (Symbian/3; Series60/5.2 NokiaE7-00/010.016; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.2.7.3 3gpp-gba'
	}, {
	    description: 'E70 - SymbianOS 9.1 - Safari 413 es70',
	    ua: 'Mozilla/5.0 (SymbianOS/9.1; U; en-us) AppleWebKit/413 (KHTML, like Gecko) Safari/413 es70'
	}, {
	    description: 'E90 - SymbianOS 9.2 - Safari 413',
	    ua: 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaE90-1/07.24.0.3; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413 UP.Link/6.2.3.18.0'
	}, {
	    description: 'Lumia 620 ARM - Windows Phone OS 8.0 - IEMobile 10.0',
	    ua: 'Mozilla/5.0 (compatible; MSIE 10.0; Windows Phone 8.0; Trident/6.0; IEMobile/10.0; ARM; Touch; NOKIA; Lumia 920)'
	}, {
	    description: 'N70',
	    ua: 'NokiaN70-1/5.0609.2.0.1 Series60/2.8 Profile/MIDP-2.0 Configuration/CLDC-1.1 UP.Link/6.3.1.13.0'
	}, {
	    description: 'N73 - SymbianOS 9.1 - Safari 413',
	    ua: 'Mozilla/5.0 (SymbianOS/9.1; U; en-us) AppleWebKit/413 (KHTML, like Gecko) Safari/413'
	}, {
	    description: 'N73 (Service)',
	    ua: 'NokiaN73-1/3.0649.0.0.1 Series60/3.0 Profile/MIDP2.0 Configuration/CLDC-1.1'
	}, {
	    description: 'N8 - Symbian 3 - Safari 525',
	    ua: 'Mozilla/5.0 (Symbian/3; Series60/5.2 NokiaN8-00/014.002; Profile/MIDP-2.1 Configuration/CLDC-1.1; en-us) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.2.6.4 3gpp-gba'
	}, {
	    description: 'N80 - SymbianOS 9.1 - Safari 413',
	    ua: 'Mozilla/5.0 (SymbianOS/9.1; U; en-us) AppleWebKit/413 (KHTML, like Gecko) Safari/413'
	}, {
	    description: 'N9 - MeeGo - Safari 534.13',
	    ua: 'Mozilla/5.0 (MeeGo; NokiaN9) AppleWebKit/534.13 (KHTML, like Gecko) NokiaBrowser/8.5.0 Mobile Safari/534.13'
	}, {
	    description: 'N93 - SymbianOS 9.1 - Safari 413',
	    ua: 'Mozilla/5.0 (SymbianOS/9.1; U; de) AppleWebKit/413 (KHTML, like Gecko) Safari/413'
	}, {
	    description: 'N95 - SymbianOS 9.2 - Safari 413',
	    ua: 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaN95/10.0.018; Profile/MIDP-2.0 Configuration/CLDC-1.1) AppleWebKit/413 (KHTML, like Gecko) Safari/413 UP.Link/6.3.0.0.0'
	}, {
	    description: 'N950 - MeeGo - Safari 534.13',
	    ua: 'Mozilla/5.0 (MeeGo; NokiaN950-00/00) AppleWebKit/534.13 (KHTML, like Gecko) NokiaBrowser/8.5.0 Mobile Safari/534.13'
	}, {
	    description: 'N97 - SymbianOS 9.4 - WicKed 7.1.12344',
	    ua: 'Mozilla/5.0 (SymbianOS/9.4; Series60/5.0 NokiaN97-1/10.0.012; Profile/MIDP-2.1 Configuration/CLDC-1.1; en-us) AppleWebKit/525 (KHTML, like Gecko) WicKed/7.1.12344'
	}, {
	    description: 'X7 - Symbian 3 - Safari 533.4',
	    ua: 'Mozilla/5.0 (Symbian/3; Series60/5.2 NokiaX7-00/021.004; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/533.4 (KHTML, like Gecko) NokiaBrowser/7.3.1.21 Mobile Safari/533.4 3gpp-gba'
	}, {
	    description: 'Safari 525 - WebOS - Safari 525.27.1',
	    ua: 'Mozilla/5.0 (webOS/1.3; U; en-US) AppleWebKit/525.27.1 (KHTML, like Gecko) Version/1.0 Safari/525.27.1 Desktop/1.0'
	}, {
	    description: 'Treo 650 - PalmSource',
	    ua: 'Mozilla/4.0 (compatible; MSIE 6.0; Windows 98; PalmSource/hspr-H102; Blazer/4.0) 16;320x320'
	}, {
	    description: 'e900 - Opera/Netfront',
	    ua: 'SEC-SGHE900/1.0 NetFront/3.2 Profile/MIDP-2.0 Configuration/CLDC-1.1 Opera/8.01 (J2ME/MIDP; Opera Mini/2.0.4509/1378; nl; U; ssr)'
	}, {
	    description: 'Galaxy - Android 1.5 - Mobile Safari 525.20.1',
	    ua: 'Mozilla/5.0 (Linux; U; Android 1.5; de-de; Galaxy Build/CUPCAKE) AppleWebKit/528.5  (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1'
	}, {
	    description: 'Galaxy - Android 2.2 - Mobile Safari 533.1',
	    ua: 'Mozilla/5.0 (Linux; U; Android 2.2; en-ca; GT-P1000M Build/FROYO) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1'
	}, {
	    description: 'Galaxy (Verizon) - Android 2.2 - Mobile Safari 533.1',
	    ua: 'Mozilla/5.0 (Linux; U; Android 2.2; en-us; SCH-I800 Build/FROYO) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1'
	}, {
	    description: 'Galaxy S II - Android 4.0.3 - Mobile Safari 534.30',
	    ua: 'Mozilla/5.0 (Linux; U; Android 4.0.3; de-de; Galaxy S II Build/GRJ22) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30'
	}, {
	    description: 'Galaxy S 3 (SPH-L710) - Android 4.3 - Chrome 32.0.1700.99',
	    ua: 'User agent: Mozilla/5.0 (Linux; Android 4.3; SPH-L710 Build/JSS15J) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/32.0.1700.99 Mobile Safari/537.36'
	}, {
	    description: 'GT-P7100 tablet - Android 3.0.1 - AppleWebKit 534.13',
	    ua: 'Mozilla/5.0 (Linux; U; Android 3.0.1; en-us; GT-P7100 Build/HRI83) AppleWebkit/534.13 (KHTML, like Gecko) Version/4.0 Safari/534.13'
	}, {
	    description: 'Jet',
	    ua: 'SAMSUNG-S8000/S8000XXIF3 SHP/VPP/R5 Jasmine/1.0 Nextreaming SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1 FirePHP/0.3'
	}, {
	    description: 'Moment - Android 1.5 - Mobile Safari 525.20.1',
	    ua: 'Mozilla/5.0 (Linux; U; Android 1.5; en-us; SPH-M900 Build/CUPCAKE) AppleWebKit/528.5  (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1'
	}, {
	    description: 'SGH-A867 - Netfront',
	    ua: 'SAMSUNG-SGH-A867/A867UCHJ3 SHP/VPP/R5 NetFront/35 SMM-MMS/1.2.0 profile/MIDP-2.0 configuration/CLDC-1.1 UP.Link/6.3.0.0.0'
	}, {
	    description: 'SGH X210 (WML)',
	    ua: 'SEC-SGHX210/1.0 UP.Link/6.3.1.13.0'
	}, {
	    description: 'Spica - Android 1.5 - Mobile Safari 525.20.1',
	    ua: 'Mozilla/5.0 (Linux; U; Android 1.5; fr-fr; GT-I5700 Build/CUPCAKE) AppleWebKit/528.5  (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1'
	}, {
	    description: 'X820',
	    ua: 'SEC-SGHX820/1.0 NetFront/3.2 Profile/MIDP-2.0 Configuration/CLDC-1.1'
	}, {
	    description: 'K310iv',
	    ua: 'SonyEricssonK310iv/R4DA Browser/NetFront/3.3 Profile/MIDP-2.0 Configuration/CLDC-1.1 UP.Link/6.3.1.13.0'
	}, {
	    description: 'K550i',
	    ua: 'SonyEricssonK550i/R1JD Browser/NetFront/3.3 Profile/MIDP-2.0 Configuration/CLDC-1.1'
	}, {
	    description: 'K610i',
	    ua: 'SonyEricssonK610i/R1CB Browser/NetFront/3.3 Profile/MIDP-2.0 Configuration/CLDC-1.1'
	}, {
	    description: 'K750i',
	    ua: 'SonyEricssonK750i/R1CA Browser/SEMC-Browser/4.2 Profile/MIDP-2.0 Configuration/CLDC-1.1'
	}, {
	    description: 'K800 - Opera 9.8',
	    ua: 'Opera/9.80 (J2ME/MIDP; Opera Mini/5.0.16823/1428; U; en) Presto/2.2.0'
	}, {
	    description: 'K800i',
	    ua: 'SonyEricssonK800i/R1CB Browser/NetFront/3.3 Profile/MIDP-2.0 Configuration/CLDC-1.1 UP.Link/6.3.0.0.0'
	}, {
	    description: 'K810i',
	    ua: 'SonyEricssonK810i/R1KG Browser/NetFront/3.3 Profile/MIDP-2.0 Configuration/CLDC-1.1'
	}, {
	    description: 'P900 - Opera 8.0 Mini',
	    ua: 'Opera/8.01 (J2ME/MIDP; Opera Mini/1.0.1479/HiFi; SonyEricsson P900; no; U; ssr)'
	}, {
	    description: 'S500i',
	    ua: 'SonyEricssonS500i/R6BC Browser/NetFront/3.3 Profile/MIDP-2.0 Configuration/CLDC-1.1'
	}, {
	    description: 'Satio - Safari 525',
	    ua: 'Mozilla/5.0 (SymbianOS/9.4; U; Series60/5.0 SonyEricssonP100/01; Profile/MIDP-2.1 Configuration/CLDC-1.1) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 Safari/525'
	}, {
	    description: 'T68 (WML)',
	    ua: 'SonyEricssonT68/R201A'
	}, {
	    description: 'T100 (WML)',
	    ua: 'SonyEricssonT100/R101'
	}, {
	    description: 'T610',
	    ua: 'SonyEricssonT610/R201 Profile/MIDP-1.0 Configuration/CLDC-1.0'
	}, {
	    description: 'T650i',
	    ua: 'SonyEricssonT650i/R7AA Browser/NetFront/3.3 Profile/MIDP-2.0 Configuration/CLDC-1.1'
	}, {
	    description: 'W580i',
	    ua: 'SonyEricssonW580i/R6BC Browser/NetFront/3.3 Profile/MIDP-2.0 Configuration/CLDC-1.1'
	}, {
	    description: 'W660i',
	    ua: 'SonyEricssonW660i/R6AD Browser/NetFront/3.3 Profile/MIDP-2.0 Configuration/CLDC-1.1'
	}, {
	    description: 'W810i',
	    ua: 'SonyEricssonW810i/R4EA Browser/NetFront/3.3 Profile/MIDP-2.0 Configuration/CLDC-1.1 UP.Link/6.3.0.0.0'
	}, {
	    description: 'W850i',
	    ua: 'SonyEricssonW850i/R1ED Browser/NetFront/3.3 Profile/MIDP-2.0 Configuration/CLDC-1.1'
	}, {
	    description: 'W950i - Opera 8.60 - Symbian OS',
	    ua: 'SonyEricssonW950i/R100 Mozilla/4.0 (compatible; MSIE 6.0; Symbian OS; 323) Opera 8.60 [en-US]'
	}, {
	    description: 'W995',
	    ua: 'SonyEricssonW995/R1EA Profile/MIDP-2.1 Configuration/CLDC-1.1 UNTRUSTED/1.0'
	}, {
	    description: 'X10 - Android 1.6 - Safari 525.20.1',
	    ua: 'Mozilla/5.0 (Linux; U; Android 1.6; es-es; SonyEricssonX10i Build/R1FA016) AppleWebKit/528.5  (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1'
	}, {
	    description: 'X10i - Android 1.6 - Mobile Safari 525.20.1',
	    ua: 'Mozilla/5.0 (Linux; U; Android 1.6; en-us; SonyEricssonX10i Build/R1AA056) AppleWebKit/528.5  (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1'
	}, {
	    description: 'Xperia X1 - Opera Mobi 9.5',
	    ua: 'Opera/9.5 (Microsoft Windows; PPC; Opera Mobi; U) SonyEricssonX1i/R2AA Profile/MIDP-2.0 Configuration/CLDC-1.1'
	}, {
	    description: 'Z800i',
	    ua: 'SonyEricssonZ800/R1Y Browser/SEMC-Browser/4.1 Profile/MIDP-2.0 Configuration/CLDC-1.1 UP.Link/6.3.0.0.0'
	}, {
	    description: 'ZuneHD 4.3 - IEMobile 6.12 - CE',
	    ua: 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 6.12; Microsoft ZuneHD 4.3)'
	}, {
	    description: 'Android - Opera Mini 7.5.33361 (11.1010)',
	    ua: 'Opera/9.80 (Android; Opera Mini/7.5.33361/31.1543; U; en) Presto/2.8.119 Version/11.1010'
	}, {
	    description: 'Android 0.5 - Safari 419',
	    ua: 'Mozilla/5.0 (Linux; U; Android 0.5; en-us) AppleWebKit/522  (KHTML, like Gecko) Safari/419.3'
	}, {
	    description: 'Android 1.1 - Mobile Safari 523',
	    ua: 'Mozilla/5.0 (Linux; U; Android 1.1; en-gb; dream) AppleWebKit/525.10  (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2'
	}, {
	    description: 'Android 1.5 - HTC Dream - Mobile Safari 525',
	    ua: 'HTC_Dream Mozilla/5.0 (Linux; U; Android 1.5; en-ca; Build/CUPCAKE) AppleWebKit/528.5  (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1'
	}, {
	    description: 'Android 2.0 - Motorola Droid - Mobile Safari 530.17',
	    ua: 'Mozilla/5.0 (Linux; U; Android 2.0; en-us; Droid Build/ESD20) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17'
	}, {
	    description: 'Android 2.1 - Nexus One - Safari 530.17',
	    ua: 'Mozilla/5.0 (Linux; U; Android 2.1; en-us; Nexus One Build/ERD62) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17'
	}, {
	    description: 'Android 2.2 - HTC Evo - Mobile Safari 533.1',
	    ua: 'Mozilla/5.0 (Linux; U; Android 2.2; en-us; Sprint APA9292KT Build/FRF91) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1'
	}, {
	    description: 'Android 2.2 - HTC Incredible - Safari 533.1',
	    ua: 'Mozilla/5.0 (Linux; U; Android 2.2; en-us; ADR6300 Build/FRF91) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1'
	}, {
	    description: 'Android 2.2 - Samsung Galaxy - Mobile Safari 533.1',
	    ua: 'Mozilla/5.0 (Linux; U; Android 2.2; en-ca; GT-P1000M Build/FROYO) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1'
	}, {
	    description: 'Android - Fennec 2.0.1 (arm)',
	    ua: 'Mozilla/5.0 (Android; Linux armv7l; rv:2.0.1) Gecko/20100101 Firefox/4.0.1 Fennec/2.0.1'
	}, {
	    description: 'Android - 3.0.1 - Safari 534.13 - Acer Iconia',
	    ua: 'Mozilla/5.0 (Linux; U; Android 3.0.1; fr-fr; A500 Build/HRI66) AppleWebKit/534.13 (KHTML, like Gecko) Version/4.0 Safari/534.13'
	}, {
	    description: 'Android - 3.0.1 - Mobile Safari 523.12 - Motorola Xoom',
	    ua: 'Mozilla/5.0 (Linux; U; Android 3.0; en-us; Xoom Build/HRI39) AppleWebKit/525.10  (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2'
	}, {
	    description: 'Android 4.0.3 - Mobile Safari 534.30 - HTC Sensation',
	    ua: 'Mozilla/5.0 (Linux; U; Android 4.0.3; de-ch; HTC Sensation Build/IML74K) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30'
	}, {
	    description: 'Android 4.0.3 - Mobile Safari 534.30 - Samsung Galaxy S II',
	    ua: 'Mozilla/5.0 (Linux; U; Android 4.0.3; de-de; Galaxy S II Build/GRJ22) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30'
	}, {
	    description: 'Android 4.0.4 - Opera 12.00',
	    ua: 'Opera/9.80 (Android 4.0.4; Linux; Opera Mobi/ADR-1205181138; U; pl) Presto/2.10.254 Version/12.00'
	}, {
	    description: 'Android - Fennec 10.0.1',
	    ua: 'Mozilla/5.0 (Android; Linux armv7l; rv:10.0.1) Gecko/20100101 Firefox/10.0.1 Fennec/10.0.1'
	}, {
	    description: 'Android 4.1.2 - Chrome 30.0',
	    ua: 'Mozilla/5.0 (Linux; Android 4.1.2; SHV-E250S Build/JZO54K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/30.0.1599.82 Mobile Safari/537.36'
	}, {
	    description: 'Android 4.2 - Firefox 19.0',
	    ua: 'Mozilla/5.0 (Android 4.2; rv:19.0) Gecko/20121129 Firefox/19.0'
	}, {
	    description: 'Android 4.3 - AppleWebKit/536.23',
	    ua: 'Mozilla/5.0 (Linux; U; Android 4.3; en-us; sdk Build/MR1) AppleWebKit/536.23 (KHTML, like Gecko) Version/4.3 Mobile Safari/536.23'
	}, {
	    description: 'Android 4.4 - (Nexus 5) - AppleWebKit/536.23',
	    ua: 'Mozilla/5.0 (Linux; Android 4.4; Nexus 5 Build/BuildID) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/30.0.0.0 Mobile Safari/537.36'
	}, {
	    description: 'iOS 1.0 - iPhone - Safari 419.3',
	    ua: 'Mozilla/5.0 (iPhone; U; CPU like Mac OS X; en) AppleWebKit/420  (KHTML, like Gecko) Version/3.0 Mobile/1A543a Safari/419.3'
	}, {
	    description: 'iOS 2.0 - iPhone - Safari 525.200',
	    ua: 'Mozilla/5.0 (iPhone; U; CPU iPhone OS 2_0 like Mac OS X; en-us) AppleWebKit/525.18.1 (KHTML, like Gecko) Version/3.1.1 Mobile/5A347 Safari/525.200'
	}, {
	    description: 'iOS 2.2.1 - iPod - Safari 525.20',
	    ua: 'Mozilla/5.0 (iPod; U; CPU iPhone OS 2_2_1 like Mac OS X; en-us) AppleWebKit/525.18.1 (KHTML, like Gecko) Version/3.1.1 Mobile/5H11a Safari/525.20'
	}, {
	    description: 'iOS 3.0 - iPhone - Safari 528.16',
	    ua: 'Mozilla/5.0 (iPhone; U; CPU iPhone OS 3_0 like Mac OS X; en-us) AppleWebKit/528.18 (KHTML, like Gecko) Version/4.0 Mobile/7A341 Safari/528.16'
	}, {
	    description: 'iOS 3.2 - iPad - Safari 531',
	    ua: 'Mozilla/5.0 (iPad; U; CPU OS 3_2 like Mac OS X; en-us) AppleWebKit/531.21.10 (KHTML, like Gecko) Version/4.0.4 Mobile/7B334b Safari/531.21.10'
	}, {
	    description: 'iOS 4_2_1 - iPad - Safari 533',
	    ua: 'Mozilla/5.0 (iPad; U; CPU OS 4_2_1 like Mac OS X; ja-jp) AppleWebKit/533.17.9 (KHTML, like Gecko) Version/5.0.2 Mobile/8C148 Safari/6533.18.5'
	}, {
	    description: 'iOS 4_2_1 - iPhone - Safari 533.17.9',
	    ua: 'Mozilla/5.0 (iPhone; U; CPU iPhone OS 4_2_1 like Mac OS X; da-dk) AppleWebKit/533.17.9 (KHTML, like Gecko) Version/5.0.2 Mobile/8C148 Safari/6533.18.5'
	}, {
	    description: 'iOS 4_3 - iPhone - Safari 533.17.9',
	    ua: 'Mozilla/5.0 (iPhone; U; CPU iPhone OS 4_3 like Mac OS X; de-de) AppleWebKit/533.17.9 (KHTML, like Gecko) Mobile/8F190'
	}, {
	    description: 'iOS 5_1_1 - iPhone - Chrome (crios) 19.0.1084.60',
	    ua: 'Mozilla/5.0 (iPhone; U; CPU iPhone OS 5_1_1 like Mac OS X; da-dk) AppleWebKit/534.46.0 (KHTML, like Gecko) CriOS/19.0.1084.60 Mobile/9B206 Safari/7534.48.3'
	}, {
	    description: 'Linux - Fennec 2.0.1 (686 on x86_64)',
	    ua: 'Mozilla/5.0 (X11; Linux i686 on x86_64; rv:2.0.1) Gecko/20100101 Firefox/4.0.1 Fennec/2.0.1'
	}, {
	    description: 'Maemo - Fennec 2.0.1 (arm)',
	    ua: 'Mozilla/5.0 (Maemo; Linux armv7l; rv:2.0.1) Gecko/20100101 Firefox/4.0.1 Fennec/2.0.1'
	}, {
	    description: 'Palm WebOS 1.3 - Safari 525',
	    ua: 'Mozilla/5.0 (webOS/1.3; U; en-US) AppleWebKit/525.27.1 (KHTML, like Gecko) Version/1.0 Safari/525.27.1 Desktop/1.0'
	}, {
	    description: 'PalmSource hspr-H102 - Palm Treo 650',
	    ua: 'Mozilla/4.0 (compatible; MSIE 6.0; Windows 98; PalmSource/hspr-H102; Blazer/4.0) 16;320x320'
	}, {
	    description: 'Symbian 3 - N8 - Safari 525',
	    ua: 'Mozilla/5.0 (Symbian/3; Series60/5.2 NokiaN8-00/014.002; Profile/MIDP-2.1 Configuration/CLDC-1.1; en-us) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.2.6.4 3gpp-gba'
	}, {
	    description: 'Symbian 3 - Nokia X7 - Safari 533.4',
	    ua: 'Mozilla/5.0 (Symbian/3; Series60/5.2 NokiaX7-00/021.004; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/533.4 (KHTML, like Gecko) NokiaBrowser/7.3.1.21 Mobile Safari/533.4 3gpp-gba'
	}, {
	    description: 'SymbianOS 9.2 - Nokia E90 - Safari',
	    ua: 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaE90-1/07.24.0.3; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413 UP.Link/6.2.3.18.0'
	}, {
	    description: 'SymbianOS 9.4 - Nokia N97 - WicKed 7.1.12344',
	    ua: 'Mozilla/5.0 (SymbianOS 9.4; Series60/5.0 NokiaN97-1/10.0.012; Profile/MIDP-2.1 Configuration/CLDC-1.1; en-us) AppleWebKit/525 (KHTML, like Gecko) WicKed/7.1.12344'
	}, {
	    description: 'SymbOS - Opera 10.00 Mobi',
	    ua: 'Opera/9.80 (S60; SymbOS; Opera Mobi/499; U; ru) Presto/2.4.18 Version/10.00'
	}, {
	    description: 'Windows CE - ZuneHD 4.3 - IEMobile 6.12',
	    ua: 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 6.12; Microsoft ZuneHD 4.3)'
	}, {
	    description: 'Windows CE - MSIE 6 - IEMobile 7.11',
	    ua: 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11)'
	}, {
	    description: 'Windows CE 5.2 - Sprint (HTC Titan) - IEMobile 7.11 (MSIE 6.0)',
	    ua: 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11) Sprint:PPC6800'
	}, {
	    description: 'Windows CE - MSIE 6 - IEMobile 8.12',
	    ua: 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 8.12; MSIEMobile6.0)'
	}, {
	    description: 'Windows Phone OS 7.0 - Asus Galaxy - IEMobile 7.0 (MSIE 7.0)',
	    ua: 'Mozilla/4.0 (compatible; MSIE 7.0; Windows Phone OS 7.0; Trident/3.1; IEMobile/7.0) Asus;Galaxy6'
	}, {
	    description: 'Windows Phone 7 - MSIE 7 - IEMobile 7.0',
	    ua: 'Mozilla/4.0 (compatible; MSIE 7.0; Windows Phone OS 7.0; Trident/3.1; IEMobile/7.0)'
	}, {
	    description: 'Windows Phone OS 7.5 - IEMobile 9.0',
	    ua: 'Mozilla/5.0 (compatible; MSIE 9.0; Windows Phone OS 7.5; Trident/5.0; IEMobile/9.0)'
	}, {
	    description: 'Windows Phone OS 8.0 - ARM - IEMobile 10.0',
	    ua: 'Mozilla/5.0 (compatible; MSIE 10.0; Windows Phone 8.0; Trident/6.0; IEMobile/10.0; ARM; Touch) '
	}, {
	    description: 'Windows Phone OS 8.0 - Nokia Lumia 620 ARM - IEMobile 10.0',
	    ua: 'Mozilla/5.0 (compatible; MSIE 10.0; Windows Phone 8.0; Trident/6.0; IEMobile/10.0; ARM; Touch; NOKIA; Lumia 920)'
	}, {
	    description: 'DoCoMo 2.0',
	    ua: 'DoCoMo/2.0 SH901iC(c100;TB;W24H12)'
	}, {
	    description: 'Novarra-Vision 6.9',
	    ua: 'Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.8.0.7) Gecko/20060909 Firefox/1.5.0.7 MG(Novarra-Vision/6.9)'
	}, {
	    description: 'ReqwirelessWeb 3.5',
	    ua: 'Mozilla/4.0 (compatible; MSIE 6.0; j2me) ReqwirelessWeb/3.5'
	}, {
	    description: 'Vodafone 1.0',
	    ua: 'Vodafone/1.0/V802SE/SEJ001 Browser/SEMC-Browser/4.1'
	}, {
	    description: 'BlackBerry (Google WAP)',
	    ua: 'BlackBerry7520/4.0.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 UP.Browser/5.0.3.3 UP.Link/5.1.2.12 (Google WAP Proxy/1.0)'
	}, {
	    description: 'Nokia (6100) WAP',
	    ua: 'Nokia6100/1.0 (04.01) Profile/MIDP-1.0 Configuration/CLDC-1.0'
	}, {
	    description: 'Nokia 6630',
	    ua: 'Nokia6630/1.0 (2.3.129) SymbianOS/8.0 Series60/2.6 Profile/MIDP-2.0 Configuration/CLDC-1.1'
	}, {
	    description: 'Ask Jeeves/Teoma',
	    ua: 'Mozilla/2.0 (compatible; Ask Jeeves/Teoma)'
	}, {
	    description: 'Baiduspider ',
	    ua: 'Baiduspider ( http://www.baidu.com/search/spider.htm)'
	}, {
	    description: 'Bing Bot 2.0 (renamed Msnbot)',
	    ua: 'Mozilla/5.0 (compatible; bingbot/2.0  http://www.bing.com/bingbot.htm)'
	}, {
	    description: 'Exabot 3.0',
	    ua: 'Mozilla/5.0 (compatible; Exabot/3.0;  http://www.exabot.com/go/robot) '
	}, {
	    description: 'FAST-WebCrawler 3.8',
	    ua: 'FAST-WebCrawler/3.8 (crawler at trd dot overture dot com; http://www.alltheweb.com/help/webmaster/crawler)'
	}, {
	    description: 'Google AdsBot 1.0',
	    ua: 'AdsBot-Google ( http://www.google.com/adsbot.html)'
	}, {
	    description: 'Googlebot 2.1 (New version)',
	    ua: 'Mozilla/5.0 (compatible; Googlebot/2.1;  http://www.google.com/bot.html)'
	}, {
	    description: 'Googlebot 2.1 (Older Version)',
	    ua: 'Googlebot/2.1 ( http://www.googlebot.com/bot.html)'
	}, {
	    description: 'Googlebot-Image 1.0',
	    ua: 'Googlebot-Image/1.0'
	}, {
	    description: 'Googlebot MediaPartners',
	    ua: 'Mediapartners-Google'
	}, {
	    description: 'Googlebot-Mobile 2.1 (ID: DoCoMo/2.0)',
	    ua: 'DoCoMo/2.0 N905i(c100;TB;W24H16) (compatible; Googlebot-Mobile/2.1;  http://www.google.com/bot.html)'
	}, {
	    description: 'Googlebot-Mobile 2.1 (ID: iPhone)',
	    ua: 'Mozilla/5.0 (iPhone; U; CPU iPhone OS) (compatible; Googlebot-Mobile/2.1;  http://www.google.com/bot.html)'
	}, {
	    description: 'Googlebot-Mobile 2.1 (ID: SAMSUNG-SGH-E250)',
	    ua: 'SAMSUNG-SGH-E250/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 UP.Browser/6.2.3.3.c.1.101 (GUI) MMP/2.0 (compatible; Googlebot-Mobile/2.1;  http://www.google.com/bot.html)'
	}, {
	    description: 'Googlebot-News',
	    ua: 'Googlebot-News'
	}, {
	    description: 'Googlebot-Video',
	    ua: 'Googlebot-Video/1.0'
	}, {
	    description: 'Google Toolbar 4.0 (XP - MSIE 6)',
	    ua: 'Mozilla/4.0 (compatible; GoogleToolbar 4.0.1019.5266-big; Windows XP 5.1; MSIE 6.0.2900.2180)'
	}, {
	    description: 'Google Web Preview',
	    ua: 'Mozilla/5.0 (en-us) AppleWebKit/525.13 (KHTML, like Gecko; Google Web Preview) Version/3.1 Safari/525.13'
	}, {
	    description: 'Msnbot 1.0 (current version)',
	    ua: 'msnbot/1.0 ( http://search.msn.com/msnbot.htm)'
	}, {
	    description: 'Msnbot 1.1',
	    ua: 'msnbot/1.1 ( http://search.msn.com/msnbot.htm)'
	}, {
	    description: 'Msnbot 0.11 (beta version)',
	    ua: 'msnbot/0.11 ( http://search.msn.com/msnbot.htm)'
	}, {
	    description: 'Msnbot-Media 1.1',
	    ua: 'msnbot-media/1.1 ( http://search.msn.com/msnbot.htm)'
	}, {
	    description: 'Yahoo Slurp',
	    ua: 'Mozilla/5.0 (compatible; Yahoo! Slurp; http://help.yahoo.com/help/us/ysearch/slurp)'
	}, {
	    description: 'Yahoo Slurp China',
	    ua: 'Mozilla/5.0 (compatible; Yahoo! Slurp China; http://misc.yahoo.com.cn/help.html)'
	}, {
	    description: 'Email Wolf',
	    ua: 'EmailWolf 1.00'
	}, {
	    description: 'Gaisbot 3.0',
	    ua: 'Gaisbot/3.0 (robot@gais.cs.ccu.edu.tw; http://gais.cs.ccu.edu.tw/robot.php)'
	}, {
	    description: 'Grub-Client',
	    ua: 'grub-client-1.5.3; (grub-client-1.5.3; Crawl your own stuff with http://grub.org)'
	}, {
	    description: 'gulperbot',
	    ua: 'Gulper Web Bot 0.2.4 (www.ecsl.cs.sunysb.edu/~maxim/cgi-bin/Link/GulperBot)'
	}, {
	    description: 'Firefox 10.0.12 - OS/2 Warp 4.5',
	    ua: 'Mozilla/5.0 (OS/2; Warp 4.5; rv:10.0.12) Gecko/20100101 Firefox/10.0.12'
	}, {
	    description: 'SeaMonkey 2.7.2  - OS/2 Warp 4.5',
	    ua: 'Mozilla/5.0 (OS/2; Warp 4.5; rv:10.0.12) Gecko/20130108 Firefox/10.0.12 SeaMonkey/2.7.2'
	}, {
	    description: 'Arora 0.11.0',
	    ua: 'Mozilla/5.0 (OS/2; U; OS/2; en-US) AppleWebKit/533.3 (KHTML, like Gecko) Arora/0.11.0 Safari/533.3 '
	}, {
	    description: 'QupZilla 1.3.1',
	    ua: 'Mozilla/5.0 (OS/2; U; OS/2; en-US) AppleWebKit/533.3 (KHTML, like Gecko) QupZilla/1.3.1 Safari/533.3 '
	}, {
	    description: 'Download Demon',
	    ua: 'Download Demon/3.5.0.11'
	}, {
	    description: 'Offline Explorer 2.5',
	    ua: 'Offline Explorer/2.5'
	}, {
	    description: 'SuperBot 4.4.0 (Win XP)',
	    ua: 'SuperBot/4.4.0.60 (Windows XP)'
	}, {
	    description: 'WebCopier v4.6',
	    ua: 'WebCopier v4.6'
	}, {
	    description: 'Web Downloader 6.9',
	    ua: 'Web Downloader/6.9'
	}, {
	    description: 'WebZIP 3.5',
	    ua: 'WebZIP/3.5 (http://www.spidersoft.com)'
	}, {
	    description: 'Wget 1.9 (Redhat)',
	    ua: 'Wget/1.9 cvs-stable (Red Hat modified)'
	}, {
	    description: 'Wget 1.9.1',
	    ua: 'Wget/1.9.1'
	}, {
	    description: 'Bloglines 3.1',
	    ua: 'Bloglines/3.1 (http://www.bloglines.com)'
	}, {
	    description: 'everyfeed spider 2.0',
	    ua: 'everyfeed-spider/2.0 (http://www.everyfeed.com)'
	}, {
	    description: 'Google Feed Fetcher',
	    ua: 'FeedFetcher-Google; ( http://www.google.com/feedfetcher.html)'
	}, {
	    description: 'Gregarius 0.5.2',
	    ua: 'Gregarius/0.5.2 ( http://devlog.gregarius.net/docs/ua)'
	}, {
	    description: 'Playstation 3 (2.00)',
	    ua: 'Mozilla/5.0 (PLAYSTATION 3; 2.00)'
	}, {
	    description: 'Playstation 3 (1.10)',
	    ua: 'Mozilla/5.0 (PLAYSTATION 3; 1.10)'
	}, {
	    description: 'PSP (2.00)',
	    ua: 'Mozilla/4.0 (PSP (PlayStation Portable); 2.00)'
	}, {
	    description: 'Wii 2.0.4.7-7',
	    ua: 'Opera/9.30 (Nintendo Wii; U; ; 2047-7; en)'
	}, {
	    description: 'Wii libnup (1.00)',
	    ua: 'wii libnup/1.0'
	}, {
	    description: 'Java 1.6.0_13',
	    ua: 'Java/1.6.0_13'
	}, {
	    description: 'libwww-perl 5.820',
	    ua: 'libwww-perl/5.820'
	}, {
	    description: 'Peach 1.01',
	    ua: 'Peach/1.01 (Ubuntu 8.04 LTS; U; en)'
	}, {
	    description: 'Python-urllib 2.5',
	    ua: 'Python-urllib/2.5'
	}, {
	    description: 'HTMLParser (1.60)',
	    ua: 'HTMLParser/1.6'
	}, {
	    description: 'W3C CSS Validator',
	    ua: 'Jigsaw/2.2.5 W3C_CSS_Validator_JFouffa/2.0'
	}, {
	    description: 'W3C (X)HTML Validator (1.654)',
	    ua: 'W3C_Validator/1.654'
	}, {
	    description: 'W3C (X)HTML Validator (1.305.2.12)',
	    ua: 'W3C_Validator/1.305.2.12 libwww-perl/5.64'
	}, {
	    description: 'W3C P3P Validator',
	    ua: 'P3P Validator'
	}, {
	    description: 'WDG CSS Validator (1.2.2)',
	    ua: 'CSSCheck/1.2.2'
	}, {
	    description: 'WDG (X)HTML Validator (1.6.2)',
	    ua: 'WDG_Validator/1.6.2'
	}, {
	    description: 'Facebook Scraper 1.0',
	    ua: 'facebookscraper/1.0( http://www.facebook.com/sharescraper_help.php)'
	}, {
	    description: 'Grub-Client',
	    ua: 'grub-client-1.5.3; (grub-client-1.5.3; Crawl your own stuff with http://grub.org)'
	}, {
	    description: 'iTunes 4.2 (OS X 10.2 PPC)',
	    ua: 'iTunes/4.2 (Macintosh; U; PPC Mac OS X 10.2)'
	}, {
	    description: 'MS URL Control',
	    ua: 'Microsoft URL Control - 6.00.8862'
	}, {
	    description: 'winHTTP',
	    ua: 'SearchExpress'
	}]
})