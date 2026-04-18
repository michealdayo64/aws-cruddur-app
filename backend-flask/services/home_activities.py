from datetime import datetime, timedelta, timezone
#from lib.db import pool, query_wrap_object, query_wrap_array
#from opentelemetry import trace
from lib.db import Db

#tracer = trace.get_tracer("home.activities")


class HomeActivities:
    def run(cognito_user_id=None):
        #with tracer.start_as_current_span("home-activites-mock-data"):
        #span = trace.get_current_span()

        db = Db()
        sql = db.template('activities','home')
        print(sql)
        results = db.query_array_json(sql)
        return results