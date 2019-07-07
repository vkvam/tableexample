from flask import Flask, request, send_from_directory, jsonify
import random

# set the project root directory as the static folder, you can set others.
app = Flask(__name__, static_url_path='')

def get_random_2d_matrix(width, height):
    return [[random.random() for i in range(width)] for j in range(height)]

@app.route('/')
def send_index():
    return send_from_directory('html', 'index.html')

@app.route('/js/<path:path>')
def send_js(path):
    return send_from_directory('js', path)

@app.route('/data/table')
def send_data():
    table_data = get_random_2d_matrix(5,5)
    return jsonify({
        'data': table_data
    })

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=80)
