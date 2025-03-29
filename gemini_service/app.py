from google import genai
from flask import Flask, request, jsonify

app = Flask(__name__)

# Inserisci la tua API key qui (non esporla in produzione)
client = genai.Client(api_key='AIzaSyDS8OZKQMOTGbFmS6wyzPIq9dOhiRKf87w')

@app.route('/api/gemini', methods=['POST'])
def generate_gemini():
    data = request.get_json()
    prompt = data.get("prompt", "")
    
    # Chiamata al modello Gemini con il prompt ricevuto
    response = client.models.generate_content(
        model="gemini-2.0-flash",
        contents=prompt,
    )
    
    # Restituisci il testo generato come JSON
    return jsonify({"text": response.text})

if __name__ == '__main__':
    app.run(port=5000)
