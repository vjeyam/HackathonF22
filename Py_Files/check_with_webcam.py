from cv2 import *
import face_recognition
import os


cam = VideoCapture(0)

result, image = cam.read()
imwrite("../Database/unknown.jpg", image)

if result:
    
    unknown_image = face_recognition.load_image_file("../Database/unknown.jpg")
    unknown_encoding = face_recognition.face_encodings(unknown_image)[0]
    known_encodings = []
    for name in ["malachi", "daijon", "cade", "pranav"]:
        print(name)
        known_image = face_recognition.load_image_file("../Database/" + name + ".jpg")
        known_encodings.append(face_recognition.face_encodings(known_image)[0])
    results = face_recognition.compare_faces(known_encodings, unknown_encoding)
    print(results)
    os.remove("../Database/unknown.jpg")

else:
    print("Error: No image")
