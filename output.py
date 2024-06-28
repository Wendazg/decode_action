#2024-06-28 15:21:25
import requests,os
import time
import random
import json
import base64
from Crypto.Cipher import AES
class yuanshen():
 def __init__(self,cookie):
  self.cookie=cookie.split("#")[0]
  self.n=cookie.split("#")[1]
  if self.n=="2":
   self.url="zrt2.716jcp.fun"
  elif self.n=="1":
   self.url="zrtt.jcp716.fun"
  elif self.n=="3":
   self.url="zz3.716sxjcp.fun"
  elif self.n=="5":
   self.url="k2.716sxjcp.fun"
  elif self.n=="6":
   self.url="k3.716sxjcp.fun"
  else:
   print("请输入正确的区号")
   exit(0)
  self.key="XDXDXU_ZHIHUAWCC"
  self.iv="XDXDXU_ZHIHUAWEI"
  self.header={"Host":f"{self.url}","Connection":"keep-alive","browser":"Wechat","terminal":"1","User-Agent":"Mozilla/5.0 (Linux; Android 13; 23054RA19C Build/TP1A.220624.014; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/122.0.6261.120 Mobile Safari/537.36 XWEB/1220053 MMWEBSDK/20240404 MMWEBID/98 MicroMessenger/8.0.49.2600(0x28003133) WeChat/arm64 Weixin NetType/5G Language/zh_CN ABI/arm64","token":f"{self.cookie}","Accept":"*/*","X-Requested-With":"com.tencent.mm","Referer":f"http://{self.url}/app/","Accept-Encoding":"gzip, deflate","Accept-Language":"zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7"}
 def encry(self,m):
  input_bytes=m.encode('utf-8')
  key_bytes=self.key.encode('utf-8')
  iv_bytes=self.iv.encode('utf-8')
  padding_length=AES.block_size-len(input_bytes)%AES.block_size
  padded_input=input_bytes+bytes([padding_length]*padding_length)
  cipher=AES.new(key_bytes,AES.MODE_CBC,iv_bytes)
  encrypted_bytes=cipher.encrypt(padded_input)
  encrypted_base64=base64.b64encode(encrypted_bytes).decode('utf-8')
  return encrypted_base64
 def deencry(self,m):
  encrypted_bytes=base64.b64decode(m)
  key_bytes=self.key.encode('utf-8')
  iv_bytes=self.iv.encode('utf-8')
  cipher=AES.new(key_bytes,AES.MODE_CBC,iv_bytes)
  decrypted_bytes=cipher.decrypt(encrypted_bytes)
  padding_length=decrypted_bytes[-1]
  decrypted_text=decrypted_bytes[:-padding_length]
  return decrypted_text.decode('utf-8')
 def task(self):
  id_=[]
  if True:
   url=f"http://{self.url}/api/card/topCardLists"
   r=requests.get(url,headers=self.header).json()
   if r['code']==1:
    for i in r['data']:
     j=json.loads(json.dumps(i))
     if j['id']not in id_:
      print(f"开始执行ID[{j['id']}]")
     else:
      print(f"⛔️ID[{j['id']}]已经执行过了")
      continue
     url=f"http://{self.url}/api/card/createReadLog"
     data={"id":j['id']}
     r=requests.post(url,headers=self.header,data=data).json()
     if r['code']==1:
      data=r['data']['token']
      k=json.loads(self.deencry(data))
      addtime=random.randint(6,10)
      postdat=json.dumps({"id":k['card_id'],"card_id":k['card_id'],"app_id":k['app_id'],"token":k['token'],"user_id":k['user_id'],"time":int(k['time'])+addtime,"t":int(k['t'])+addtime*1000})
      postdat=self.encry(postdat)
      time.sleep(addtime)
      url=f"http://{self.url}/api/card/cardReadBack"
      data={"data":f"{postdat}"}
      r=requests.post(url,headers=self.header,data=data).json()
      if r['code']==1:
       print(f"🎉️执行成功ID[{j['id']}],获得[{r['data']['draw_money']}]元")
       time.sleep(random.randint(10,30))
      else:
       print(f"⛔️执行失败ID[{j['id']}]----[{r['msg']}]")
       time.sleep(random.randint(10,30))
     else:
      print(f"⛔️执行失败ID[{j['id']}]----[{r['msg']}]")
      time.sleep(random.randint(10,30))
     id_.append(j['id'])
 def main(self):
  for i in range(2):
   self.task()
if __name__=='__main__':
 print(requests.get(f"https://gitee.com/HuaJiB/yuanshen34/raw/master/pubilc.txt").text)
 cookie='0b5dd794-cafe-4a1f-bcb3-972574681702#6'
 if not cookie:
  cookie=os.getenv("yuanshen_zrt")
  if not cookie:
   print("⛔️请设置环境变量:yuanshen_zrt⛔️")
   exit()
 cookies=cookie.split("@")
 print(f"一共获取到{len(cookies)}个账号")
 i=1
 for cookie in cookies:
  print(f"\n--------开始第{i}个账号--------")
  main=yuanshen(cookie)
  main.main()
  print(f"--------第{i}个账号执行完毕--------")
  time.sleep(20)
  i+=1
