//Sun Jun 30 2024 06:42:26 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const _0xea70a1 = _0x1bd4ec("农夫山泉2024"),
  _0x229be4 = require("got"),
  {
    CookieJar: _0x467bcd
  } = require("tough-cookie"),
  _0x15773c = "nfsq",
  _0x9d1ec0 = /[\n\&\@]/,
  _0x2deb57 = [_0x15773c + "Cookie"],
  _0x446306 = 20000,
  _0x1dd7f6 = 3;
const _0x5b0766 = 2.01,
  _0x2820d2 = "nfsq",
  _0x576fc8 = "https://leafxcy.coding.net/api/user/leafxcy/project/validcode/shared-depot/validCode/git/blob/master/code.json",
  _0x29cd86 = "https://leafxcy.coding.net/api/user/leafxcy/project/validcode/shared-depot/validCode/git/blob/master/" + _0x2820d2 + ".json",
  _0x1c0100 = "Mozilla/5.0 (iPhone; CPU iPhone OS 16_1_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.45(0x18002d27) NetType/WIFI Language/zh_CN",
  _0x4ee598 = "https://servicewechat.com/wxd79ec05386a78727/68/page-frame.html",
  _0x2ff2ed = 2000,
  _0x2df4b2 = 5,
  _0x56facd = "ACT42582331778956001281600711680",
  _0x5bb665 = "23122117303222",
  _0x411d5e = "SEN42583085600829603841600711680",
  _0x2c0510 = "SCENE-202312221126017708681600711680",
  _0x15076d = "SCENE-202312221201352052951600711680";
