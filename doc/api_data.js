define({ "api": [
  {
    "type": "post",
    "url": "/m/login.do",
    "title": "登录",
    "name": "__",
    "group": "login",
    "version": "1.0.0",
    "description": "<p>接口详细描述</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>密码</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>结果码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>消息说明</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n{\nstatus:0,\nmsg:'success',\ndata:{}\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "All",
            "description": "<p>对应<code>id</code>的用户没找到</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200\n{\n code:-1,\n msg:'user not found',\n }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/index.js",
    "groupTitle": "login",
    "sampleRequest": [
      {
        "url": "http://localhost:3000/v1/m/login.do"
      }
    ]
  }
] });
