from flask import Flask, request, jsonify
from werkzeug.formparser import default_stream_factory

from views import views

app = Flask(__name__)
app.register_blueprint(views,url_prefix= '/')
@app.route('/save_quantity', methods=['POST'])
def save_quantity():
    data = request.get_json()
    quantity = data.get('quantity')

    # Now you can process the quantity as needed (e.g., save it to a database)
    print(f'Received quantity: {quantity}')

    # Return a response (could be a confirmation message or anything else)
    return jsonify({'status': 'success', 'quantity': quantity})


if __name__ == '__main__':
    app.run(host="0.0.0.0",debug=True,  port=8000)