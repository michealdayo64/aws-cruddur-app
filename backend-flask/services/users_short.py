from lib.db import db

class UsersShort:
  
  def run(self, handle):
    db = Db()
    sql = db.template('users','short')
    results = db.query_object_json(sql,{
      'handle': handle
    })
    return results