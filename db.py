from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Murals(db.Model):
    __tablename__ = "murals"
    id = db.Column(db.Integer, primary_key = True)
    img = db.Column(db.String, nullable = False)
    title = db.Column(db.String, nullable = False)
    description = db.Column(db.String, nullable = False)

    def serialize(self):
        return {
            "id": self.id,
            "img": self.img,
            "title": self.title,
            "description": self.description
        }
    
        