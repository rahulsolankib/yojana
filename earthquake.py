import requests
import bs4
import psycopg2 as pg

con = pg.connect(
        host = "localhost",
        database = "yojana",
        user = "postgres",
        password = "1234"
)
cur=con.cursor()

res = requests.get('http://www.imd.gov.in/pages/lyear2.php?year=2019')
soup = bs4.BeautifulSoup(res.text,'lxml')

table  = soup.find('table')
table_rows = table.find_all('tr')

result=[]
for tr in table_rows:
    td=tr.find_all('td')
    for i in td:
        result.append(i.text)
count = 0 
dates = []
time_utc = []
time_ist = []
lat = []
longi = []
depth = []
mag = []
region = []
loc = []
for i in result:
    if(count%9==0):
        dates.append(i)
    if(count%9==1):
        time_utc.append(i)
    if(count%9==2):
        time_ist.append(i)
    if(count%9==3):
        lat.append(i)
    if(count%9==4):
        longi.append(i)
    if(count%9==5):
        depth.append(float(i))
    if(count%9==6):
        mag.append(float(i))
    if(count%9==7):
        region.append(i)
    count=count+1
count = 0
cur.execute("truncate table earthquake")
for i in longi:
    cur.execute("insert into earthquake values(to_timestamp(%s,'yy-mm-dd'),to_timestamp(%s,'hh24:mi:ss'),%s,%s,%s,%s,%s)",[dates[count],time_ist[count],lat[count],longi[count],depth[count],mag[count],region[count]])
    count=count+1
    # row = [i.text for i in td]
    # print (row)
# rows = cur.fetchall()


result=[]
for tr in table_rows:
    td=tr.find_all('td')
    for i in td:
        result.append(i.text)
con.commit()

# for r in rows:
#     print (r)
cur.close()

con.close()

res=requests.get("http://www.imd.gov.in/pages/rainfall_weekly.php")
soup=bs4.BeautifulSoup(res.text,'lxml')
hi=soup.select('table')
print(hi)