class _0x4732c2 {
  constructor() {
    this.index = _0xea70a1.userIdx++;
    this.name = "";
    this.valid = false;
    const _0x36b32e = {
      limit: 0
    };
    const _0x3ae0ac = {
      Connection: "keep-alive"
    };
    const _0x1c5d17 = {
      retry: _0x36b32e,
      timeout: _0x446306,
      followRedirect: false,
      headers: _0x3ae0ac
    };
    this.got = _0x229be4.extend(_0x1c5d17);
  }
  get_prefix(_0x2cec6a = {}) {
    var _0x2cc63a = "",
      _0x127c7c = _0xea70a1.userCount.toString().length;
    if (this.index) {
      _0x2cc63a += "账号[" + _0xea70a1.padStr(this.index, _0x127c7c) + "]";
    }
    if (this.name) {
      _0x2cc63a += "[" + this.name + "]";
    }
    return _0x2cc63a;
  }
  log(_0x2a2e5f, _0x2f62f5 = {}) {
    let _0x36cfd3 = this.get_prefix();
    _0xea70a1.log(_0x36cfd3 + _0x2a2e5f, _0x2f62f5);
  }
  async request(_0x59b475) {
    const _0x336413 = ["RequestError"],
      _0x3e7f9b = ["TimeoutError"];
    let _0x4239da = _0xea70a1.copy(_0x59b475),
      _0x4a4c77 = {};
    try {
      let _0x5bb365 = null,
        _0x2da9e0 = 0,
        _0x47aae5 = _0x4239da.fn || _0x4239da.url,
        _0xee8ff8 = _0x4239da.valid_code || [200];
      if (_0x4239da.form) {
        for (let _0x1a8204 in _0x4239da.form) {
          typeof _0x4239da.form[_0x1a8204] == "object" && (_0x4239da.form[_0x1a8204] = JSON.stringify(_0x4239da.form[_0x1a8204]));
        }
      }
      _0x4239da.method = _0x4239da?.["method"]?.["toUpperCase"]() || "GET";
      if (_0x4239da.searchParams) {
        for (let _0x3d7886 in _0x4239da.searchParams) {
          typeof _0x4239da.searchParams[_0x3d7886] == "object" && (_0x4239da.searchParams[_0x3d7886] = JSON.stringify(_0x4239da.searchParams[_0x3d7886]));
        }
      }
      let _0x3bffda = _0x4239da.got_client || this.got;
      _0x4239da.debug_in && console.log(_0x4239da);
      while (_0x2da9e0 < _0x1dd7f6) {
        if (_0x2da9e0 > 0) {
          await _0xea70a1.wait(_0x2ff2ed * _0x2da9e0);
          let _0x1bcb8b = _0xea70a1.get(_0x4239da, "retryer", null);
          if (_0x1bcb8b) {
            let _0x317157 = _0xea70a1.get(_0x4239da, "retryer_opt", {});
            await _0x1bcb8b(_0x4239da, _0x317157);
          }
        }
        _0x2da9e0++;
        let _0x19d414 = null;
        try {
          let _0x301432 = Number(_0x4239da?.["timeout"]?.["request"] || _0x4239da?.["timeout"] || _0x446306),
            _0x14a6aa = false,
            _0xf4869d = Date.now(),
            _0x58a364 = _0x3bffda(_0x4239da),
            _0x356482 = setTimeout(() => {
              _0x14a6aa = true;
              _0x58a364.cancel();
            }, _0x301432);
          await _0x58a364.then(_0x371a80 => {
            _0x5bb365 = _0x371a80;
          }, _0x871fbd => {
            _0x19d414 = _0x871fbd;
            _0x5bb365 = _0x871fbd.response;
          }).finally(() => clearTimeout(_0x356482));
          let _0x29c527 = Date.now(),
            _0x5250cd = _0x29c527 - _0xf4869d,
            _0x4bc0bd = _0x5bb365?.["statusCode"] || null;
          if (_0x14a6aa || _0x3e7f9b.includes(_0x19d414?.["name"])) {
            let _0x8d6254 = "";
            _0x19d414?.["code"] && (_0x8d6254 += "(" + _0x19d414.code, _0x19d414?.["event"] && (_0x8d6254 += ":" + _0x19d414.event), _0x8d6254 += ")");
            this.log("[" + _0x47aae5 + "]请求超时" + _0x8d6254 + "(" + _0x5250cd + "ms)，重试第" + _0x2da9e0 + "次");
          } else {
            if (_0x336413.includes(_0x19d414?.["name"])) {
              this.log("[" + _0x47aae5 + "]请求错误(" + _0x19d414.code + ")(" + _0x5250cd + "ms)，重试第" + _0x2da9e0 + "次");
            } else {
              if (_0x4bc0bd) {
                _0x19d414 && !_0xee8ff8.includes(_0x4bc0bd) && this.log("请求[" + _0x47aae5 + "]返回[" + _0x4bc0bd + "]");
              } else {
                let {
                  code = "unknown",
                  name = "unknown"
                } = _0x19d414 || {};
                this.log("请求[" + _0x47aae5 + "]错误[" + code + "][" + name + "]");
              }
              break;
            }
          }
        } catch (_0x44d4f9) {
          this.log("[" + _0x47aae5 + "]请求错误(" + _0x44d4f9.message + ")，重试第" + _0x2da9e0 + "次");
        }
      }
      if (_0x5bb365 === null || _0x5bb365 === undefined) {
        const _0x2d41e5 = {
          statusCode: -1,
          headers: null,
          result: null
        };
        return _0x2d41e5;
      }
      let {
          statusCode: _0x4ee63d,
          headers: _0x12a38d,
          body: _0x22e745
        } = _0x5bb365,
        _0x5add50 = _0xea70a1.get(_0x4239da, "decode_json", true);
      if (_0x22e745 && _0x5add50) {
        try {
          _0x22e745 = JSON.parse(_0x22e745);
        } catch {}
      }
      const _0x3e27c7 = {
        statusCode: _0x4ee63d,
        headers: _0x12a38d,
        result: _0x22e745
      };
      _0x4a4c77 = _0x3e27c7;
      _0x4239da.debug_out && console.log(_0x4a4c77);
    } catch (_0x16018e) {
      console.log(_0x16018e);
    } finally {
      return _0x4a4c77;
    }
  }
}
let _0x63ec58 = new _0x4732c2();
class _0x142548 extends _0x4732c2 {
  constructor(_0x18e3da) {
    super();
    this.apitoken = _0x18e3da;
    this.rnd_delay = 0;
    let _0x4db3e1 = "0123456789";
    this.longitude = parseFloat("114.0" + _0xea70a1.randomString(13, _0x4db3e1));
    this.dimension = parseFloat("22.5" + _0xea70a1.randomString(13, _0x4db3e1));
    this.got = this.got.extend({
      cookieJar: this.cookieJar,
      headers: {
        "User-Agent": _0x1c0100,
        apitoken: this.apitoken,
        Referer: _0x4ee598
      }
    });
  }
  gen_random_delay() {
    this.rnd_delay += Math.floor(Math.random() * 3000) + 1500;
    return this.rnd_delay;
  }
  async user_information(_0x2cd5aa = {}) {
    let _0x38f2ac = false;
    try {
      let _0x49a856 = {
          fn: "user_information",
          method: "get",
          url: "https://gateway.jmhd8.com/geement.usercenter/api/v1/user/information"
        },
        {
          result: _0x22c029,
          statusCode: _0xf02720
        } = await this.request(_0x49a856),
        _0x255fea = _0xea70a1.get(_0x22c029, "code", _0xf02720);
      if (_0x255fea == 200) {
        let {
          user_id: _0xd909d8,
          open_id: _0x1f535e
        } = _0x22c029?.["data"];
        this.user_id = _0xd909d8;
        this.open_id = _0x1f535e;
        _0x38f2ac = true;
      } else {
        let _0x427839 = _0xea70a1.get(_0x22c029, "msg", "");
        const _0x2d3c33 = {
          notify: true
        };
        this.log("获取账号信息失败[" + _0x255fea + "]: " + _0x427839, _0x2d3c33);
      }
    } catch (_0x493962) {
      console.log(_0x493962);
    } finally {
      return _0x38f2ac;
    }
  }
  async get_task_list(_0x48b1aa = {}) {
    try {
      const _0x361191 = {
        pageNum: 1,
        pageSize: 20,
        task_status: 2,
        status: 1,
        group_id: _0x5bb665
      };
      let _0x5f1edd = {
          fn: "get_task_list",
          method: "get",
          url: "https://gateway.jmhd8.com/geement.marketingplay/api/v1/task",
          searchParams: _0x361191
        },
        {
          result: _0x565484,
          statusCode: _0x14f8de
        } = await this.request(_0x5f1edd),
        _0x4bac65 = _0xea70a1.get(_0x565484, "code", _0x14f8de);
      if (_0x4bac65 == 200) {
        for (let _0x5dce7e of _0x565484?.["data"] || []) {
          if (_0x5dce7e.complete_status == 1) {
            continue;
          }
          await this.task_join(_0x5dce7e);
        }
      } else {
        let _0x59a4f8 = _0xea70a1.get(_0x565484, "msg", "");
        this.log("查询任务列表失败[" + _0x4bac65 + "]: " + _0x59a4f8);
      }
    } catch (_0x586d38) {
      console.log(_0x586d38);
    }
  }
  async task_join(_0x4d502d, _0x5de098 = {}) {
    try {
      let _0x15c8c4 = {
          fn: "task_join",
          method: "get",
          url: "https://gateway.jmhd8.com/geement.marketingplay/api/v1/task/join",
          searchParams: {
            action_time: _0xea70a1.time("yyyy-MM-dd hh:mm:ss", Date.now() + this.gen_random_delay()),
            task_id: _0x4d502d.id
          }
        },
        {
          result: _0x2bab7f,
          statusCode: _0x2e3b5c
        } = await this.request(_0x15c8c4),
        _0x580c5e = _0xea70a1.get(_0x2bab7f, "code", _0x2e3b5c);
      if (_0x580c5e == 200) {
        this.log("完成任务[" + _0x4d502d.name + "]成功");
      } else {
        let _0x15b502 = _0xea70a1.get(_0x2bab7f, "msg", "");
        this.log("完成任务[" + _0x4d502d.name + "]失败[" + _0x580c5e + "]: " + _0x15b502);
      }
    } catch (_0x3f326b) {
      console.log(_0x3f326b);
    }
  }
  async game_start(_0x238fb2 = {}) {
    try {
      const _0x1eab64 = {
        fn: "game_start",
        method: "post",
        url: "https://www.ukh5.com/g/12/PaoKu/api.php",
        searchParams: {}
      };
      _0x1eab64.searchParams.a = "Start";
      _0x1eab64.searchParams.openid = this.user_id;
      let _0x3e7d32 = _0x1eab64,
        {
          result: _0xe7f6,
          statusCode: _0x1dfe62
        } = await this.request(_0x3e7d32),
        _0x5e519d = _0xea70a1.get(_0xe7f6, "error", _0x1dfe62);
      if (_0x5e519d == 0) {
        await this.game_summit();
      } else {
        let _0x4f1217 = _0xea70a1.get(_0xe7f6, "info", "");
        this.log("开始游戏失败[" + code + "]: " + _0x4f1217);
      }
    } catch (_0x2aef34) {
      console.log(_0x2aef34);
    }
  }
  async game_summit(_0x200555 = {}) {
    try {
      let _0x40c534 = {
          fn: "game_summit",
          method: "post",
          url: "https://www.ukh5.com/g/12/PaoKu/api.php",
          searchParams: {
            a: "sumbitscore",
            openid: this.user_id,
            score: Math.floor(Math.random() * 15) + 80
          }
        },
        {
          result: _0x4e947b,
          statusCode: _0x254aae
        } = await this.request(_0x40c534),
        _0x2b60ab = _0xea70a1.get(_0x4e947b, "error", _0x254aae);
      if (_0x2b60ab == 0) {
        let _0x568d8e = _0xea70a1.get(_0x4e947b, "info", ""),
          _0x2e136e = _0xea70a1.get(_0x4e947b?.["data"], "status", -1);
        if (_0x2e136e == 0) {
          this.log("玩游戏成功: " + _0x568d8e);
          let _0x48be55 = Math.floor(Math.random() * 1000) + 1000;
          await _0xea70a1.wait(_0x48be55);
          await this.game_summit(_0x200555);
        } else {
          this.log("玩游戏成功: " + _0x568d8e);
        }
      } else {
        let _0x4262b9 = _0xea70a1.get(_0x4e947b, "info", "");
        this.log("玩游戏失败[" + code + "]: " + _0x4262b9);
      }
    } catch (_0x2a25d5) {
      console.log(_0x2a25d5);
    }
  }
  async todaycount(_0x5c698c = {}) {
    try {
      const _0x1bb6df = {
        act_code: _0x56facd
      };
      let _0x1ae6c8 = {
          fn: "todaycount",
          method: "get",
          url: "https://gateway.jmhd8.com/geement.actjextra/api/v1/act/lottery/data/todaycount",
          searchParams: _0x1bb6df
        },
        {
          result: _0x54a0ac,
          statusCode: _0x3ec60b
        } = await this.request(_0x1ae6c8),
        _0x2b6187 = _0xea70a1.get(_0x54a0ac, "code", _0x3ec60b);
      if (_0x2b6187 == 200) {
        let _0x284293 = _0x54a0ac?.["data"] || 0,
          _0x391779 = 3 - _0x284293;
        const _0x1f336b = {
          notify: true
        };
        this.log("每天赠送抽奖次数剩余: " + _0x391779 + "次", _0x1f336b);
        while (_0x391779-- > 0) {
          await this.marketinglottery(_0x2c0510);
        }
      } else {
        let _0x4a7586 = _0xea70a1.get(_0x54a0ac, "msg", "");
        const _0x573470 = {
          notify: true
        };
        this.log("查询赠送抽奖次数失败[" + _0x2b6187 + "]: " + _0x4a7586, _0x573470);
      }
    } catch (_0x1bdfbf) {
      console.log(_0x1bdfbf);
    }
  }
  async seniority(_0x49717c = {}) {
    try {
      const _0x258215 = {
        sencodes: _0x411d5e
      };
      let _0x2d2b1c = {
          fn: "seniority",
          method: "get",
          url: "https://gateway.jmhd8.com/geement.usercenter/api/v1/user/seniority",
          searchParams: _0x258215
        },
        {
          result: _0x3cf280,
          statusCode: _0x5ccaae
        } = await this.request(_0x2d2b1c),
        _0x185fc8 = _0xea70a1.get(_0x3cf280, "code", _0x5ccaae);
      if (_0x185fc8 == 200) {
        let _0x40e583 = 0;
        for (let _0x3dd5cd of _0x3cf280?.["data"] || []) {
          _0x40e583 = _0x3dd5cd.total_count - _0x3dd5cd.used_count || 0;
        }
        const _0x5bafc1 = {
          notify: true
        };
        this.log("任务获取抽奖次数剩余: " + _0x40e583 + "次", _0x5bafc1);
        while (_0x40e583-- > 0) {
          await this.marketinglottery(_0x15076d);
        }
      } else {
        let _0x103b69 = _0xea70a1.get(_0x3cf280, "msg", "");
        const _0x133593 = {
          notify: true
        };
        this.log("查询任务抽奖次数失败[" + _0x185fc8 + "]: " + _0x103b69, _0x133593);
      }
    } catch (_0x27ac81) {
      console.log(_0x27ac81);
    }
  }
  async marketinglottery(_0x64a5df, _0x3f8455 = {}) {
    try {
      const _0x41d7e6 = {
        code: _0x64a5df,
        provice_name: "",
        city_name: "",
        area_name: "",
        address: "",
        longitude: this.longitude,
        dimension: this.dimension
      };
      let _0x17c247 = {
          fn: "marketinglottery",
          method: "post",
          url: "https://gateway.jmhd8.com/geement.marketinglottery/api/v1/marketinglottery",
          json: _0x41d7e6
        },
        {
          result: _0x511255,
          statusCode: _0x50a3e2
        } = await this.request(_0x17c247),
        _0x257527 = _0xea70a1.get(_0x511255, "code", _0x50a3e2);
      if (_0x257527 == 200) {
        const _0x27fbc3 = {
          notify: true
        };
        this.log("抽奖: " + _0x511255?.["data"]?.["prizedto"]?.["prize_name"], _0x27fbc3);
      } else {
        let _0x4a4224 = _0xea70a1.get(_0x511255, "msg", "");
        this.log("抽奖失败[" + _0x257527 + "]: " + _0x4a4224);
      }
    } catch (_0x2dd67f) {
      console.log(_0x2dd67f);
    }
  }
  async userTask(_0x102e32 = {}) {
    _0xea70a1.log("\n--------------- 账号[" + this.index + "] ---------------");
    if (!(await this.user_information())) {
      return;
    }
    await this.get_task_list();
    await this.game_start();
    await this.todaycount();
    await this.seniority();
  }
}
!(async () => {
  if (!(await _0x4e682c())) {
    return;
  }
  _0xea70a1.read_env(_0x142548);
  for (let _0xc7d1bf of _0xea70a1.userList) {
    await _0xc7d1bf.userTask();
  }
})().catch(_0x103b2e => _0xea70a1.log(_0x103b2e)).finally(() => _0xea70a1.exitNow());
async function _0x4e682c(_0x3ff631 = 0) {
  let _0x5ca54e = false;
  try {
    let _0x3df96b = {
        fn: "auth",
        method: "get",
        url: _0x576fc8,
        timeout: 20000
      },
      {
        statusCode: _0x3ecc54,
        result: _0x3ac231
      } = await _0x63ec58.request(_0x3df96b);
    if (_0x3ecc54 != 200) {
      _0x3ff631++ < _0x2df4b2 && (_0x5ca54e = await _0x4e682c(_0x3ff631));
      return _0x5ca54e;
    }
    if (_0x3ac231?.["code"] == 0) {
      _0x3ac231 = JSON.parse(_0x3ac231.data.file.data);
      if (_0x3ac231?.["commonNotify"] && _0x3ac231.commonNotify.length > 0) {
        const _0x4dd0b8 = {
          notify: true
        };
        _0xea70a1.log(_0x3ac231.commonNotify.join("\n") + "\n", _0x4dd0b8);
      }
      _0x3ac231?.["commonMsg"] && _0x3ac231.commonMsg.length > 0 && _0xea70a1.log(_0x3ac231.commonMsg.join("\n") + "\n");
      if (_0x3ac231[_0x2820d2]) {
        let _0x3ec9af = _0x3ac231[_0x2820d2];
        _0x3ec9af.status == 0 ? _0x5b0766 >= _0x3ec9af.version ? (_0x5ca54e = true, _0xea70a1.log(_0x3ec9af.msg[_0x3ec9af.status]), _0xea70a1.log(_0x3ec9af.updateMsg), _0xea70a1.log("现在运行的脚本版本是：" + _0x5b0766 + "，最新脚本版本：" + _0x3ec9af.latestVersion)) : _0xea70a1.log(_0x3ec9af.versionMsg) : _0xea70a1.log(_0x3ec9af.msg[_0x3ec9af.status]);
      } else {
        _0xea70a1.log(_0x3ac231.errorMsg);
      }
    } else {
      _0x3ff631++ < _0x2df4b2 && (_0x5ca54e = await _0x4e682c(_0x3ff631));
    }
  } catch (_0xc4f79e) {
    _0xea70a1.log(_0xc4f79e);
  } finally {
    return _0x5ca54e;
  }
}
async function _0x55bbee() {
  let _0x1136c0 = false;
  try {
    let _0x39cc20 = {
        fn: "auth",
        method: "get",
        url: _0x29cd86
      },
      {
        statusCode: _0x4754b0,
        result: _0x3c894c
      } = await _0x63ec58.request(_0x39cc20);
    if (_0x4754b0 != 200) {
      return Promise.resolve();
    }
    if (_0x3c894c?.["code"] == 0) {
      _0x3c894c = JSON.parse(_0x3c894c.data.file.data);
      ownerId = _0x3c894c?.["ownerId"] || ownerId;
      share_app = _0x3c894c?.["share_app"] || share_app;
      for (let _0x552a83 of _0x3c894c.chdTask.simple) {
        !task_chd_simple_list.filter(_0x18471e => _0x18471e.missionDefId == _0x552a83.missionDefId && _0x18471e.missionCollectionId == _0x552a83.missionCollectionId).length && task_chd_simple_list.push(_0x552a83);
      }
      for (let _0x2c1a0c of _0x3c894c.chdTask.pageview) {
        !task_chd_pageview_list.filter(_0x20e05e => _0x20e05e.missionDefId == _0x2c1a0c.missionDefId && _0x20e05e.missionCollectionId == _0x2c1a0c.missionCollectionId).length && task_chd_pageview_list.push(_0x2c1a0c);
      }
      for (let _0x320b02 of _0x3c894c.tkjTask.simple) {
        !task_tkj_simple_list.filter(_0x1a51ef => _0x1a51ef.missionDefId == _0x320b02.missionDefId && _0x1a51ef.missionCollectionId == _0x320b02.missionCollectionId).length && task_tkj_simple_list.push(_0x320b02);
      }
      for (let _0x13f007 of _0x3c894c.tkjTask.pageview) {
        !task_tkj_pageview_list.filter(_0x549ef7 => _0x549ef7.missionDefId == _0x13f007.missionDefId && _0x549ef7.missionCollectionId == _0x13f007.missionCollectionId).length && task_tkj_pageview_list.push(_0x13f007);
      }
    }
  } catch (_0x5f4866) {
    _0xea70a1.log(_0x5f4866);
  } finally {
    return Promise.resolve(_0x1136c0);
  }
}
function _0x1bd4ec(_0x11d679) {
  return new class {
    constructor(_0x4c8c06) {
      this.name = _0x4c8c06;
      this.startTime = Date.now();
      const _0x185bd5 = {
        time: true
      };
      this.log("[" + this.name + "]开始运行\n", _0x185bd5);
      this.notifyStr = [];
      this.notifyFlag = true;
      this.userIdx = 0;
      this.userList = [];
      this.userCount = 0;
      this.default_timestamp_len = 13;
      this.default_wait_interval = 1000;
      this.default_wait_limit = 3600000;
      this.default_wait_ahead = 0;
    }
    log(_0x165360, _0x12e523 = {}) {
      let _0x3616f8 = {
        console: true
      };
      Object.assign(_0x3616f8, _0x12e523);
      if (_0x3616f8.time) {
        let _0x246c14 = _0x3616f8.fmt || "hh:mm:ss";
        _0x165360 = "[" + this.time(_0x246c14) + "]" + _0x165360;
      }
      if (_0x3616f8.notify) {
        this.notifyStr.push(_0x165360);
      }
      if (_0x3616f8.console) {
        console.log(_0x165360);
      }
    }
    get(_0x5a9187, _0x53a351, _0x477767 = "") {
      let _0x4445e9 = _0x477767;
      _0x5a9187?.["hasOwnProperty"](_0x53a351) && (_0x4445e9 = _0x5a9187[_0x53a351]);
      return _0x4445e9;
    }
    pop(_0x37f259, _0x2bc5c9, _0x36961e = "") {
      let _0x14a89a = _0x36961e;
      _0x37f259?.["hasOwnProperty"](_0x2bc5c9) && (_0x14a89a = _0x37f259[_0x2bc5c9], delete _0x37f259[_0x2bc5c9]);
      return _0x14a89a;
    }
    copy(_0x83e38f) {
      return Object.assign({}, _0x83e38f);
    }
    read_env(_0x2bd40c) {
      let _0x3d35e9 = _0x2deb57.map(_0x28a316 => process.env[_0x28a316]);
      for (let _0x25185d of _0x3d35e9.filter(_0x5585fe => !!_0x5585fe)) {
        for (let _0x3efb0c of _0x25185d.split(_0x9d1ec0).filter(_0x121133 => !!_0x121133)) {
          this.userList.push(new _0x2bd40c(_0x3efb0c));
        }
      }
      this.userCount = this.userList.length;
      if (!this.userCount) {
        const _0x158c21 = {
          notify: true
        };
        this.log("未找到变量，请检查变量" + _0x2deb57.map(_0x24d190 => "[" + _0x24d190 + "]").join("或"), _0x158c21);
        return false;
      }
      this.log("共找到" + this.userCount + "个账号");
      return true;
    }
    time(_0x309969, _0x340cd9 = null) {
      let _0x3877d3 = _0x340cd9 ? new Date(_0x340cd9) : new Date(),
        _0x240fe7 = {
          "M+": _0x3877d3.getMonth() + 1,
          "d+": _0x3877d3.getDate(),
          "h+": _0x3877d3.getHours(),
          "m+": _0x3877d3.getMinutes(),
          "s+": _0x3877d3.getSeconds(),
          "q+": Math.floor((_0x3877d3.getMonth() + 3) / 3),
          S: this.padStr(_0x3877d3.getMilliseconds(), 3)
        };
      /(y+)/.test(_0x309969) && (_0x309969 = _0x309969.replace(RegExp.$1, (_0x3877d3.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let _0x3302e4 in _0x240fe7) new RegExp("(" + _0x3302e4 + ")").test(_0x309969) && (_0x309969 = _0x309969.replace(RegExp.$1, 1 == RegExp.$1.length ? _0x240fe7[_0x3302e4] : ("00" + _0x240fe7[_0x3302e4]).substr(("" + _0x240fe7[_0x3302e4]).length)));
      return _0x309969;
    }
    async showmsg() {
      if (!this.notifyFlag) {
        return;
      }
      if (!this.notifyStr.length) {
        return;
      }
      try {
        var _0x472006 = require("./sendNotify");
        this.log("\n============== 推送 ==============");
        await _0x472006.sendNotify(this.name, this.notifyStr.join("\n"));
      } catch {
        this.log("\n=================================");
        this.log("读取推送依赖[sendNotify.js]失败, 请检查同目录下是否有依赖");
      }
    }
    padStr(_0x16d090, _0x405213, _0xb20e1d = {}) {
      let _0x53ec15 = _0xb20e1d.padding || "0",
        _0x285218 = _0xb20e1d.mode || "l",
        _0x20db1d = String(_0x16d090),
        _0x576eb2 = _0x405213 > _0x20db1d.length ? _0x405213 - _0x20db1d.length : 0,
        _0x53cf57 = "";
      for (let _0x56a91e = 0; _0x56a91e < _0x576eb2; _0x56a91e++) {
        _0x53cf57 += _0x53ec15;
      }
      _0x285218 == "r" ? _0x20db1d = _0x20db1d + _0x53cf57 : _0x20db1d = _0x53cf57 + _0x20db1d;
      return _0x20db1d;
    }
    json2str(_0x1039ea, _0x5f5aa6, _0x58a788 = false) {
      let _0x33d6f9 = [];
      for (let _0x1d4b35 of Object.keys(_0x1039ea).sort()) {
        let _0x11d07d = _0x1039ea[_0x1d4b35];
        if (_0x11d07d && _0x58a788) {
          _0x11d07d = encodeURIComponent(_0x11d07d);
        }
        _0x33d6f9.push(_0x1d4b35 + "=" + _0x11d07d);
      }
      return _0x33d6f9.join(_0x5f5aa6);
    }
    str2json(_0x2b416e, _0x1917c6 = false) {
      let _0x1f4a50 = {};
      for (let _0xf861d of _0x2b416e.split("&")) {
        if (!_0xf861d) {
          continue;
        }
        let _0x4d5255 = _0xf861d.indexOf("=");
        if (_0x4d5255 == -1) {
          continue;
        }
        let _0x2d30c0 = _0xf861d.substr(0, _0x4d5255),
          _0x4a223b = _0xf861d.substr(_0x4d5255 + 1);
        if (_0x1917c6) {
          _0x4a223b = decodeURIComponent(_0x4a223b);
        }
        _0x1f4a50[_0x2d30c0] = _0x4a223b;
      }
      return _0x1f4a50;
    }
    randomPattern(_0x29f0c8, _0x53f352 = "abcdef0123456789") {
      let _0x343f93 = "";
      for (let _0x597def of _0x29f0c8) {
        if (_0x597def == "x") {
          _0x343f93 += _0x53f352.charAt(Math.floor(Math.random() * _0x53f352.length));
        } else {
          _0x597def == "X" ? _0x343f93 += _0x53f352.charAt(Math.floor(Math.random() * _0x53f352.length)).toUpperCase() : _0x343f93 += _0x597def;
        }
      }
      return _0x343f93;
    }
    randomUuid() {
      return this.randomPattern("xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx");
    }
    randomString(_0x1988ce, _0x3fabbb = "abcdef0123456789") {
      let _0x90b65d = "";
      for (let _0xe6148b = 0; _0xe6148b < _0x1988ce; _0xe6148b++) {
        _0x90b65d += _0x3fabbb.charAt(Math.floor(Math.random() * _0x3fabbb.length));
      }
      return _0x90b65d;
    }
    randomList(_0x4e1b5c) {
      let _0x4220f9 = Math.floor(Math.random() * _0x4e1b5c.length);
      return _0x4e1b5c[_0x4220f9];
    }
    wait(_0x18f708) {
      return new Promise(_0x2b8f81 => setTimeout(_0x2b8f81, _0x18f708));
    }
    async exitNow() {
      await this.showmsg();
      let _0x354d19 = Date.now(),
        _0x433bed = (_0x354d19 - this.startTime) / 1000;
      this.log("");
      const _0x5386e7 = {
        time: true
      };
      this.log("[" + this.name + "]运行结束，共运行了" + _0x433bed + "秒", _0x5386e7);
      process.exit(0);
    }
    normalize_time(_0x5f2d33, _0x3bde46 = {}) {
      let _0x550beb = _0x3bde46.len || this.default_timestamp_len;
      _0x5f2d33 = _0x5f2d33.toString();
      let _0x52a074 = _0x5f2d33.length;
      while (_0x52a074 < _0x550beb) {
        _0x5f2d33 += "0";
      }
      _0x52a074 > _0x550beb && (_0x5f2d33 = _0x5f2d33.slice(0, 13));
      return parseInt(_0x5f2d33);
    }
    async wait_until(_0x3c13f0, _0x1b100e = {}) {
      let _0x1e1604 = _0x1b100e.logger || this,
        _0x9239ff = _0x1b100e.interval || this.default_wait_interval,
        _0xbba745 = _0x1b100e.limit || this.default_wait_limit,
        _0x54f1af = _0x1b100e.ahead || this.default_wait_ahead;
      if (typeof _0x3c13f0 == "string" && _0x3c13f0.includes(":")) {
        if (_0x3c13f0.includes("-")) {
          _0x3c13f0 = new Date(_0x3c13f0).getTime();
        } else {
          let _0x3b29a8 = this.time("yyyy-MM-dd ");
          _0x3c13f0 = new Date(_0x3b29a8 + _0x3c13f0).getTime();
        }
      }
      let _0x1e826b = this.normalize_time(_0x3c13f0) - _0x54f1af,
        _0x55b507 = this.time("hh:mm:ss.S", _0x1e826b),
        _0x59115f = Date.now();
      _0x59115f > _0x1e826b && (_0x1e826b += 86400000);
      let _0x5d6cc9 = _0x1e826b - _0x59115f;
      if (_0x5d6cc9 > _0xbba745) {
        const _0x10f322 = {
          time: true
        };
        _0x1e1604.log("离目标时间[" + _0x55b507 + "]大于" + _0xbba745 / 1000 + "秒,不等待", _0x10f322);
      } else {
        const _0x54f899 = {
          time: true
        };
        _0x1e1604.log("离目标时间[" + _0x55b507 + "]还有" + _0x5d6cc9 / 1000 + "秒,开始等待", _0x54f899);
        while (_0x5d6cc9 > 0) {
          let _0x50870a = Math.min(_0x5d6cc9, _0x9239ff);
          await this.wait(_0x50870a);
          _0x59115f = Date.now();
          _0x5d6cc9 = _0x1e826b - _0x59115f;
        }
        const _0x4455a6 = {
          time: true
        };
        _0x1e1604.log("已完成等待", _0x4455a6);
      }
    }
    async wait_gap_interval(_0x2d3dba, _0x5a870e) {
      let _0x29bee2 = Date.now() - _0x2d3dba;
      _0x29bee2 < _0x5a870e && (await this.wait(_0x5a870e - _0x29bee2));
    }
  }(_0x11d679);
}