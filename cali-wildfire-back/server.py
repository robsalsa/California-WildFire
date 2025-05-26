from flask import Flask
from flask_cors import CORS # -install CORS (pip install flask-cors)

app=Flask(__name__) #this makes a python instance think of it as a method/function
CORS(app)   #just think of this as a type of adapter that will allow for the backend to connect with the front

@app.route("/mem") #Json testing
def test():
    return {"mem": ["good", "morning", "USA", "!"]}
    

if __name__ == "__main__":
    app.run(debug=True)
    #test
    
#to see the first line of the american dad into lyrics in the browser find: localhost:5000/listTest