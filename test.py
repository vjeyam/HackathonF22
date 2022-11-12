import whisper

model = whisper.load_model("small")
result = model.transcribe("game.wav")