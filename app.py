import json
from pydoc import describe

from db import db
from db import Murals
from flask import Flask
from flask import request

app = Flask(__name__)
db_filename = "cms.db"

app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///%s" % db_filename
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
app.config["SQLALCHEMY_ECHO"] = True

db.init_app(app)
with app.app_context():
    db.drop_all()
    db.create_all()


# your routes here
def success_response(data, code = 200):
    return json.dumps(data), code

def failure_response(message, code = 404):
    return json.dumps({"error": message}), code

@app.route("/api/murals/")
def get_murals():
    return success_response(
        {"murals": [c.serialize() for c in Murals.query.all()]}
    )

@app.route("/api/murals/", methods = ["POST"])
def post_mural():
    body = json.loads(request.data)
    if body.get("img") is None:
        return failure_response("Missing image", 400)
    if body.get("title") is None:
        return failure_response("Missing title", 400)
    if body.get("description") is None:
        return failure_response("Missing description", 400)
    
    new_mural = Murals(img = body.get("img"), title = body.get("title"), description = body.get("description"))
    db.session.add(new_mural)
    db.session.commit()
    return success_response(new_mural.serialize(), 201)

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)
