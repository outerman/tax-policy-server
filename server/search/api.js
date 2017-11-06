/*
* api.js        //webapi接口定义（接口参数和返回值的格式转换）
*/
var fetch = require('node-fetch');

var config
const api = {

    _init: (current) => config = current,

    ping: (data, ctx) => true,

    search: (data, ctx) => searchElastic(data, ctx) //"search result for:" + data.q
}
module.exports = api

// 调用ElasticSearch的rest接口，查询结果 
function searchElastic(data, ctx) {
	let key = data.q,
        from = data.from,       //支持分页, 前端确定
        size = data.size || 10  //默认分页10

	// 查询参数配置
    // ElasticSearch的搜索语法配置，参见：
    // https://www.elastic.co/guide/cn/elasticsearch/guide/current/multi-query-strings.html
	let queryParam = {
		"query": {		// 搜索title， content，publisher三个字段，权重2：1：2
            "bool": {
		      "should": [
		        { "match": {
		        	"title":  {
		        		"query": key,
		        		"boost": 2
		        	}
		        }},
		        { "match": {
		        	"content": {
		        		"query": key,
		        		"boost": 1
		        	}
		        }},
		        { "match": {
		        	"publisher": {
		        		"query": key,
		        		"boost": 2
		        	}
		        }}
		      ]
		    }
		},
		"highlight": {
			"pre_tags": ["<tag1>"],
			"post_tags": ["</tag1>"],
			"fields": {
				"content": {}
			}
		}
	}

    let url = "http://localhost:9200/tax*/_search"                                              //在所有Tax前缀的索引的所有类型中查找
                + "?size=" + size                                                               // 每页返回条数
                + (from ? "&from=" + from : "")                                                 // 分页
                + "&_source=title,subtitle,date,publisher,url,source,policyType,taxLevel"       // 返回的字段

    // node-fetch相关说明,详见:
    // https://www.npmjs.com/package/node-fetch
    return fetch(url, {
                        method: 'POST',
                        body: JSON.stringify(queryParam),
                        headers: {"Content-Type": "application/json"}
                    })
        .then(function (res) {
            return res.json();
        })
        .then(function (json) {
            return json.hits
        })
}

/*
* service.js    //业务逻辑
*/



/*
* dao.js        //数据库处理
*/



/*
* model.js      //数据模型定义
*/

