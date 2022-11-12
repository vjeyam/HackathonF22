from cv2 import *
import face_recognition
import os
while (True):
    if (os.path.isfile("C:\\Users\\malac\\Downloads\\flag.txt")):
        cam = VideoCapture(0)

        result, image = cam.read()
        imwrite("../Database/unknown.jpg", image)

        if result:
    
            unknown_image = face_recognition.load_image_file("../Database/unknown.jpg")
            unknown_encoding = face_recognition.face_encodings(unknown_image)[0]
            known_encodings = []
            names = ["malachi", "daijon", "cade", "Parker", "vishal"]
            for name in names:
                #print(name)
                known_image = face_recognition.load_image_file("../Database/" + name + ".jpg")
                known_encodings.append(face_recognition.face_encodings(known_image)[0])
            results = face_recognition.compare_faces(known_encodings, unknown_encoding)
            #print(results)
            for result in results:
                if (result):
                    print(names[results.index(result)])
                    f = open("return.txt", "w")
                    f.write(names[results.index(result)])
                    f.close()
            os.remove("C:\\Users\\malac\\Downloads")
            os.remove("../Database/unknown.jpg")

        else:
            print("Error: No image")
