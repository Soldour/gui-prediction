from tkinter import *
from tkinter.filedialog import askopenfilename
from keras.models import load_model
import cv2
import numpy as np
import os
from PIL import ImageTk, Image

from sklearn.preprocessing import label
import sys


model = load_model('numberClass.h5')
model.compile(optimizer='adam', loss='binary_crossentropy',
              metrics=['accuracy'])
# filename = askopenfilename(filetypes=(
#     ("jpg file", "*.jpg"), ("png file ", '*.png'), ("All files", "*.*"),))
# img = cv2.imread(filename)
img = cv2.imread('1.jpg')

img = np.reshape(img, [1, 28, 28, 3])
class1 = model.predict_classes(img)

# pt = 'the pridicted number is ' + str(class1[0] + 1)
# label.config(text=pt)
# os.system('rm predim.jpg')
print("the pridicted number is", class1 + 1)

sys.stdout.flush()
