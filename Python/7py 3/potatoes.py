"""
|--------------------------------------------------------------------------
| Drying Potatoes
|--------------------------------------------------------------------------
|
"""

def potatoes(p0, w0, p1):
   return ((w0 * (100 - p0)) / (100 - p1) // 1)


def potatoes(p0, w0, p1):
   return int(w0 - w0 * (p1-p0) / (p1-100))


def potatoes(p0, w0, p1):
   return w0 * (100 - p0) // (100 - p1)


print(potatoes(82, 127, 80), 114)
print(potatoes(93, 129, 91), 100)