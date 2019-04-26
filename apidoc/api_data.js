define({ "api": [
  {
    "description": "<p>Author: 张三</p>",
    "type": "post",
    "url": "/api/passwd/findback",
    "title": "找回密码",
    "name": "find_password",
    "group": "Auth",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "phone",
            "description": "<p>手机号码</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>密码</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n {\n    \"code\": 10000,\n    \"msg\": \"密码修改成功\"\n  }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n {\n    \"code\" => 10014,\n    \"msg\" => \"重置密码失败\"\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/index.js",
    "groupTitle": "Auth"
  },
  {
    "description": "<p>Author: 李四</p>",
    "type": "post",
    "url": "/api/alliance/user/list",
    "title": "用户管理列表",
    "name": "PostUserList",
    "group": "User",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n {\n    \"code\": 10000,\n    \"msg\": \"成功\",\n    \"data\":\n       { \n         \"total\":6          //总共的数据条数\n         \"per_page\":100     //每页的数据条数\n         \"current_page\":1   //当前页是第几页\n         \"last_page\":1      //一共有多少页\n         \"next_page_url\":null   //下一页的URL地址\n         \"prev_page_url\":null   //上一页的URL地址\n         \"data\":\n           {\n              'name':         //真实姓名\n              'nickname':     //用户昵称\n              'sex':          //性别\n              'age':          //年龄\n              'email':        //邮箱\n              'phone':        //电话\n            } \n       }\n   }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/index.js",
    "groupTitle": "User"
  }
] });
