from flask import Flask, request, jsonify
import util

app = Flask(__name__)

@app.route('/classify_image', methods=['GET', 'POST'])
def predict():

    image_data = request.form['company_name']
    
    response = jsonify(util.classify_image(stock))
    
    response.headers.add('Access-Control-Allow-Origin', '*')
    
    return response

if __name__ == "__main__":
    print("Starting Python Flask Server For Stock Prediction")
    util.load_saved_artefacts()
    app.run(port=5000)

