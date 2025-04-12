from flask import Flask, render_template, request, session
import requests

app = Flask(__name__)
app.secret_key = 'your_secret_key'  # Required for session

@app.route('/', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        ip = request.form.get('ip')
        response = requests.get(f'http://ip-api.com/json/{ip}').json()

        if response['status'] == 'success':
            session.setdefault('history', []).insert(0, {
                'ip': response['query'],
                'city': response['city'],
                'country': response['country']
            })
            return render_template('result.html', data=response)
        else:
            return render_template('result.html', error='Invalid IP address.')
    return render_template('index.html')

@app.route('/history')
def history():
    return render_template('history.html', history=session.get('history', []))

if __name__ == '__main__':
    app.run(debug=True)
