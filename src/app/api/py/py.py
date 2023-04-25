from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/')
def hello_world():
    return 'Hello, World!'

@app.route('/api/example')
def example_api():
    data = {'message': 'This is an example API response.'}
    return jsonify(data)

if __name__ == '__main__':
    app.run()