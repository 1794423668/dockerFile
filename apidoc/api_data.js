define({ "api": [
  {
    "type": "get",
    "url": "/users",
    "title": "",
    "name": "sgqy",
    "group": "____",
    "version": "1.0.0",
    "description": "<p>接口详细描述</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "profiles",
            "description": "<p>List of user profiles.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "profiles.age",
            "description": "<p>Users age.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n{\nsuccess:1,\ndata:{}\n }",
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
    "groupTitle": "____",
    "sampleRequest": [
      {
        "url": "http://localhost:3000/users"
      }
    ]
  },
  {
    "type": "get",
    "url": "/user/sgqy",
    "title": "sgqy",
    "name": "sgqy",
    "group": "____",
    "version": "1.0.0",
    "description": "<p>接口详细描述</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>sgqy唯一标识</p>"
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
            "field": "success",
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
          "content": " HTTP/1.1 200 OK\n{\nsuccess:1,\nmsg:'成功',\ndata:{}\n }",
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
    "filename": "routes/users.js",
    "groupTitle": "____",
    "sampleRequest": [
      {
        "url": "http://localhost:3000/user/sgqy"
      }
    ]
  }
] });